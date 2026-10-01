import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { sectorsData } from "@/data/sectors";
import { ArrowRightIcon } from "@/components/icons/Icons";
export function SectorsSection() {
  return (
    <section className="bg-[#E7E3DC] py-20 text-[#191D20] sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5"><p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#A23A10]">04 / Uygulama alanları</p><h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.045em] sm:text-5xl">Karada. Denizde.<br />Her kritik bağlantıda.</h2><p className="mt-6 max-w-sm text-sm leading-relaxed text-[#62635F]">Farklı çalışma şartları, farklı malzemeler. Sektörünüzün ihtiyacına uygun çözümleri inceleyin.</p><div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-xl"><Image src="/images/hero/hero-slide-3.webp" alt="Denizcilik ve sanayi uygulamalarına yönelik salmastra ve sızdırmazlık ürünleri" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" /></div></div>
          <div className="lg:col-span-7"><div className="border-t border-[#191D20]/20">{sectorsData.map((sector, index) => <Link key={sector.id} href={`/sektorler/${sector.slug}`} className="group flex items-center gap-5 border-b border-[#191D20]/15 py-5 transition-colors hover:text-[#A23A10] focus-visible:outline focus-visible:outline-2 focus-visible:outline-rust"><span className="text-[11px] text-[#74756E]">{String(index + 1).padStart(2, "0")}</span><span className="flex-1 text-base font-medium sm:text-lg">{sector.name}</span><ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>)}</div></div>
        </div>
      </Container>
    </section>
  );
}
