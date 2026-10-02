"use client";

const APP_SCREENS = [
  {
    id: "dashboard",
    src: "/assets/images/app-screen-dashboard.png",
    alt: "Xeltra Energy App - Dashboard Screen",
    label: "Smart Dashboard",
    desc: "EV battery status, swap station locator & daily energy stats at a glance.",
    highlight: false,
  },
  {
    id: "map",
    src: "/assets/images/app-screen-map.png",
    alt: "Xeltra Energy App - Station Finder Screen",
    label: "Station Finder",
    desc: "Find the nearest battery swap station in real-time with live availability.",
    highlight: true,
  },
  {
    id: "solar",
    src: "/assets/images/app-screen-solar.png",
    alt: "Xeltra Energy App - Solar Monitor Screen",
    label: "Solar Monitor",
    desc: "Track your solar generation, savings and CO₂ impact live from your phone.",
    highlight: false,
  },
];

const APP_FEATURES = [
  { icon: "⚡", label: "Battery Swap", desc: "Find & swap instantly" },
  { icon: "📍", label: "Live Stations", desc: "Real-time availability" },
  { icon: "☀️", label: "Solar Tracking", desc: "Monitor generation" },
  { icon: "📊", label: "Energy Reports", desc: "Usage & savings insights" },
];

export default function AppComingSoon() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950 border-t border-white/5">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/5 blur-[120px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green-400 bg-green-500/10 border border-green-500/20 px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Coming Soon
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            The{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Xeltra Energy
            </span>{" "}
            App
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            One app to manage your EV battery swaps, monitor solar generation, find
            charging stations, and track your green energy impact — all in one place.
          </p>

          {/* Platform pill */}
          <div className="inline-flex items-center gap-3 mt-8 bg-slate-900 border border-white/10 rounded-2xl px-5 py-3 flex-wrap justify-center gap-y-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" />
            <span className="text-slate-300 text-sm font-medium">Available soon on</span>
            <span className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-xs text-slate-300 font-semibold">
              🤖 Android
            </span>
            <span className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-xs text-slate-300 font-semibold">
               iOS
            </span>
          </div>
        </div>

        {/* App Screens Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10 items-end">
          {APP_SCREENS.map((screen) => (
            <div
              key={screen.id}
              className={`flex flex-col items-center group ${screen.highlight ? "sm:-translate-y-6" : ""}`}
            >
              {/* Phone frame */}
              <div className="relative w-full max-w-[220px] mx-auto">
                {screen.highlight && (
                  <div className="absolute -inset-3 rounded-3xl bg-green-500/10 blur-2xl -z-10" />
                )}
                <div
                  className={`relative rounded-3xl overflow-hidden shadow-2xl border transition-all duration-500 group-hover:-translate-y-2 ${
                    screen.highlight
                      ? "border-green-500/50 shadow-green-950"
                      : "border-white/10 shadow-black/60 group-hover:border-green-500/25"
                  }`}
                >
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    className="w-full h-auto block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Label */}
              <div className="mt-5 text-center">
                <p className={`text-sm font-bold mb-1 ${screen.highlight ? "text-green-400" : "text-white"}`}>
                  {screen.label}
                </p>
                <p className="text-slate-400 text-xs leading-relaxed max-w-[190px] mx-auto">
                  {screen.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {APP_FEATURES.map((f) => (
            <div
              key={f.label}
              className="bg-slate-900/60 border border-white/5 rounded-2xl p-5 text-center hover:border-green-500/20 hover:bg-slate-900 transition-all duration-300"
            >
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="text-white text-xs font-bold mb-1">{f.label}</div>
              <div className="text-slate-400 text-[10px]">{f.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
