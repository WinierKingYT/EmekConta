"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavItems, companyData } from "@/data/company";
import {
  PhoneIcon,
  WhatsappIcon,
  MailIcon,
  MenuIcon,
  ChevronDownIcon,
  DocumentTextIcon,
} from "@/components/icons/Icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";
import { MegaMenu } from "./MegaMenu";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useRfqCart } from "@/lib/cart-context";
import { i18nNav, i18nDict } from "@/lib/i18n";

export function Header() {
  const { itemCount, openCart } = useRfqCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const navItems = isEn ? i18nNav.en : i18nNav.tr;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on page change
  useEffect(() => {
    setMegaMenuOpen(false);
  }, [pathname]);

  // Close mega menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleProductsMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleProductsMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 220);
  };

  return (
    <>
      {/* Top Utility Bar (B2B Quick Contact) */}
      <div className="hidden lg:block bg-industrial-950 text-industrial-300 text-xs border-b border-industrial-850">
        <Container className="flex items-center justify-between py-1.5">
          <div className="flex items-center gap-2.5 text-[11px] font-mono">
            <span className="text-industrial-300 font-medium">
              {isEn
                ? "Industrial Sealing Solutions Since 1997"
                : "1997'den Beri Endüstriyel Sızdırmazlık Çözümleri"}
            </span>
            <span className="text-industrial-600">•</span>
            <span className="text-industrial-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rust-ember" />
              {isEn ? "ASME B16.20 & DIN EN 1514 Mfg" : "ASME B16.20 & DIN EN 1514 İmalat"}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${companyData.phone}`}
              className="flex items-center gap-1.5 text-industrial-300 hover:text-white transition-colors group"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-rust-ember transition-transform group-hover:scale-110" />
              <span className="font-mono text-xs">{companyData.phoneFormatted}</span>
            </a>
            <a
              href={`https://wa.me/${companyData.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-industrial-300 hover:text-white transition-colors group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <WhatsappIcon className="w-3.5 h-3.5 text-emerald-400 transition-transform group-hover:scale-110" />
              <span className="font-mono text-xs">WhatsApp RFQ</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-night/95 backdrop-blur-md shadow-xl border-b border-night-border py-2.5"
            : "bg-night border-b border-night-border py-3.5"
        }`}
      >
        <Container className="flex items-center justify-between relative">
          {/* Logo */}
          <Link
            href={isEn ? "/en" : "/"}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-rust rounded-lg p-1 -m-1 shrink-0"
            aria-label={isEn ? "Emek Gaskets Home" : "Emek Conta Ana Sayfa"}
          >
            {/* Precision geometric emblem */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-night-surface border-2 border-rust/70 group-hover:border-rust group-hover:shadow-[0_0_12px_rgba(207,75,20,0.45)] transition-all flex items-center justify-center shrink-0 shadow-inner-bevel relative overflow-hidden rounded-lg">
              {/* Subtle top-right metallic corner accent */}
              <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-rust/40 rotate-45 transform origin-top-right" />
              <div className="flex items-center font-mono font-black text-sm tracking-tighter">
                <span className="text-rust-ember text-base mr-0.5">E</span>
                <span className="text-white text-base">C</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-white leading-none">
                EMEK CONTA
              </span>
              <span className="text-[9px] font-mono tracking-wider text-industrial-400 uppercase mt-1 leading-none font-medium">
                {isEn ? "Sealing Solutions • Est. 1997" : "Sızdırmazlık Sanayi • Est. 1997"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isProductsTab = item.href === "/urunler" || item.href === "/en/products";
              const isActive =
                pathname === item.href ||
                (isProductsTab && (pathname.startsWith("/urunler") || pathname.startsWith("/en/products")));

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={isProductsTab ? handleProductsMouseEnter : undefined}
                  onMouseLeave={isProductsTab ? handleProductsMouseLeave : undefined}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (isProductsTab && megaMenuOpen) {
                        setMegaMenuOpen(false);
                      }
                    }}
                    className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-200 relative rounded-lg flex items-center gap-1.5 ${
                      isActive || (isProductsTab && megaMenuOpen)
                        ? "text-white font-bold bg-white/10"
                        : "text-industrial-300 hover:text-white hover:bg-white/5"
                    }`}
                    aria-expanded={isProductsTab ? megaMenuOpen : undefined}
                    aria-haspopup={isProductsTab ? "true" : undefined}
                  >
                    <span>{item.label}</span>
                    {isProductsTab && (
                      <ChevronDownIcon
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          megaMenuOpen ? "rotate-180 text-rust" : "text-industrial-400 group-hover:text-white"
                        }`}
                      />
                    )}
                    {item.badge && (
                      <span className="text-[9px] font-mono px-1.5 py-0.5 bg-rust/20 text-rust-light border border-rust/40 uppercase font-semibold rounded-md">
                        {item.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-gradient-to-r from-rust to-rust-ember rounded-full shadow-[0_0_8px_rgba(207,75,20,0.6)]" />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Action & Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* RFQ Cart Trigger */}
            <button
              type="button"
              onClick={openCart}
              aria-label={`Teklif Sepeti (${itemCount} ürün)`}
              className="relative px-2.5 sm:px-3 py-1.5 bg-night-surface hover:bg-industrial-850 text-industrial-200 hover:text-white border border-night-border hover:border-rust/40 transition-all text-xs font-mono font-medium rounded-lg flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-inner-bevel"
            >
              <DocumentTextIcon className="w-4 h-4 text-rust-ember" />
              <span className="hidden xl:inline">{isEn ? i18nDict.en.quoteCart : i18nDict.tr.quoteCart}</span>
              <span className="px-1.5 py-0.2 bg-gradient-to-r from-rust-hot to-rust text-white text-[10px] font-bold rounded-md min-w-[18px] text-center shadow-xs">
                {itemCount}
              </span>
            </button>

            <Button
              href={isEn ? "/en/contact" : "/teklif-iste"}
              variant="accent"
              size="sm"
              className="hidden sm:inline-flex items-center gap-2 shadow-lg"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse shrink-0" />
              <span className="tracking-wide uppercase text-[11px] font-bold">
                {isEn ? i18nDict.en.requestQuote : i18nDict.tr.requestQuote}
              </span>
              <span className="ml-0.5 px-1 py-0.5 bg-black/25 border border-white/20 rounded text-[10px] font-mono group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </Button>

            <a
              href={`tel:${companyData.phone}`}
              className="sm:hidden p-2 text-rust hover:text-white focus:outline-none rounded-lg"
              aria-label="Telefonla Ara"
            >
              <PhoneIcon className="w-5 h-5" />
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-industrial-300 hover:text-white hover:bg-industrial-800 transition-colors focus:outline-none focus:ring-2 focus:ring-rust rounded-lg"
              aria-label="Menüyü Aç"
              aria-expanded={mobileMenuOpen}
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </Container>

        {/* Desktop Mega Menu Dropdown */}
        <div
          onMouseEnter={handleProductsMouseEnter}
          onMouseLeave={handleProductsMouseLeave}
        >
          <MegaMenu
            isOpen={megaMenuOpen}
            onClose={() => setMegaMenuOpen(false)}
          />
        </div>
      </header>

      {/* Accessible Mobile Nav Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
