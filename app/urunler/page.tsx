import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

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
  searchParams: { kategori?: string; q?: string };
}) {
  return (
    <div className="min-h-screen bg-[#F2EFE9] py-8 text-[#191D20] sm:py-12">
      <Container>
        <Breadcrumb items={[{ label: "Ürünler" }]} className="mb-10" />
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div><p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#A23A10]">Emek Conta / Ürün kataloğu</p><h1 className="text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-6xl">Her uygulamaya<br />doğru malzeme.</h1></div>
          <p className="max-w-md text-base leading-relaxed text-[#62635F] lg:justify-self-end">Spiral sarımlı contalardan teknik plastiklere; sanayi ve denizcilik için standart ve özel üretim sızdırmazlık çözümlerini keşfedin.</p>
        </div>
        <ProductFilter products={productsData} categories={productCategories} initialCategory={searchParams.kategori} initialQuery={searchParams.q} />
      </Container>
    </div>
  );
}
