import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { sectorsData } from "@/data/sectors";
import { ArrowRightIcon, ShieldCheckIcon } from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "Hizmet Verilen Sektörler | Endüstriyel Sızdırmazlık",
  description:
    "Denizcilik, enerji santralleri, demir çelik, petrokimya, makine OEM, gıda ve doğalgaz sektörleri için özel sızdırmazlık ve conta çözümleri.",
  openGraph: {
    title: "Endüstriyel Sektör Çözümleri | Emek Conta",
    description: "Sanayi ve denizcilik için sektörel flanş ve ekipman sızdırmazlığı.",
    url: "https://emekconta.com/sektorler",
  },
};

export default function SectorsPage() {
  return (
    <div className="py-8 sm:py-12 bg-industrial-50 min-h-screen">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: "Sektörler" }]}
          className="mb-6"
        />

        {/* Page Header */}
        <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-10 mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-steel-blue inline-block"></span>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-steel-darkblue">
              ENDÜSTRİYEL UYGULAMALAR
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-industrial-900 tracking-tight">
            Sektörel Sızdırmazlık Çözümleri
          </h1>
          <p className="mt-3 text-sm sm:text-base text-industrial-600 max-w-3xl leading-relaxed">
            Her endüstrinin akışkan kimyası, çalışma basıncı, sıcaklık sınırları ve yasal güvenlik normları birbirinden farklıdır. 10 temel endüstriyel sektör için sahada kanıtlanmış conta çözümleri geliştiriyoruz.
          </p>
        </div>

        {/* 10 Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sectorsData.map((sector, idx) => (
            <div
              key={sector.id}
              className="group bg-white border border-industrial-200 rounded-xl hover:border-industrial-400 hover:shadow-sm transition-all flex flex-col justify-between p-6 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-industrial-400 mb-3">
                  <span className="text-steel-darkblue font-bold">0{idx + 1}. SEKTÖR</span>
                  <span>{sector.standards[0] || "Standart Norm"}</span>
                </div>

                <h2 className="text-xl font-bold text-industrial-900 group-hover:text-steel-blue transition-colors">
                  <Link href={`/sektorler/${sector.slug}`}>
                    {sector.name}
                  </Link>
                </h2>

                <p className="mt-3 text-xs sm:text-sm text-industrial-600 leading-relaxed">
                  {sector.shortDescription}
                </p>

                {/* Challenges preview */}
                <div className="mt-4 pt-3 border-t border-industrial-100">
                  <span className="text-[11px] font-mono text-industrial-500 uppercase font-semibold block mb-1.5">
                    Kritik Çalışma Zorlukları:
                  </span>
                  <ul className="space-y-1 text-xs text-industrial-700">
                    {sector.challenges.slice(0, 2).map((ch, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 bg-steel-blue rounded-full mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-industrial-100">
                <Link
                  href={`/sektorler/${sector.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-industrial-900 group-hover:text-steel-blue transition-colors"
                >
                  <span>Sektör Çözümlerini İncele</span>
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
