"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyData } from "@/data/company";
import { PhoneIcon, WhatsappIcon, MailIcon, XIcon, ArrowRightIcon } from "@/components/icons/Icons";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { i18nNav, i18nDict } from "@/lib/i18n";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const navItems = isEn ? i18nNav.en : i18nNav.tr;

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Close when pathname changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobil Menü">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-industrial-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-industrial-900 text-white shadow-2xl p-6 flex flex-col justify-between border-l border-industrial-800 animate-in slide-in-from-right duration-200">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-industrial-800">
            <div>
              <span className="font-mono text-xs tracking-widest text-industrial-400 block uppercase">
                {isEn ? "Menu" : "Menü"}
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                EMEK CONTA
              </span>
            </div>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-industrial-400 hover:text-white hover:bg-industrial-800 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-rust"
                aria-label={isEn ? "Close Menu" : "Menüyü Kapat"}
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="mt-6 flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3.5 py-3 text-base font-medium transition-colors border-l-2 rounded-md ${
                    isActive
                      ? "border-rust bg-industrial-850 text-white font-semibold"
                      : "border-transparent text-industrial-300 hover:text-white hover:bg-industrial-850/60"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge ? (
                    <Badge variant="accent">{item.badge}</Badge>
                  ) : (
                    <ArrowRightIcon className="w-4 h-4 opacity-40" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Quick CTA and Contacts */}
        <div className="pt-6 border-t border-industrial-800 space-y-4">
          <Button
            href={isEn ? "/en/contact" : "/teklif-iste"}
            variant="accent"
            size="lg"
            className="w-full text-center"
          >
            {isEn ? i18nDict.en.requestQuote : i18nDict.tr.requestQuote}
          </Button>

          <div className="space-y-2 pt-2 text-sm text-industrial-300">
            <a
              href={`tel:${companyData.phone}`}
              className="flex items-center gap-3 p-2.5 bg-industrial-850 hover:bg-industrial-800 text-industrial-200 transition-colors rounded-md"
            >
              <PhoneIcon className="w-4 h-4 text-rust shrink-0" />
              <span className="font-mono text-xs">{companyData.phoneFormatted}</span>
            </a>

            <a
              href={`https://wa.me/${companyData.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 bg-industrial-850 hover:bg-industrial-800 text-industrial-200 transition-colors rounded-md"
            >
              <WhatsappIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-mono text-xs">WhatsApp Hızlı Destek</span>
            </a>

            <a
              href={`mailto:${companyData.quoteEmail}`}
              className="flex items-center gap-3 p-2.5 bg-industrial-850 hover:bg-industrial-800 text-industrial-200 transition-colors rounded-md"
            >
              <MailIcon className="w-4 h-4 text-rust shrink-0" />
              <span className="font-mono text-xs">{companyData.quoteEmail}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
