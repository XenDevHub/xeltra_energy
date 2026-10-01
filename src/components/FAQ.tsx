"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How fast is the battery swapping process for electric rickshaws?",
    a: "At Xeltra Energy battery swap depots, drivers swap their empty battery pack for a fully charged lithium battery in under 120 seconds (2 minutes). There is no waiting for hours as required by traditional lead-acid charging.",
  },
  {
    q: "How much money can a rooftop solar installation save my home or business?",
    a: "Xeltra Rooftop Solar + Energy Storage Systems (ESS) typically reduce monthly grid electricity bills by 70% to 90%. Use our interactive ROI calculator to estimate exact savings based on your current monthly bill.",
  },
  {
    q: "How does Xeltra ensure battery safety against overheating or fires?",
    a: "Every Xeltra lithium-ion battery pack features an integrated Smart BMS (Battery Management System) equipped with automated thermal sensors, cell-balancing microprocessors, and remote IoT GPS diagnostics.",
  },
  {
    q: "What regulatory licenses and certifications does Xeltra Energy hold?",
    a: "Xeltra Energy Ltd has formally applied for EV Charging Station licenses from SREDA (Sustainable and Renewable Energy Development Authority) and maintains strategic partnerships with top international solar and battery hardware manufactures.",
  },
  {
    q: "How long do Xeltra Lithium-Ion battery packs last compared to lead-acid batteries?",
    a: "Traditional lead-acid batteries degrade within 6–9 months. Xeltra's LiFePO4 battery packs deliver over 2,500+ full charge cycles, lasting 3+ years under heavy daily operation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
            ❓ Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Frequently Asked <span className="text-green-400">Questions</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Everything you need to know about Xeltra Solar, Battery Swapping, and EcoTrike technology.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/60 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-green-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm shrink-0 transition-transform ${isOpen ? "rotate-180 bg-green-500/20 text-green-400" : ""}`}>
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
