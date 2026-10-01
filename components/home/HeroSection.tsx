import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons/Icons";

export function HeroSection({ language = "tr" }: { language?: "tr" | "en" }) {
  const en = language === "en";
  return (
    <section className="precision-hero relative overflow-hidden text-white">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
        <Image src="/images/hero/hero-slide-1.webp" alt={en ? "Spiral wound gaskets and precision measuring caliper" : "Spiral sarımlı contalar ve hassas ölçüm kumpası"} fill priority sizes="(max-width: 1024px) 100vw, 62vw" className="object-cover object-[58%_center]" />
        <div className="precision-hero-shade absolute inset-0" />
      </div>
      <Container className="relative z-10">
        <div className="grid min-h-[650px] lg:min-h-[740px] lg:grid-cols-12">
          <div className="flex flex-col justify-center py-16 sm:py-24 lg:col-span-7">
            <p className="mb-8 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#D5C6B9]"><span className="h-px w-8 bg-[#B7410E]" />{en ? "Emek Gaskets / Industrial sealing" : "Emek Conta / Endüstriyel sızdırmazlık"}</p>
            <h1 className="max-w-[760px] text-[clamp(2.8rem,6.8vw,6rem)] font-medium leading-[1.02] tracking-[-0.065em]">{en ? "Precision in" : "Her bağlantıda"}<br /><span className="text-[#DD895F]">{en ? "every connection." : "hassasiyet."}</span></h1>
            <p className="mt-7 max-w-[390px] text-base leading-relaxed text-[#D1D0CC] sm:text-lg">{en ? "Sealing solutions for industry and marine applications. From standard sizes to custom manufacturing." : "Sanayi ve denizcilik için sızdırmazlık çözümleri. Standart ölçüden size özel üretime."}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={en ? "/en/products" : "/urunler"} variant="accent" size="lg" className="gap-6">{en ? "Explore products" : "Ürünleri İncele"} <ArrowRightIcon className="h-4 w-4" /></Button>
              <Button href={en ? "/en/contact" : "/teklif-iste"} variant="outline" size="lg" className="gap-6">{en ? "Request a quote" : "Teklif İste"} <span aria-hidden="true">↗</span></Button>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] tracking-wide text-[#BABBB6]"><span>{en ? "DIN & ASME standards" : "DIN & ASME standartları"}</span><span className="h-3 w-px bg-white/20" aria-hidden="true" /><span>{en ? "Manufactured to your drawings" : "Teknik resme göre özel üretim"}</span></div>
          </div>
          <div className="hidden items-end justify-end pb-12 lg:col-span-5 lg:flex">
            <Link href={en ? "/en/products/spiral-sarimli-contalar" : "/urunler/spiral-sarimli-contalar"} className="group flex max-w-xs items-center gap-5 border-t border-white/35 pt-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white"><span className="text-[11px] text-white/65">01 /</span><div><span className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-white/65">{en ? "Product focus" : "Ürün odağı"}</span><span className="text-sm font-medium">{en ? "Spiral wound gaskets" : "Spiral sarımlı contalar"}</span></div><ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
          </div>
        </div>
      </Container>
      <div className="relative z-10 border-t border-white/15"><Container className="flex items-center justify-between gap-6 py-5 text-[10px] uppercase tracking-[0.16em] text-[#B7B9B5]"><span>{en ? "We know the material. We care about the detail." : "Malzemeyi tanırız. Detayı önemseriz."}</span><a href="#urun-gruplari" className="flex items-center gap-4 text-white hover:text-[#DD895F]">{en ? "Discover our solutions" : "Çözümleri keşfet"} <span aria-hidden="true">↓</span></a></Container></div>
    </section>
  );
}
