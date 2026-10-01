"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { ArrowRightIcon } from "@/components/icons/Icons";
import { useRfqCart } from "@/lib/cart-context";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { addItem } = useRfqCart();
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-[#D9D5CD] bg-[#F8F6F2] text-[#191D20]">
      <Link href={`/urunler/${product.slug}`} className="relative block aspect-[4/3] bg-[#EAE7E1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-rust" aria-label={`${product.name} ürününü incele`}>
        {product.image ? <Image src={product.image} alt={product.name} fill priority={priority} sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-contain p-8 mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.04]" /> : <span className="absolute inset-0 flex items-center justify-center text-sm text-[#62635F]">{product.imagePlaceholderText}</span>}
        {product.drawingSupported && <span className="absolute left-5 top-5 text-[10px] uppercase tracking-widest text-[#96350B]">Özel üretime uygun</span>}
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-4 text-[11px] text-[#62635F]">{product.standards.slice(0, 2).join(" / ")}</p>
        <h3 className="text-xl font-medium leading-snug tracking-tight"><Link href={`/urunler/${product.slug}`} className="hover:text-[#A23A10]">{product.name}</Link></h3>
        <p className="mb-6 mt-3 text-sm leading-relaxed text-[#62635F]">{product.shortDescription}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-[#D9D5CD] pt-5">
          <Link href={`/urunler/${product.slug}`} className="inline-flex items-center gap-4 text-sm font-medium hover:text-[#A23A10]">Ürünü incele <ArrowRightIcon className="h-4 w-4" /></Link>
          <button type="button" onClick={() => addItem({ slug: product.slug, name: product.name, category: product.category, quantity: "50 Adet" })} aria-label={`${product.name} teklif listesine ekle`} className="rounded-lg border border-[#191D20]/25 px-3 py-2 text-xs font-medium transition-colors hover:border-[#B7410E] hover:bg-[#B7410E] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust">+ Teklif listesi</button>
        </div>
      </div>
    </article>
  );
}
