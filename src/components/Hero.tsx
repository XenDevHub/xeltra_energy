"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/data";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ value, unit, label, start }: { value: number; unit: string; label: string; start: boolean }) {
  const count = useCountUp(value, 1800, start);
  return (
    <div className="text-center">
      <div className="flex items-end justify-center gap-1">
        <span className="text-3xl md:text-4xl font-black text-white">{count}</span>
        <span className="text-green-400 font-bold text-xl mb-1">{unit}</span>
      </div>
      <span className="text-slate-400 text-xs sm:text-sm font-medium">{label}</span>
    </div>
  );
}

export default function Hero() {
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center overflow-hidden py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/power-bank.png"
          alt="Xeltra Energy Power Bank infrastructure"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105"
          priority
          quality={85}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />
        {/* Green accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[180px] pointer-events-none" />
      </div>

      {/* Content   Centered Layout */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 text-green-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Bangladesh&apos;s Green Energy Pioneer
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-shadow max-w-4xl">
          <span className="text-white">Energy That Moves You.</span>
          <br />
          <span className="bg-gradient-to-r from-green-400 via-lime-300 to-emerald-400 bg-clip-text text-transparent">
            Future That Sustains You.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          We are building a cleaner, smarter, and more sustainable energy ecosystem for Bangladesh through renewable energy, rooftop solar, battery storage, and electric transportation, accelerating the country’s transition to a greener future.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link
            href="/solutions"
            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-green-950/60 hover:-translate-y-0.5 group"
          >
            Explore Solutions
            <svg className="group-hover:translate-x-1 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/ecotrike"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
          >
            Discover EcoTrike
          </Link>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="bg-slate-950/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl w-full max-w-3xl"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-center">
            {STATS.map((stat, i) => (
              <StatItem key={i} value={stat.value} unit={stat.unit} label={stat.label} start={statsStarted} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
