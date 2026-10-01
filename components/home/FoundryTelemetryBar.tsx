"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export function FoundryTelemetryBar() {
  const metrics = [
    {
      label: "SPIRAL SARIM İSTASYONU",
      status: "AKTİF",
      detail: "ASME B16.20 (1/2\" – 60\" Class 150-2500)",
      isLive: true,
    },
    {
      label: "CNC BIÇAK & SU JETİ",
      status: "HAZIR",
      detail: "±0.1 mm Mikron Toleranslı CAD Kesim",
      isLive: true,
    },
    {
      label: "HAMMADDE STOĞU",
      status: "DOLU",
      detail: "316L, Grafit, Saf PTFE, Klingrit Levha",
      isLive: true,
    },
    {
      label: "PROFORMA RFQ SLA",
      status: "30 DK",
      detail: "Mühendislik Departmanı İnceleme Hızı",
      isLive: false,
    },
  ];

  return (
    <section className="bg-industrial-950 border-y border-industrial-800 relative z-20 text-xs font-mono">
      {/* Background blueprint micro-dots */}
      <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />

      <Container className="relative py-3">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 text-industrial-300">
          {/* Badge: Live Telemetry Indicator */}
          <div className="flex items-center gap-2 text-[11px] shrink-0 font-bold tracking-widest text-rust uppercase border-b lg:border-b-0 lg:border-r border-industrial-800 pb-2 lg:pb-0 lg:pr-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rust opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rust"></span>
            </span>
            <span>İMALAT VE ATÖLYE TELEMETRİSİ:</span>
          </div>

          {/* Metric Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6 flex-1">
            {metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[10px] text-industrial-400">
                  {m.isLive ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-rust" />
                  )}
                  <span className="font-semibold text-white truncate">{m.label}</span>
                </div>
                <div className="text-[11px] text-industrial-200 mt-0.5 truncate font-medium">
                  {m.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
