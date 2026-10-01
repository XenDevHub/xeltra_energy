"use client";

import { ACHIEVEMENTS, PARTNERS } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
            🏅 Milestones & Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Industry <span className="text-green-400">Achievements</span> & Partnerships
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Building strong regulatory compliance and strategic international alliances for long-term reliability.
          </p>
        </div>

        {/* Achievements Cards — Side-by-Side Icon & Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/60 border border-white/5 rounded-3xl p-8 backdrop-blur-xl hover:border-green-500/40 hover:shadow-xl hover:shadow-green-950/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Global Partners Ticker / Grid */}
        <div className="bg-slate-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
          <h3 className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            Strategic International Technology Partners
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center">
            {PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="bg-slate-950/80 border border-white/5 rounded-2xl p-4 text-center hover:border-green-500/30 transition-colors"
              >
                <div className="text-white font-black text-base">{partner.name}</div>
                <div className="text-green-400 text-xs font-medium">{partner.country}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
