import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { enProductsData, enProductCategories } from "@/data/en/products";
import {
  ShieldCheckIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@/components/icons/Icons";

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

export default function EnglishProductsPage() {
  return (
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <Container>
        <Breadcrumb
          items={[
            { label: "Home", href: "/en" },
            { label: "Products" },
          ]}
          className="mb-6"
        />

        {/* Page Header */}
        <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-10 mb-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-rust inline-block"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-rust">
              PRECISION SEALING CATALOG
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-night tracking-tight">
            Industrial Gaskets & Engineering Sealing Materials
          </h1>
          <p className="mt-3 text-sm sm:text-base text-industrial-600 max-w-3xl leading-relaxed">
            Manufactured from high-purity graphite, certified stainless alloys (AISI 316L/304), virgin PTFE, and premium synthetic elastomers. Fully compliant with ASME B16.20, DIN EN 1514, and ISO dimensional tolerances.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {enProductsData.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-industrial-200 rounded-xl p-6 hover:border-rust hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-industrial-500 mb-2">
                  <span className="text-rust font-bold uppercase">{product.category}</span>
                  <span className="bg-industrial-100 px-2 py-0.5 rounded text-industrial-800 font-semibold">
                    {product.standards[0] || "ASME / DIN"}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-night mb-2.5">
                  <Link
                    href={`/en/products/${product.slug}`}
                    className="hover:text-rust transition-colors"
                  >
                    {product.name}
                  </Link>
                </h2>

                <p className="text-xs text-industrial-600 leading-relaxed mb-4">
                  {product.shortDescription}
                </p>

                {/* Specs snapshot */}
                <div className="bg-industrial-50 border border-industrial-150 p-3 rounded-lg mb-5 space-y-1.5 text-[11px] font-mono">
                  {product.pressureRange && (
                    <div className="flex justify-between">
                      <span className="text-industrial-500">Pressure:</span>
                      <span className="font-semibold text-industrial-800">{product.pressureRange}</span>
                    </div>
                  )}
                  {product.temperatureRange && (
                    <div className="flex justify-between">
                      <span className="text-industrial-500">Temperature:</span>
                      <span className="font-semibold text-industrial-800">{product.temperatureRange}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-industrial-100 flex items-center justify-between text-xs font-mono">
                <Link
                  href={`/en/products/${product.slug}`}
                  className="font-bold text-rust hover:text-rust-dark transition-colors inline-flex items-center gap-1"
                >
                  <span>Technical Specs</span>
                  <span>→</span>
                </Link>

                <Link
                  href={`/urunler/${product.slug}/datasheet`}
                  target="_blank"
                  className="text-industrial-500 hover:text-industrial-900 transition-colors inline-flex items-center gap-1"
                >
                  <DocumentTextIcon className="w-3.5 h-3.5" />
                  <span>TDS PDF</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Engineering Banner */}
        <div className="bg-night text-white rounded-xl p-8 sm:p-12 border border-industrial-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-rust uppercase tracking-widest block mb-1">
              CUSTOM GASKET FABRICATION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Non-Standard Dimensions or Custom Drawing Required?
            </h3>
            <p className="text-xs sm:text-sm text-industrial-300 max-w-xl">
              We process DXF, DWG, STEP files, and physical samples with automated CNC oscillating knife and waterjet cutters. Rapid prototyping and custom small-batch delivery.
            </p>
          </div>

          <Button href="/en/contact" variant="accent" size="lg" className="rounded-lg font-semibold shrink-0">
            Submit CAD File
          </Button>
        </div>
      </Container>
    </div>
  );
}
