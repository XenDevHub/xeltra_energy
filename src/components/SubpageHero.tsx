"use client";

import Link from "next/link";

interface SubpageHeroProps {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
}

export default function SubpageHero({
  badge,
  title,
  titleHighlight,
  subtitle,
}: SubpageHeroProps) {
  return (
    <div className="relative py-16 sm:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-white/10 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb */}
        <nav className="flex justify-center items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
          <Link href="/" className="hover:text-green-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-green-400">{badge}</span>
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          {badge}
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          {title} <span className="text-green-400">{titleHighlight}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent" />
    </div>
  );
}
