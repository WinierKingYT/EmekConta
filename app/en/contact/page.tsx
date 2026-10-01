import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { EnglishContactForm } from "@/components/en/EnglishContactForm";
import { companyData } from "@/data/company";
import { PhoneIcon, WhatsappIcon, MailIcon, ShieldCheckIcon, ClockIcon } from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "Contact & International RFQ | Emek Gaskets Turkey",
  description:
    "Request an international quotation for ASME B16.20 and DIN gaskets. Direct engineering support and worldwide delivery from Istanbul.",
  alternates: {
    canonical: "https://emekconta.com/en/contact",
    languages: {
      "tr-TR": "https://emekconta.com/teklif-iste",
      "en-US": "https://emekconta.com/en/contact",
    },
  },
  openGraph: {
    title: "Emek Gaskets Global Contact & RFQ Desk",
    description: "Submit CAD drawings or specifications for rapid quotation and export dispatch.",
    url: "https://emekconta.com/en/contact",
  },
};

export default function EnglishContactPage({
  searchParams,
}: {
  searchParams: { product?: string };
}) {
  return (
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <Container size="narrow">
        <Breadcrumb
          items={[
            { label: "Home", href: "/en" },
            { label: "Contact & Export RFQ" },
          ]}
          className="mb-6"
        />

        {/* Page Header */}
        <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-10 mb-8 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-rust inline-block"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-rust">
              GLOBAL SALES & ENGINEERING INQUIRY
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-night tracking-tight">
            International Quote Request (RFQ)
          </h1>
          <p className="mt-3 text-sm sm:text-base text-industrial-600 leading-relaxed">
            Attach your engineering drawing (PDF, DWG, DXF), specify ASME/DIN flange standards, or request non-standard custom gasket fabrication. Our export engineering team responds within business hours with a formal proforma quotation and delivery schedule.
          </p>

          {/* Urgent Direct Contact Ribbon */}
          <div className="mt-6 pt-6 border-t border-industrial-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <a
              href={`tel:${companyData.phone}`}
              className="flex items-center gap-2.5 p-3 bg-industrial-50 hover:bg-industrial-100 text-night transition-colors border border-industrial-200 rounded-md"
            >
              <PhoneIcon className="w-4 h-4 text-rust shrink-0" />
              <div>
                <span className="block text-[10px] text-industrial-500">Headquarters:</span>
                <span>{companyData.phoneFormatted}</span>
              </div>
            </a>

            <a
              href={`https://wa.me/${companyData.whatsapp.replace('+', '')}?text=${encodeURIComponent("Hello Emek Gaskets, I am submitting an international quote inquiry.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 transition-colors border border-emerald-200 rounded-md"
            >
              <WhatsappIcon className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <span className="block text-[10px] text-emerald-700">WhatsApp Export Desk:</span>
                <span className="font-bold">{companyData.whatsappFormatted}</span>
              </div>
            </a>

            <div className="flex items-center gap-2.5 p-3 bg-industrial-50 border border-industrial-200 rounded-md">
              <ClockIcon className="w-4 h-4 text-industrial-500 shrink-0" />
              <div>
                <span className="block text-[10px] text-industrial-500">Response SLA:</span>
                <span className="font-bold text-night">Under 2 Hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Inquiry Form */}
        <EnglishContactForm defaultProduct={searchParams.product} />

        {/* Manufacturing & Branch Coordinates */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-mono">
          <div className="bg-white border border-industrial-200 p-5 rounded-xl">
            <span className="text-[10px] font-bold text-rust uppercase block mb-1">
              MANUFACTURING PLANT (HQ)
            </span>
            <div className="font-bold text-night text-sm mb-1">Emek Gaskets Istanbul Factory</div>
            <p className="text-industrial-500 mb-2 leading-relaxed">
              Ikitelli Industrial Zone, Ataturk Sanayi Sitesi 4.Yol No:96, Basaksehir, Istanbul / Turkey
            </p>
            <div className="text-industrial-600">Hours: Mon-Fri 08:30 – 18:00 (GMT+3)</div>
          </div>

          <div className="bg-white border border-industrial-200 p-5 rounded-xl">
            <span className="text-[10px] font-bold text-rust uppercase block mb-1">
              MARITIME & HARBOR BRANCH
            </span>
            <div className="font-bold text-night text-sm mb-1">Karakoy Commercial Branch</div>
            <p className="text-industrial-500 mb-2 leading-relaxed">
              Kemankes Karamustafapasa Mah. Persembe Pazari Cad., Beyoglu, Istanbul / Turkey
            </p>
            <div className="text-industrial-600">Proximity: 15 min to Karakoy / Galata Port</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
