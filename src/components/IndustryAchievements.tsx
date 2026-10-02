"use client";

import { ACHIEVEMENTS, GLOBAL_PARTNERS } from "@/lib/data";

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
