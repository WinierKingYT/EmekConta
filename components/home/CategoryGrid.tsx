import React from "react";
import Link from "next/link";
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
              className="group bg-white border border-industrial-200 hover:border-industrial-400 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header / Placeholder with technical grid */}
                <div className="relative h-44 bg-industrial-900 border-b border-industrial-200 overflow-hidden flex flex-col justify-between p-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-industrial-400">
                    <span className="text-steel-blue font-bold">KAT-0{idx + 1}</span>
                    <span className="px-1.5 py-0.5 bg-industrial-800 text-industrial-300">
                      {category.itemCountEstimated}
                    </span>
                  </div>

                  {/* Geometric Technical Schematic Placeholder */}
                  <div className="flex items-center justify-center my-auto transition-transform duration-300 group-hover:scale-105">
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-steel-blue/50 flex items-center justify-center bg-industrial-850">
                      <div className="w-10 h-10 rounded-full border border-industrial-400 flex items-center justify-center text-white font-mono text-[10px] font-bold">
                        EC
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-industrial-400 flex items-center gap-1.5">
                    <RulerIcon className="w-3.5 h-3.5 text-steel-blue" />
                    <span>DIN / ASME Normları & Özel Ölçü</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-industrial-900 group-hover:text-steel-darkblue transition-colors">
                    {category.name}
                  </h3>
                  <p className="mt-2.5 text-sm text-industrial-600 leading-relaxed">
                    {category.shortDescription}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 pt-4 border-t border-industrial-100 flex flex-wrap gap-1.5">
                    {category.highlights.map((highlight, hIdx) => (
                      <span
                        key={hIdx}
                        className="text-xs font-mono px-2 py-0.5 bg-industrial-100 text-industrial-700"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0">
                <Link
                  href={`/urunler?kategori=${category.id}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-industrial-900 group-hover:text-steel-blue transition-colors"
                >
                  <span>Ürünleri Listele</span>
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
