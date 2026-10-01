"use client";

import React, { useState } from "react";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/Button";
import {
  UploadCloudIcon,
  CheckCircleIcon,
  PhoneIcon,
  WhatsappIcon,
  DocumentTextIcon,
} from "@/components/icons/Icons";
import { trackRfqSubmission } from "@/lib/analytics";

interface EnglishContactFormProps {
  defaultProduct?: string;
}

export function EnglishContactForm({ defaultProduct }: EnglishContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    country: "",
    email: "",
    phone: "",
    productName: defaultProduct || "",
    standard: "ASME B16.20",
    quantity: "",
    dimensions: "",
    operatingConditions: "",
    notes: "",
    website_hp: "",
  });

  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (formData.website_hp) {
      setIsSuccess(true);
      return;
    }

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage("Please fill in all required fields (Full Name, E-mail, Phone).");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("type", "rfq_detailed");
      payload.append("fullName", formData.fullName.trim());
      payload.append("companyName", `${formData.companyName.trim()} [${formData.country.trim() || "International"}]`);
      payload.append("email", formData.email.trim());
      payload.append("phone", formData.phone.trim());
      payload.append("productName", formData.productName.trim() || "International RFQ");
      payload.append("standard", formData.standard);
      payload.append("quantity", formData.quantity.trim());
      payload.append("dimensions", formData.dimensions.trim());
      payload.append("notes", `Operating Conditions: ${formData.operatingConditions} | Notes: ${formData.notes}`);
      payload.append("website_hp", formData.website_hp);

      for (const file of files) {
        payload.append("files", file);
      }

      const res = await fetch("/api/rfq", {
        method: "POST",
        body: payload,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit quote inquiry.");
      }

      const refCode = data.referenceCode || `EC-EXPORT-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceCode(refCode);
      trackRfqSubmission({
        formType: "rfq_detailed",
        referenceCode: refCode,
        productName: formData.productName,
        companyName: formData.companyName,
      });
      setIsSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An error occurred while submitting inquiry.";
      setErrorMessage(`${msg} You may also reach us directly via WhatsApp or phone.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white border-2 border-emerald-500 p-8 sm:p-12 text-center rounded-xl shadow-sm">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 border border-emerald-300 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircleIcon className="w-8 h-8" />
        </div>
        <span className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase block mb-1">
          EXPORT INQUIRY RECEIVED
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
          Thank You, {formData.fullName}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-industrial-600 max-w-md mx-auto leading-relaxed">
          Your technical inquiry has been assigned to our export engineering department. A formal proforma quotation with CIF/FOB terms will be sent to <strong>{formData.email}</strong> within business hours.
        </p>

        <div className="mt-6 p-4 bg-industrial-50 border border-industrial-200 max-w-sm mx-auto rounded-lg font-mono">
          <span className="text-[11px] text-industrial-500 uppercase tracking-wider block">
            INQUIRY REFERENCE:
          </span>
          <span className="text-xl font-bold text-rust">{referenceCode}</span>
        </div>

        <div className="mt-8 pt-6 border-t border-industrial-200 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <a
            href={`https://wa.me/${companyData.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Hello Emek Gaskets, inquiring about export RFQ #${referenceCode}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-emerald-600 text-white hover:bg-emerald-700 transition-colors inline-flex items-center gap-2 rounded-lg"
          >
            <WhatsappIcon className="w-4 h-4" />
            <span>Confirm via WhatsApp Desk</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-industrial-200 p-6 sm:p-10 shadow-xs space-y-6 rounded-xl">
      <input
        type="text"
        name="website_hp"
        value={formData.website_hp}
        onChange={handleInputChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium rounded-lg">
          {errorMessage}
        </div>
      )}

      {/* Contact Information */}
      <div>
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-industrial-200">
          <span className="font-mono text-xs font-bold text-rust">01.</span>
          <h3 className="font-bold text-sm text-industrial-900 uppercase tracking-wide">
            Company & Contact Details
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Contact Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="e.g. Captain James Smith / Chief Engineer"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Company / Vessel Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="e.g. Baltic Shipping Corp. / Petrotech Refinery"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Business E-mail <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="procurement@company.com"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 font-mono focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Telephone / WhatsApp (with Country Code) <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+44 20 1234 5678"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 font-mono focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="country" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Destination Country & Port / City
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="e.g. Rotterdam, Netherlands / Houston, USA / Dubai, UAE"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* Technical Requirements */}
      <div>
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-industrial-200">
          <span className="font-mono text-xs font-bold text-rust">02.</span>
          <h3 className="font-bold text-sm text-industrial-900 uppercase tracking-wide">
            Gasket Specifications & Inquiry Scope
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="productName" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Product Description / Type
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              placeholder="e.g. Spiral Wound Gasket / Pure Graphite Rings"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="standard" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Applicable Standard
            </label>
            <select
              id="standard"
              name="standard"
              value={formData.standard}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white font-mono"
            >
              <option value="ASME B16.20">ASME B16.20 (Spiral Wound)</option>
              <option value="ASME B16.21">ASME B16.21 (Non-Metallic Flat)</option>
              <option value="DIN EN 1514-1">DIN EN 1514-1 (Flat Non-Metallic)</option>
              <option value="DIN EN 1514-2">DIN EN 1514-2 (Spiral Wound)</option>
              <option value="DIN 2690">DIN 2690</option>
              <option value="Custom CAD / Print">Custom CAD Drawing / Print</option>
            </select>
          </div>

          <div>
            <label htmlFor="dimensions" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Flange Size & Class / DN & PN
            </label>
            <input
              type="text"
              id="dimensions"
              name="dimensions"
              value={formData.dimensions}
              onChange={handleInputChange}
              placeholder="e.g. 4 inch Class 300 / DN 150 PN 40"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 font-mono focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="quantity" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Estimated Quantity (Pieces / Sets)
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="e.g. 250 pcs / 10 sets"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 font-mono focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="operatingConditions" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Operating Parameters (Medium, Temp, Pressure)
            </label>
            <input
              type="text"
              id="operatingConditions"
              name="operatingConditions"
              value={formData.operatingConditions}
              onChange={handleInputChange}
              placeholder="e.g. Superheated Steam @ 420°C, 45 Bar / Heavy Fuel Oil"
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="notes" className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
              Additional Details / Invoicing & Delivery Instructions
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Please specify Incoterms (EXW, FOB, CIF), required delivery date, or special MTR certification requirements..."
              className="w-full px-3.5 py-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-sm text-industrial-900 focus:outline-none focus:ring-2 focus:ring-rust focus:bg-white resize-none"
            />
          </div>
        </div>
      </div>

      {/* CAD File / Technical Drawing Upload */}
      <div>
        <label className="block text-xs font-mono font-medium text-industrial-700 mb-1.5">
          Attach Technical Drawing / Specification (Optional)
        </label>
        <div className="border-2 border-dashed border-industrial-300 p-5 rounded-lg text-center bg-industrial-50 hover:bg-white transition-colors">
          <UploadCloudIcon className="w-8 h-8 text-industrial-400 mx-auto mb-2" />
          <p className="text-xs text-industrial-600 mb-1">
            Upload PDF, DWG, DXF, STEP, PNG, or JPG files (Max 15MB)
          </p>
          <input
            type="file"
            id="files"
            multiple
            onChange={handleFileChange}
            className="text-xs font-mono text-industrial-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-rust file:text-white hover:file:bg-rust-dark cursor-pointer"
          />
        </div>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={isSubmitting}
          className="w-full text-center justify-center font-bold tracking-wide rounded-lg cursor-pointer"
        >
          {isSubmitting ? "Transmitting RFQ..." : "Submit Export Quote Request (Instant Dispatch)"}
        </Button>
      </div>
    </form>
  );
}
