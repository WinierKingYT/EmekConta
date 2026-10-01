import React from "react";
import Image from "next/image";
import { PageHeading } from "@/components/ui/PageHeading";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";

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
    <div className="min-h-screen bg-[#F2EFE9] py-8 text-[#191D20] sm:py-12"><Container>
      <Breadcrumb items={[{ label: "Uluslararası Standartlar & İhracat" }]} className="mb-10" />
      <PageHeading eyebrow="Emek Conta / Uluslararası çözümler" title={<>İstanbul'dan,<br />dünya standartlarına.</>} description="Sanayi tesisleri, rafineriler ve denizcilik projeleri için ASME, DIN ve EN normlarında sızdırmazlık ürünleri. Teknik şartnamenize uygun üretim ve teslimat seçeneklerini görüşelim." />
      <div className="mb-12 flex flex-wrap items-center gap-6"><Button href="/teklif-iste" variant="accent" size="lg">İhracat teklifi iste ↗</Button><Link href="/en/export" className="border-b border-[#191D20]/30 pb-2 text-sm hover:text-[#96350B]">View in English ↗</Link></div>
      <div className="relative mb-12 aspect-[4/3] overflow-hidden rounded-xl sm:aspect-[16/7]"><Image src="/images/hero/hero-slide-2.webp" alt="Uluslararası flanş standartlarına yönelik levha ve sızdırmazlık contaları" fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" /></div>
      <dl className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">{EXPORT_FACTS.map(fact => <div key={fact.label} className="border-t border-[#191D20]/20 pt-6"><dt className="text-xs text-[#62635F]">{fact.label}</dt><dd className="mt-4 text-2xl font-medium tracking-tight text-[#96350B] sm:text-3xl">{fact.value}</dd></div>)}</dl>
      <section className="mb-16"><p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#A23A10]">Teknik kapsam</p><h2 className="mb-10 text-3xl font-medium tracking-tight sm:text-4xl">Standartlar ve kalite normları.</h2><div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">{STANDARDS_GRID.map(standard => <div key={standard.standard} className="border-t border-[#191D20]/20 pt-6"><p className="mb-5 text-xs font-medium text-[#96350B]">{standard.standard}</p><h3 className="mb-4 text-xl font-medium leading-snug">{standard.title}</h3><p className="text-sm leading-relaxed text-[#62635F]">{standard.description}</p><p className="mt-5 text-xs leading-relaxed text-[#62635F]">{standard.scope}</p></div>)}</div></section>
      <section className="mb-12 grid gap-8 rounded-xl bg-[#191D20] p-7 text-white sm:p-10 lg:grid-cols-2"><div><p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#DD895F]">Lojistik ve teslimat</p><h2 className="mb-5 text-3xl font-medium leading-tight tracking-tight">Üretim kadar,<br />ulaştırmak da önemli.</h2><p className="max-w-md text-sm leading-relaxed text-[#B9BCB8]">Projenizin miktar, ambalaj ve teslimat ihtiyaçlarına göre hava veya deniz yolu sevkiyat seçeneklerini birlikte değerlendirelim.</p></div><ul className="space-y-6 text-sm text-[#D1D3CC]">{[{ title: "Express hava kargo", description: "DHL, FedEx ve UPS ile sevkiyat seçenekleri." }, { title: "Deniz yolu taşımacılığı", description: "Büyük tonajlı talepler için FCL / LCL sevkiyat." }, { title: "Teslim ve ödeme koşulları", description: "EUR, USD ve GBP; EXW, FOB, CIF veya DAP seçenekleri." }].map(item => <li key={item.title} className="border-t border-white/20 pt-4"><h3 className="mb-2 font-medium text-[#DD895F]">{item.title}</h3><p className="text-[#B9BCB8]">{item.description}</p></li>)}</ul></section>
      <section className="flex flex-col justify-between gap-6 border-t border-[#191D20]/15 pt-10 lg:flex-row lg:items-center"><div><h2 className="text-2xl font-medium tracking-tight">Projenizin gereksinimlerini paylaşın.</h2><a href={`mailto:${companyData.quoteEmail}`} className="mt-4 inline-block text-sm text-[#96350B] underline underline-offset-4">{companyData.quoteEmail}</a></div><div className="flex flex-wrap gap-4"><Button href="/teklif-iste" variant="accent" size="lg">İhracat teklif formu ↗</Button><a href={`https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Merhaba Emek Conta, ihracat ve uluslararası teslimat hakkında bilgi almak istiyorum.")}`} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[#191D20]/25 px-6 py-4 text-sm font-medium hover:border-[#96350B] hover:text-[#96350B]">WhatsApp ile görüşün</a></div></section>
    </Container></div>
  );
}
