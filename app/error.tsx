"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Router Error caught:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-industrial-50 py-16">
      <Container className="max-w-xl text-center">
        <div className="w-16 h-16 bg-red-100 border border-red-300 text-red-700 flex items-center justify-center font-mono font-bold text-2xl mx-auto mb-6 rounded-md">
          !
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-industrial-900 mb-3">
          Bir Hata Oluştu
        </h1>
        <p className="text-sm text-industrial-600 mb-8 leading-relaxed">
          Sayfa yüklenirken beklenmedik bir durum meydana geldi. Lütfen sayfayı yenilemeyi deneyin veya ana sayfaya dönün.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="accent" onClick={() => reset()}>
            Tekrar Dene
          </Button>
          <Button href="/" variant="outline">
            Ana Sayfaya Dön
          </Button>
        </div>
        {process.env.NODE_ENV === "development" && error?.message && (
          <div className="mt-8 p-4 bg-industrial-900 text-left text-xs font-mono text-red-300 border border-industrial-700 rounded-md overflow-x-auto">
            <div className="text-industrial-400 mb-1 font-bold">Teknik Hata Detayı:</div>
            {error.message}
          </div>
        )}
      </Container>
    </div>
  );
}
