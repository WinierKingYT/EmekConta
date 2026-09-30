import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsappIcon, MailIcon, UploadCloudIcon } from "@/components/icons/Icons";
import { companyData } from "@/data/company";

export function FinalCTASection() {
  return (
    <section className="py-16 sm:py-24 bg-industrial-950 text-white relative overflow-hidden">
      {/* Decorative technical line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-industrial-800 via-rust to-industrial-800" />

      <Container size="narrow" className="text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-industrial-850 border border-industrial-700 text-xs font-mono text-industrial-300 mb-6 uppercase tracking-wider">
          <span className="w-2 h-2 bg-rust rounded-full" />
          Hızlı B2B Teklif & Teknik Danışmanlık
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Uygulamanız İçin Doğru Sızdırmazlık Çözümünü Birlikte Belirleyelim
        </h2>

        <p className="mt-5 text-base sm:text-lg text-industrial-300 max-w-2xl mx-auto leading-relaxed">
          Teknik çiziminizi iletin veya çalışma parametrelerinizi (sıcaklık, basınç, akışkan) paylaşın; mühendislik ekibimiz en uygun malzeme ve imalat yöntemini belirlesin.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/teklif-iste" variant="accent" size="lg" className="w-full sm:w-auto">
            <UploadCloudIcon className="w-5 h-5 mr-2" />
            Teklif İste
          </Button>
          <Button
            href="/iletisim"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-white border-industrial-700 hover:border-white hover:bg-industrial-900"
          >
            Bizimle İletişime Geçin
          </Button>
        </div>

        {/* Quick Contact Line */}
        <div className="mt-10 pt-8 border-t border-industrial-850 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-industrial-400">
          <a
            href={`tel:${companyData.phone}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <PhoneIcon className="w-4 h-4 text-rust" />
            <span>Santral: {companyData.phoneFormatted}</span>
          </a>

          <a
            href={`https://wa.me/${companyData.whatsapp.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <WhatsappIcon className="w-4 h-4" />
            <span>WhatsApp RFQ</span>
          </a>

          <a
            href={`mailto:${companyData.quoteEmail}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <MailIcon className="w-4 h-4 text-rust" />
            <span>{companyData.quoteEmail}</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
