"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-12 text-slate-400 text-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-16 h-16 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/assets/logo/xeltra.png"
                  alt="Xeltra Energy Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-xl tracking-wider font-[Outfit]">
                  XELTRA
                </span>
                <span className="text-green-400 text-[10px] font-semibold tracking-[0.2em] uppercase">
                  Energy Ltd
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Building Bangladesh&apos;s clean energy future through solar battery swapping stations, rooftop solar installations, and eco-friendly smart EV fleets.
            </p>

            <div className="pt-2 space-y-2">
              <span className="bg-green-500/10 text-green-400 border border-green-500/20 text-[11px] font-semibold px-3 py-1 rounded-full inline-block">
                📜 SREDA License Applied
              </span>
              <div>
                <a
                  href="tel:+8801814001419"
                  className="flex items-center gap-2 text-slate-300 hover:text-green-400 transition-colors text-sm font-medium"
                >
                  <span>📞</span> +880 1814-001419
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-green-400 transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link href="/solutions#ev-charging" className="hover:text-green-400 transition-colors">EV Charging Infrastructure</Link></li>
              <li><Link href="/solutions#solar" className="hover:text-green-400 transition-colors">Rooftop Solar Solutions</Link></li>
              <li><Link href="/solutions#power-bank" className="hover:text-green-400 transition-colors">Portable Energy Platform</Link></li>
              <li><Link href="/ecotrike#ecotrike" className="hover:text-green-400 transition-colors">EcoTrike EVX1</Link></li>
              <li><Link href="/solutions#calculator" className="hover:text-green-400 transition-colors">Solar ROI Calculator</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Stay Updated</h4>
            <p className="text-xs text-slate-400 mb-3">
              Subscribe to receiving energy updates and eco mobility releases.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-green-500"
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Xeltra Energy Ltd. All rights reserved.
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/about" className="hover:text-slate-400 transition-colors">About Xeltra</Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Contact Support</Link>
            <Link href="/market-analysis" className="hover:text-slate-400 transition-colors">Market Analysis</Link>
            <Link href="/admin" className="hover:text-green-400 transition-colors text-[11px] font-semibold flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
              🔒 Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
