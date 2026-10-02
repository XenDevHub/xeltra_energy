"use client";

import { useState } from "react";

const STEPS = [
  {
    step: "01",
    title: "Solar Generation",
    badge: "Rooftop Solar Array",
    icon: "☀️",
    desc: "Over 210+ high-efficiency monocrystalline solar panels capture solar energy during daylight hours, generating zero-carbon electricity.",
    metrics: "210+ Solar Panels | Zero Grid Load",
  },
  {
    step: "02",
    title: "Depot Smart Storage",
    badge: "130 kWh ESS Storage",
    icon: "🔋",
    desc: "Energy is transferred into Xeltra's 130 kWh Energy Storage System (ESS) equipped with automated battery temperature monitoring.",
    metrics: "130 kWh Storage | Automated Lockers",
  },
  {
    step: "03",
    title: "2-Minute Battery Swap",
    badge: "Zero Down-Time",
    icon: "⚡",
    desc: "Rickshaw drivers arrive at Xeltra swap hubs, scan their subscription QR code, and swap depleted battery for a 100% charged lithium pack in under 120 seconds.",
    metrics: "< 2 Minute Swap | 100km Range",
  },
  {
    step: "04",
    title: "Real-Time IoT Telematics",
    badge: "Smart BMS Protection",
    icon: "📡",
    desc: "Every battery pack features integrated IoT tracking, heat sensors, and automatic surge protection to ensure 100% driver and vehicle safety.",
    metrics: "GPS Live Tracking | Thermal Sensors",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
            ⚙️ The Xeltra Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            How Solar-to-Wheel <span className="text-green-400">Swapping Works</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A seamless 4-step clean energy loop from sunlight capture to zero-emission urban transport.
          </p>
        </div>

        {/* Step Numbers Nav */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {STEPS.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 backdrop-blur-xl ${
                  isActive
                    ? "bg-gradient-to-br from-green-950/80 to-slate-900 border-green-500/50 shadow-xl shadow-green-950/50 -translate-y-1"
                    : "bg-slate-900/40 border-white/5 hover:border-white/20 text-slate-400"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-2xl font-black ${isActive ? "text-green-400" : "text-slate-500"}`}>
                    {s.step}
                  </span>
                  <span className="text-2xl">{s.icon}</span>
                </div>
                <div className={`font-bold text-sm ${isActive ? "text-white" : "text-slate-300"}`}>
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box */}
        <div className="bg-slate-950/90 border border-green-500/30 rounded-3xl p-8 sm:p-12 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
                Step {STEPS[activeStep].step}   {STEPS[activeStep].badge}
              </span>
              <h3 className="text-3xl font-black text-white">
                {STEPS[activeStep].title}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {STEPS[activeStep].desc}
              </p>
              <div className="pt-2">
                <span className="bg-white/5 border border-white/10 text-lime-400 text-xs font-bold px-4 py-2 rounded-xl inline-block">
                  ⚡ Key Spec: {STEPS[activeStep].metrics}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-transparent border border-green-500/40 flex items-center justify-center text-6xl shadow-2xl animate-pulse">
                {STEPS[activeStep].icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
