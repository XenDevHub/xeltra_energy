"use client";

import Image from "next/image";
import { useState } from "react";
import { ECOTRIKE_SPECS, ECOTRIKE_FEATURES } from "@/lib/data";

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
    img: "/assets/images/ctg-rickshaw.png",
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
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
            🛺 Flagship Vehicle
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Meet <span className="bg-gradient-to-r from-green-400 via-lime-400 to-emerald-300 bg-clip-text text-transparent">EcoTrike EVX1</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The next generation of electric three-wheelers designed specifically for Bangladesh roads — combining safety, comfort, solar swapping, and long-range lithium efficiency.
          </p>
        </div>

        {/* Variant Showcase & Visual Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Main Visual Image Display */}
          <div className="lg:col-span-7 relative">
            <div className="relative h-96 sm:h-[450px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-slate-900 to-slate-950 group">
              <Image
                src={activeVariant.img}
                alt={activeVariant.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                <span className="text-green-400 text-xs font-bold uppercase tracking-widest block mb-1">
                  {activeVariant.tagline}
                </span>
                <h4 className="text-white font-bold text-lg">{activeVariant.name}</h4>
                <p className="text-slate-300 text-xs mt-1">{activeVariant.desc}</p>
              </div>
            </div>

            {/* Variant Selector Buttons */}
            <div className="flex gap-4 mt-6">
              {ECOTRIKE_VARIANTS.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setActiveVariant(variant)}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all border ${activeVariant.id === variant.id
                      ? "bg-green-600/20 border-green-500 text-green-400 shadow-md"
                      : "bg-slate-900/60 border-white/5 text-slate-400 hover:text-white"
                    }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>

          {/* Key Specs Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span>⚡ Technical Performance</span>
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {ECOTRIKE_SPECS.map((spec, i) => (
                <div key={i} className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 backdrop-blur-xl hover:border-green-500/30 transition-all">
                  <div className="text-2xl mb-1">{spec.icon}</div>
                  <div className="text-white font-black text-lg">{spec.value}</div>
                  <div className="text-slate-400 text-xs font-medium">{spec.label}</div>
                </div>
              ))}
            </div>

            {/* Key Features List */}
            <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 backdrop-blur-xl mt-6">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3 text-green-400">
                Key Safety & Comfort Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {ECOTRIKE_FEATURES.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
