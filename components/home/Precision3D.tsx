"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
const Scene = dynamic(() => import("@/components/layout/Header3DScene").then(module => module.Header3DScene), { ssr: false });

class SceneBoundary extends React.Component<{ children: React.ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

export function Precision3D() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);
    const observer = new IntersectionObserver(entries => setVisible(entries[0].isIntersecting));
    if (panelRef.current) observer.observe(panelRef.current);
    return () => { observer.disconnect(); media.removeEventListener("change", updateMotion); };
  }, []);
  return (
    <div ref={panelRef} className="relative mt-14 min-h-[340px] overflow-hidden rounded-xl border border-white/15 bg-[#15191B] sm:mt-20" role="img" aria-label="Dönen spiral conta geometrisi; temsili üç boyutlu görsel">
      <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-1/2 h-52 w-52 -translate-y-1/2 rounded-full border-[20px] border-[#6D4736]/30 sm:right-[15%]"><div className="absolute inset-5 rounded-full border border-[#B98564]/35" /></div>
      {visible && !reducedMotion && <SceneBoundary><Scene focused /></SceneBoundary>}
      <div className="pointer-events-none relative z-10 max-w-[240px] px-7 py-10 sm:max-w-xs sm:p-10"><p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#DD895F]">Detayın geometrisi</p><h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">Hassasiyet,<br />her katmanda.</h3><p className="mt-4 text-sm leading-relaxed text-[#B9BCB8]">Malzeme, sarım ve ölçü. Güvenilir bağlantının birbirini tamamlayan parçaları.</p></div>
      <span className="absolute bottom-5 right-6 z-10 text-[10px] text-[#B9BCB8]">Temsili conta geometrisi</span>
    </div>
  );
}
