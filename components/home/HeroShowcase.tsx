"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FactoryIcon, RulerIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/icons/Icons";

interface SlideData {
  id: string;
  title: string;
  badge: string;
  image: string;
  shortLabel: string;
  metric1Label: string;
  metric1Val: string;
  metric2Label: string;
  metric2Val: string;
  cornerBadgeLeft: string;
  cornerBadgeRight: string;
  description: string;
}

const slides: SlideData[] = [
  {
    id: "spiral",
    title: "ASME B16.20 Spiral Sarımlı Flanş Contaları",
    badge: "ASME & DIN NORMU",
    image: "/images/hero/hero-slide-1.webp",
    shortLabel: "01 Spiral Sarım",
    metric1Label: "ÖLÇÜ GÜVENCESİ",
    metric1Val: "Mitutoyo Dijital Kumpas Kontrolü",
    metric2Label: "TOLERANS",
    metric2Val: "±0.2 mm Hassas İmalat",
    cornerBadgeLeft: "ASME B16.20 316L",
    cornerBadgeRight: "Class 150 - 2500",
    description: "316L paslanmaz çelik sarım şeritleri ve saf grafit dolgu ile yüksek basınç ve buhar hatlarına özel üretim."
  },
  {
    id: "flange",
    title: "Telli Grafit, Klingrit & PTFE Flanş Contaları",
    badge: "DIN EN 1514-1",
    image: "/images/hero/hero-slide-2.webp",
    shortLabel: "02 Levha Contalar",
    metric1Label: "MALZEME GAMI",
    metric1Val: "İç Yüksüklü Grafit, Aramid, PTFE",
    metric2Label: "İŞLEME ALANI",
    metric2Val: "CNC Bıçak & Pres Kesim",
    cornerBadgeLeft: "DIN & ASME",
    cornerBadgeRight: "Sıfır Kalıp Maliyeti",
    description: "Paslanmaz yüksüklü saf grafit, Klingrit aramid ve saf teflon flanş contalarının hassas ölçülü kesimi."
  },
  {
    id: "heavy",
    title: "Örgülü Salmastralar & Gemi Ambar Lastikleri",
    badge: "AĞIR SANAYİ & TERSANE",
    image: "/images/hero/hero-slide-3.webp",
    shortLabel: "03 Salmastra & Gemi",
    metric1Label: "BASINÇ & SICAKLIK",
    metric1Val: "PN10 - PN400 / -200°C ile +550°C",
    metric2Label: "SEKTÖR UYUMU",
    metric2Val: "Tersane, Pompa & Vana",
    cornerBadgeLeft: "YÜKSEK BASINÇ",
    cornerBadgeRight: "Tersane & Buhar",
    description: "Zebra Kevlar aramid örgülü salmastralar, saf PTFE salmastra ve sünger göbekli ambar kapak lastikleri."
  }
];

