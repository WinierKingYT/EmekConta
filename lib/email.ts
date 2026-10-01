import { Resend } from "resend";
import { RfqEmailPayload } from "@/lib/types";
import { companyData } from "@/data/company";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || companyData.email;
const SENDER_EMAIL = process.env.EMAIL_FROM || "Emek Conta <onboarding@resend.dev>";

export interface SendEmailResult {
  success: boolean;
  referenceCode: string;
  simulated?: boolean;
  message?: string;
  error?: string;
}

/**
 * Builds the HTML content for internal Emek Conta notification.
 */
function buildInternalEmailHtml(data: RfqEmailPayload): string {
  const typeLabels = {
    rfq_detailed: "Detaylı Teknik RFQ Formu (/teklif-iste)",
    rfq_quick: "Hızlı Teknik Çizim Dropzone (Ana Sayfa)",
    sample_request: "AR-GE / Malzeme Numune Talebi (/numune-talep)",
    rfq_cart: "Toplu Teklif Sepeti (RFQ Cart)",
    distributor_application: "Yetkili Bayi & Toptancı Başvurusu (/bayi-basvuru)",
  };

  const formTypeLabel = typeLabels[data.type] || "Web Formu";
  const dateStr = data.createdAt || new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" });

  const techRows: { label: string; value?: string }[] = [
    { label: "Talep Türü", value: formTypeLabel },
    { label: "Referans Kodu", value: data.referenceCode },
    { label: "Talep Tarihi", value: dateStr },
    { label: "Yetkili Kişi", value: data.fullName },
    { label: "Firma Adı", value: data.companyName || "Belirtilmedi" },
    { label: "Telefon", value: data.phone },
    { label: "E-posta", value: data.email || "Belirtilmedi" },
  ];

  if (data.type === "sample_request") {
    techRows.push(
      { label: "Talep Edilen Numuneler", value: data.sampleMaterials?.join(", ") || "Belirtilmedi" },
      { label: "İstenen Kalınlık(lar)", value: data.thickness || "Belirtilmedi" },
      { label: "Teslimat Adresi", value: data.deliveryAddress ? `${data.deliveryAddress} - ${data.district || ""}/${data.city || ""}` : "Belirtilmedi" },
      { label: "Vergi Dairesi / No", value: data.taxOfficeOrNumber || "Belirtilmedi" }
    );
  } else if (data.type === "rfq_cart") {
    const itemsText = data.cartItems && data.cartItems.length > 0
      ? data.cartItems.map((item, idx) => `${idx + 1}. <strong>${item.name}</strong> (${item.category}) - Miktar: <strong>${item.quantity}</strong>${item.dimensions ? ` [Ölçü: ${item.dimensions}]` : ""}`).join("<br>")
      : "Ürün listesi boş";
    techRows.push({ label: `Sepetteki Ürünler (${data.cartItems?.length || 0} Kalem)`, value: itemsText });
  } else if (data.type === "distributor_application") {
    techRows.push(
      { label: "Faaliyet Türü", value: data.businessType || "Belirtilmedi" },
      { label: "Vergi Dairesi / No", value: data.taxOfficeOrNumber || "Belirtilmedi" },
      { label: "Şehir / İlçe", value: `${data.city || ""}${data.district ? ` / ${data.district}` : ""}` },
      { label: "Depo / Mağaza Alanı", value: data.warehouseArea || "Belirtilmedi" },
      { label: "Dağıtım Hedeflenen Ürünler", value: data.targetProducts?.join(", ") || "Belirtilmedi" },
      { label: "Tahmini Yıllık Hacim", value: data.estimatedAnnualVolume || "Belirtilmedi" }
    );
  } else {
    techRows.push(
      { label: "Kategori", value: data.category || "Genel Conta" },
      { label: "Ürün Tanımı", value: data.productName || "Belirtilmedi" },
      { label: "Miktar", value: data.quantity || "Belirtilmedi" },
      { label: "Ölçüler (İÇ x DÇ x K)", value: data.dimensions || "Belirtilmedi" },
      { label: "Malzeme Cinsi", value: data.material || "Belirtilmedi" },
      { label: "Çalışma Sıcaklığı", value: data.temperature || "Belirtilmedi" },
      { label: "Çalışma Basıncı", value: data.pressure || "Belirtilmedi" },
      { label: "Akışkan / Ortam", value: data.medium || "Belirtilmedi" },
      { label: "Flanş / Standart", value: data.standard || "Belirtilmedi" }
    );
  }

  if (data.fileNames && data.fileNames.length > 0) {
    techRows.push({
      label: "Ekli Dosyalar",
      value: data.fileNames.join(", "),
    });
  }

  if (data.notes) {
    techRows.push({ label: "Müşteri Notları / Detay", value: data.notes });
  }

  const tableRowsHtml = techRows
    .map(
      (row, idx) => `
      <tr style="background-color: ${idx % 2 === 0 ? "#f8fafc" : "#ffffff"};">
        <td style="padding: 10px 14px; font-weight: 600; color: #1e293b; border-bottom: 1px solid #e2e8f0; width: 35%; font-size: 13px;">
          ${row.label}
        </td>
        <td style="padding: 10px 14px; color: #334155; border-bottom: 1px solid #e2e8f0; font-size: 13px;">
          ${row.value || "-"}
        </td>
      </tr>`
    )
    .join("");

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Yeni RFQ Talebi - ${data.referenceCode}</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #0f172a;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 650px; background-color: #ffffff; border: 1px solid #cbd5e1; border-top: 4px solid #b7410e; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <!-- Header -->
        <tr>
          <td style="background-color: #1a2536; padding: 20px 24px; color: #ffffff;">
            <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #b7410e; font-weight: bold; margin-bottom: 4px;">
              EMEK CONTA B2B RFQ BİLDİRİMİ
            </div>
            <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff;">
              Yeni Teklif / Numune Talebi Alındı
            </h1>
            <div style="font-size: 13px; color: #94a3b8; margin-top: 6px;">
              Referans: <strong style="color: #f8fafc; font-family: monospace;">${data.referenceCode}</strong> | Kaynak: ${formTypeLabel}
            </div>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding: 24px;">
            <p style="font-size: 14px; color: #475569; margin: 0 0 16px 0; line-height: 1.5;">
              Web sitesi üzerinden yeni bir teknik teklif/numune talebi gönderildi. Aşağıdaki teknik parametreleri ve iletişim bilgilerini inceleyiniz:
            </p>

            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; margin-bottom: 24px; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden;">
              ${tableRowsHtml}
            </table>

            <!-- Quick Action Links -->
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin-top: 16px;">
              <div style="font-size: 12px; font-weight: bold; text-transform: uppercase; color: #475569; margin-bottom: 10px;">
                Hızlı Yanıt Aksiyonları:
              </div>
              <a href="tel:${data.phone.replace(/[^0-9+]/g, '')}" style="display: inline-block; padding: 8px 14px; background-color: #1a2536; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 600; border-radius: 4px; margin-right: 8px; margin-bottom: 6px;">
                📞 Müşteriyi Ara (${data.phone})
              </a>
              <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Merhaba Sayın ${data.fullName}, Emek Conta'ya ilettiğiniz #${data.referenceCode} numaralı teklif talebiniz hk.`)}" target="_blank" style="display: inline-block; padding: 8px 14px; background-color: #16a34a; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 600; border-radius: 4px; margin-right: 8px; margin-bottom: 6px;">
                💬 WhatsApp ile Yanıtla
              </a>
              ${data.email ? `
              <a href="mailto:${data.email}?subject=${encodeURIComponent(`Emek Conta - Teklif Talebiniz Hk. [${data.referenceCode}]`)}" style="display: inline-block; padding: 8px 14px; background-color: #b7410e; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 600; border-radius: 4px; margin-bottom: 6px;">
                ✉️ E-posta ile Yanıtla
              </a>` : ""}
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color: #f8fafc; padding: 14px 24px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; text-align: center;">
            Bu e-posta <strong>emekconta.com</strong> otomatik bildirim sistemi tarafından oluşturulmuştur.
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}

