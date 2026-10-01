import { NextRequest, NextResponse } from "next/server";
import { sendRfqEmails } from "@/lib/email";
import { RfqEmailPayload } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let payload: RfqEmailPayload;
    let honeypot = "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();

      honeypot = (formData.get("website_hp") as string) || "";
      if (honeypot) {
        // Silently succeed to baffle automated spam bots
        return NextResponse.json({
          success: true,
          referenceCode: "EC-BOT-TRAP",
          message: "Talebiniz alındı.",
        });
      }

      const fileNames: string[] = [];
      const files = formData.getAll("files");
      for (const item of files) {
        if (item instanceof File && item.name) {
          fileNames.push(`${item.name} (${(item.size / 1024).toFixed(0)} KB)`);
        }
      }

      // Check single file from quick dropzone
      const singleFile = formData.get("file");
      if (singleFile instanceof File && singleFile.name) {
        fileNames.push(`${singleFile.name} (${(singleFile.size / 1024).toFixed(0)} KB)`);
      }

      const sampleMaterialsRaw = formData.get("sampleMaterials");
      let sampleMaterials: string[] = [];
      if (typeof sampleMaterialsRaw === "string" && sampleMaterialsRaw) {
        try {
          sampleMaterials = JSON.parse(sampleMaterialsRaw);
        } catch {
          sampleMaterials = [sampleMaterialsRaw];
        }
      }

      const refCode = `EC-${Math.floor(100000 + Math.random() * 900000)}`;

      payload = {
        referenceCode: refCode,
        type: (formData.get("type") as RfqEmailPayload["type"]) || "rfq_detailed",
        fullName: ((formData.get("fullName") as string) || "").trim(),
        companyName: ((formData.get("companyName") as string) || "").trim(),
        phone: ((formData.get("phone") as string) || "").trim(),
        email: ((formData.get("email") as string) || "").trim(),
        category: (formData.get("category") as string) || undefined,
        productName: (formData.get("productName") as string) || undefined,
        quantity: (formData.get("quantity") as string) || undefined,
        dimensions: (formData.get("dimensions") as string) || undefined,
        material: (formData.get("material") as string) || undefined,
        temperature: (formData.get("temperature") as string) || undefined,
        pressure: (formData.get("pressure") as string) || undefined,
        medium: (formData.get("medium") as string) || undefined,
        standard: (formData.get("standard") as string) || undefined,
        notes: (formData.get("notes") as string) || undefined,
        fileNames: fileNames.length > 0 ? fileNames : undefined,
        sampleMaterials: sampleMaterials.length > 0 ? sampleMaterials : undefined,
        thickness: (formData.get("thickness") as string) || undefined,
        deliveryAddress: (formData.get("deliveryAddress") as string) || undefined,
        city: (formData.get("city") as string) || undefined,
        district: (formData.get("district") as string) || undefined,
        taxOfficeOrNumber: (formData.get("taxOfficeOrNumber") as string) || undefined,
        createdAt: new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" }),
      };
    } else {
      // JSON payload
      const body = await request.json();
      honeypot = body.website_hp || "";

      if (honeypot) {
        return NextResponse.json({
          success: true,
          referenceCode: "EC-BOT-TRAP",
          message: "Talebiniz alındı.",
        });
      }

      const reqType = body.type || "rfq_detailed";
      let prefix = "EC";
      if (reqType === "distributor_application") prefix = "BAYI";
      else if (reqType === "rfq_cart") prefix = "RFQ";
      else if (reqType === "sample_request") prefix = "SMP";

      const refCode = body.referenceCode || `${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;

      payload = {
        referenceCode: refCode,
        type: reqType,
        fullName: (body.fullName || body.authorizedPerson || "").trim(),
        companyName: (body.companyName || "").trim(),
        phone: (body.phone || "").trim(),
        email: (body.email || "").trim(),
        category: body.category,
        productName: body.productName,
        quantity: body.quantity,
        dimensions: body.dimensions,
        material: body.material,
        temperature: body.temperature,
        pressure: body.pressure,
        medium: body.medium,
        standard: body.standard,
        notes: body.notes || body.message,
        fileNames: body.fileNames,
        sampleMaterials: body.sampleMaterials,
        thickness: body.thickness,
        deliveryAddress: body.deliveryAddress || body.address,
        city: body.city,
        district: body.district,
        taxOfficeOrNumber: body.taxOfficeOrNumber || body.taxId || (body.taxOffice ? `${body.taxOffice} / ${body.taxId || ""}` : undefined),
        cartItems: body.cartItems,
        businessType: body.businessType,
        activityRegion: body.activityRegion,
        warehouseArea: body.warehouseArea,
        targetProducts: body.targetProducts,
        estimatedAnnualVolume: body.estimatedAnnualVolume || body.targetVolume,
        createdAt: new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" }),
      };
    }

    // Server-side validation
    if (!payload.fullName || !payload.phone) {
      return NextResponse.json(
        {
          success: false,
          error: "Ad Soyad ve Telefon Numarası alanları zorunludur.",
        },
        { status: 400 }
      );
    }

    if (payload.type === "rfq_cart") {
      if (!payload.cartItems || !Array.isArray(payload.cartItems) || payload.cartItems.length === 0) {
        return NextResponse.json(
          {
            success: false,
            error: "Sepetinizde ürün bulunmamaktadır.",
          },
          { status: 400 }
        );
      }
    }

    if (payload.type === "distributor_application") {
      if (!payload.companyName || !payload.city) {
        return NextResponse.json(
          {
            success: false,
            error: "Firma Adı ve Faaliyet Gösterilen İl alanları bayilik başvurusu için zorunludur.",
          },
          { status: 400 }
        );
      }
      if (!payload.taxOfficeOrNumber) {
        return NextResponse.json(
          {
            success: false,
            error: "Vergi Dairesi veya Vergi Numarası bayilik başvurusu için zorunludur.",
          },
          { status: 400 }
        );
      }
    }

    // Dispatch emails via Resend (or simulation fallback)
    const result = await sendRfqEmails(payload);

    return NextResponse.json({
      ...result,
      rfqId: result.referenceCode,
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : "Sunucu tarafında bir hata oluştu";
    console.error("[API /api/rfq ERROR]:", errorMsg);

    return NextResponse.json(
      {
        success: false,
        error: "Talep işlenirken bir sunucu hatası oluştu. Lütfen doğrudan telefon veya WhatsApp ile iletişime geçiniz.",
      },
      { status: 500 }
    );
  }
}
