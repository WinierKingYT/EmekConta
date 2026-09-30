"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavItems, companyData } from "@/data/company";
import {
  PhoneIcon,
  WhatsappIcon,
  MailIcon,
  MenuIcon,
  RulerIcon,
} from "@/components/icons/Icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar (B2B Quick Contact) */}
      <div className="hidden md:block bg-industrial-950 text-industrial-300 text-xs border-b border-industrial-850">
        <Container className="flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <span className="font-mono text-industrial-400">
              1997'den Beri Sanayi & Denizcilik Sızdırmazlık Çözümleri
            </span>
            <span className="text-industrial-600">|</span>
            <span className="text-industrial-400">
              İstanbul Fabrika & Karaköy Şube
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${companyData.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-rust" />
              <span className="font-mono">{companyData.phoneFormatted}</span>
            </a>
            <a
              href={`https://wa.me/${companyData.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <WhatsappIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Destek</span>
            </a>
            <a
              href={`mailto:${companyData.quoteEmail}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MailIcon className="w-3.5 h-3.5 text-rust" />
              <span>{companyData.quoteEmail}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-night/95 backdrop-blur-md shadow-md border-b border-night-border py-2.5"
            : "bg-night border-b border-night-border py-3.5"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-rust p-1 -m-1"
            aria-label="Emek Conta Ana Sayfa"
          >
            {/* Geometric industrial mark */}
            <div className="w-9 h-9 bg-night-light border border-rust/40 flex items-center justify-center shrink-0 text-white font-mono font-bold text-sm tracking-tighter group-hover:border-rust transition-colors">
              <span className="text-rust font-extrabold mr-0.5">E</span>
              <span className="text-white">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-none">
                EMEK CONTA
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-industrial-400 uppercase mt-1 leading-none">
                Endüstriyel Sızdırmazlık
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-colors relative ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-industrial-300 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {item.badge && (
                      <span className="text-[10px] font-mono px-1 py-0.2 bg-rust/20 text-rust-light border border-rust/40 uppercase">
                        {item.badge}
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-rust" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Button
              href="/teklif-iste"
              variant="accent"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Teklif İste
            </Button>

            <a
              href={`tel:${companyData.phone}`}
              className="sm:hidden p-2 text-rust hover:text-white focus:outline-none"
              aria-label="Telefonla Ara"
            >
              <PhoneIcon className="w-5 h-5" />
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-industrial-300 hover:text-white hover:bg-industrial-800 transition-colors focus:outline-none focus:ring-2 focus:ring-rust"
              aria-label="Menüyü Aç"
              aria-expanded={mobileMenuOpen}
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Accessible Mobile Nav Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
