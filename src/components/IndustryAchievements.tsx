"use client";

import { ACHIEVEMENTS, PARTNERS, GLOBAL_PARTNERS } from "@/lib/data";

export default function IndustryAchievements() {
  return (
    <section className="py-20 bg-slate-900/40 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5">
            🏅 Milestones & Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Industry Achievements &{" "}
            <span className="text-green-400">Partnerships</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Building strong regulatory compliance and strategic international
            alliances for long-term reliability.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950/80 border border-white/8 rounded-2xl p-6 hover:border-green-500/30 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-950/20 group flex flex-col gap-3"
            >
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h3 className="text-white font-bold text-base mb-1.5 group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Brands We Work With Banner */}
        <div className="bg-slate-950/60 border border-white/8 rounded-3xl p-8 text-center max-w-3xl mx-auto">
          <span className="text-green-400 text-xs font-bold uppercase tracking-widest bg-green-500/10 px-4 py-1.5 rounded-full border border-green-500/20 mb-3 inline-block">
            Our Ecosystem
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
            Brands We Work With
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto mb-8">
            Proudly partnering with innovative brands shaping the future of electric mobility and clean energy.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {PARTNERS.map((p) => (
              <div key={p.id} className="flex flex-col items-center gap-3 group">
                <div
                  className="bg-white/5 border border-white/10 rounded-2xl px-8 py-5 hover:border-green-500/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-950/30 flex items-center justify-center"
                  style={{ minWidth: "160px", minHeight: "90px" }}
                >
                  <img
                    src={p.logo}
                    alt={p.name + " logo"}
                    className="max-h-12 max-w-[130px] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="text-[10px] text-green-400/80 font-bold uppercase tracking-widest bg-green-500/10 px-3 py-0.5 rounded-full border border-green-500/20">
                  {p.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Hardware & Technology Partners Banner */}
        <div className="mt-12 text-center">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-6">
            Global Hardware & Technology Partners
          </span>
          <div className="flex flex-wrap justify-center gap-8 items-center text-slate-300 font-bold text-sm">
            {GLOBAL_PARTNERS.map((p) => (
              <span key={p.id} className="bg-slate-950/80 px-5 py-2.5 rounded-xl border border-white/5 hover:border-green-500/30 transition-colors shadow-lg">
                {p.name} ({p.country})
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
