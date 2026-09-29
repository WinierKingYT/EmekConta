import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { ArrowRightIcon, RulerIcon, CheckCircleIcon } from "@/components/icons/Icons";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white border border-industrial-200 hover:border-industrial-400 hover:shadow-sm transition-all flex flex-col justify-between">
      <div>
        {/* Visual Schematics / Clean Photo Showcase */}
        <div
          className={`h-48 border-b border-industrial-200 relative overflow-hidden transition-colors ${
            product.image
              ? "bg-white p-3 flex items-center justify-center"
              : "bg-industrial-900 p-4 flex flex-col justify-between"
          }`}
        >
          {product.image ? (
            <>
              {/* Product Photo on Pure White */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Clean Overlay Badges */}
              <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
                <span className="px-2 py-0.5 bg-industrial-100/90 text-industrial-800 text-[10px] font-mono font-bold uppercase tracking-wider border border-industrial-200 backdrop-blur-xs">
                  {product.category}
                </span>
              </div>

              {product.drawingSupported && (
                <div className="absolute top-2.5 right-2.5 z-10">
                  <span className="px-2 py-0.5 bg-steel-darkblue/90 text-white text-[10px] font-mono font-semibold tracking-wide shadow-xs">
                    CAD / ÖZEL KESİM
                  </span>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="flex items-center justify-between text-[11px] font-mono text-industrial-400 z-10">
                <span className="text-steel-blue font-bold uppercase">{product.category}</span>
                {product.drawingSupported && (
                  <span className="px-1.5 py-0.5 bg-industrial-800/90 text-sky-300 border border-steel-blue/40 text-[10px]">
                    CAD / ÖZEL KESİM
                  </span>
                )}
              </div>

              {/* Central geometric seal schematic */}
              <div className="my-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-105 z-10">
                <div className="w-16 h-16 rounded-full border-2 border-industrial-700 flex items-center justify-center bg-industrial-850">
                  <div className="w-10 h-10 rounded-full border border-steel-blue/60 flex items-center justify-center text-[10px] font-mono text-white">
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
          <div className="flex flex-wrap gap-1 mb-2">
            {product.standards.slice(0, 2).map((std, idx) => (
              <Badge key={idx} variant="neutral">
                {std}
              </Badge>
            ))}
          </div>

          <h3 className="text-lg font-bold text-industrial-900 group-hover:text-steel-darkblue transition-colors">
            <Link href={`/urunler/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-industrial-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Materials snippet */}
          <div className="mt-4 pt-3 border-t border-industrial-100 flex flex-wrap gap-1 text-[11px] font-mono text-industrial-500">
            <span className="font-semibold text-industrial-700">Malzeme:</span>
            <span>{product.materials[0]?.split(":")[0] || "Teknik Malzeme"}</span>
          </div>
        </div>
      </div>

      {/* Card Footer / Action */}
      <div className="p-5 sm:p-6 pt-0">
        <Link
          href={`/urunler/${product.slug}`}
          className="w-full inline-flex items-center justify-between px-3.5 py-2.5 bg-industrial-50 group-hover:bg-industrial-900 group-hover:text-white text-industrial-900 text-xs font-mono font-bold uppercase tracking-wider border border-industrial-200 group-hover:border-industrial-900 transition-colors"
        >
          <span>Teknik Özellikler & Teklif</span>
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
