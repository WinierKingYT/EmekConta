import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductFilter } from "@/components/products/ProductFilter";
import { productsData, productCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "Endüstriyel Sızdırmazlık Ürünleri | Standart & Özel Flanş Contaları",
  description:
    "Spiral sarımlı contalar, saf grafit levha contalar, asbestsiz klingrit, endüstriyel kauçuk (EPDM, NBR, Viton, silikon), PTFE ve salmastra çeşitleri. DIN ve ASME standartlarında imalat.",
  openGraph: {
    title: "Endüstriyel Sızdırmazlık Ürünleri | Emek Conta",
    description:
      "DIN ve ASME standartlarında standart ve teknik resme göre özel imalat endüstriyel conta ve sızdırmazlık çözümleri.",
    url: "https://emekconta.com/urunler",
  },
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { kategori?: string };
}) {
  return (
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: "Ürünler" }]}
          className="mb-6"
        />

        {/* Page Header */}
        <div className="mb-10 bg-white border border-industrial-200 p-6 sm:p-10">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-4 h-[2px] bg-steel-blue inline-block"></span>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-steel-darkblue">
              ÜRÜN KATALOĞU
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-industrial-900 tracking-tight">
            Endüstriyel Sızdırmazlık Ürünleri
          </h1>
          <p className="mt-3 text-sm sm:text-base text-industrial-600 max-w-3xl leading-relaxed">
            Sanayi tesisleri, rafineriler, boru hatları ve denizcilik uygulamaları için ASME B16.20, ASME B16.21, DIN EN 1514 normlarına uygun standart flanş contaları ve teknik resme göre özel CNC kesim sızdırmazlık çözümleri.
          </p>
        </div>

        {/* Interactive Filter and Product Grid */}
        <ProductFilter
          products={productsData}
          categories={productCategories}
          initialCategory={searchParams.kategori}
        />
      </Container>
    </div>
  );
}
