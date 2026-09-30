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
              className="group bg-white border border-industrial-200 hover:border-rust hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between rounded-lg overflow-hidden"
            >
              <div>
                {/* Visual Header / Real Product Photo */}
                <div className="relative h-60 bg-gradient-to-b from-white via-white to-industrial-50/70 border-b border-industrial-200 overflow-hidden flex flex-col justify-between p-4">
                  {/* Category Image */}
                  {category.image && (
                    <div className="absolute inset-0 p-4 flex items-center justify-center">
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
                    <span className="px-2.5 py-0.5 bg-white/95 backdrop-blur-xs border border-industrial-200 text-rust font-bold rounded shadow-xs">
                      KAT-0{idx + 1}
                    </span>
                    <span className="px-2.5 py-0.5 bg-night text-white font-medium text-[10px] rounded shadow-xs">
                      {category.itemCountEstimated}
                    </span>
                  </div>

                  {/* Bottom Technical Indicator */}
                  <div className="relative z-10 text-[10px] font-mono text-night bg-white/95 backdrop-blur-xs px-2.5 py-1 border border-industrial-200 inline-flex items-center gap-1.5 self-start rounded shadow-xs">
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
                        className="text-xs font-mono px-2 py-0.5 bg-industrial-100 text-night border border-industrial-200/60 group-hover:border-rust/30 rounded transition-colors"
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
                  className="w-full flex items-center justify-between px-6 py-3.5 bg-industrial-50 border-t border-industrial-200 text-night group-hover:bg-brick group-hover:text-white transition-all duration-300 font-mono text-xs font-bold uppercase tracking-wider"
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
