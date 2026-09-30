import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { RFQForm } from "@/components/rfq/RFQForm";
import { companyData } from "@/data/company";
import { PhoneIcon, WhatsappIcon, MailIcon, ShieldCheckIcon, ClockIcon } from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "Teknik Teklif İste | Endüstriyel Sızdırmazlık RFQ",
  description:
    "Teknik çizim (CAD/DWG/PDF), ölçü veya numuneye göre endüstriyel conta teklifi alın. ASME, DIN flanş contaları ve özel üretim sızdırmazlık elemanları.",
  openGraph: {
    title: "Teknik Teklif İste | Emek Conta",
    description: "CAD, DXF veya numuneye göre conta teklifi isteyin. Mühendislik analizi ve aynı gün teklif.",
    url: "https://emekconta.com/teklif-iste",
  },
};

export default function QuotePage({
  searchParams,
}: {
  searchParams: { urun?: string; kategori?: string };
}) {
  return (
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <Container size="narrow">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: "Teklif İste" }]}
          className="mb-6"
        />

        {/* Page Header */}
        <div className="bg-white border border-industrial-200 rounded-lg p-6 sm:p-10 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-rust inline-block"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-rust">
              B2B TEKLİF & TEKNİK DEĞERLENDİRME
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-night tracking-tight">
            Teknik Teklif Talebi (RFQ)
          </h1>
          <p className="mt-3 text-sm sm:text-base text-industrial-600 leading-relaxed">
            Teknik resminizi (DWG, DXF, PDF), numunenizi veya net ölçülerinizi iletin. Çalışma sıcaklığı, basınç ve akışkan parametreleriniz incelenerek tarafınıza aynı gün resmi proforma ve teslim termin süresi iletilecektir.
          </p>

          {/* Urgent Hotline Ribbon */}
          <div className="mt-6 pt-6 border-t border-industrial-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <a
              href={`tel:${companyData.phone}`}
              className="flex items-center gap-2.5 p-3 bg-industrial-50 hover:bg-industrial-100 text-night transition-colors border border-industrial-200 rounded-md"
            >
              <PhoneIcon className="w-4 h-4 text-rust shrink-0" />
              <div>
                <span className="block text-[10px] text-industrial-500">Santral:</span>
                <span>{companyData.phoneFormatted}</span>
              </div>
            </a>

            <a
              href={`https://wa.me/${companyData.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 transition-colors border border-emerald-200 rounded-md"
            >
              <WhatsappIcon className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <span className="block text-[10px] text-emerald-700">Acil WhatsApp RFQ:</span>
                <span>{companyData.whatsappFormatted}</span>
              </div>
            </a>

            <div className="flex items-center gap-2.5 p-3 bg-industrial-50 text-night border border-industrial-200 rounded-md">
              <ClockIcon className="w-4 h-4 text-rust shrink-0" />
              <div>
                <span className="block text-[10px] text-industrial-500">Geri Dönüş:</span>
                <span>Aynı İş Günü İçinde</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Form */}
        <RFQForm
          defaultProduct={searchParams.urun}
          defaultCategory={searchParams.kategori}
        />
      </Container>
    </div>
  );
}
