"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { productCategories } from "@/data/products";
import { companyData } from "@/data/company";
import { 
  ArrowRightIcon, 
  RulerIcon, 
  ShieldCheckIcon, 
  WhatsappIcon,
  PhoneIcon
} from "@/components/icons/Icons";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Ürün Kategorileri Mega Menü"
      className="absolute top-full left-0 right-0 z-50 pt-2 animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseEnter={(e) => e.stopPropagation()}
    >
      {/* Outer Card with softened corners and deep drop shadow */}
      <div className="max-w-6xl mx-auto bg-industrial-950/98 backdrop-blur-xl border border-industrial-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 6 Product Categories (8 of 12 columns) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-industrial-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rust" />
                  <span className="text-xs font-mono font-bold tracking-wider text-industrial-300 uppercase">
                    Ürün Kategorileri & Sızdırmazlık Gamı
                  </span>
                </div>
                <Link
                  href="/urunler"
                  onClick={onClose}
                  className="text-xs font-mono font-medium text-rust hover:text-rust-light transition-colors flex items-center gap-1.5"
                >
                  <span>Tüm Ürün Kataloğu</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* 6 Categories Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {productCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/urunler?kategori=${category.id}`}
                    onClick={onClose}
                    className="group flex items-start gap-3.5 p-3 rounded-xl bg-industrial-900/60 hover:bg-industrial-850/90 border border-industrial-800/80 hover:border-rust/50 transition-all duration-200"
                  >
                    {/* Thumbnail */}
                    <div className="w-13 h-13 rounded-lg bg-industrial-950 border border-industrial-800 p-1 shrink-0 overflow-hidden relative group-hover:border-rust/40 transition-colors">
                      {category.image ? (
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          sizes="52px"
                          className="object-contain p-0.5 transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-industrial-600 text-[10px] font-mono uppercase">
                          {category.name.slice(0, 2)}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-rust transition-colors truncate">
                          {category.name}
                        </h4>
                        <ArrowRightIcon className="w-3.5 h-3.5 text-industrial-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                      </div>
                      <p className="text-[11px] text-industrial-400 line-clamp-1 mt-0.5 font-sans">
                        {category.shortDescription}
                      </p>
                      <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                        {category.highlights.slice(0, 2).map((hl, hIdx) => (
                          <span
                            key={hIdx}
                            className="text-[9px] font-mono px-1.5 py-0.5 bg-industrial-950/80 text-industrial-300 border border-industrial-800 rounded-md"
                          >
                            {hl}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Bar within categories: Standards reminder */}
            <div className="mt-5 pt-3 border-t border-industrial-850/80 flex items-center justify-between text-[11px] font-mono text-industrial-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-rust" />
                <span>ASME B16.20 • DIN EN 1514-1 • ASME B16.21 İmalat Normları</span>
              </span>
              <span className="text-emerald-400 font-medium">İstanbul İmalat Merkezi</span>
            </div>
          </div>

          {/* Right Column: Special Custom Mfg & Quick RFQ Card (4 of 12 columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            {/* Custom Cutting Callout */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-industrial-900 to-industrial-850 border border-rust/40 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-rust/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2 mb-2">
                <RulerIcon className="w-4 h-4 text-rust" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rust">
                  ÖZEL ÇİZİM & NUMUNE KESİMİ
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">
                Standart Dışı Özel Ölçü Conta
              </h4>
              <p className="text-xs text-industrial-300 leading-relaxed font-sans mb-3.5">
                DWG, DXF veya PDF çizimlerinizi iletin; CNC su jeti ve bıçak kesim tezgâhlarımızda kalıp beklemeden aynı gün üretelim.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href="/ozel-uretim"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white bg-rust hover:bg-rust-light px-3 py-2 rounded-lg transition-colors shadow-xs"
                >
                  <span>Özel Üretim</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/numune-talep"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-industrial-200 hover:text-white bg-industrial-950/80 hover:bg-industrial-800 px-3 py-2 rounded-lg transition-colors border border-industrial-800"
                >
                  <span>Numune İste</span>
                </Link>
                <Link
                  href="/bayi-basvuru"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-industrial-200 hover:text-white bg-industrial-950/80 hover:bg-industrial-800 px-3 py-2 rounded-lg transition-colors border border-industrial-800"
                >
                  <span>Bayilik</span>
                </Link>
              </div>
            </div>

            {/* Direct Support & Hotline Ribbon */}
            <div className="p-4 rounded-xl bg-industrial-900/80 border border-industrial-800 space-y-2.5">
              <span className="text-[10px] font-mono text-industrial-400 block uppercase font-medium">
                Mühendislik Danışma & Hızlı Teklif:
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${companyData.phone}`}
                  className="flex items-center justify-between p-2 rounded-lg bg-industrial-950/70 hover:bg-industrial-850 text-industrial-200 hover:text-white transition-colors border border-industrial-800/60"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <PhoneIcon className="w-3.5 h-3.5 text-rust" />
                    <span>Santral: {companyData.phoneFormatted}</span>
                  </div>
                  <span className="text-[10px] font-mono text-industrial-400">Ara</span>
                </a>
                <a
                  href={`https://wa.me/${companyData.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-emerald-950/30 hover:bg-emerald-950/50 text-emerald-300 hover:text-emerald-200 transition-colors border border-emerald-800/40"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <WhatsappIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Acil WhatsApp Teklif</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">Anında</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
