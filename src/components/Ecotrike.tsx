"use client";

import Image from "next/image";
import { useState } from "react";
import { ECOTRIKE_SPECS, ECOTRIKE_FEATURES, ECOTRIKE_HIGHLIGHTS } from "@/lib/data";

const ECOTRIKE_VARIANTS = [
  {
    id: "tiger",
    name: "Tiger Print Heritage",
    tagline: "Bold Royal Bengal Tiger Aesthetic",
    img: "/assets/images/tiger-rickshaw.png",
    alt: "Xeltra EcoTrike Tiger Print Edition",
    desc: "Celebrating Bangladesh national icon with custom tiger stripe canopy, high-strength fiberglass, and solar battery swap setup.",
  },
  {
    id: "ctg",
    name: "Chittagong Coastal Spec",
    tagline: "Weather-Shielded Urban Cruiser",
    img: "/assets/images/chittagong-rickshaw1.png",
    alt: "Xeltra EcoTrike Chittagong Edition",
    desc: "Reinforced anti-rust chassis built for high humidity coastal conditions and steep city gradient climbs.",
  },
  {
    id: "dhaka",
    name: "Dhaka Metro Shuttle",
    tagline: "Compact Rapid Commuter",
    img: "/assets/images/dhaka-rickshaw.png",
    alt: "Xeltra EcoTrike Dhaka Edition",
    desc: "Optimized turning radius for tight city traffic, dual LED headlamps, digital dashboard & fast-swap lithium power.",
  },
];

export default function Ecotrike() {
  const [activeVariant, setActiveVariant] = useState(ECOTRIKE_VARIANTS[0]);

  return (
    <section id="ecotrike" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
            🛺 Official Product Prospectus
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
            Meet <span className="bg-gradient-to-r from-green-400 via-lime-400 to-emerald-300 bg-clip-text text-transparent">EcoTrike EVX1</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-4">
            Electric Three-Wheeler | Heritage Electrified
          </p>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The next generation of electric three-wheelers designed specifically for Bangladesh roads   combining safety, comfort, solar swapping, and long-range lithium efficiency.
          </p>
        </div>

        {/* Variant Showcase & Technical Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          {/* Main Visual Image Display & Top Pricing Card */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {/* Price & Purchase Card - Placed Directly Above Image */}
            <div className="bg-gradient-to-br from-emerald-950/90 via-slate-900/90 to-slate-950 border border-green-500/40 rounded-3xl p-5 shadow-xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-green-400 text-xs font-bold uppercase tracking-widest block">
                      Official Pricing
                    </span>
                    <span className="bg-green-500/20 text-green-300 border border-green-500/30 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                      EVX1 Prospectus
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight text-green-400">
                    ৳2,20,000 <span className="text-slate-400 text-sm font-normal">/ unit (Starting From)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-xs">
                  <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">To Purchase / Enquire:</span>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="tel:+8801814001419"
                      className="flex items-center gap-1.5 text-slate-200 hover:text-green-400 transition-colors font-medium bg-slate-900/80 px-3 py-1.5 rounded-xl border border-white/10"
                    >
                      <span>📞</span>
                      <span>+8801814001419</span>
                    </a>
                    <a
                      href="https://www.xeltraenergy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-200 hover:text-green-400 transition-colors font-medium bg-slate-900/80 px-3 py-1.5 rounded-xl border border-white/10"
                    >
                      <span>🌐</span>
                      <span>xeltraenergy.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle Display Box */}
            <div className="relative h-[360px] sm:h-[440px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 group">
              <Image
                src={activeVariant.img}
                alt={activeVariant.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-lg">
                <span className="text-green-400 text-xs font-bold uppercase tracking-widest block mb-1">
                  {activeVariant.tagline}
                </span>
                <h4 className="text-white font-black text-lg sm:text-xl">{activeVariant.name}</h4>
                <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">{activeVariant.desc}</p>
              </div>
            </div>

            {/* Variant Selector Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {ECOTRIKE_VARIANTS.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setActiveVariant(variant)}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                    activeVariant.id === variant.id
                      ? "bg-green-500/20 border-green-500 text-green-400 shadow-lg shadow-green-500/10"
                      : "bg-slate-900/60 border-white/5 text-slate-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Technical Performance Grid */}
          <div className="lg:col-span-5 flex flex-col space-y-4 h-full">
            <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 backdrop-blur-xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">⚡</span>
                  <h3 className="text-xl font-bold text-white tracking-tight">Technical Specs</h3>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  {ECOTRIKE_SPECS.map((spec, i) => (
                    <div
                      key={i}
                      className="bg-slate-950/80 border border-white/5 rounded-2xl p-4 hover:border-green-500/40 transition-all group"
                    >
                      <div className="text-2xl mb-1.5 group-hover:scale-110 transition-transform">{spec.icon}</div>
                      <div className="text-white font-black text-base sm:text-lg tracking-tight">{spec.value}</div>
                      <div className="text-slate-400 text-xs font-semibold">{spec.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Heritage Modernism & Solar-Powered Charging Cards Side-by-Side (Pasha Pashi) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {ECOTRIKE_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl hover:border-green-500/40 transition-all flex items-start gap-5 shadow-xl group"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center shrink-0 text-3xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <span className="text-green-400 text-xs font-bold uppercase tracking-widest block mb-1">
                  Core Concept
                </span>
                <h4 className="text-white font-black text-xl mb-2 group-hover:text-green-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Key Safety & Comfort Features Grid Section */}
        <div className="bg-slate-900/40 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-green-400 text-xs font-bold uppercase tracking-widest block mb-1">
                Engineering & Build Quality
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Key Safety & Comfort Features
              </h3>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Purpose-built for demanding urban conditions with heavy-duty components and rider comfort in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ECOTRIKE_FEATURES.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 bg-slate-950/70 border border-white/5 hover:border-green-500/40 p-4 rounded-2xl transition-all duration-300 group shadow-sm hover:shadow-green-500/5"
              >
                <div className="w-8 h-8 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center shrink-0 text-sm font-bold group-hover:bg-green-500 group-hover:text-slate-950 transition-colors">
                  ✓
                </div>
                <span className="text-slate-200 font-semibold text-sm sm:text-base leading-snug group-hover:text-white transition-colors">
                  {feat}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-slate-500">
            Specifications, range and battery configuration may vary by model and operating conditions. | Official Product Prospectus | EcoTrike EVX1
          </div>
        </div>
      </div>
    </section>
  );
}
