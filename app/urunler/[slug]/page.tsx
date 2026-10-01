import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TechnicalTable, Column } from "@/components/ui/TechnicalTable";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductDetailActions } from "@/components/products/ProductDetailActions";
import { productsData } from "@/data/products";
import { ProductSpecification } from "@/lib/types";
import {
  RulerIcon,
  ShieldCheckIcon,
  UploadCloudIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  ArrowRightIcon,
} from "@/components/icons/Icons";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return productsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = productsData.find((p) => p.slug === params.slug);
  if (!product) return {};

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      url: `https://emekconta.com/urunler/${product.slug}`,
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = productsData.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = productsData.filter((p) =>
    product.relatedProductSlugs.includes(p.slug)
  );

  // Table columns for technical specifications
  const specColumns: Column<ProductSpecification>[] = [
    {
      key: "property",
      header: "Teknik Parametre",
      className: "font-semibold text-industrial-900 w-1/3",
    },
    {
      key: "value",
      header: "Değer / Tip",
      className: "font-mono text-industrial-800",
    },
    {
      key: "standard",
      header: "İlgili Standart",
      className: "font-mono text-rust text-xs font-semibold",
    },
    {
      key: "notes",
      header: "Açıklama & Not",
      className: "text-xs text-industrial-500",
    },
  ];

  return (
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Ürünler", href: "/urunler" },
            { label: product.name },
          ]}
          className="mb-6"
        />

        {/* Product Hero Grid (Left: CAD/Visual Schematic, Right: Specs & Actions) */}
        <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-10 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Industrial Visual / Blueprint schematic or Clean Catalog Photo */}
            <div
              className={`lg:col-span-5 border flex flex-col justify-between aspect-square relative overflow-hidden group rounded-lg ${
                product.image
                  ? "bg-white border-industrial-200 p-4 sm:p-6"
                  : "bg-industrial-950 border-industrial-800 p-6"
              }`}
            >
              {product.image ? (
                <>
                  {/* Header bar inside white card */}
                  <div className="flex items-center justify-between text-xs font-mono text-industrial-500 pb-3 border-b border-industrial-100 z-10 w-full">
                    <span className="text-rust font-bold uppercase">{product.category}</span>
                    <span className="text-[11px] bg-industrial-100 px-2 py-0.5 border border-industrial-200 text-night font-medium rounded">
                      ASME / DIN UYUMLU
                    </span>
                  </div>

                  {/* Clean isolated photo on white */}
                  <div className="relative w-full flex-1 flex items-center justify-center my-2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-contain p-2 sm:p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Bottom bar */}
                  <div className="pt-3 border-t border-industrial-100 flex items-center justify-between text-[11px] font-mono text-industrial-500 z-10 w-full">
                    <span className="font-semibold text-industrial-700">İMALAT: İSTANBUL</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200 font-semibold rounded">
                      ÖZEL ÖLÇÜ KESİM
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between text-xs font-mono text-industrial-400 pb-3 border-b border-industrial-850 z-10">
                    <span className="text-steel-blue font-bold uppercase">{product.category}</span>
                    <span>ASME / DIN UYUMLU</span>
                  </div>

                  {/* Vector diagram if no image */}
                  <div className="my-auto flex flex-col items-center justify-center p-4 z-10">
                    <div className="w-36 h-36 rounded-full border-4 border-dashed border-steel-blue/40 flex items-center justify-center bg-industrial-900">
                      <div className="w-24 h-24 rounded-full border-2 border-industrial-700 flex items-center justify-center text-center p-2">
                        <span className="text-xs font-mono font-bold text-white uppercase">
                          {product.name.split(" ")[0]}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-xs font-mono text-industrial-300 block">
                        {product.imagePlaceholderText}
                      </span>
                      <span className="text-[10px] font-mono text-steel-blue block mt-1">
                        * Standart ve özel ölçü imalat
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-industrial-850 flex items-center justify-between text-[11px] font-mono text-industrial-400 z-10">
                    <span>İMALAT: İSTANBUL</span>
                    <span className="text-emerald-400">ÖZEL ÖLÇÜ KESİM</span>
                  </div>
                </>
              )}
            </div>

            {/* Right: Technical Summary & Direct RFQ */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {product.standards.map((std, idx) => (
                    <Badge key={idx} variant="neutral">
                      {std}
                    </Badge>
                  ))}
                  {product.drawingSupported && (
                    <Badge variant="accent">CAD / NUMUNE KESİM</Badge>
                  )}
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold text-industrial-900 tracking-tight leading-tight">
                  {product.name}
                </h1>

                <p className="mt-4 text-sm sm:text-base text-industrial-600 leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Key Features Bullet List */}
                <div className="mt-6 space-y-2.5">
                  {product.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-industrial-800">
                      <CheckCircleIcon className="w-4 h-4 text-rust shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Batch RFQ Cart & PDF Datasheet */}
              <div className="mt-8 pt-6 border-t border-industrial-200">
                <ProductDetailActions product={product} />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Technical Specifications Table */}
        <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-10 mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-rust inline-block"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-rust">
              TEKNİK TABLO
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-industrial-900 mb-6">
            Teknik Özellikler ve Standartlar
          </h2>

          <TechnicalTable
            columns={specColumns}
            data={product.specifications}
            caption={`${product.name} teknik özellikleri ve standart değerleri`}
          />

          <p className="mt-4 text-xs font-mono text-industrial-500">
            * Tablodaki değerler uluslararası standartlar (ASME / DIN / ISO) uyarınca tipik referanslardır. Özel kimyasal akışkan veya limit sıcaklık-basınç uygulamaları için lütfen teknik ekibimizle teyit ediniz.
          </p>
        </div>

        {/* Materials and Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Materials */}
          <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-industrial-900 mb-4 pb-3 border-b border-industrial-100 flex items-center gap-2">
              <RulerIcon className="w-5 h-5 text-rust" />
              <span>Malzeme Seçenekleri</span>
            </h3>
            <ul className="space-y-3">
              {product.materials.map((mat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-industrial-700">
                  <span className="w-1.5 h-1.5 bg-rust rounded-full mt-2 shrink-0" />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-industrial-900 mb-4 pb-3 border-b border-industrial-100 flex items-center gap-2">
              <ShieldCheckIcon className="w-5 h-5 text-rust" />
              <span>Uygulama Alanları</span>
            </h3>
            <ul className="space-y-3">
              {product.applications.map((app, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-industrial-700">
                  <span className="w-1.5 h-1.5 bg-rust rounded-full mt-2 shrink-0" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed Engineering Description */}
        <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-10 mb-10">
          <h3 className="text-xl font-bold text-industrial-900 mb-4">
            Ürün Hakkında Detaylı Mühendislik Bilgisi
          </h3>
          <div className="prose prose-sm max-w-none text-industrial-700 leading-relaxed space-y-4">
            <p>{product.description}</p>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-industrial-900 mb-6 flex items-center justify-between">
              <span>İlgili Sızdırmazlık Ürünleri</span>
              <Link href="/urunler" className="text-xs font-mono text-rust hover:underline">
                Tüm Ürünler →
              </Link>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
