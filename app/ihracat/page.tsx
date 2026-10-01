import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheckIcon,
  FactoryIcon,
  ClockIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  WhatsappIcon,
} from "@/components/icons/Icons";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Uluslararası Standartlar & İhracat | Emek Conta ASME & DIN Conta",
  description:
    "ASME B16.20, ASME B16.21, DIN EN 1514 ve ISO normlarında sertifikalı endüstriyel conta imalatı. 25+ ülkeye EN 10204 3.1 MTR sertifikalı global sevkiyat.",
  alternates: {
    canonical: "https://emekconta.com/ihracat",
    languages: {
      "tr-TR": "https://emekconta.com/ihracat",
      "en-US": "https://emekconta.com/en/export",
    },
  },
  openGraph: {
    title: "Emek Conta Global İhracat & Uluslararası Standartlar",
    description:
      "Tersaneler, rafineriler ve vana imalatçıları için dünya standartlarında Türk conta üreticisi.",
    url: "https://emekconta.com/ihracat",
  },
};

const STANDARDS_GRID = [
  {
    standard: "ASME B16.20",
    title: "Metalik ve Spiral Sarımlı Flanş Contaları",
    description:
      "Class 150 – Class 2500 arası ASME B16.5 ve B16.47 Seri A/B flanşlar için iç/dış ringli spiral sarımlı conta imalatı.",
    scope: "Refinery, Petrochemical, Offshore & High-Pressure Steam",
  },
  {
    standard: "DIN EN 1514-2",
    title: "Avrupa Normu Spiral Sarımlı Contalar",
    description:
      "PN 10 – PN 400 normundaki DIN/EN flanş bağlantıları için grafit ve PTFE dolgulu spiral sarımlı sızdırmazlık elemanları.",
    scope: "European Industrial Plant Engineering & Power Plants",
  },
  {
    standard: "ASME B16.21",
    title: "Ametal Düz Flanş Contaları",
    description:
      "Klingrit, aramid elyaf, saf esnek grafit ve PTFE malzemelerden ASME flanş normuna uygun CNC hassas kesim contalar.",
    scope: "Pipelines, Utilities, Low-Pressure Steam & Cooling Lines",
  },
  {
    standard: "DIN EN 1514-1 & DIN 2690",
    title: "DIN Ametal Düz Flanş Contaları",
    description:
      "PN 6 – PN 40 arası DIN normu flanşlar için asbestsiz klingrit, grafit ve elastomer conta imalatı.",
    scope: "Chemical Processing, Shipbuilding & Water Works",
  },
  {
    standard: "EN 10204 3.1",
    title: "Malzeme Muayene ve Test Sertifikasyonu (MTR)",
    description:
      "Kullanılan paslanmaz çelik şeritler (AISI 316L, 304, vb.) ve grafit dolgular için kimyasal analiz ve çekme test sertifikaları.",
    scope: "Total Traceability & Quality Assurance Guarantee",
  },
  {
    standard: "ISPM 15 & IACS",
    title: "Uluslararası İhracat ve Denizcilik Paketleme Standardı",
    description:
      "Isıl işlemli ahşap sandık ve fümigasyonlu Euro palet ambalajlama; deniz nakliyesi için korozyon önleyici vakumlu paketleme.",
    scope: "Safe Worldwide Logistics via Air & Sea Freight",
  },
];

const EXPORT_FACTS = [
  { value: "25+", label: "İhracat Yapılan Ülke" },
  { value: "%100", label: "Norm & Tolerans Uyumu" },
  { value: "EN 10204 3.1", label: "MTR Sertifikasyon" },
  { value: "48-72 Saat", label: "Express Global Kargo" },
];

