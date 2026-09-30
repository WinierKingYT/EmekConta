import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircleIcon, ShieldCheckIcon, ClockIcon } from "@/components/icons/Icons";
import { companyData } from "@/data/company";
import { HeroShowcase } from "./HeroShowcase";

export function HeroSection() {
  return (
    <section className="relative bg-industrial-950 text-white overflow-hidden border-b border-industrial-800">
      {/* Precision grid background texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Atmospheric radial glow behind the showcase console */}
      <div 
        className="absolute right-0 top-1/4 w-[650px] h-[650px] pointer-events-none opacity-60 blur-3xl rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(183, 65, 14, 0.22) 0%, rgba(26, 37, 54, 0.4) 45%, transparent 70%)'
        }}
      />

      <Container className="relative py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authoritative Engineering Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Engineering Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-industrial-900 border border-rust/30 text-xs font-mono text-industrial-200 mb-6 shadow-xs">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="font-semibold tracking-wide">[ 1997'DEN BUGÜNE ]</span>
              <span className="text-industrial-500">•</span>
              <span className="text-industrial-300">SANAYİ VE DENİZCİLİK SIZDIRMAZLIK ÇÖZÜMLERİ</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Endüstriyel Sızdırmazlıkta <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rust-light via-rust to-[#ea6e36]">
                1997'den Gelen
              </span>{" "}
              Tecrübe
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-base sm:text-lg text-industrial-300 leading-relaxed max-w-2xl">
              {companyData.subMessage}
            </p>

            {/* Primary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button href="/urunler" variant="accent" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-rust/20">
                Ürünleri İncele
              </Button>
              <Button
                href="/teklif-iste"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-white border-industrial-700 hover:border-rust hover:text-white hover:bg-industrial-900/80 transition-all"
              >
                Teknik Teklif İste
              </Button>
            </div>

            {/* SLA / Micro Assurance */}
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-industrial-400">
              <ClockIcon className="w-3.5 h-3.5 text-rust shrink-0" />
              <span>Ortalama teklif dönüş süresi: <strong className="text-industrial-200 font-semibold">30 Dakika</strong></span>
              <span className="text-industrial-600 hidden sm:inline">|</span>
              <span className="hidden sm:inline text-industrial-300">DIN EN 1514 & ASME B16.20 Kalite Normları</span>
            </div>

            {/* Key Micro Capabilities as 3 Elevated Micro-Cards */}
            <div className="mt-8 pt-8 border-t border-industrial-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
              <div className="p-3 bg-industrial-900/70 border border-industrial-800 hover:border-rust/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-white mb-1">
                  <CheckCircleIcon className="w-4 h-4 text-rust shrink-0" />
                  <span>DIN & ASME Normları</span>
                </div>
                <p className="text-[11px] text-industrial-400 font-sans leading-tight">
                  Standardize flanş ölçüleri ve mikron tolerans güvencesi.
                </p>
              </div>

              <div className="p-3 bg-industrial-900/70 border border-industrial-800 hover:border-rust/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-white mb-1">
                  <CheckCircleIcon className="w-4 h-4 text-rust shrink-0" />
                  <span>CAD / DXF Kesim</span>
                </div>
                <p className="text-[11px] text-industrial-400 font-sans leading-tight">
                  CNC bıçak ile kalıp maliyetsiz özel formlu imalat.
                </p>
              </div>

              <div className="p-3 bg-industrial-900/70 border border-industrial-800 hover:border-rust/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-white mb-1">
                  <CheckCircleIcon className="w-4 h-4 text-rust shrink-0" />
                  <span>Numuneye Göre Üretim</span>
                </div>
                <p className="text-[11px] text-industrial-400 font-sans leading-tight">
                  Birebir numune tarama & acil teslimat imkânı.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Dual-Mode Interactive Showcase (Photo & CAD) */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroShowcase />
          </div>
        </div>
      </Container>
    </section>
  );
}