export function HeroShowcase() {
  const [activeTab, setActiveTab] = useState<"showcase" | "cad">("showcase");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides every 5.5 seconds unless paused
  useEffect(() => {
    if (activeTab !== "showcase" || isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [activeTab, isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const activeSlideData = slides[currentSlide];

  return (
    <div 
      className="w-full max-w-lg bg-industrial-950 border border-industrial-800 p-5 sm:p-6 shadow-2xl relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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
            <span>Üretim Vitrini ({slides.length})</span>
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
            {activeTab === "showcase" ? `ÜRÜN ${currentSlide + 1}/${slides.length}` : "TEKNİK DOKÜMAN"}
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === "showcase" ? (
        <div>
          {/* 4:3 Aspect Ratio Container Matching Native Photograph Dimensions */}
          <div className="aspect-[4/3] w-full bg-industrial-900 border border-industrial-800 relative overflow-hidden group">
            {/* Render all slides for instant transition without re-renders */}
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle bottom gradient protection for badges */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-industrial-950/85 via-industrial-950/40 to-transparent pointer-events-none z-10" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
                  <span className="px-2.5 py-1 bg-industrial-950/85 backdrop-blur-xs border border-industrial-700/60 text-industrial-100 text-[10px] font-mono tracking-wider uppercase font-semibold">
                    {slide.title}
                  </span>
                  <span className="px-2 py-0.5 bg-steel-darkblue/90 backdrop-blur-xs text-white text-[10px] font-mono tracking-wider font-semibold">
                    {slide.cornerBadgeLeft}
                  </span>
                </div>

                {/* Bottom Overlay Badges */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between pointer-events-none z-20">
                  <div className="px-2.5 py-1 bg-industrial-950/90 backdrop-blur-xs border border-industrial-800 text-[10px] font-mono text-steel-blue">
                    <span className="text-industrial-400 block text-[9px]">{slide.metric2Label}</span>
                    {slide.cornerBadgeRight}
                  </div>
                  <div className="px-2.5 py-1 bg-industrial-950/90 backdrop-blur-xs border border-industrial-800 text-[10px] font-mono text-emerald-400 text-right">
                    <span className="text-industrial-400 block text-[9px]">ÜRETİM MERKEZİ</span>
                    İstanbul / Türkiye
                  </div>
                </div>
              </div>
            ))}

            {/* Corner Crosshairs for Engineering Blueprint Aesthetic */}
            <div className="absolute top-2 left-2 font-mono text-[10px] text-white/50 pointer-events-none select-none z-20">
              +
            </div>
            <div className="absolute top-2 right-2 font-mono text-[10px] text-white/50 pointer-events-none select-none z-20">
              +
            </div>
            <div className="absolute bottom-2 left-2 font-mono text-[10px] text-white/50 pointer-events-none select-none z-20">
              +
            </div>
            <div className="absolute bottom-2 right-2 font-mono text-[10px] text-white/50 pointer-events-none select-none z-20">
              +
            </div>

            {/* Slider Navigation Arrows */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Önceki Görsel"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 p-2 bg-industrial-950/80 hover:bg-industrial-900 border border-industrial-700/60 text-white hover:text-steel-blue transition-all backdrop-blur-xs rounded-none opacity-85 hover:opacity-100 shadow-md"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Sonraki Görsel"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 p-2 bg-industrial-950/80 hover:bg-industrial-900 border border-industrial-700/60 text-white hover:text-steel-blue transition-all backdrop-blur-xs rounded-none opacity-85 hover:opacity-100 shadow-md"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Slide Indicator Selector Pills */}
          <div className="mt-3.5 grid grid-cols-3 gap-2">
            {slides.map((s, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`py-2 px-1 text-center font-mono text-[10px] border transition-all rounded-none ${
                    isActive
                      ? "bg-industrial-900 border-steel-blue text-steel-blue font-bold shadow-xs"
                      : "bg-industrial-950/60 border-industrial-850 text-industrial-400 hover:text-industrial-200 hover:border-industrial-700"
                  }`}
                >
                  <span className="block truncate">{s.shortLabel}</span>
                  {isActive && <span className="block h-0.5 bg-steel-blue mt-1" />}
                </button>
              );
            })}
          </div>

          {/* Synchronized Metadata Block below photograph */}
          <div className="mt-3 pt-3 border-t border-industrial-850 grid grid-cols-2 gap-2 text-[11px] font-mono text-industrial-400">
            <div>
              <span className="text-industrial-500 block text-[10px]">{activeSlideData.metric1Label}</span>
              <span className="text-industrial-200 truncate block font-medium">
                {activeSlideData.metric1Val}
              </span>
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
          <div className="aspect-[4/3] w-full bg-industrial-900 border border-industrial-850 flex items-center justify-center p-3 relative overflow-hidden">
            <svg viewBox="0 0 280 280" className="w-full h-full max-h-[280px] text-industrial-400" fill="none">
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
