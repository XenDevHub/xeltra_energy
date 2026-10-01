import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { SOLUTIONS, PARTNERS } from "@/lib/data";

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-green-500 selection:text-white">
      {/* Sticky Blur Header */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Executive Overview Banner */}
        <section className="py-20 bg-slate-900/60 relative overflow-hidden border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="text-green-400 text-xs font-bold uppercase tracking-widest bg-green-500/10 px-4 py-1.5 rounded-full border border-green-500/20">
                  Clean Energy Pioneer
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-6 leading-tight">
                  Transforming Bangladesh&apos;s <span className="text-green-400">Energy & Mobility</span> Landscape
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  Xeltra Energy Ltd integrates high-efficiency rooftop solar systems, lithium battery swapping hubs, and zero-emission electric three-wheelers into a unified ecosystem.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/about"
                    className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-green-950/50 hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    Our Story & Mission
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/team"
                    className="bg-white/5 hover:bg-white/10 text-slate-200 font-bold px-6 py-3 rounded-xl text-sm transition-all border border-white/10 hover:border-white/20"
                  >
                    Executive Leadership
                  </Link>
                </div>
              </div>

              {/* Uncropped Banner Display */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950/90 flex items-center justify-center p-2">
                  <Image
                    src="/assets/images/banner.png"
                    alt="Xeltra Energy Solar Swap Depot Bangladesh"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-contain p-2"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-4 flex items-end">
                    <div className="text-white text-xs font-semibold">
                      📍 Solar-Powered Battery Swap Station & EcoTrike Hub
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clean Energy Solutions Highlights */}
        <section className="py-24 bg-slate-950 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-green-400 text-xs font-bold uppercase tracking-widest bg-green-500/10 px-4 py-1.5 rounded-full border border-green-500/20">
                Core Offerings
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4">
                Our Clean Energy <span className="text-green-400">Solutions</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Delivering complete renewable infrastructure for commercial, industrial, and transportation sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {SOLUTIONS.map((sol) => (
                <div
                  key={sol.id}
                  className="bg-slate-900/60 border border-white/5 rounded-3xl p-8 backdrop-blur-xl hover:border-green-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    {/* Icon and Title Side-by-Side */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                        {sol.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-green-400 uppercase tracking-widest block">
                          {sol.tag}
                        </span>
                        <h3 className="text-xl font-bold text-white leading-snug">{sol.title}</h3>
                      </div>
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed mb-6">{sol.description}</p>
                  </div>
                  <Link
                    href="/solutions"
                    className="text-green-400 font-bold text-xs flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                  >
                    View Technical Specifications →
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-xl shadow-green-950/60"
              >
                Explore All Solutions & Calculate Your ROI
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Flagship Vehicle Feature Spotlight: EcoTrike */}
        <section className="py-20 bg-slate-900/40 relative overflow-hidden border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-green-500/30 rounded-3xl p-8 sm:p-12 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-lime-400 text-xs font-bold uppercase tracking-widest bg-lime-500/10 px-4 py-1 rounded-full border border-lime-500/20">
                    Next-Gen EV Rickshaw
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4">
                    EcoTrike <span className="text-green-400">EVX1</span>
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    Designed for Bangladesh roads — 100km range per charge, zero emissions, 2-minute battery swap compatibility, and fiberglass body design.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                      <div className="text-xs text-slate-400">Motor Power</div>
                      <div className="text-white font-bold text-base mt-0.5">1200W BLDC</div>
                    </div>
                    <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                      <div className="text-xs text-slate-400">Battery Type</div>
                      <div className="text-green-400 font-bold text-base mt-0.5">48V Li-Ion Swappable</div>
                    </div>
                  </div>
                  <Link
                    href="/ecotrike"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-green-950/50"
                  >
                    View EcoTrike Specs & Design Variants
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-950/80">
                  <Image
                    src="/assets/images/tiger-rickshaw.png"
                    alt="Xeltra EcoTrike EVX1 Tiger Edition"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Edge Callout */}
        <section className="py-20 bg-slate-950 text-center relative">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-green-400 text-xs font-bold uppercase tracking-widest bg-green-500/10 px-4 py-1.5 rounded-full border border-green-500/20 mb-4 inline-block">
              Market Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              Why Xeltra Outperforms Traditional Lead-Acid Rickshaws
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              From reducing daily charging down-time by 95% to saving drivers over ৳35,000 annually in battery replacements — explore our complete market analysis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/market-analysis"
                className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-xl shadow-green-950/50"
              >
                Read Market & Tech Analysis
              </Link>
              <Link
                href="/gallery"
                className="bg-white/5 hover:bg-white/10 text-slate-200 font-bold px-8 py-3.5 rounded-xl text-sm transition-all border border-white/10"
              >
                View Project Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* Partners Banner */}
        <section className="py-12 bg-slate-900/40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-6">
              Global Hardware & Technology Partners
            </span>
            <div className="flex flex-wrap justify-center gap-8 items-center text-slate-300 font-bold text-sm">
              {PARTNERS.map((p) => (
                <span key={p.id} className="bg-slate-950/80 px-5 py-2.5 rounded-xl border border-white/5 hover:border-green-500/30 transition-colors">
                  {p.name} ({p.country})
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/8801703063331?text=Hello%20Xeltra%20Energy,%20I%20visited%20your%20website%20and%20want%20to%20know%20more."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-white p-4 rounded-full shadow-2xl shadow-emerald-950/80 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <span className="text-2xl">💬</span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
