"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { SOLUTIONS } from "@/lib/data";

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState(SOLUTIONS[0].id);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && SOLUTIONS.some((s) => s.id === hash)) {
        setSelectedSolution(hash);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const activeSolution = SOLUTIONS.find((s) => s.id === selectedSolution) || SOLUTIONS[0];

  return (
    <section id="solutions" className="py-24 bg-slate-900/80 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
            ⚡ What We Offer
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Integrated Clean Energy <span className="text-green-400">Solutions</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From solar-powered EV swapping hubs to commercial rooftop solar setups and portable energy banks   powering homes, businesses, and transport.
          </p>
        </div>

        {/* Tab Buttons   Side-by-side Icon & Title */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {SOLUTIONS.map((sol) => {
            const isActive = sol.id === selectedSolution;
            return (
              <button
                key={sol.id}
                onClick={() => setSelectedSolution(sol.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300 backdrop-blur-xl ${
                  isActive
                    ? "bg-green-600 text-white shadow-xl shadow-green-900/40 border border-green-400/30 -translate-y-1"
                    : "bg-slate-950/60 text-slate-300 border border-white/5 hover:border-white/20 hover:bg-slate-900"
                }`}
              >
                <span className="text-2xl">{sol.icon}</span>
                <span>{sol.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Solution Spotlight */}
        <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-2xl shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual Image Container - Edge-to-Edge Fill */}
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 group shadow-2xl bg-slate-900/90">
              <Image
                src={activeSolution.img}
                alt={activeSolution.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4 flex items-end">
                <span className="bg-green-600/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-bold">
                  {activeSolution.tag}
                </span>
              </div>
            </div>

            {/* Info Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{activeSolution.icon}</span>
                <div>
                  <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {activeSolution.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    {activeSolution.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {activeSolution.description}
              </p>

              {/* EV Charging   Detailed Sub-Sections */}
              {activeSolution.id === "ev-charging" && activeSolution.ecosystem ? (
                <div className="space-y-5 mb-8">
                  {/* Xeltra Charging Ecosystem */}
                  <div className="bg-white/5 border border-white/8 rounded-2xl p-5 hover:border-green-500/30 transition-colors">
                    <h4 className="text-green-400 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span>🔋</span> Xeltra Charging Ecosystem
                    </h4>
                    <ul className="space-y-2">
                      {activeSolution.ecosystem.map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Station Formats */}
                  <div className="bg-white/5 border border-white/8 rounded-2xl p-5 hover:border-green-500/30 transition-colors">
                    <h4 className="text-green-400 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span>🏗️</span> Station Formats
                    </h4>
                    <div className="flex gap-3">
                      {activeSolution.stationFormats.map((sf: { size: string; label: string }, i: number) => (
                        <div
                          key={i}
                          className="flex-1 bg-green-500/10 border border-green-500/20 rounded-xl p-3 text-center"
                        >
                          <div className="text-white font-black text-xl leading-none">{sf.size}</div>
                          <div className="text-slate-400 text-xs mt-1">{sf.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="bg-white/5 border border-white/8 rounded-2xl p-5 hover:border-green-500/30 transition-colors">
                    <h4 className="text-green-400 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span>⚙️</span> Product Details
                    </h4>
                    <ul className="space-y-2">
                      {activeSolution.productDetails.map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                /* Default Specs Grid for other solutions */
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {activeSolution.specs.map((spec, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/5 rounded-xl p-4 hover:border-green-500/30 transition-colors">
                      <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
                        {spec.label}
                      </div>
                      <div className="text-white font-bold text-lg">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              <div className={`flex flex-col sm:flex-row gap-3 ${activeSolution.id === "ev-charging" ? "" : ""}`}>
                {activeSolution.id === "ev-charging" && (
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-black px-6 py-3.5 rounded-xl shadow-lg shadow-green-900/50 hover:-translate-y-0.5 transition-all text-sm relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="flex-shrink-0">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Get Your Swappable Charging Station Now
                  </a>
                )}
                <a
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-xl transition-all text-sm hover:-translate-y-0.5 ${
                    activeSolution.id === "ev-charging"
                      ? "bg-white/5 border border-white/15 text-slate-300 hover:border-green-500/40 hover:text-white"
                      : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg shadow-green-900/40"
                  }`}
                >
                  {activeSolution.id === "power-bank" ? "Become a Solar Plant Owner" : `Inquire About ${activeSolution.title}`}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