export default function ExportPage() {
  return (
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <Container>
        <Breadcrumb
          items={[{ label: "Uluslararası Standartlar & İhracat" }]}
          className="mb-6"
        />

        {/* Hero Section */}
        <div className="bg-night text-white border border-industrial-800 rounded-xl p-8 sm:p-14 mb-12 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rust/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-2.5 py-1 bg-rust text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-md">
                KÜRESEL İMALAT & İHRACAT
              </span>
              <span className="px-2.5 py-1 bg-industrial-800 text-industrial-300 text-[11px] font-mono border border-industrial-700 rounded-md">
                ASME / DIN / EN / ISO
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Uluslararası Standartlarda Conta İmalatı & Global Lojistik
            </h1>

            <p className="mt-5 text-base sm:text-lg text-industrial-300 leading-relaxed">
              İstanbul merkezli tesislerimizde, dünya denizcilik filolarına, petrokimya rafinerilerine ve enerji santrallerine ASME ve DIN normlarında sızdırmazlık ürünleri üretiyoruz. Tüm ihracat siparişlerimiz EN 10204 3.1 sertifikası ve ISPM 15 ihracat ambalajıyla sevk edilir.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/teklif-iste" variant="accent" size="lg" className="rounded-lg font-semibold">
                <span>İhracat Teklifi Talep Et</span>
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>

              <Link
                href="/en/export"
                className="inline-flex items-center gap-2 px-5 py-3 bg-industrial-800 hover:bg-industrial-700 text-white text-sm font-mono font-bold rounded-lg border border-industrial-700 transition-colors"
              >
                <span>Switch to English Version</span>
                <span className="text-rust">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Export Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 font-mono">
          {EXPORT_FACTS.map((fact, idx) => (
            <div
              key={idx}
              className="bg-white border border-industrial-200 p-6 rounded-xl text-center shadow-xs"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-rust mb-1">
                {fact.value}
              </div>
              <div className="text-xs text-industrial-600 font-medium uppercase tracking-wider">
                {fact.label}
              </div>
            </div>
          ))}
        </div>

        {/* Standards Grid */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-rust uppercase tracking-widest block mb-2">
              MÜHENDİSLİK UYUMLULUĞU
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-night tracking-tight">
              Tam Kapsamlı Standartlar ve Kalite Normları
            </h2>
            <p className="mt-3 text-sm text-industrial-600">
              Üretim hatlarımızda üretilen her conta, ilgili uluslararası normun ölçüsel toleranslarına, sarım sıklığına ve malzeme saflığına harfiyen uygun olarak imal edilir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STANDARDS_GRID.map((std, idx) => (
              <div
                key={idx}
                className="bg-white border border-industrial-200 p-6 rounded-xl hover:border-rust transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-rust bg-rust/10 px-2 py-0.5 rounded">
                      {std.standard}
                    </span>
                    <CheckCircleIcon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-base font-bold text-night mb-2">
                    {std.title}
                  </h3>
                  <p className="text-xs text-industrial-600 leading-relaxed mb-4">
                    {std.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-industrial-100 text-[11px] font-mono text-industrial-400">
                  {std.scope}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Logistics and Delivery Box */}
        <div className="bg-white border border-industrial-200 rounded-xl p-8 sm:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-mono font-bold text-rust uppercase tracking-widest block mb-2">
                LOJİSTİK & TESLİMAT ALTYAPISI
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-night tracking-tight mb-4">
                İstanbul'dan Dünyanın Tüm Limanlarına ve Tesislerine
              </h2>
              <p className="text-sm text-industrial-600 leading-relaxed mb-6">
                Stratejik coğrafi konumumuz sayesinde, Avrupa, Orta Doğu, Kuzey Afrika ve Karadeniz havzasına hızlı transit süreleriyle teslimat sağlıyoruz:
              </p>

              <div className="space-y-3.5 text-xs font-mono">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-industrial-100 flex items-center justify-center shrink-0 text-rust font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-night block">Express Hava Kargo (DHL / FedEx / UPS):</strong>
                    <span className="text-industrial-500">Avrupa ve Körfez ülkelerine 24-48 saatte kapı teslimat.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-industrial-100 flex items-center justify-center shrink-0 text-rust font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-night block">Deniz Yolu Konteyner (Ambarlı & Tuzla Limanları):</strong>
                    <span className="text-industrial-500">Tersane kuru havuz (drydock) projeleri ve büyük tonajlı sevkiyatlar için FCL/LCL.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-industrial-100 flex items-center justify-center shrink-0 text-rust font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-night block">Çoklu Para Birimi & Incoterms:</strong>
                    <span className="text-industrial-500">EUR, USD veya GBP cinsinden EXW, FOB, CIF veya DAP teslim seçenekleri.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-industrial-900 text-white p-6 sm:p-8 rounded-xl border border-industrial-800">
              <h3 className="text-lg font-bold mb-2 text-white">İhracat Departmanı İletişim</h3>
              <p className="text-xs text-industrial-300 leading-relaxed mb-6">
                Yurt dışı projeleriniz, gümrük süreçleriniz ve uluslararası şartnameli ihaleleriniz için doğrudan ihracat mühendislerimizle görüşün.
              </p>

              <div className="space-y-3 text-xs font-mono mb-6">
                <div className="p-3 bg-industrial-800 border border-industrial-700 rounded-lg flex items-center justify-between">
                  <span className="text-industrial-400">Santral:</span>
                  <a href={`tel:${companyData.phone}`} className="text-white hover:text-rust font-bold">
                    {companyData.phoneFormatted}
                  </a>
                </div>
                <div className="p-3 bg-industrial-800 border border-industrial-700 rounded-lg flex items-center justify-between">
                  <span className="text-industrial-400">E-posta:</span>
                  <a href={`mailto:${companyData.quoteEmail}`} className="text-rust hover:underline font-bold">
                    {companyData.quoteEmail}
                  </a>
                </div>
                <div className="p-3 bg-industrial-800 border border-industrial-700 rounded-lg flex items-center justify-between">
                  <span className="text-industrial-400">WhatsApp Export:</span>
                  <a
                    href={`https://wa.me/${companyData.whatsapp.replace('+', '')}?text=${encodeURIComponent("Merhaba Emek Conta, ihracat ve uluslararası teslimat hakkında bilgi almak istiyorum.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline font-bold"
                  >
                    {companyData.whatsappFormatted}
                  </a>
                </div>
              </div>

              <Button href="/teklif-iste" variant="accent" className="w-full text-center justify-center font-bold">
                İhracat Teklif Formunu Aç
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
