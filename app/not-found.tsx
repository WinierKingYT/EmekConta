import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 bg-industrial-50 flex items-center justify-center min-h-[60vh]">
      <Container size="narrow" className="text-center">
        <span className="font-mono text-xs font-bold text-steel-blue tracking-widest uppercase block mb-2">
          Hata Kodu 404
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-industrial-900 tracking-tight">
          Sayfa Bulunamadı
        </h1>
        <p className="mt-4 text-base text-industrial-600 max-w-md mx-auto">
          Aradığınız teknik doküman, ürün veya sayfa taşınmış veya yayından kaldırılmış olabilir. Ana sayfaya dönebilir veya ürün kataloğumuzu inceleyebilirsiniz.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            Ana Sayfaya Dön
          </Button>
          <Button href="/urunler" variant="outline" size="md">
            Ürün Kataloğu
          </Button>
          <Button href="/iletisim" variant="ghost" size="md">
            İletişim
          </Button>
        </div>
      </Container>
    </div>
  );
}
