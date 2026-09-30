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
} from "@/components/icons/Icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";
import { MegaMenu } from "./MegaMenu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();
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
      <div className="hidden md:block bg-industrial-950 text-industrial-300 text-xs border-b border-industrial-850">
        <Container className="flex items-center justify-between py-2">
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span className="text-industrial-300 font-medium">
              1997'den Beri Sanayi & Denizcilik Sızdırmazlık Çözümleri
            </span>
            <span className="text-industrial-700">|</span>
            <span className="text-industrial-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rust" />
              DIN EN 1514 & ASME B16.20 İmalat
            </span>
            <span className="text-industrial-700">|</span>
            <span className="text-industrial-400">
              İstanbul Fabrika & Karaköy Şube
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${companyData.phone}`}
              className="flex items-center gap-1.5 text-industrial-300 hover:text-white transition-colors group"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-rust transition-transform group-hover:scale-110" />
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
              <span>WhatsApp RFQ</span>
            </a>
            <a
              href={`mailto:${companyData.quoteEmail}`}
              className="flex items-center gap-1.5 text-industrial-300 hover:text-white transition-colors group"
            >
              <MailIcon className="w-3.5 h-3.5 text-rust transition-transform group-hover:scale-110" />
              <span>{companyData.quoteEmail}</span>
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
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-rust rounded-lg p-1 -m-1"
            aria-label="Emek Conta Ana Sayfa"
          >
            {/* Precision geometric emblem */}
            <div className="w-10 h-10 bg-night-light border-2 border-rust/50 group-hover:border-rust transition-all flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden rounded-lg">
              {/* Subtle top-right metallic corner accent */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-rust/30 rotate-45 transform origin-top-right" />
              <div className="flex items-center font-mono font-black text-sm tracking-tighter">
                <span className="text-rust text-base mr-0.5">E</span>
                <span className="text-white text-base">C</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-black tracking-tight text-white leading-none">
                  EMEK CONTA
                </span>
                <span className="hidden sm:inline-block text-[9px] font-mono px-1.5 py-0.5 bg-industrial-800 text-rust border border-rust/30 font-bold uppercase tracking-wider rounded-md">
                  EST. 1997
                </span>
              </div>
              <span className="text-[9.5px] sm:text-[10px] font-mono tracking-widest text-industrial-400 uppercase mt-1 leading-none font-medium">
                Endüstriyel Sızdırmazlık San. ve Tic.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href || (item.href === "/urunler" && pathname.startsWith("/urunler"));
              const isProductsTab = item.href === "/urunler";

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
                    className={`px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 relative rounded-lg flex items-center gap-1.5 ${
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
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-rust rounded-full shadow-xs" />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Action & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Button
              href="/teklif-iste"
              variant="accent"
              size="sm"
              className="hidden sm:inline-flex shadow-md hover:shadow-brick/20 transition-all font-semibold rounded-lg"
            >
              <span>Teklif İste</span>
              <span className="ml-1 text-xs opacity-80">→</span>
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
