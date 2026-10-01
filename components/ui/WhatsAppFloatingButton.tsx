"use client";

import React, { useState } from "react";
import { companyData } from "@/data/company";
import { WhatsappIcon } from "@/components/icons/Icons";
import { trackWhatsAppClick } from "@/lib/analytics";

interface WhatsAppFloatingButtonProps {
  message?: string;
}

export function WhatsAppFloatingButton({
  message = "Merhaba Emek Conta, endüstriyel conta ve sızdırmazlık ürünleri hakkında teknik bilgi ve fiyat teklifi almak istiyorum.",
}: WhatsAppFloatingButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const cleanPhone = companyData.whatsapp.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

  return (
    <aside
      aria-label="WhatsApp Canlı Destek ve Teklif Hattı"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive Tooltip Card (Desktop) */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 bg-night text-white text-xs font-mono border border-industrial-700 shadow-xl rounded-lg transition-all duration-200 pointer-events-none ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2"
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <div className="flex flex-col text-left">
          <span className="font-bold text-emerald-400 text-[11px] leading-tight">
            WhatsApp RFQ Hattı
          </span>
          <span className="text-[10px] text-industrial-400">
            Teknik çizim & hızlı fiyat
          </span>
        </div>
      </div>

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        onClick={() => trackWhatsAppClick("floating_button")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geçin ve hızlı teklif alın"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        {/* Pulse ring animation */}
        <span className="absolute -inset-1 bg-[#25D366] rounded-2xl opacity-30 animate-pulse pointer-events-none"></span>

        {/* WhatsApp Icon */}
        <WhatsappIcon className="w-7 h-7 relative z-10" />

        {/* Online Status Dot */}
        <span className="absolute top-2 right-2 w-3 h-3 bg-white border-2 border-[#25D366] rounded-full z-10">
          <span className="block w-full h-full bg-emerald-500 rounded-full"></span>
        </span>
      </a>
    </aside>
  );
}
