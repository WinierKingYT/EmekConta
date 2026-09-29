"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FactoryIcon, RulerIcon, CheckCircleIcon } from "@/components/icons/Icons";

export function HeroShowcase() {
  const [activeTab, setActiveTab] = useState<"showcase" | "cad">("showcase");

  return (
    <div className="w-full max-w-md bg-industrial-950 border border-industrial-800 p-5 sm:p-6 shadow-2xl relative">
      {/* Tab Switcher & Header */}
      <div className="flex items-center justify-between border-b border-industrial-800 pb-3 mb-4 text-[11px] font-mono">
        <div className="flex items-center gap-1.5 p-0.5 bg-industrial-900 border border-industrial-800">
          <button
            type="button"
            onClick={() => setActiveTab("showcase")}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs transition-colors rounded-none ${
              activeTab === "showcase"
                ? "bg-steel-darkblue text-white font-bold shadow-xs"
                : "text-industrial-400 hover:text-industrial-200"
            }`}
          >
            <FactoryIcon className="w-3.5 h-3.5" />
            <span>Üretim Vitrini</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("cad")}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs transition-colors rounded-none ${
              activeTab === "cad"
                ? "bg-steel-darkblue text-white font-bold shadow-xs"
                : "text-industrial-400 hover:text-industrial-200"
            }`}
          >
            <RulerIcon className="w-3.5 h-3.5" />
            <span>CAD Çizim</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-industrial-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-industrial-300">
            {activeTab === "showcase" ? "CANLI VİTRİN" : "TEKNİK DOKÜMAN"}
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === "showcase" ? (
        <div>
          {/* Photographic Manufacturing Showcase */}
          <div className="aspect-square w-full bg-industrial-900 border border-industrial-850 relative overflow-hidden group">
            <Image
              src="/images/hero/hero-manufacturing.webp"
              alt="Emek Conta Endüstriyel Sızdırmazlık İmalatı"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Precision Vignette & Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-industrial-950/80 via-transparent to-industrial-950/40 pointer-events-none" />

            {/* Corner Crosshairs for Engineering Blueprint Aesthetic */}
            <div className="absolute top-2 left-2 font-mono text-[10px] text-white/60 pointer-events-none select-none">
              +
            </div>
            <div className="absolute top-2 right-2 font-mono text-[10px] text-white/60 pointer-events-none select-none">
              +
            </div>
            <div className="absolute bottom-2 left-2 font-mono text-[10px] text-white/60 pointer-events-none select-none">
              +
            </div>
            <div className="absolute bottom-2 right-2 font-mono text-[10px] text-white/60 pointer-events-none select-none">
              +
            </div>

            {/* Top Badge */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="px-2 py-0.5 bg-industrial-950/85 backdrop-blur-xs border border-industrial-700/60 text-industrial-200 text-[10px] font-mono tracking-wider uppercase">
                Hassas İmalat Vitrini
              </span>
              <span className="px-2 py-0.5 bg-steel-darkblue/90 backdrop-blur-xs text-white text-[10px] font-mono tracking-wider font-semibold">
                ASME & DIN
              </span>
            </div>

            {/* Bottom Overlay Badges */}
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between pointer-events-none">
              <div className="px-2.5 py-1 bg-industrial-950/90 backdrop-blur-xs border border-industrial-800 text-[10px] font-mono text-steel-blue">
                <span className="text-industrial-400 block text-[9px]">TOLERANS GÜVENCESİ</span>
                ±0.2 mm Hassasiyet
              </div>
              <div className="px-2.5 py-1 bg-industrial-950/90 backdrop-blur-xs border border-industrial-800 text-[10px] font-mono text-emerald-400 text-right">
                <span className="text-industrial-400 block text-[9px]">ÜRETİM MERKEZİ</span>
                İstanbul / Türkiye
              </div>
            </div>
          </div>

          {/* Metadata Block below photograph */}
          <div className="mt-4 pt-3 border-t border-industrial-850 grid grid-cols-2 gap-2 text-[11px] font-mono text-industrial-400">
            <div>
              <span className="text-industrial-500 block text-[10px]">İMALAT GAMI</span>
              <span className="text-industrial-200 truncate block">Spiral Sarımlı, Grafit, PTFE</span>
            </div>
            <div className="text-right">
              <span className="text-industrial-500 block text-[10px]">TESLİMAT / TERMİN</span>
              <span className="text-emerald-400 font-semibold">Hızlı Stok & İmalat</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* CAD Technical Drawing */}
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
              <span className="text-industrial-500 block text-[10px]">STANDART</span>
              <span className="text-industrial-200">ASME B16.20 CLASS 300</span>
            </div>
            <div className="text-right">
              <span className="text-industrial-500 block text-[10px]">DURUM</span>
              <span className="text-emerald-400 font-semibold">İmalata Hazır (CAD/CAM)</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
