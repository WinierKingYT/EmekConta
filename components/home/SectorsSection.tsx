import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { sectorsData } from "@/data/sectors";
import { ArrowRightIcon } from "@/components/icons/Icons";

export function SectorsSection() {
  return (
    <section className="py-16 sm:py-24 bg-industrial-50 border-b border-industrial-200">
      <Container>
        <SectionHeader
          tag="SEKTÖREL ÇÖZÜMLER"
          title="Sızdırmazlığın Kritik Olduğu Her Yerde"
          description="Ağır sanayi tesislerinden açık deniz gemilerine kadar her sektörün kendine özgü basınç, sıcaklık ve akışkan gereksinimlerine özel mühendislik çözümleri."
          action={
            <Button href="/sektorler" variant="outline" size="md">
              Tüm Sektörleri Gör ({sectorsData.length} Sektör)
            </Button>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {sectorsData.map((sector, idx) => (
            <Link
              key={sector.id}
              href={`/sektorler/${sector.slug}`}
              className="group p-5 bg-white border border-industrial-200 hover:border-rust hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-mono text-rust font-bold mb-2">
                  0{idx + 1}. SEKTÖR
                </div>
                <h3 className="text-base font-bold text-night group-hover:text-rust transition-colors">
                  {sector.name}
                </h3>
                <p className="mt-2 text-xs text-industrial-600 line-clamp-3 leading-relaxed">
                  {sector.shortDescription}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-industrial-100 flex items-center justify-between text-xs font-mono text-night group-hover:text-brick transition-colors">
                <span>Çözümleri İncele</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-brick transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
