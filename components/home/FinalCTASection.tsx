import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsappIcon, MailIcon, UploadCloudIcon } from "@/components/icons/Icons";
import { companyData } from "@/data/company";

export function FinalCTASection() {
  return (
    <section className="py-20 sm:py-28 bg-night-deep bg-blueprint-dark text-white relative overflow-hidden border-t border-night-border">
      {/* Top Hairline Rust Accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-rust to-transparent opacity-80" />

      {/* Atmospheric Forge Radial Glow */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-25 blur-3xl rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(207, 75, 20, 0.4) 0%, rgba(26, 37, 54, 0.2) 60%, transparent 80%)',
        }}
      />

      <Container size="narrow" className="text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-night-surface border border-rust/40 text-xs font-mono text-rust-light mb-6 uppercase tracking-wider rounded-md shadow-inner-bevel">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Hızlı B2B Teklif & Doğrudan İmalat Danışmanlığı
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
