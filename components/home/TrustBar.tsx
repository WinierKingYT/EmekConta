import React from "react";
import { Container } from "@/components/ui/Container";
import { trustPillars } from "@/data/company";

export function TrustBar() {
  return (
    <section className="bg-industrial-950 border-b border-industrial-800 text-white py-6" aria-label="Temel Nitelikler">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-industrial-850">
          {trustPillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-center group ${
                idx > 0 ? "pt-4 md:pt-0 md:pl-6" : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rust shrink-0" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-white group-hover:text-rust transition-colors">
                  {pillar.label}
                </span>
              </div>
              <span className="text-xs text-industrial-400 font-sans pl-3.5">
                {pillar.detail}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
