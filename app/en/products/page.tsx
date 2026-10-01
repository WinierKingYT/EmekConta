import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { enProductsData, enProductCategories } from "@/data/en/products";
import { EnglishProductGrid } from "@/components/en/EnglishProductGrid";
import { PageHeading } from "@/components/ui/PageHeading";

export const metadata: Metadata = {
  title: "Industrial Gasket Catalog & Technical Specifications | Emek Gaskets",
  description:
    "Explore our complete range of ASME and DIN industrial gaskets, including spiral wound, pure expanded graphite, non-asbestos aramid sheets, and elastomer seals.",
  alternates: {
    canonical: "https://emekconta.com/en/products",
    languages: {
      "tr-TR": "https://emekconta.com/urunler",
      "en-US": "https://emekconta.com/en/products",
    },
  },
  openGraph: {
    title: "Emek Gaskets Industrial Sealing Products Catalog",
    description:
      "Precision manufactured flange gaskets conforming to ASME B16.20, ASME B16.21, and DIN EN 1514 standards.",
    url: "https://emekconta.com/en/products",
  },
};

export default function EnglishProductsPage({ searchParams }: { searchParams: { kategori?: string; q?: string } }) {
  return (
    <div className="min-h-screen bg-[#F2EFE9] py-8 text-[#191D20] sm:py-12"><Container>
      <Breadcrumb language="en" items={[{ label: "Products" }]} className="mb-10" />
      <PageHeading eyebrow="Emek Gaskets / Product catalog" title={<>The right material.<br />For every application.</>} description="Explore industrial and marine sealing solutions, from spiral wound gaskets and sheet materials to elastomers and engineering plastics." />
      <EnglishProductGrid key={`${searchParams.kategori || "all"}-${searchParams.q || ""}`} products={enProductsData} categories={enProductCategories} initialCategory={searchParams.kategori} initialQuery={searchParams.q} />
    </Container></div>
  );
}
