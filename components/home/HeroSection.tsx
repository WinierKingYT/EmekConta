import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircleIcon } from "@/components/icons/Icons";
import { companyData } from "@/data/company";
import { HeroShowcase } from "./HeroShowcase";

export function HeroSection() {
  return (
    <section className="relative bg-industrial-900 text-white overflow-hidden border-b border-industrial-800">
      {/* Precision grid background texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      <Container className="relative py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authoritative Engineering Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Engineering Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-industrial-800 border border-industrial-700/80 text-xs font-mono text-industrial-300 mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span>1997'DEN BERİ SANAYİ VE DENİZCİLİK SIZDIRMAZLIK ÇÖZÜMLERİ</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Endüstriyel Sızdırmazlıkta <br />
              <span className="text-steel-blue">1997'den Gelen</span> Tecrübe
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-base sm:text-lg text-industrial-300 leading-relaxed max-w-2xl">
              {companyData.subMessage}
            </p>

            {/* Primary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button href="/urunler" variant="accent" size="lg" className="w-full sm:w-auto">
                Ürünleri İncele
              </Button>
              <Button
                href="/teklif-iste"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-white border-industrial-600 hover:bg-industrial-800 hover:border-white"
              >
                Teknik Teklif İste
              </Button>
            </div>

            {/* Key Micro Capabilities */}
            <div className="mt-10 pt-8 border-t border-industrial-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-industrial-400 w-full">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-steel-blue shrink-0" />
                <span>Teknik Çizim / CAD</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-steel-blue shrink-0" />
                <span>Numuneye Göre İmalat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-steel-blue shrink-0" />
                <span>DIN & ASME Normları</span>
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
