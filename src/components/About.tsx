"use client";
import Image from "next/image";
import { CONTRIBUTIONS } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/60 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
            Who We Are
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Pioneering <span className="text-green-400">Sustainable Energy</span> in Bangladesh
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Xeltra Energy Ltd is a forward-thinking green energy company committed to accelerating Bangladesh’s transition to clean power, smart energy storage, and zero-emission electric mobility.
          </p>
        </div>

        {/* Feature Grid / Cards — Icon and Title Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Vision */}
          <div className="bg-slate-950/60 border border-white/5 rounded-3xl p-8 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-950/30 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                🌱
              </div>
              <h3 className="text-xl font-bold text-white">Vision</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              To turn Bangladesh into a hub for sustainable transportation and renewable energy generation, drastically lowering carbon footprint across urban and rural transport networks.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-slate-950/60 border border-white/5 rounded-3xl p-8 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-950/30 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-white">Mission</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Delivering high-efficiency lithium-ion battery swap stations, rooftop solar systems, and eco-friendly electric vehicles (EcoTrike) that empower communities and business owners.
            </p>
          </div>

          {/* Core Excellence */}
          <div className="bg-slate-950/60 border border-white/5 rounded-3xl p-8 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-950/30 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-white">Core Excellence</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Equipped with Smart BMS heat monitoring, real-time IoT battery telematics, and international partnerships with global leaders in energy hardware.
            </p>
          </div>
        </div>

        {/* Installation Highlights */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Completed Solar Installations Across Key Regions
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                From Chittagong commercial hubs to Cumilla industrial parks, Xeltra Energy has already deployed commercial and residential rooftop solar units powering local infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {CONTRIBUTIONS.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 bg-white/5 rounded-xl p-3.5 border border-white/5 hover:border-green-500/40 transition-colors">
                    <span className="text-xl">📍</span>
                    <div>
                      <div className="text-white font-bold text-sm">{item.city}</div>
                      <div className="text-green-400 text-xs">{item.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/assets/images/solar-home.png"
                alt="Xeltra Energy rooftop solar installation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
              {/* Strong overlay so text is always readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-flex items-center gap-2 bg-green-600/90 backdrop-blur-md text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-lg">
                  ⚡ 5kW Rooftop Solar + ESS Battery Backup
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
