"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { ArrowRightIcon, RulerIcon, CheckCircleIcon } from "@/components/icons/Icons";
import { useRfqCart } from "@/lib/cart-context";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addItem } = useRfqCart();

  // Extract operating parameters if available from specifications
  const tempSpec = product.specifications?.find((s) =>
    s.property.toLowerCase().includes("sıcaklık") || s.property.toLowerCase().includes("temperature")
  );
  const pressureSpec = product.specifications?.find((s) =>
    s.property.toLowerCase().includes("basınç") || s.property.toLowerCase().includes("flanş") || s.property.toLowerCase().includes("pressure")
  );

  return (
    <div className="group relative bg-white border border-industrial-200/90 hover:border-rust hover:shadow-[0_8px_32px_-6px_rgba(183,65,14,0.22)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between rounded-xl overflow-hidden">
      {/* Top subtle metallic corner tick */}
      <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-bl from-rust/40 to-transparent pointer-events-none z-20" />

      <div>
        {/* Visual Schematics / Clean Photo Showcase */}
        <div
          className={`h-56 border-b border-industrial-200 relative overflow-hidden transition-colors ${
            product.image
              ? "bg-gradient-to-b from-white via-industrial-50/40 to-industrial-100/50 p-3 flex items-center justify-center"
              : "bg-industrial-950 p-4 flex flex-col justify-between"
          }`}
        >
          {/* Subtle blueprint grid overlay on image container */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-35 pointer-events-none" />

          {/* Corner CAD reticles (+) */}
          <span className="absolute top-2 left-2 text-[9px] font-mono text-industrial-400/80 pointer-events-none select-none z-10">+</span>
          <span className="absolute top-2 right-2 text-[9px] font-mono text-industrial-400/80 pointer-events-none select-none z-10">+</span>
          <span className="absolute bottom-6 left-2 text-[9px] font-mono text-industrial-400/80 pointer-events-none select-none z-10">+</span>
          <span className="absolute bottom-6 right-2 text-[9px] font-mono text-industrial-400/80 pointer-events-none select-none z-10">+</span>

          {product.image ? (
            <>
              {/* Product Photo on Pure White */}
              <div className="relative w-full h-full flex items-center justify-center z-10">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={priority}
                  loading={priority ? undefined : "lazy"}
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-108"
                />
              </div>

              {/* Clean Overlay Badges */}
              <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
                <span className="px-2 py-0.5 bg-industrial-900/90 text-white text-[9.5px] font-mono font-bold uppercase tracking-wider border border-industrial-700/80 backdrop-blur-xs rounded-md shadow-xs">
                  {product.category}
                </span>
              </div>

              {product.drawingSupported && (
                <div className="absolute top-2.5 right-2.5 z-10">
                  <span className="px-2 py-0.5 bg-gradient-to-r from-rust to-rust-forge text-white text-[9.5px] font-mono font-semibold tracking-wide rounded-md shadow-xs border border-rust-ember/40">
                    CAD / ÖZEL KESİM
                  </span>
                </div>
              )}

              {/* Millimeter blueprint scale footer on image box */}
              <div className="absolute bottom-0 inset-x-0 h-5 bg-industrial-100/90 border-t border-industrial-200/80 px-2.5 flex items-center justify-between text-[8.5px] font-mono text-industrial-500 z-10">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-rust" />
                  <span className="font-semibold text-industrial-700">TOLERANS: ±0.1 MM</span>
                </span>
                <span>ASME • DIN • EN</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between text-[11px] font-mono text-industrial-400 z-10">
                <span className="text-rust font-bold uppercase">{product.category}</span>
                {product.drawingSupported && (
                  <span className="px-1.5 py-0.5 bg-industrial-800/90 text-rust-light border border-rust/40 text-[10px] rounded-md">
                    CAD / ÖZEL KESİM
                  </span>
                )}
              </div>

              {/* Central geometric seal schematic */}
              <div className="my-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-105 z-10">
                <div className="w-16 h-16 rounded-full border-2 border-industrial-700 flex items-center justify-center bg-industrial-850">
                  <div className="w-10 h-10 rounded-full border border-rust/60 flex items-center justify-center text-[10px] font-mono text-white">
                    DIN/ASME
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-industrial-300 truncate z-10">
                {product.imagePlaceholderText}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
            {product.standards.slice(0, 2).map((std, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-industrial-100 text-industrial-800 text-[10px] font-mono font-bold border border-industrial-200 rounded-md"
              >
                {std}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-bold text-night group-hover:text-rust transition-colors leading-snug">
            <Link href={`/urunler/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-industrial-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Operating Limits (Temp & Pressure Specs) */}
          {(tempSpec || pressureSpec) && (
            <div className="mt-3.5 pt-2.5 border-t border-industrial-100/90 grid grid-cols-2 gap-2 text-[10.5px] font-mono">
              {tempSpec && (
                <div className="truncate">
                  <span className="text-industrial-400 block text-[9px]">Sıcaklık:</span>
                  <span className="text-night font-bold truncate block">{tempSpec.value.split("(")[0]}</span>
                </div>
              )}
              {pressureSpec && (
                <div className="truncate">
                  <span className="text-industrial-400 block text-[9px]">Basınç:</span>
                  <span className="text-night font-bold truncate block">{pressureSpec.value.split("(")[0]}</span>
                </div>
              )}
            </div>
          )}

          {/* Materials snippet */}
          <div className="mt-3 pt-2.5 border-t border-industrial-100 flex items-center justify-between text-[11px] font-mono text-industrial-500">
            <span className="font-semibold text-industrial-700">Malzeme:</span>
            <span className="text-industrial-600 truncate max-w-[170px] text-right">
              {product.materials[0]?.split(":")[0] || "Teknik Malzeme"}
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer / Action */}
      <div className="border-t border-industrial-200 grid grid-cols-12 divide-x divide-industrial-200">
        <Link
          href={`/urunler/${product.slug}`}
          className="col-span-8 flex items-center justify-between px-4 py-3 bg-industrial-50 group-hover:bg-gradient-to-r group-hover:from-rust group-hover:to-rust-forge group-hover:text-white text-night text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 group-hover:shadow-inner"
        >
          <span>İncele & Teklif</span>
          <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem({
              slug: product.slug,
              name: product.name,
              category: product.category,
              quantity: "50 Adet",
            });
          }}
          title="Teklif Sepetine Ekle"
          className="col-span-4 flex items-center justify-center gap-1 px-2 py-3 bg-industrial-100 hover:bg-night text-industrial-800 hover:text-white text-xs font-mono font-bold transition-colors cursor-pointer"
        >
          <span>+ Sepet</span>
        </button>
      </div>
    </div>
  );
}
