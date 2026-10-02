"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const RICKSHAW_IMAGES = [
  {
    src: "/assets/images/tiger-rickshaw.png",
    title: "EcoTrike EVX1 — Tiger Edition",
    caption: "Reinforced Fiberglass Body & Custom Aesthetics",
  },
  {
    src: "/assets/images/ecotrike-evx1.png",
    title: "EcoTrike EVX1 — Standard Edition",
    caption: "100 km Range & Zero Emissions Electric Mobility",
  },
  {
    src: "/assets/images/ecotrike-heritage.png",
    title: "EcoTrike EVX1 — Heritage Modernism",
    caption: "Preserving Bangladesh Rickshaw Heritage with Clean Tech",
  },
];

export default function EcoTrikeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % RICKSHAW_IMAGES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + RICKSHAW_IMAGES.length) % RICKSHAW_IMAGES.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % RICKSHAW_IMAGES.length);
  };

  return (
    <div className="w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-slate-950/80 relative group shadow-2xl">
      {/* Slides */}
      {RICKSHAW_IMAGES.map((img, idx) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={img.src}
            alt={img.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            priority={idx === 0}
          />
          {/* Subtle overlay gradient & title */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 flex flex-col justify-end">
            <span className="text-white text-xs sm:text-sm font-bold">{img.title}</span>
            <span className="text-slate-300 text-[10px] sm:text-xs">{img.caption}</span>
          </div>
        </div>
      ))}

      {/* Prev / Next Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-slate-950/60 hover:bg-slate-900 text-white p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md"
        aria-label="Previous Slide"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-slate-950/60 hover:bg-slate-900 text-white p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md"
        aria-label="Next Slide"
      >
        ›
      </button>

      {/* Indicators / Dots */}
      <div className="absolute bottom-3 right-3 z-20 flex gap-1.5">
        {RICKSHAW_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-6 bg-green-400" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
