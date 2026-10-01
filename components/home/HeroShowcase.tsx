"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FactoryIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/icons/Icons";

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides every 5.5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const activeSlideData = slides[currentSlide];

  return (
    <div 
      className="w-full max-w-lg bg-night-deep/95 bg-blueprint-dark border border-night-border p-5 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] relative backdrop-blur-md rounded-2xl overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Hairline Rust Accent */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-rust to-transparent opacity-80" />

      {/* CAD Corner Reticles */}
      <span className="absolute top-2 left-2.5 font-mono text-[9px] text-industrial-600 select-none pointer-events-none">+</span>
      <span className="absolute top-2 right-2.5 font-mono text-[9px] text-industrial-600 select-none pointer-events-none">+</span>
      <span className="absolute bottom-2 left-2.5 font-mono text-[9px] text-industrial-600 select-none pointer-events-none">+</span>
      <span className="absolute bottom-2 right-2.5 font-mono text-[9px] text-industrial-600 select-none pointer-events-none">+</span>

      {/* Console Header */}
      <div className="flex items-center justify-between border-b border-industrial-800 pb-3 mb-4 text-[11px] font-mono">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-industrial-900 border border-industrial-800 rounded-lg">
          <FactoryIcon className="w-3.5 h-3.5 text-rust" />
          <span className="text-white font-semibold tracking-wide">
            Ürün & Mühendislik Vitrini
          </span>
          <span className="text-industrial-500">•</span>
          <span className="text-industrial-400 text-[10px]">
            {slides.length} Temel Seri
          </span>
        </div>

        <div className="flex items-center gap-2 text-industrial-400 px-2.5 py-1.5 bg-industrial-900/60 border border-industrial-800/80 rounded-lg">
          <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? "bg-amber-400" : "bg-emerald-400 animate-pulse"}`} />
          <span className="text-[10px] text-industrial-300 font-medium">
            {isPaused ? "DURAKLATILDI" : `0${currentSlide + 1} / 0${slides.length}`}
          </span>
        </div>
      </div>

      {/* Main Photographic Area */}
      <div>
        {/* 4:3 Aspect Ratio Container Matching Native Photograph Dimensions */}
        <div className="aspect-[4/3] w-full bg-industrial-900 border border-industrial-800 relative overflow-hidden group shadow-inner rounded-xl">
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
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-industrial-950/95 via-industrial-950/50 to-transparent pointer-events-none z-10" />

              {/* Top Badge */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
                <span className="px-2.5 py-1 bg-industrial-950/90 backdrop-blur-xs border border-industrial-700/80 text-industrial-100 text-[10px] font-mono tracking-wider uppercase font-semibold rounded-md shadow-xs">
                  {slide.title}
                </span>
                <span className="px-2.5 py-1 bg-rust backdrop-blur-xs text-white text-[10px] font-mono tracking-wider font-semibold rounded-md shadow-xs">
                  {slide.cornerBadgeLeft}
                </span>
              </div>

              {/* Bottom Overlay Badges */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between pointer-events-none z-20">
                <div className="px-2.5 py-1 bg-industrial-950/90 backdrop-blur-xs border border-industrial-800 text-[10px] font-mono text-rust rounded-md shadow-xs">
                  <span className="text-industrial-400 block text-[9px]">{slide.metric2Label}</span>
                  {slide.cornerBadgeRight}
                </div>
                <div className="px-2.5 py-1 bg-industrial-950/90 backdrop-blur-xs border border-industrial-800 text-[10px] font-mono text-emerald-400 text-right rounded-md shadow-xs">
                  <span className="text-industrial-400 block text-[9px]">KALİTE GÜVENCESİ</span>
                  DIN & ASME Normu
                </div>
              </div>
            </div>
          ))}

          {/* Corner Crosshairs for Engineering Blueprint Aesthetic */}
          <div className="absolute top-2.5 left-2.5 font-mono text-[10px] text-white/40 pointer-events-none select-none z-20">
            +
          </div>
          <div className="absolute top-2.5 right-2.5 font-mono text-[10px] text-white/40 pointer-events-none select-none z-20">
            +
          </div>
          <div className="absolute bottom-2.5 left-2.5 font-mono text-[10px] text-white/40 pointer-events-none select-none z-20">
            +
          </div>
          <div className="absolute bottom-2.5 right-2.5 font-mono text-[10px] text-white/40 pointer-events-none select-none z-20">
            +
          </div>

          {/* Slider Navigation Arrows (Machined Precision Controls) */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Önceki Görsel"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 p-2 bg-night-surface/90 hover:bg-rust-forge border border-night-border hover:border-rust text-white transition-all backdrop-blur-xs rounded-lg opacity-85 hover:opacity-100 shadow-inner-bevel cursor-pointer"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Sonraki Görsel"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 p-2 bg-night-surface/90 hover:bg-rust-forge border border-night-border hover:border-rust text-white transition-all backdrop-blur-xs rounded-lg opacity-85 hover:opacity-100 shadow-inner-bevel cursor-pointer"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Indicator Selector Tabs */}
        <div className="mt-3.5 grid grid-cols-3 gap-2">
          {slides.map((s, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`py-2 px-2 text-center font-mono text-[10px] border transition-all rounded-lg cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-rust-hot to-rust-forge border-rust-ember text-white font-bold shadow-glow-rust-sm"
                    : "bg-night-surface/80 border-night-border text-industrial-400 hover:text-industrial-200 hover:border-industrial-700"
                }`}
              >
                <span className="block truncate">{s.shortLabel}</span>
                {isActive && <span className="block h-0.5 bg-rust-ember mt-1.5 rounded-full" />}
              </button>
            );
          })}
        </div>

        {/* Synchronized Metadata Block below photograph */}
        <div className="mt-3.5 pt-3 border-t border-industrial-850 grid grid-cols-2 gap-2 text-[11px] font-mono text-industrial-400">
          <div>
            <span className="text-industrial-500 block text-[10px]">{activeSlideData.metric1Label}</span>
            <span className="text-industrial-200 truncate block font-medium">
              {activeSlideData.metric1Val}
            </span>
          </div>
          <div className="text-right">
            <span className="text-industrial-500 block text-[10px]">TESLİMAT / TERMİN</span>
            <span className="text-emerald-400 font-semibold">Hızlı Stok & Sevkiyat</span>
          </div>
        </div>
      </div>
    </div>
  );
}
