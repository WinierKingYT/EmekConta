import React from "react";
import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { FoundryTelemetryBar } from "@/components/home/FoundryTelemetryBar";
import { TrustBar } from "@/components/home/TrustBar";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { MaterialSelectorWidget } from "@/components/home/MaterialSelectorWidget";
import { CustomMfgSection } from "@/components/home/CustomMfgSection";
import { QuickRFQDropzone } from "@/components/home/QuickRFQDropzone";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { WhyEmekSection } from "@/components/home/WhyEmekSection";
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
      {/* 1. Hero: Authoritative Title, 2 CTAs, 3-Slide Studio Showcase & CAD */}
      <HeroSection />

      {/* Live Manufacturing & Workshop Telemetry */}
      <FoundryTelemetryBar />

      {/* 2. Trust Bar: 5-item Typographic Pillar */}
      <TrustBar />

      {/* 3. Product Categories Grid: 6 Core Segments */}
      <CategoryGrid />

      {/* 4. Interactive Material & Operating Condition Selector */}
      <MaterialSelectorWidget />

      {/* 5. Custom Manufacturing: "Standart Ölçü Yetmediğinde" */}
      <CustomMfgSection />

      {/* 6. Direct Quick RFQ / Drawing Dropzone */}
      <QuickRFQDropzone />

      {/* 7. How We Work: 4-Stage Editorial Workflow */}
      <ProcessSection />

      {/* 8. Industrial Sectors: 10 Core Industries */}
      <SectorsSection />

      {/* 9. Why Emek Conta: Verifiable Engineering Differentiators */}
      <WhyEmekSection />

      {/* 10. Technical Knowledge Center: Standards & Guides */}
      <KnowledgeTeaser />

      {/* 11. Final B2B RFQ CTA */}
      <FinalCTASection />
    </div>
  );
}
