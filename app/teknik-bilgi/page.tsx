import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { articlesData } from "@/data/articles";
import {
  DocumentTextIcon,
  ArrowRightIcon,
  RulerIcon,
  ShieldCheckIcon,
} from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "Teknik Bilgi Merkezi | Endüstriyel Conta ve Sızdırmazlık Rehberi",
  description:
    "Spiral sarımlı contalar, saf grafit, EPDM/NBR kauçuk, PTFE ve DIN/ASME flanş standartları hakkında mühendislik kılavuzları ve teknik makaleler.",
  openGraph: {
    title: "Teknik Bilgi Merkezi | Emek Conta",
    description: "Conta seçimi, flanş normları ve sızdırmazlık malzemeleri hakkında mühendislik kılavuzları.",
    url: "https://emekconta.com/teknik-bilgi",
  },
};

export default function TechnicalKnowledgePage() {
  const categories = Array.from(new Set(articlesData.map((a) => a.category)));

  return (
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: "Teknik Bilgi" }]}
          className="mb-6"
        />

        {/* Page Header */}
        <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-10 mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-steel-blue inline-block"></span>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-steel-darkblue">
              MÜHENDİSLİK KÜTÜPHANESİ
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-industrial-900 tracking-tight">
            Teknik Bilgi & Standartlar Merkezi
          </h1>
          <p className="mt-3 text-sm sm:text-base text-industrial-600 max-w-3xl leading-relaxed">
            Satın alma uzmanları, bakım şefleri ve mekanik tasarım mühendisleri için hazırlanmış; ASME/DIN flanş standartları, malzeme mukavemetleri ve sızdırmazlık seçim kriterlerine dair teknik kaynaklar.
          </p>

          {/* Quick Categories filter buttons */}
          <div className="mt-6 pt-4 border-t border-industrial-100 flex flex-wrap gap-2 text-xs font-mono">
            <span className="text-industrial-500 py-1 mr-1">Kategoriler:</span>
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-industrial-100 text-industrial-800 border border-industrial-200 rounded-md"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articlesData.map((article) => (
            <article
              key={article.id}
              className="group bg-white border border-industrial-200 rounded-xl hover:border-industrial-400 hover:shadow-sm transition-all flex flex-col justify-between p-6 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-industrial-400 mb-3">
                  <span className="text-steel-darkblue font-semibold uppercase">
                    {article.category}
                  </span>
                  <span>{article.readingTimeMinutes} dk okuma</span>
                </div>

                <h2 className="text-lg font-bold text-industrial-900 group-hover:text-steel-blue transition-colors leading-snug">
                  <Link href={`/teknik-bilgi/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="mt-3 text-xs sm:text-sm text-industrial-600 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>

                {article.standardsMentioned && article.standardsMentioned.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-industrial-100 flex flex-wrap gap-1">
                    {article.standardsMentioned.map((std, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 bg-industrial-100 text-industrial-700 rounded-md"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-industrial-100 flex items-center justify-between text-xs font-mono font-medium text-industrial-800 group-hover:text-steel-blue">
                <span>Teknik Analizi İncele</span>
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