/**
 * Builds the professional confirmation HTML for the client.
 */
function buildCustomerConfirmationHtml(data: RfqEmailPayload): string {
  const isSample = data.type === "sample_request";
  const isCart = data.type === "rfq_cart";
  const isDistributor = data.type === "distributor_application";

  let heading = "Teklif Talebiniz Başarıyla Alındı";
  if (isSample) heading = "Numune Talebiniz Alındı";
  if (isCart) heading = "Toplu Teklif Sepetiniz Alındı";
  if (isDistributor) heading = "Bayilik Başvurunuz Alındı";

  let bodyText = "Web sitemiz üzerinden ilettiğiniz teknik çizim ve çalışma şartı parametreleri mühendislik ekibimize başarıyla ulaşmıştır. Standart veya özel üretim contanız için teknik analiz yapılarak mesai saatleri içinde en geç <strong>2 saat</strong> içerisinde resmi teklifimiz tarafınıza sunulacaktır.";
  if (isSample) {
    bodyText = "Emek Conta'ya iletmiş olduğunuz malzeme numune talebi başarıyla kayıt altına alınmıştır. İlgili numune parçaları ve teknik veri föyleri hazırlanarak belirtilen adrese sevk edilecektir.";
  } else if (isCart) {
    bodyText = `Sepetinizdeki <strong>${data.cartItems?.length || 0} kalem ürün</strong> için toplu teklif talebiniz mühendislik ekibimize başarıyla ulaşmıştır. Çalışma parametreleriniz ve adetler incelenerek en kısa sürede resmi proforma iletilecektir.`;
  } else if (isDistributor) {
    bodyText = "Emek Conta yetkili satıcılık & bölgesel toptan dağıtım başvurunuz satış direktörlüğümüze ulaşmıştır. Bölge kotası ve toptan iskonto şartları incelenerek 1 iş günü içinde tarafınızla temas kurulacaktır.";
  }

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Talebiniz Alındı - Emek Conta</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 24px; color: #1a2536;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 620px; background-color: #ffffff; border: 1px solid #e2e8f0; border-top: 5px solid #b7410e; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.06);">
        <!-- Header -->
        <tr>
          <td style="background-color: #1a2536; padding: 28px 24px; text-align: center; color: #ffffff;">
            <div style="font-size: 12px; font-weight: bold; letter-spacing: 2px; color: #b7410e; text-transform: uppercase; margin-bottom: 6px;">
              EMEK CONTA SANAYİ VE TİCARET
            </div>
            <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff;">
              ${heading}
            </h1>
            <p style="margin: 6px 0 0 0; font-size: 13px; color: #94a3b8;">
              Sanayi ve denizcilik için DIN ve ASME normlu güvenilir sızdırmazlık çözümleri.
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding: 28px 24px;">
            <p style="font-size: 15px; color: #1e293b; margin: 0 0 16px 0; line-height: 1.6;">
              Sayın <strong>${data.fullName}</strong>${data.companyName ? ` (${data.companyName})` : ""},
            </p>
            <p style="font-size: 14px; color: #475569; margin: 0 0 20px 0; line-height: 1.6;">
              ${bodyText}
            </p>

            <!-- Reference Badge -->
            <div style="background-color: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 6px; padding: 14px; text-align: center; margin-bottom: 24px;">
              <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: 600; display: block; margin-bottom: 4px;">
                Talep Takip Referans Kodunuz
              </span>
              <span style="font-size: 20px; font-weight: 800; font-family: monospace; color: #b7410e; letter-spacing: 1px;">
                ${data.referenceCode}
              </span>
            </div>

            <!-- Fast Contact CTA -->
            <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; padding: 18px; margin-bottom: 24px;">
              <div style="font-size: 13px; font-weight: 700; color: #1e3a8a; margin-bottom: 8px;">
                Acil Sipariş ve Anlık Teknik Destek İçin:
              </div>
              <p style="font-size: 13px; color: #3b82f6; margin: 0 0 12px 0;">
                Tersane, santral veya üretim duruşlarında acil teslimat talepleriniz için doğrudan santral veya kurumsal WhatsApp hattımızdan referans kodunuzu belirterek bilgi alabilirsiniz.
              </p>
              <div>
                <a href="https://wa.me/${companyData.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Merhaba Emek Conta, #${data.referenceCode} referans kodlu talebim hakkında bilgi almak istiyorum.`)}" target="_blank" style="display: inline-block; padding: 9px 16px; background-color: #16a34a; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 700; border-radius: 6px; margin-right: 8px; margin-bottom: 6px;">
                  💬 WhatsApp ile Teyit Et
                </a>
                <a href="tel:${companyData.phone}" style="display: inline-block; padding: 9px 16px; background-color: #1a2536; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 700; border-radius: 6px; margin-bottom: 6px;">
                  📞 Santral: ${companyData.phoneFormatted}
                </a>
              </div>
            </div>

            <p style="font-size: 13px; color: #64748b; line-height: 1.5; margin: 0;">
              İlginiz için teşekkür eder, iyi çalışmalar dileriz.<br>
              <strong>Emek Conta Mühendislik & Satış Departmanı</strong>
            </p>
          </td>
        </tr>

        <!-- Locations Footer -->
        <tr>
          <td style="background-color: #1a2536; padding: 20px 24px; color: #94a3b8; font-size: 12px; line-height: 1.6; border-top: 1px solid #334155;">
            <div style="color: #ffffff; font-weight: 700; margin-bottom: 6px;">
              EMEK CONTA SANAYİ VE TİCARET
            </div>
            <div>
              <strong>Karaköy Satış & İletişim Ofisi:</strong> Kemankeş Karamustafapaşa Mah. Perşembe Pazarı Cad. Beyoğlu / İSTANBUL
            </div>
            <div style="margin-top: 4px;">
              <strong>Telefon & WhatsApp:</strong> ${companyData.phoneFormatted}
            </div>
            <div style="margin-top: 8px; font-size: 11px; color: #64748b;">
              E-posta: ${companyData.email} | Web: https://emekconta.com
            </div>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}

