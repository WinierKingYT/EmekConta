import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { companyData } from "@/data/company";
import {
  PhoneIcon,
  WhatsappIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  FactoryIcon,
  CheckCircleIcon,
} from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "İletişim | Fabrika & Karaköy Şube Adresleri",
  description:
    "Emek Conta iletişim bilgileri, İkitelli Organize Sanayi Bölgesi imalat merkezi ve Karaköy Perşembe Pazarı satış şubesi adresleri, telefon ve WhatsApp hatları.",
  openGraph: {
    title: "İletişim ve Adres Bilgileri | Emek Conta",
    description: "Emek Conta fabrikası ve Karaköy şubesi iletişim bilgileri. Telefon, WhatsApp ve harita.",
    url: "https://emekconta.com/iletisim",
  },
};

export default function ContactPage() {
  return (
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: "İletişim" }]}
          className="mb-6"
        />

        {/* Page Header */}
        <div className="bg-white border border-industrial-200 rounded-lg p-6 sm:p-10 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-steel-blue inline-block"></span>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-steel-darkblue">
              KURUMSAL İLETİŞİM
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-industrial-900 tracking-tight">
            Bizimle İletişime Geçin
          </h1>
          <p className="mt-3 text-sm sm:text-base text-industrial-600 max-w-3xl leading-relaxed">
            Teknik resim danışmanlığı, acil gemi sızdırmazlık tedariği, standart flanş contası siparişleri ve toptan levha talepleriniz için santralimiz, WhatsApp kurumsal hattımız veya şubelerimiz üzerinden bize ulaşabilirsiniz.
          </p>
        </div>

        {/* 3 Direct Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Phone */}
          <div className="bg-white border border-industrial-200 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-industrial-100 text-steel-darkblue flex items-center justify-center mb-4 rounded-md">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-industrial-900 mb-1">
                Telefon ile İletişim
              </h3>
              <p className="text-xs text-industrial-500 mb-4">
                Teknik danışma ve sipariş takibi
              </p>
              <div className="text-base font-bold font-mono text-industrial-900">
                {companyData.phoneFormatted}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-industrial-100">
              <a
                href={`tel:${companyData.phone}`}
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-industrial-900 hover:bg-industrial-800 text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors rounded-md"
              >
                Hemen Ara
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-white border border-emerald-300 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 rounded-md">
                <WhatsappIcon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-industrial-900 mb-1">
                WhatsApp Hızlı RFQ
              </h3>
              <p className="text-xs text-industrial-500 mb-4">
                Çizim, numune fotoğrafı ve acil teklif
              </p>
              <div className="text-base font-bold font-mono text-emerald-700">
                {companyData.whatsappFormatted}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-100">
              <a
                href={`https://wa.me/${companyData.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors rounded-md"
              >
                WhatsApp'tan Mesaj Yaz
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white border border-industrial-200 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-industrial-100 text-steel-darkblue flex items-center justify-center mb-4 rounded-md">
                <MailIcon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-industrial-900 mb-1">
                E-posta ile Teklif
              </h3>
              <p className="text-xs text-industrial-500 mb-4">
                Resmi teklif mektupları ve CAD dosyaları
              </p>
              <div className="text-sm font-bold font-mono text-steel-darkblue truncate">
                {companyData.quoteEmail}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-industrial-100">
              <a
                href={`mailto:${companyData.quoteEmail}`}
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-industrial-900 hover:bg-industrial-800 text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors rounded-md"
              >
                E-posta Gönder
              </a>
            </div>
          </div>
        </div>

        {/* 2 Physical Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {companyData.locations.map((loc, idx) => (
            <div
              key={idx}
              className="bg-white border border-industrial-200 rounded-lg p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-industrial-100 mb-4">
                  <div className="flex items-center gap-2">
                    <FactoryIcon className="w-5 h-5 text-steel-blue" />
                    <span className="font-bold text-base text-industrial-900">
                      {loc.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-industrial-100 text-industrial-700 rounded">
                    {loc.type}
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-industrial-700">
                  <div className="flex items-start gap-2.5">
                    <MapPinIcon className="w-4 h-4 text-industrial-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-industrial-900 block">Adres:</span>
                      <span>{loc.address}, {loc.district} / {loc.city}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <ClockIcon className="w-4 h-4 text-industrial-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-industrial-900 block">Çalışma Saatleri:</span>
                      <span className="font-mono text-xs">{loc.workingHours}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <PhoneIcon className="w-4 h-4 text-industrial-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-industrial-900 block">Telefon:</span>
                      <span className="font-mono text-xs">{loc.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MailIcon className="w-4 h-4 text-industrial-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-industrial-900 block">E-posta:</span>
                      <span className="font-mono text-xs">{loc.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lazy-loaded Google Maps Embed container */}
              <div className="mt-6 pt-4 border-t border-industrial-100">
                <div className="aspect-video w-full bg-industrial-100 border border-industrial-200 rounded-md overflow-hidden relative">
                  <iframe
                    title={`${loc.name} Haritası`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://maps.google.com/maps?q=${loc.mapEmbedQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
