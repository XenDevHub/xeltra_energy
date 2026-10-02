"use client";

import { useState } from "react";
import Image from "next/image";

export default function MarketAnalysis() {
  const [activeTab, setActiveTab] = useState<"comparison" | "market">("comparison");

  return (
    <section id="market-analysis" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 shadow-lg backdrop-blur-md">
            📊 Strategic Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Market Analysis & <span className="bg-gradient-to-r from-green-400 to-lime-300 bg-clip-text text-transparent">Competitive Edge</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Why Xeltra Energy is revolutionary compared to traditional lead-acid battery electric three-wheelers in Bangladesh.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-900/80 p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl inline-flex gap-2">
            <button
              onClick={() => setActiveTab("comparison")}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === "comparison"
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-900/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ⚡ Technology Comparison
            </button>
            <button
              onClick={() => setActiveTab("market")}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === "market"
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-900/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              📈 Market Opportunity
            </button>
          </div>
        </div>

        {activeTab === "comparison" ? (
          /* Comparison Table / Grid */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Traditional Rickshaws */}
            <div className="bg-slate-900/40 border border-red-500/20 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Traditional Infrastructure</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Lead-Acid Rickshaws</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center text-xl">
                  ⚠️
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3 bg-red-500/5 p-3.5 rounded-xl border border-red-500/10">
                  <span className="text-red-400 font-bold">❌ 8–10 Hours</span>
                  <span>Long overnight charging time causing lost earning hours for drivers.</span>
                </li>
                <li className="flex items-start gap-3 bg-red-500/5 p-3.5 rounded-xl border border-red-500/10">
                  <span className="text-red-400 font-bold">❌ 6–9 Months</span>
                  <span>Short battery lifespan; requires frequent expensive battery replacements.</span>
                </li>
                <li className="flex items-start gap-3 bg-red-500/5 p-3.5 rounded-xl border border-red-500/10">
                  <span className="text-red-400 font-bold">❌ High Grid Load</span>
                  <span>Unregulated grid charging causing power stress & high electricity bills.</span>
                </li>
                <li className="flex items-start gap-3 bg-red-500/5 p-3.5 rounded-xl border border-red-500/10">
                  <span className="text-red-400 font-bold">❌ Heavy Weight</span>
                  <span>Lead batteries weigh 120kg+, reducing speed, efficiency, and range.</span>
                </li>
                <li className="flex items-start gap-3 bg-red-500/5 p-3.5 rounded-xl border border-red-500/10">
                  <span className="text-red-400 font-bold">❌ Thermal Hazards</span>
                  <span>No smart thermal sensing, prone to battery swelling and acid leaks.</span>
                </li>
              </ul>
            </div>

            {/* Xeltra EcoTrike + Solar Swapping */}
            <div className="bg-gradient-to-br from-green-950/40 via-slate-900/60 to-slate-900/80 border border-green-500/30 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-green-950/40">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Xeltra Next-Gen Ecosystem</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Li-Ion + Solar Swapping</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-green-500/20 text-green-400 flex items-center justify-center text-xl shadow-lg shadow-green-500/30">
                  ⚡
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3 bg-green-500/10 p-3.5 rounded-xl border border-green-500/20">
                  <span className="text-green-400 font-bold">✅ 2-Minute Swap</span>
                  <span>Swap empty battery for full Li-ion pack at Xeltra stations; zero downtime.</span>
                </li>
                <li className="flex items-start gap-3 bg-green-500/10 p-3.5 rounded-xl border border-green-500/20">
                  <span className="text-green-400 font-bold">✅ 3+ Years Lifespan</span>
                  <span>High-cycle LiFePO4 cells lasting over 2,500+ charge cycles.</span>
                </li>
                <li className="flex items-start gap-3 bg-green-500/10 p-3.5 rounded-xl border border-green-500/20">
                  <span className="text-green-400 font-bold">✅ 100% Solar-Powered</span>
                  <span>Charged via 210+ solar panels rooftop infrastructure, zero grid strain.</span>
                </li>
                <li className="flex items-start gap-3 bg-green-500/10 p-3.5 rounded-xl border border-green-500/20">
                  <span className="text-green-400 font-bold">✅ 60% Lighter</span>
                  <span>Lightweight battery pack increases range (100+ km) and acceleration.</span>
                </li>
                <li className="flex items-start gap-3 bg-green-500/10 p-3.5 rounded-xl border border-green-500/20">
                  <span className="text-green-400 font-bold">✅ Smart IoT & BMS</span>
                  <span>Real-time GPS, remote diagnostics, and heat sensors for ultimate safety.</span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          /* Market Opportunity Highlights */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-green-500/40 transition-all">
              <div className="text-4xl font-black text-green-400 mb-2">4,000,000+</div>
              <div className="text-white font-bold text-lg mb-3">Electric Three-Wheelers in BD</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Bangladesh has one of the largest fleets of electric three-wheelers worldwide, representing a massive market for battery swapping & solar charging depots.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-green-500/40 transition-all">
              <div className="text-4xl font-black text-lime-400 mb-2">৳35,000+</div>
              <div className="text-white font-bold text-lg mb-3">Driver Annual Savings</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                By switching from lead-acid battery replacement cycles to Xeltra Battery Swapping subscription, drivers save up to 40% on operational costs.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-green-500/40 transition-all">
              <div className="text-4xl font-black text-emerald-400 mb-2">75% CO₂</div>
              <div className="text-white font-bold text-lg mb-3">Carbon Reduction</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Solar-powered battery swapping eliminates fossil-fuel electricity dependence, directly supporting Bangladesh National ESG Goals.
              </p>
            </div>
          </div>
        )}

        {/* Strategy + Challenge + Solution */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
              ⚡ The Full Picture
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Strategy, Challenge &amp; <span className="text-green-400">Our Solution</span>
            </h3>
          </div>

          {/* The Strategy */}
          <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-xl mb-8">
            <h4 className="text-lg font-black text-white mb-4 flex items-center gap-2">
              <span className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-lg">⚡</span>
              The Strategy
            </h4>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Xeltra Energy is developing an innovative mobile clean-energy platform that integrates rooftop solar generation, portable battery storage, and electric mobility to maximize commercial value. The flagship project features a <span className="text-white font-bold">125 kW rooftop solar plant</span> across approximately <span className="text-white font-bold">10,000 square feet</span>, backed by three portable lithium-ion battery systems and an electric vehicle for mobile distribution. Rather than relying on a traditional single-customer solar model, Xeltra delivers clean power directly to high-margin off-takers, including three-wheeler charging stations, commercial clients, temporary work sites, and live events.
            </p>
            <div className="bg-gradient-to-br from-green-950/60 to-emerald-950/40 border border-green-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="text-4xl shrink-0">📈</div>
              <div>
                <div className="text-green-400 font-black text-2xl">৳30,40,875</div>
                <div className="text-white font-bold text-sm mt-0.5">Projected Annual Operating Profit (EBITDA)</div>
                <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                  Initial feasibility modeling based on an average of 5 peak-sun-hours per day. This baseline projection will be validated through detailed technical design, key off-take contracts, and regulatory approvals ahead of capital raising.
                </p>
              </div>
            </div>
          </div>

          {/* Challenge + Solution side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The Challenge */}
            <div className="bg-red-950/20 border border-red-500/20 rounded-3xl p-8 backdrop-blur-xl">
              <h4 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                <span className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-lg">⚠️</span>
                The Challenge
              </h4>
              <ul className="space-y-3">
                {[
                  "Insufficient and unreliable EV charging infrastructure.",
                  "Three-wheeler drivers can lose productive time during long charging cycles.",
                  "Businesses and temporary sites need dependable electricity during grid interruptions.",
                  "Diesel generators are costly, noisy, polluting and maintenance-intensive.",
                  "Events, construction sites and remote communities often need temporary or mobile power.",
                  "Demand is growing for quiet, portable and lower-emission energy solutions.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-red-500/5 border border-red-500/10 rounded-xl px-4 py-3 text-sm text-slate-300">
                    <span className="text-red-400 mt-0.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Solution */}
            <div className="bg-green-950/20 border border-green-500/20 rounded-3xl p-8 backdrop-blur-xl">
              <h4 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                <span className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-lg">💡</span>
                Our Solution
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: "☀️", title: "Solar-powered Generation", desc: "Clean, renewable electricity generation at the source." },
                  { icon: "🔋", title: "Portable Battery Storage", desc: "High-capacity energy storage for on-demand use." },
                  { icon: "🚚", title: "Mobile Power Delivery", desc: "Direct delivery to off-takers and temporary sites." },
                  { icon: "⚡", title: "Fast EV Charging", desc: "Reliable infrastructure for electric mobility." },
                  { icon: "📈", title: "Multiple Revenue Streams", desc: "Serving diverse customer segments efficiently." },
                  { icon: "🔄", title: "Grid Interaction", desc: "Potential integration through applicable net-metering framework." },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 border border-white/5 rounded-2xl p-4 hover:border-green-500/30 transition-colors group">
                    <div className="text-xl mb-2 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                    <div className="font-bold text-white text-sm mb-1">{item.title}</div>
                    <div className="text-slate-400 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Future of Parking & Charging Station */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
              🔮 Vision 2030
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              The Future of <span className="text-green-400">Parking &amp; Charging Stations</span>
            </h3>
            <p className="text-slate-400 text-base mt-3 max-w-2xl mx-auto">
              A fully integrated, solar-powered smart hub — where EVs charge, people relax, and clean energy flows 24/7. Powered by Xeltra Energy.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-green-950/30 group max-w-5xl mx-auto">
            <Image
              src="/assets/images/future-charging-station.png"
              alt="Future Xeltra EV Charging and Parking Station with solar canopy, cafe, and car wash"
              width={1600}
              height={900}
              className="w-full h-auto object-contain group-hover:scale-102 transition-transform duration-700 block"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent pointer-events-none" />
            {/* Bottom Info Bar */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-3">
                {["Solar Canopy", "EV Fast Charging", "Battery Swap", "Xeltra Cafe", "Car Wash", "Smart Security"].map((tag) => (
                  <span key={tag} className="bg-green-500/20 border border-green-500/30 text-green-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="text-white font-black text-lg sm:text-2xl">CTG EV Station &amp; Charging</h4>
              <p className="text-green-400 font-semibold text-xs sm:text-sm mt-0.5">Powered by Xeltra Energy</p>
            </div>
          </div>

          {/* Feature Cards below image */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
            {[
              { icon: "☀️", label: "Solar Canopy" },
              { icon: "⚡", label: "Fast Chargers" },
              { icon: "🔋", label: "Battery Swap" },
              { icon: "☕", label: "Xeltra Cafe" },
              { icon: "🚿", label: "Car Wash" },
              { icon: "🛡️", label: "Smart Security" },
            ].map((f, i) => (
              <div key={i} className="bg-slate-900/60 border border-white/8 rounded-2xl p-4 text-center hover:border-green-500/40 transition-colors">
                <div className="text-2xl mb-2">{f.icon}</div>
                <div className="text-slate-300 text-xs font-semibold">{f.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
