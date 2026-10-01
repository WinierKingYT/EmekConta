import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { companyData } from "@/data/company";
import { enProductsData } from "@/data/en/products";

export function EnglishFooter() {
  const location = companyData.locations[0];
  return <footer lang="en" className="border-t border-white/15 bg-[#191D20] text-sm text-[#B9BCB8]">
    <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
      <div className="lg:col-span-2"><Link href="/en" className="text-xl font-medium tracking-wide text-white">EMEK GASKETS</Link><p className="mt-5 max-w-md leading-relaxed">Industrial and marine sealing solutions. Standard gaskets, sheet materials and custom manufacturing from Istanbul.</p><p className="mt-6 text-xs leading-relaxed">{location.address}, {location.postalCode} {location.district} / {location.city}</p></div>
      <div><h2 className="mb-5 text-xs uppercase tracking-widest text-white">Products & supply</h2><ul className="space-y-3 text-xs">{enProductsData.slice(0,4).map(product => <li key={product.id}><Link href={`/en/products/${product.slug}`} className="hover:text-white">{product.name}</Link></li>)}<li><Link href="/en/products" className="text-[#DD895F] hover:underline">Explore the catalog →</Link></li><li><Link href="/en/export" className="hover:text-white">Export & international standards</Link></li></ul></div>
      <div><h2 className="mb-5 text-xs uppercase tracking-widest text-white">Contact & quotations</h2><div className="space-y-4"><a href={`tel:${companyData.phone}`} className="block hover:text-white">{companyData.phoneFormatted}</a><a href={`mailto:${companyData.quoteEmail}`} className="block break-all text-[#DD895F] hover:underline">{companyData.quoteEmail}</a><Link href="/en/contact" className="inline-block border-b border-white/30 pb-2 text-white">Request a quote ↗</Link></div></div>
    </Container>
    <div className="border-t border-white/15"><Container className="flex flex-col justify-between gap-5 py-6 text-xs sm:flex-row"><p>© 2026 Emek Conta. All rights reserved.</p><div className="flex flex-wrap gap-5"><Link href="/kvkk" className="hover:text-white">Privacy notice (TR)</Link><Link href="/cerez-politikasi" className="hover:text-white">Cookie policy (TR)</Link><Link href="/" className="hover:text-white">Türkçe</Link></div></Container></div>
  </footer>;
}
