"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Product, ProductCategory } from "@/lib/types";
import { ProductCard } from "./ProductCard";
import { SearchIcon } from "@/components/icons/Icons";

export function ProductFilter({ products, categories, initialCategory, initialQuery = "" }: { products: Product[]; categories: ProductCategory[]; initialCategory?: string; initialQuery?: string }) {
  const validCategory = categories.some(category => category.id === initialCategory) ? initialCategory! : "all";
  const [selectedCategory, setSelectedCategory] = useState(validCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  useEffect(() => { setSelectedCategory(validCategory); }, [validCategory]);
  useEffect(() => { setSearchQuery(initialQuery); }, [initialQuery]);
  const filteredProducts = useMemo(() => products.filter(product => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) return false;
    const query = searchQuery.toLocaleLowerCase("tr-TR").trim();
    return !query || [product.name, product.shortDescription, ...product.standards, ...product.materials].some(value => value.toLocaleLowerCase("tr-TR").includes(query));
  }), [products, selectedCategory, searchQuery]);
  const reset = () => { setSelectedCategory("all"); setSearchQuery(""); };
  return (
    <div className="space-y-8">
      <div className="space-y-6 border-y border-[#191D20]/15 py-7">
        <div className="relative max-w-xl"><label htmlFor="product-search" className="sr-only">Ürün, malzeme veya standart ara</label><SearchIcon className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-[#62635F]" /><input id="product-search" type="search" value={searchQuery} onChange={event => setSearchQuery(event.target.value)} placeholder="Ürün, malzeme veya standart ara" className="w-full rounded-lg border border-[#D9D5CD] bg-[#F8F6F2] py-4 pl-12 pr-4 text-sm text-[#191D20] placeholder:text-[#62635F] focus:outline-none focus:ring-2 focus:ring-rust" /></div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Ürün kategorileri">{[{ id: "all", name: "Tüm ürünler" }, ...categories].map(category => <button key={category.id} type="button" aria-pressed={selectedCategory === category.id} onClick={() => setSelectedCategory(category.id)} className={`rounded-full border px-4 py-2.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust ${selectedCategory === category.id ? "border-[#191D20] bg-[#191D20] text-white" : "border-[#CFCBC3] text-[#4D514B] hover:border-[#B7410E] hover:text-[#96350B]"}`}>{category.name} <span className="ml-2 opacity-75">{category.id === "all" ? products.length : products.filter(product => product.category === category.id).length}</span></button>)}</div>
      </div>
      <div className="flex items-center justify-between gap-4 text-xs text-[#62635F]"><p role="status" aria-live="polite">{filteredProducts.length} ürün gösteriliyor</p>{(selectedCategory !== "all" || searchQuery) && <button type="button" onClick={reset} className="text-[#96350B] underline underline-offset-4">Filtreleri temizle</button>}</div>
      {filteredProducts.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filteredProducts.map((product, index) => <ProductCard key={product.id} product={product} priority={index < 3} />)}</div> : <div className="rounded-xl border border-[#D9D5CD] py-16 text-center"><h2 className="text-xl font-medium text-[#191D20]">Aramanıza uygun ürün bulunamadı.</h2><p className="mx-auto mt-3 max-w-md px-5 text-sm text-[#62635F]">Başka bir malzeme veya standartla arayın. Özel bir ürün için teknik ekibimize ulaşabilirsiniz.</p><Link href="/teklif-iste" className="mt-6 inline-block text-sm text-[#96350B] underline underline-offset-4">Özel üretim için teklif iste</Link></div>}
    </div>
  );
}
