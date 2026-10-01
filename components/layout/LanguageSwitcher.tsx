"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  // Determine target URL when toggling
  const getTargetUrl = (targetLang: "tr" | "en") => {
    if (targetLang === "en") {
      if (isEnglish) return pathname;
      if (pathname === "/") return "/en";
      if (pathname.startsWith("/urunler")) {
        const slug = pathname.replace("/urunler/", "");
        return slug && slug !== "/urunler" ? `/en/products/${slug}` : "/en/products";
      }
      if (pathname.startsWith("/ihracat")) return "/en/export";
      if (pathname.startsWith("/teklif-iste")) return "/en/contact";
      return "/en";
    } else {
      if (!isEnglish) return pathname;
      if (pathname === "/en") return "/";
      if (pathname.startsWith("/en/products")) {
        const slug = pathname.replace("/en/products/", "");
        return slug && slug !== "/en/products" ? `/urunler/${slug}` : "/urunler";
      }
      if (pathname.startsWith("/en/export")) return "/ihracat";
      if (pathname.startsWith("/en/contact")) return "/teklif-iste";
      return "/";
    }
  };

  return (
    <div
      className="inline-flex items-center p-0.5 bg-industrial-900 border border-industrial-800 rounded-lg text-[11px] font-mono font-bold"
      aria-label="Dil Seçimi / Language Switcher"
    >
      <Link
        href={getTargetUrl("tr")}
        className={`px-2 py-1 rounded-md transition-all ${
          !isEnglish
            ? "bg-rust text-white shadow-xs"
            : "text-industrial-400 hover:text-white"
        }`}
        aria-current={!isEnglish ? "page" : undefined}
      >
        TR
      </Link>
      <Link
        href={getTargetUrl("en")}
        className={`px-2 py-1 rounded-md transition-all ${
          isEnglish
            ? "bg-rust text-white shadow-xs"
            : "text-industrial-400 hover:text-white"
        }`}
        aria-current={isEnglish ? "page" : undefined}
      >
        EN
      </Link>
    </div>
  );
}
