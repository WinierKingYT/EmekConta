import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { productCategories } from "@/data/products";
import { ArrowRightIcon } from "@/components/icons/Icons";

export function CategoryGrid() {
  return (
    <section id="urun-gruplari" className="scroll-mt-24 bg-[#F2EFE9] py-20 text-[#191D20] sm:py-28">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#A23A10]">01 / Ürün koleksiyonu</p><h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.045em] sm:text-5xl">Doğru malzeme.<br />Güvenilir bağlantı.</h2></div>
          <div className="max-w-sm"><p className="mb-5 text-sm leading-relaxed text-[#62635F]">Basınç, sıcaklık ve uygulamanızın gereksinimlerine uygun sızdırmazlık ürünlerini keşfedin.</p><Link href="/urunler" className="inline-flex items-center gap-8 border-b border-[#191D20]/30 pb-2 text-sm font-medium hover:text-[#B7410E]">Tüm ürünleri incele <ArrowRightIcon className="h-4 w-4" /></Link></div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, idx) => (
            <Link key={category.id} href={`/urunler?kategori=${category.id}`} className={`group flex flex-col overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B7410E] ${idx === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2 bg-[#E4E0D8]" : "bg-[#EAE7E1]"}`}>
              <div className={`relative overflow-hidden ${idx === 0 ? "min-h-[320px] flex-1 sm:min-h-[430px]" : "h-48 sm:h-52"}`}>
                <span className="absolute left-6 top-6 z-10 text-[11px] tracking-widest text-[#686A65]">{String(idx + 1).padStart(2, "0")}</span>
                {category.image && <Image src={category.image} alt={category.name} fill sizes={idx === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"} className={`object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.04] ${idx === 0 ? "p-10 sm:p-16" : "px-10 py-6"}`} />}
              </div>
              <div className={`relative flex items-start justify-between gap-6 ${idx === 0 ? "p-7 sm:p-10" : "px-6 pb-6 pt-3"}`}>
                <div><h3 className={`${idx === 0 ? "text-2xl sm:text-3xl" : "text-lg"} font-medium leading-tight tracking-[-0.025em]`}>{category.name}</h3><p className="mt-3 max-w-md text-sm leading-relaxed text-[#62635F]">{category.shortDescription}</p></div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#191D20]/20 transition-colors group-hover:border-[#B7410E] group-hover:bg-[#B7410E] group-hover:text-white"><ArrowRightIcon className="h-4 w-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
