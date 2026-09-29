"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error caught:", error);
  }, [error]);

  return (
    <html lang="tr">
      <body className="bg-slate-900 text-slate-100 min-h-screen flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-slate-800 border border-slate-700 p-8 text-center shadow-xl">
          <div className="w-12 h-12 bg-red-900/50 border border-red-500 text-red-300 flex items-center justify-center mx-auto mb-4 font-mono font-bold text-xl">
            !
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Sistem Hatası</h2>
          <p className="text-sm text-slate-300 mb-6">
            Uygulama çalışırken kritik bir hata oluştu.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => reset()}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
            >
              Yeniden Başlat
            </button>
            <a
              href="/"
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold transition-colors"
            >
              Ana Sayfa
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
