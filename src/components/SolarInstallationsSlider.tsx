"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export const SOLAR_SLIDES = [
  {
    city: "CMB CHITTAGONG",
    type: "Solar Installation",
    id: "ctg",
    src: "/assets/images/whatsapp7.jpg",
    badge: "📍 CMB CHITTAGONG — Solar Installation",
  },
  {
    city: "CUMILLA BSIC",
    type: "Solar Installation",
    id: "cumilla",
    src: "/assets/images/whatsapp2.jpg",
    badge: "📍 CUMILLA BSIC — Solar Installation",
  },
  {
    city: "KHULSHI, CTG",
    type: "Solar Installation",
    id: "khulshi",
    src: "/assets/images/whatsapp13.jpg",
    badge: "📍 KHULSHI, CTG — Solar Installation",
  },
  {
    city: "CHANPUR CUMILLA",
    type: "Solar Installation",
    id: "chanpur",
    src: "/assets/images/whatsapp6.jpg",
    badge: "📍 CHANPUR CUMILLA — Solar Installation",
  },
];

export default function SolarInstallationsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SOLAR_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
          Completed Solar Installations Across Key Regions
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          From Chittagong commercial hubs to Cumilla industrial parks, Xeltra Energy has already deployed commercial and residential rooftop solar units powering local infrastructure.
        </p>
        
        {/* Interactive Region Selectors */}
        <div className="grid grid-cols-2 gap-4">
          {SOLAR_SLIDES.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`flex items-center gap-3 text-left rounded-xl p-3.5 border transition-all duration-300 ${
                  isActive
                    ? "bg-green-600/20 border-green-500 text-white shadow-lg shadow-green-950/40"
                    : "bg-white/5 border-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                <span className={`text-xl transition-transform duration-300 ${isActive ? "scale-125" : ""}`}>
                  📍
                </span>
                <div>
                  <div className="font-bold text-sm leading-tight">{item.city}</div>
                  <div className={`text-xs ${isActive ? "text-green-400 font-semibold" : "text-slate-400"}`}>
                    {item.type}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Image Carousel Display */}
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950/90 group">
        {SOLAR_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.city}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority={idx === 0}
            />
            {/* Overlay Gradient & Badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 z-20">
              <span className="inline-flex items-center gap-2 bg-green-600/90 backdrop-blur-md text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-lg border border-green-400/30">
                ⚡ {slide.badge}
              </span>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + SOLAR_SLIDES.length) % SOLAR_SLIDES.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-slate-950/70 hover:bg-slate-900 text-white p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md"
          aria-label="Previous Installation"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % SOLAR_SLIDES.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-slate-950/70 hover:bg-slate-900 text-white p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md"
          aria-label="Next Installation"
        >
          ›
        </button>

        {/* Dot Indicators */}
        <div className="absolute top-4 right-4 z-30 flex gap-1.5 bg-slate-950/60 p-2 rounded-full border border-white/10 backdrop-blur-md">
          {SOLAR_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-6 bg-green-400" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to installation ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
