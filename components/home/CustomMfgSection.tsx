import Image from "next/image";
import Link from "next/link";
import { Precision3D } from "./Precision3D";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/icons/Icons";

export function CustomMfgSection() {
  return (
    <section className="bg-[#191D20] py-20 text-white sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-6 text-[11px] uppercase tracking-[0.2em] text-[#DD895F]">02 / Size özel üretim</p>
            <h2 className="text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl">Standartların<br />ötesinde,<br /><span className="text-[#DD895F]">tam ölçünüzde.</span></h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#B9BCB8]">Her uygulama kataloğa sığmaz. Teknik resminizi, ölçülerinizi veya numunenizi ihtiyacınıza uygun bir sızdırmazlık çözümüne dönüştürüyoruz.</p>
            <div className="mt-8 space-y-4 border-t border-white/15 pt-6 text-sm text-[#D3D5CF]"><p>Teknik resim ve numuneye göre üretim</p><p>Standart ve özel formlarda hassas kesim</p><p>Prototipten seri üretime</p></div>
            <Link href="/ozel-uretim" className="mt-9 inline-flex items-center gap-8 border-b border-[#DD895F]/50 pb-3 text-sm font-medium text-[#DD895F] hover:text-white">Üretim yaklaşımımız <ArrowRightIcon className="h-4 w-4" /></Link>
          </div>
          <figure className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl"><Image src="/images/hero/cnc-cutting.jpg" alt="Teknik çizime göre conta levhası kesen CNC tezgâhı" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" /></div>
            <figcaption className="mt-4 flex flex-wrap justify-between gap-3 text-[11px] text-[#B9BCB8]"><span>Çizimden ürüne. Detaydan güvene.</span><span>Özel formlu conta kesimi</span></figcaption>
          </figure>
        </div>
        <Precision3D />
      </Container>
    </section>
  );
}