/**
 * Dispatches internal notification and customer confirmation emails.
 */
export async function sendRfqEmails(payload: RfqEmailPayload): Promise<SendEmailResult> {
  const referenceCode = payload.referenceCode;

  // If Resend API key is not configured, simulate gracefully with structured server logs.
  if (!resend || !resendApiKey) {
    console.log("==================================================================");
    console.log(`[EMAIL DISPATCH SIMULATION] (RESEND_API_KEY is not defined in env)`);
    console.log(`To: ${NOTIFICATION_EMAIL}`);
    console.log(`Reference: ${referenceCode}`);
    console.log(`Type: ${payload.type}`);
    console.log(`Customer: ${payload.fullName} (${payload.phone} - ${payload.email || "no-email"})`);
    console.log(`Item: ${payload.productName || payload.sampleMaterials?.join(", ") || "Custom"}`);
    if (payload.email) {
      console.log(`Customer Confirmation would be sent to: ${payload.email}`);
    }
    console.log("==================================================================");

    return {
      success: true,
      referenceCode,
      simulated: true,
      message: "Talebiniz başarıyla kaydedildi (Geliştirme / Simülasyon Modu).",
    };
  }

  try {
    // 1. Send Internal Notification to Emek Conta team
    const internalSubject = `[YENİ RFQ - ${referenceCode}] ${payload.companyName ? `${payload.companyName} - ` : ""}${payload.fullName}`;
    const internalHtml = buildInternalEmailHtml(payload);

    const internalResult = await resend.emails.send({
      from: SENDER_EMAIL,
      to: NOTIFICATION_EMAIL.split(",").map((s) => s.trim()),
      subject: internalSubject,
      html: internalHtml,
      replyTo: payload.email || undefined,
    });

    if (internalResult.error) {
      console.error("[RESEND ERROR - Internal Notification]:", internalResult.error);
    }

    // 2. Send Customer Confirmation if email provided
    if (payload.email && payload.email.includes("@")) {
      const customerSubject = `Emek Conta - ${payload.type === "sample_request" ? "Numune" : "Teklif"} Talebiniz Alındı [${referenceCode}]`;
      const customerHtml = buildCustomerConfirmationHtml(payload);

      const customerResult = await resend.emails.send({
        from: SENDER_EMAIL,
        to: payload.email,
        subject: customerSubject,
        html: customerHtml,
      });

      if (customerResult.error) {
        console.error("[RESEND ERROR - Customer Confirmation]:", customerResult.error);
      }
    }

    return {
      success: true,
      referenceCode,
      message: "Talebiniz ve e-posta bildirimi başarıyla iletildi.",
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "E-posta gönderiminde beklenmeyen hata";
    console.error("[EMAIL DISPATCH EXCEPTION]:", errorMsg);
    // Even if remote email provider fails, we return success with reference so user gets confirmation
    return {
      success: true,
      referenceCode,
      simulated: false,
      error: errorMsg,
      message: "Talebiniz kaydedildi. Ekibimiz en kısa sürede iletişime geçecektir.",
    };
  }
}
