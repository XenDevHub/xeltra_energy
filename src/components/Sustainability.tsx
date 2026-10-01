"use client";

const SDG_GOALS = [
  {
    goal: "SDG 7",
    title: "Affordable & Clean Energy",
    desc: "Deploying solar-powered charging infrastructure to provide accessible, low-cost clean power across Bangladesh.",
    icon: "☀️",
  },
  {
    goal: "SDG 11",
    title: "Sustainable Cities & Communities",
    desc: "Electrifying urban three-wheeler transportation to reduce smog, noise, and city traffic pollution.",
    icon: "🏙️",
  },
  {
    goal: "SDG 13",
    title: "Climate Action",
    desc: "Replacing fossil-fuel grid dependent lead-acid charging with 100% solar generation to offset CO₂ emissions.",
    icon: "🌍",
  },
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-24 bg-slate-900/40 relative overflow-hidden border-y border-white/5">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
            🌱 ESG & Sustainability Commitment
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Aligned with UN <span className="text-green-400">Sustainable Goals</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every solar panel installed and battery swapped directly contributes to Bangladesh&apos;s national climate action strategy.
          </p>
        </div>

        {/* SDG Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SDG_GOALS.map((item) => (
            <div
              key={item.goal}
              className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-green-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {item.goal}
                </span>
                <span className="text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
