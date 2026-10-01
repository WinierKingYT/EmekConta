import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { productCategories } from "@/data/products";
import { ArrowRightIcon, RulerIcon } from "@/components/icons/Icons";

export function CategoryGrid() {
  return (
    <section className="py-16 sm:py-24 bg-industrial-50 border-b border-industrial-200">
      <Container>
        <SectionHeader
          tag="ÜRÜN GRUPLARI"
          title="Endüstriyel Sızdırmazlık Ürünleri"
          description="Flanş bağlantılarından kazan kapaklarına, boru hatlarından dinamik pompa millerine kadar standart ve özel sızdırmazlık elemanları."
          action={
            <Button href="/urunler" variant="outline" size="md">
              Kataloğu İncele ({productCategories.length} Kategori)
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {productCategories.map((category, idx) => (
            <div
              key={category.id}
              className="group relative bg-white border border-industrial-200 hover:border-rust hover:shadow-[0_8px_32px_-6px_rgba(183,65,14,0.22)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between rounded-xl overflow-hidden"
            >
              {/* Top subtle metallic corner tick */}
              <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-bl from-rust/40 to-transparent pointer-events-none z-20" />

              <div>
                {/* Visual Header / Real Product Photo */}
                <div className="relative h-60 bg-gradient-to-b from-white via-industrial-50/40 to-industrial-100/60 border-b border-industrial-200 overflow-hidden flex flex-col justify-between p-4">
                  {/* Subtle blueprint grid overlay */}
                  <div className="absolute inset-0 bg-blueprint-grid opacity-35 pointer-events-none" />

                  {/* Corner CAD reticles (+) */}
                  <span className="absolute top-2 left-2 text-[9px] font-mono text-industrial-400/80 pointer-events-none select-none z-10">+</span>
                  <span className="absolute top-2 right-2 text-[9px] font-mono text-industrial-400/80 pointer-events-none select-none z-10">+</span>

                  {/* Category Image */}
                  {category.image && (
                    <div className="absolute inset-0 p-4 flex items-center justify-center z-10">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-108"
                      />
                    </div>
                  )}

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
                    <span className="px-2.5 py-0.5 bg-white/95 backdrop-blur-xs border border-industrial-200 text-rust font-bold rounded-md shadow-xs">
                      KAT-0{idx + 1}
                    </span>
                    <span className="px-2.5 py-0.5 bg-night text-white font-medium text-[10px] rounded-md shadow-xs">
                      {category.itemCountEstimated}
                    </span>
                  </div>

                  {/* Bottom Technical Indicator */}
                  <div className="relative z-10 text-[10px] font-mono text-night bg-white/95 backdrop-blur-xs px-2.5 py-1 border border-industrial-200 inline-flex items-center gap-1.5 self-start rounded-md shadow-xs">
                    <RulerIcon className="w-3.5 h-3.5 text-rust shrink-0" />
                    <span>DIN / ASME Normları & Özel Kesim</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-night group-hover:text-rust transition-colors">
                    <Link href={`/urunler?kategori=${category.id}`}>
                      {category.name}
                    </Link>
                  </h3>
                  <p className="mt-2.5 text-sm text-industrial-600 leading-relaxed line-clamp-2">
                    {category.shortDescription}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 pt-4 border-t border-industrial-100 flex flex-wrap gap-1.5">
                    {category.highlights.map((highlight, hIdx) => (
                      <span
                        key={hIdx}
                        className="text-xs font-mono px-2 py-0.5 bg-industrial-100 text-night border border-industrial-200/60 group-hover:border-rust/40 rounded-md transition-colors"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Full-Width Card Action Bar */}
              <div>
                <Link
                  href={`/urunler?kategori=${category.id}`}
                  className="w-full flex items-center justify-between px-6 py-3.5 bg-industrial-50 border-t border-industrial-200 text-night group-hover:bg-gradient-to-r group-hover:from-rust group-hover:to-rust-forge group-hover:text-white transition-all duration-300 font-mono text-xs font-bold uppercase tracking-wider group-hover:shadow-inner"
                >
                  <span>Kategoriyi İncele</span>
                  <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
