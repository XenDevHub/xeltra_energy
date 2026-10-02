"use client";
import Image from "next/image";
import { CONTRIBUTIONS } from "@/lib/data";
import SolarInstallationsSlider from "./SolarInstallationsSlider";

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

        {/* Feature Grid / Cards   Mission, Vision, Impact Thesis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-slate-950/60 border border-white/5 rounded-3xl p-8 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-950/30 group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Mission</h3>
              </div>
              <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Leading sustainable EV charging infrastructure in Bangladesh through innovation and commitment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Our mission is to create a smart, accessible, and eco-friendly energy ecosystem, reducing Bangladesh&apos;s reliance on fossil fuels while boosting the nation&apos;s commitment to a greener and more sustainable future.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-slate-950/60 border border-white/5 rounded-3xl p-8 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-950/30 group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                  🌟
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Vision</h3>
              </div>
              <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Xeltra Energy&apos;s vision is to build Bangladesh&apos;s first mobile energy platform, using rooftop solar, lithium-ion battery storage, and electric delivery vehicles to provide reliable, zero-emission power on demand.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Impact Thesis */}
          <div className="bg-slate-950/60 border border-white/5 rounded-3xl p-8 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-green-950/30 group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                  📈
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Impact Thesis</h3>
              </div>
              <ul className="space-y-2.5 text-slate-300 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Accelerate EV adoption in Bangladesh.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Cut urban air pollution and fossil fuel dependence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Increase daily income for millions of 3 wheeler drivers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Build climate-aligned infrastructure at national scale.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Installation Highlights */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <SolarInstallationsSlider />
        </div>
      </div>
    </section>
  );
}
