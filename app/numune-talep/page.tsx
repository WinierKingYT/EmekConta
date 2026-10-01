import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SampleRequestForm } from "@/components/sample/SampleRequestForm";
import { companyData } from "@/data/company";
import { PhoneIcon, WhatsappIcon, ClockIcon, ShieldCheckIcon } from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "Ücretsiz Malzeme Numunesi Talebi | AR-GE & Test | Emek Conta",
  description:
    "Endüstriyel contalar, saf grafit, klingrit, ePTFE ve kauçuk levha numuneleri talep edin. AR-GE, bakım ve satın alma mühendisleri için ücretsiz test kiti.",
  openGraph: {
    title: "Ücretsiz Conta Malzemesi Numune Talebi | Emek Conta",
    description:
      "Tesisinizdeki akışkan ve sıcaklık şartlarına uygun conta malzemesini yerinde test edin. Aynı gün numune kiti sevkiyatı.",
    url: "https://emekconta.com/numune-talep",
  },
};

export default function SampleRequestPage() {
  return (
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <Container size="narrow">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: "Numune Talebi" }]}
          className="mb-6"
        />

        {/* Page Header */}
        <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-10 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-rust inline-block"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-rust">
              AR-GE, BAKIM & LABORATUVAR TESTİ
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-night tracking-tight">
            Ücretsiz Malzeme Numune Talebi
          </h1>
          <p className="mt-3 text-sm sm:text-base text-industrial-600 leading-relaxed">
            Kritik boru hatlarınız, kazan kapaklarınız veya özel makine flanşlarınız için en doğru malzemeyi seçebilmeniz adına numune kiti sunuyoruz. Saf grafit, klingrit, genleşmiş PTFE veya teknik kauçuk çeşitlerinden dilediklerinizi seçin; teknik föyleri ile birlikte adresinize ulaştıralım.
          </p>

          {/* Guarantees Ribbon */}
          <div className="mt-6 pt-6 border-t border-industrial-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="flex items-center gap-2.5 p-3 bg-industrial-50 text-night border border-industrial-200 rounded-lg">
              <ShieldCheckIcon className="w-4 h-4 text-rust shrink-0" />
              <div>
                <span className="block text-[10px] text-industrial-500">Maliyet:</span>
                <span className="font-bold text-emerald-700">Ücretsiz Numune Kiti</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 bg-industrial-50 text-night border border-industrial-200 rounded-lg">
              <ClockIcon className="w-4 h-4 text-rust shrink-0" />
              <div>
                <span className="block text-[10px] text-industrial-500">Hazırlık Süresi:</span>
                <span>Aynı Gün Kargo</span>
              </div>
            </div>

            <a
              href={`https://wa.me/${companyData.whatsapp.replace('+', '')}?text=${encodeURIComponent("Merhaba Emek Conta, test amaçlı numune malzeme talep etmek istiyorum.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 transition-colors border border-emerald-200 rounded-lg"
            >
              <WhatsappIcon className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <span className="block text-[10px] text-emerald-700">WhatsApp Danışma:</span>
                <span>{companyData.whatsappFormatted}</span>
              </div>
            </a>
          </div>
        </div>

        {/* The Form */}
        <SampleRequestForm />
      </Container>
    </div>
  );
}
