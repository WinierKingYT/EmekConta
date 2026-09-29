import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RulerIcon, ShieldCheckIcon, DocumentTextIcon, CheckCircleIcon } from "@/components/icons/Icons";
import { companyData } from "@/data/company";

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

          {/* Right Column: Authentic Technical Blueprint Schematic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-industrial-950 border border-industrial-800 p-6 shadow-2xl relative">
              {/* Technical drawing framing */}
              <div className="flex items-center justify-between border-b border-industrial-800 pb-3 mb-4 text-[11px] font-mono text-industrial-400">
                <span className="text-steel-blue font-bold">EMEK-CONTA-DWG-01</span>
                <span>ASME B16.20 CLASS 300</span>
              </div>

              {/* Vector blueprint of Spiral Wound Gasket with dimension lines */}
              <div className="aspect-square w-full bg-industrial-900 border border-industrial-850 flex items-center justify-center p-4 relative overflow-hidden">
                <svg viewBox="0 0 280 280" className="w-full h-full text-industrial-400" fill="none">
                  {/* Outer centering ring */}
                  <circle cx="140" cy="140" r="126" stroke="#475569" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="140" cy="140" r="120" stroke="#94A3B8" strokeWidth="1.5" />
                  <circle cx="140" cy="140" r="95" stroke="#CBD5E1" strokeWidth="1.5" />

                  {/* Sealing spiral element (shaded rings) */}
                  <circle cx="140" cy="140" r="90" stroke="#0284C7" strokeWidth="8" strokeOpacity="0.4" />
                  <circle cx="140" cy="140" r="82" stroke="#0284C7" strokeWidth="6" strokeOpacity="0.6" />
                  <circle cx="140" cy="140" r="75" stroke="#0284C7" strokeWidth="8" strokeOpacity="0.8" />
                  
                  {/* Inner ring */}
                  <circle cx="140" cy="140" r="68" stroke="#E2E8F0" strokeWidth="2" />
                  <circle cx="140" cy="140" r="50" stroke="#64748B" strokeWidth="1.5" strokeDasharray="4 2" />

                  {/* Center bore */}
                  <circle cx="140" cy="140" r="48" stroke="#334155" strokeWidth="1" />

                  {/* Dimension lines & crosshair */}
                  <line x1="140" y1="5" x2="140" y2="275" stroke="#334155" strokeWidth="0.75" strokeDasharray="4 4" />
                  <line x1="5" y1="140" x2="275" y2="140" stroke="#334155" strokeWidth="0.75" strokeDasharray="4 4" />

                  {/* Dimension callouts */}
                  <line x1="140" y1="14" x2="260" y2="14" stroke="#0284C7" strokeWidth="1" />
                  <circle cx="260" cy="14" r="2" fill="#0284C7" />
                  <text x="145" y="11" fill="#38BDF8" fontSize="8" fontFamily="monospace">Ø OD: 215.9 mm</text>

                  <line x1="140" y1="72" x2="245" y2="72" stroke="#94A3B8" strokeWidth="0.75" />
                  <text x="145" y="69" fill="#CBD5E1" fontSize="8" fontFamily="monospace">SARIM: 316L + GRAFİT</text>

                  <line x1="140" y1="120" x2="220" y2="120" stroke="#94A3B8" strokeWidth="0.75" />
                  <text x="145" y="117" fill="#CBD5E1" fontSize="8" fontFamily="monospace">Ø ID: 114.3 mm</text>
                </svg>

                {/* Corner watermark badge */}
                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-industrial-950/90 border border-industrial-800 text-[10px] font-mono text-steel-blue">
                  HASSAS İMALAT TOLERANSI: ±0.2mm
                </div>
              </div>

              {/* Metadata block below drawing */}
              <div className="mt-4 pt-3 border-t border-industrial-850 flex items-center justify-between text-[11px] font-mono text-industrial-400">
                <div>
                  <span className="text-industrial-500 block">MALZEME</span>
                  <span className="text-industrial-200">AISI 316L / Saf Grafit</span>
                </div>
                <div className="text-right">
                  <span className="text-industrial-500 block">DURUM</span>
                  <span className="text-emerald-400 font-semibold">İmalata Hazır</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
