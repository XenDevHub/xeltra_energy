"use client";

import { useState } from "react";

export default function Calculator() {
  const [calcType, setCalcType] = useState<"solar" | "rickshaw">("solar");

  // Solar states
  const [monthlyBill, setMonthlyBill] = useState(15000); // BDT
  const [systemSize, setSystemSize] = useState(5); // kW

  // Rickshaw fleet states
  const [fleetSize, setFleetSize] = useState(5); // number of rickshaws

  // Solar calculations
  const solarSavingsMonthly = Math.round(monthlyBill * 0.8);
  const solarSavingsYearly = solarSavingsMonthly * 12;
  const solarCo2SavedYearly = (systemSize * 1.3 * 365).toFixed(0); // kg CO2

  // Rickshaw calculations
  const rickshawSavingsPerUnitMonthly = 4500; // BDT saved per rickshaw vs lead acid
  const totalFleetSavingsMonthly = fleetSize * rickshawSavingsPerUnitMonthly;
  const totalFleetSavingsYearly = totalFleetSavingsMonthly * 12;
  const rickshawCo2SavedYearly = (fleetSize * 1200).toFixed(0); // kg CO2

  return (
    <section id="calculator" className="py-24 bg-slate-900/60 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
            🧮 Interactive ROI Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Calculate Your <span className="text-green-400">Savings & ESG Impact</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Estimate how much money and carbon emissions you save by switching to Xeltra Solar or Xeltra Battery Swapping.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-2xl shadow-2xl">
          {/* Mode Switcher */}
          <div className="flex justify-center mb-10">
            <div className="bg-slate-900/90 p-1.5 rounded-2xl border border-white/10 inline-flex gap-2">
              <button
                onClick={() => setCalcType("solar")}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  calcType === "solar"
                    ? "bg-green-600 text-white shadow-lg shadow-green-900/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ☀️ Rooftop Solar
              </button>
              <button
                onClick={() => setCalcType("rickshaw")}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  calcType === "rickshaw"
                    ? "bg-green-600 text-white shadow-lg shadow-green-900/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                🛺 EV Battery Swap Fleet
              </button>
            </div>
          </div>

          {calcType === "solar" ? (
            /* Solar Calculator Inputs & Results */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-slate-300">Monthly Electricity Bill</span>
                    <span className="text-green-400">৳{monthlyBill.toLocaleString()} BDT</span>
                  </div>
                  <input
                    type="range"
                    min="3000"
                    max="100000"
                    step="1000"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full accent-green-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>৳3,000</span>
                    <span>৳100,000+</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-slate-300">Estimated Solar System Size</span>
                    <span className="text-green-400">{systemSize} kW</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="50"
                    step="1"
                    value={systemSize}
                    onChange={(e) => setSystemSize(Number(e.target.value))}
                    className="w-full accent-green-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>3 kW</span>
                    <span>50 kW</span>
                  </div>
                </div>
              </div>

              {/* Solar Output Box */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-green-500/30 rounded-2xl p-6 space-y-4 shadow-xl">
                <div className="text-center pb-4 border-b border-white/5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Estimated Yearly Savings</span>
                  <div className="text-4xl font-black text-green-400 mt-1">
                    ৳{solarSavingsYearly.toLocaleString()} <span className="text-sm font-normal text-slate-300">BDT</span>
                  </div>
                  <span className="text-xs text-slate-400 mt-1 block">Up to 80% bill reduction</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="text-xs text-slate-400">Monthly Savings</div>
                    <div className="text-lg font-bold text-white mt-0.5">৳{solarSavingsMonthly.toLocaleString()}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="text-xs text-slate-400">CO₂ Avoided / Year</div>
                    <div className="text-lg font-bold text-lime-400 mt-0.5">{solarCo2SavedYearly} kg</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Rickshaw Calculator Inputs & Results */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-slate-300">Number of Rickshaws / Fleet Size</span>
                    <span className="text-green-400">{fleetSize} Rickshaws</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={fleetSize}
                    onChange={(e) => setFleetSize(Number(e.target.value))}
                    className="w-full accent-green-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>1 Vehicle</span>
                    <span>100 Vehicles</span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 text-xs text-slate-300 leading-relaxed border border-white/5">
                  💡 <span className="font-bold text-white">Why Swapping Saves Money:</span> Lithium battery swapping eliminates lost charging hours, prolongs battery life from 8 months to 3+ years, and reduces total daily operational cost per driver.
                </div>
              </div>

              {/* Rickshaw Output Box */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-green-500/30 rounded-2xl p-6 space-y-4 shadow-xl">
                <div className="text-center pb-4 border-b border-white/5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Fleet Yearly Savings</span>
                  <div className="text-4xl font-black text-green-400 mt-1">
                    ৳{totalFleetSavingsYearly.toLocaleString()} <span className="text-sm font-normal text-slate-300">BDT</span>
                  </div>
                  <span className="text-xs text-slate-400 mt-1 block">Compared to lead-acid replacements</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="text-xs text-slate-400">Monthly Fleet Savings</div>
                    <div className="text-lg font-bold text-white mt-0.5">৳{totalFleetSavingsMonthly.toLocaleString()}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="text-xs text-slate-400">CO₂ Avoided / Year</div>
                    <div className="text-lg font-bold text-lime-400 mt-0.5">{rickshawCo2SavedYearly} kg</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
