import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";
import { ShieldCheckIcon, DocumentTextIcon, ArrowLeftIcon } from "@/components/icons/Icons";
import { PrintButton } from "@/components/ui/PrintButton";

export async function generateStaticParams() {
  return productsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = productsData.find((p) => p.slug === params.slug);
  if (!product) return {};

  return {
    title: `${product.name} Teknik Veri Föyü (TDS) | Emek Conta`,
    description: `${product.name} endüstriyel conta teknik özellikleri, basınç-sıcaklık limitleri, ASME ve DIN standart toleransları teknik föyü.`,
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ProductDatasheetPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = productsData.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const documentCode = `TDS-EC-${product.slug.toUpperCase().slice(0, 16)}`;
  const dateStr = "Ekim 2026";

  return (
    <div className="bg-industrial-100 min-h-screen py-8 print:py-0 print:bg-white text-industrial-900 font-sans">
      {/* Top Interactive Print Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto px-4 mb-6 print:hidden">
        <div className="bg-white border border-industrial-300 rounded-xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <Link
            href={`/urunler/${product.slug}`}
            className="inline-flex items-center gap-2 text-xs font-mono text-industrial-700 hover:text-rust font-semibold transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>← Ürün Sayfasına Dön</span>
          </Link>

          <div className="flex items-center gap-3">
            <PrintButton productSlug={product.slug} productName={product.name} />
          </div>
        </div>
      </div>

      {/* A4 Printable Datasheet Canvas */}
      <div className="max-w-4xl mx-auto bg-white border border-industrial-300 print:border-0 shadow-lg print:shadow-none p-8 sm:p-12 print:p-0 rounded-xl print:rounded-none">
        {/* Official Header */}
        <header className="border-b-2 border-night pb-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-night flex items-center justify-center text-white font-mono font-bold text-lg rounded-lg border border-rust">
                <span className="text-rust">E</span>C
              </div>
              <div>
                <h1 className="text-xl font-extrabold tracking-tight text-night leading-none">
                  EMEK CONTA SANAYİ VE TİCARET
                </h1>
                <p className="text-[11px] font-mono text-industrial-500 uppercase tracking-widest mt-1">
                  Endüstriyel Sızdırmazlık Çözümleri • İmalat & Mühendislik
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right font-mono text-xs text-industrial-600">
              <div className="font-bold text-night text-sm tracking-wide">
                TEKNİK ÜRÜN VERİ FÖYÜ (TDS)
              </div>
              <div className="text-[11px] text-rust font-bold mt-0.5">
                DOKÜMAN: {documentCode}
              </div>
              <div className="text-[10px] text-industrial-400 mt-0.5">
                Yayın Tarihi: {dateStr} | Rev: 04.2
              </div>
            </div>
          </div>
        </header>

        {/* Product Identity Box */}
        <section className="mb-6 bg-industrial-50 border border-industrial-200 p-5 rounded-lg">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-industrial-200 mb-3">
            <h2 className="text-lg sm:text-xl font-bold text-night">
              {product.name}
            </h2>
            <span className="px-2.5 py-0.5 bg-rust text-white font-mono text-[10px] font-bold uppercase rounded">
              KATEGORİ: {product.category}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-industrial-700 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-mono">
            {product.standards.map((std, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-white border border-industrial-300 text-industrial-800 rounded">
                Norm: {std}
              </span>
            ))}
          </div>
        </section>

        {/* Section 1: Technical Specifications Table */}
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3 pb-1 border-b border-industrial-300">
            <span className="font-mono text-xs font-bold text-rust">01.</span>
            <h3 className="font-bold text-xs uppercase tracking-wider text-night">
              Teknik Özellikler ve Fiziksel Parametreler
            </h3>
          </div>

          <table className="w-full text-left text-xs border border-industrial-200 border-collapse">
            <thead>
              <tr className="bg-industrial-100 text-industrial-800 font-mono text-[11px] uppercase">
                <th className="p-2.5 border-b border-industrial-300 w-1/3">Karakteristik Özellik</th>
                <th className="p-2.5 border-b border-industrial-300 w-1/3">Teknik Değer</th>
                <th className="p-2.5 border-b border-industrial-300 w-1/3">İlgili Standart / Not</th>
              </tr>
            </thead>
            <tbody>
              {product.specifications.map((spec, sIdx) => (
                <tr key={sIdx} className={sIdx % 2 === 0 ? "bg-white" : "bg-industrial-50"}>
                  <td className="p-2.5 border-b border-industrial-200 font-semibold text-industrial-900">
                    {spec.property}
                  </td>
                  <td className="p-2.5 border-b border-industrial-200 font-mono text-rust font-bold">
                    {spec.value}
                  </td>
                  <td className="p-2.5 border-b border-industrial-200 text-industrial-600 font-mono text-[11px]">
                    {spec.standard ? `${spec.standard} ` : ""}{spec.notes ? `(${spec.notes})` : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Section 2: Pressure-Temperature Operating Limits */}
        <section className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-industrial-50 border border-industrial-200 rounded-lg">
            <h4 className="font-bold text-xs uppercase font-mono text-night mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rust"></span>
              <span>Çalışma Zarfı ve Limitleri</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-industrial-700 font-mono">
              <li>• Maks. Çalışma Basıncı: Sınıflandırmaya göre PN 10 - PN 400 (Class 150 - 2500)</li>
              <li>• Sıcaklık Uyumluluğu: Sürekli ve pik parametrelere göre test edilmiştir.</li>
              <li>• Sıkıştırılabilirlik (ASTM F36): %10 - %35 aralığında kontrollü deformasyon.</li>
              <li>• Geri Yaylanma (ASTM F36): %30 - %60 aralığında elastik geri dönüş.</li>
            </ul>
          </div>

          <div className="p-4 bg-industrial-50 border border-industrial-200 rounded-lg">
            <h4 className="font-bold text-xs uppercase font-mono text-night mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>Uygunluk ve Kullanım Alanları</span>
            </h4>
            <div className="flex flex-wrap gap-1 text-[11px]">
              {product.applications.map((app, aIdx) => (
                <span key={aIdx} className="px-2 py-0.5 bg-white border border-industrial-200 text-industrial-700 rounded">
                  {app}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Flange Installation & Torque Guidelines */}
        <section className="mb-6 p-4 bg-white border border-industrial-200 rounded-lg">
          <h4 className="font-bold text-xs uppercase font-mono text-night mb-2">
            Montaj & Cıvata Torklama Esasları:
          </h4>
          <p className="text-[11px] text-industrial-600 leading-relaxed">
            Contayı montaj yapmadan önce flanş yüzeylerinin temiz, pas ve eski conta kalıntılarından arındırılmış olduğunu kontrol ediniz. Cıvataları yağlayarak yıldız (çapraz) sırayla 4 kademede (%30, %60, %100 ve son kontrol turu) nominal tork değerine kadar sıkınız. Cıvata tork tabloları için mühendislik departmanımızla irtibata geçebilirsiniz.
          </p>
        </section>

        {/* Official Footer with Factory Quality Stamp */}
        <footer className="mt-8 pt-6 border-t-2 border-night flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-industrial-600">
          <div>
            <div className="font-bold text-night">EMEK CONTA İMALAT & FABRİKA</div>
            <div className="text-[11px] text-industrial-500">
              İkitelli OSB Atatürk Oto Sanayi Sitesi 4.Yol No:96 Başakşehir / İSTANBUL
            </div>
            <div className="text-[11px] text-industrial-500">
              Santral: {companyData.phoneFormatted} | E-posta: {companyData.email}
            </div>
          </div>

          <div className="p-3 bg-industrial-50 border border-industrial-300 rounded text-center">
            <div className="flex items-center justify-center gap-1 text-emerald-700 font-bold text-[11px]">
              <ShieldCheckIcon className="w-4 h-4" />
              <span>ISO 9001:2015 ONAYLI</span>
            </div>
            <div className="text-[9px] text-industrial-400 mt-0.5">
              LABORATUVAR & KALİTE GÜVENCE
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
