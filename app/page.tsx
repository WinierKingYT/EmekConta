import React from "react";
import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";

import { CategoryGrid } from "@/components/home/CategoryGrid";

import { CustomMfgSection } from "@/components/home/CustomMfgSection";
import { QuickRFQDropzone } from "@/components/home/QuickRFQDropzone";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SectorsSection } from "@/components/home/SectorsSection";

import { KnowledgeTeaser } from "@/components/home/KnowledgeTeaser";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export const metadata: Metadata = {
  title: "Emek Conta | Endüstriyel Sızdırmazlık Çözümleri",
  description:
    "Sanayi ve denizcilik için güvenilir endüstriyel sızdırmazlık çözümleri. Spiral sarımlı contalar, saf grafit, klingrit, kauçuk ve teknik resme göre özel conta üretimi.",
  alternates: {
    canonical: "https://emekconta.com",
  },
};

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Emek Conta",
    alternateName: "Emek Conta Sanayi ve Ticaret",
    url: "https://emekconta.com",
    inLanguage: "tr-TR",
    description:
      "Sanayi ve denizcilik için güvenilir endüstriyel sızdırmazlık çözümleri imalatçısı.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://emekconta.com/urunler?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HeroSection />
      <CategoryGrid />
      <CustomMfgSection />
      <ProcessSection />
      <SectorsSection />
      <KnowledgeTeaser />
      <QuickRFQDropzone />
      <FinalCTASection />
    </div>
  );
}
