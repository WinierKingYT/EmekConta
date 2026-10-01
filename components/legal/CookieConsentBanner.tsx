"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheckIcon, XIcon, CheckCircleIcon } from "@/components/icons/Icons";
import { updateAnalyticsConsent, CookieConsentStatus } from "@/lib/analytics";

const COOKIE_STORAGE_KEY = "emek_cookie_consent_v1";

export function CookieConsentBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Cookie preference granular state
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (!stored) {
        // Show after a brief non-intrusive delay (1000ms)
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        // Apply existing consent on page load
        updateAnalyticsConsent(stored as CookieConsentStatus);
      }
    } catch {
      // LocalStorage access may fail in private mode, fallback gracefully
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, "all");
      updateAnalyticsConsent("all");
    } catch {}
    setIsOpen(false);
  };

  const handleAcceptEssential = () => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, "essential");
      updateAnalyticsConsent("essential");
    } catch {}
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    const status: CookieConsentStatus = analyticsAllowed ? "all" : "essential";
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, status);
      updateAnalyticsConsent(status);
    } catch {}
    setIsOpen(false);
  };

  if (!mounted || !isOpen) return null;

  return (
    <aside
      aria-label="Çerez ve Gizlilik Bildirimi"
      role="dialog"
      aria-modal="false"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-xl z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-industrial-950/95 backdrop-blur-md border border-industrial-800 text-white rounded-xl shadow-2xl p-5 sm:p-6 text-xs font-sans">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rust/20 border border-rust/40 flex items-center justify-center text-rust shrink-0">
              <ShieldCheckIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white tracking-tight">
                Gizlilik ve Çerez Tercihleriniz
              </h3>
              <span className="text-[10px] font-mono text-industrial-400">
                6698 Sayılı KVKK Uyarınca
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleAcceptEssential}
            className="text-industrial-400 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Kapat ve Yalnızca Zorunlu Çerezleri Kabul Et"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <p className="text-industrial-300 leading-relaxed mb-4 text-xs">
          Emek Conta olarak, B2B teklif taleplerinizi eksiksiz işlemek, teknik kataloglarımızı optimize etmek ve site performansını ölçümlemek amacıyla birinci ve üçüncü taraf çerezler kullanmaktayız. Detaylı bilgi için{" "}
          <Link href="/kvkk" className="text-rust hover:underline font-semibold">
            KVKK Aydınlatma Metni
          </Link>{" "}
          ve{" "}
          <Link href="/cerez-politikasi" className="text-rust hover:underline font-semibold">
            Çerez Politikamızı
          </Link>{" "}
          inceleyebilirsiniz.
        </p>

        {/* Granular Settings Expandable Panel */}
        {showDetails && (
          <div className="mb-4 p-3.5 bg-industrial-900 border border-industrial-800 rounded-lg space-y-3 animate-in fade-in duration-200">
            {/* Essential Cookies */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">Zorunlu Çerezler</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 bg-industrial-800 text-industrial-400 rounded-md font-bold">
                    HER ZAMAN AKTİF
                  </span>
                </div>
                <p className="text-[11px] text-industrial-400 mt-0.5 leading-snug">
                  Web sitesinin temel işlevleri, güvenlik protokolleri ve teklif sepetinin hafızada tutulması için şarttır.
                </p>
              </div>
              <input
                type="checkbox"
                checked
                disabled
                className="mt-1 h-4 w-4 rounded accent-rust cursor-not-allowed opacity-80"
                aria-label="Zorunlu Çerezler (Kapatılamaz)"
              />
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between gap-3 pt-2.5 border-t border-industrial-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">Analitik ve Performans Çerezleri</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-md font-bold">
                    İSTEĞE BAĞLI
                  </span>
                </div>
                <p className="text-[11px] text-industrial-400 mt-0.5 leading-snug">
                  Anonim trafik analizi (Google Analytics) ve sayfa etkileşim haritaları (Microsoft Clarity) için kullanılır. Reklam amaçlı profil çıkarma yapılmaz.
                </p>
              </div>
              <input
                type="checkbox"
                id="analytics_toggle"
                checked={analyticsAllowed}
                onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                className="mt-1 h-4 w-4 rounded accent-rust cursor-pointer"
                aria-label="Analitik Çerezleri Aç/Kapat"
              />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-industrial-850">
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="text-[11px] font-mono text-industrial-400 hover:text-white transition-colors underline underline-offset-2"
          >
            {showDetails ? "Tercihleri Gizle ▲" : "Çerez Ayarları & Detaylar ▼"}
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {showDetails ? (
              <button
                type="button"
                onClick={handleSavePreferences}
                className="px-3.5 py-2 bg-industrial-800 hover:bg-industrial-700 text-white font-medium rounded-lg transition-colors text-xs font-mono"
              >
                Seçimi Kaydet
              </button>
            ) : (
              <button
                type="button"
                onClick={handleAcceptEssential}
                className="px-3.5 py-2 bg-industrial-900 hover:bg-industrial-800 text-industrial-300 hover:text-white border border-industrial-750 font-medium rounded-lg transition-colors text-xs"
              >
                Yalnızca Zorunlu
              </button>
            )}

            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-rust hover:bg-rust-dark text-white font-semibold rounded-lg shadow-sm hover:shadow-rust/20 transition-all text-xs flex items-center gap-1.5"
            >
              <CheckCircleIcon className="w-3.5 h-3.5" />
              <span>Tümünü Kabul Et</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
