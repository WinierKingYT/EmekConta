import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { CustomMfgSection } from "@/components/home/CustomMfgSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { WhyEmekSection } from "@/components/home/WhyEmekSection";
import { KnowledgeTeaser } from "@/components/home/KnowledgeTeaser";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero: Authoritative Title, 2 CTAs, CAD Blueprint */}
      <HeroSection />

      {/* 2. Trust Bar: 5-item Typographic Pillar */}
      <TrustBar />

      {/* 3. Product Categories Grid: 6 Core Segments */}
      <CategoryGrid />

      {/* 4. Custom Manufacturing: "Standart Ölçü Yetmediğinde" */}
      <CustomMfgSection />

      {/* 5. How We Work: 4-Stage Editorial Workflow */}
      <ProcessSection />

      {/* 6. Industrial Sectors: 10 Core Industries */}
      <SectorsSection />

      {/* 7. Why Emek Conta: Verifiable Engineering Differentiators */}
      <WhyEmekSection />

      {/* 8. Technical Knowledge Center: Standards & Guides */}
      <KnowledgeTeaser />

      {/* 9. Final B2B RFQ CTA */}
      <FinalCTASection />
    </div>
  );
}
