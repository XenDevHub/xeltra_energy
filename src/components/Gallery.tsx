"use client";

import Image from "next/image";
import { useState } from "react";
import { GALLERY_IMAGES } from "@/lib/data";

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
            🖼️ Project Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Xeltra Energy in <span className="text-green-400">Action</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Take a visual tour of our battery swap hubs, rooftop solar installations, power banks, and EcoTrike prototypes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              className={`relative h-64 sm:h-72 rounded-3xl overflow-hidden border border-white/10 cursor-pointer group shadow-xl ${
                img.wide ? "md:col-span-2" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <span className="text-green-400 text-xs font-bold uppercase tracking-wider block mb-1">
                    Click to Enlarge 🔍
                  </span>
                  <p className="text-white font-bold text-sm sm:text-base">{img.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-950/80 text-white flex items-center justify-center border border-white/10 hover:bg-red-600 transition-colors"
              aria-label="Close image preview"
            >
              ✕
            </button>
            <div className="relative h-[60vh] sm:h-[75vh] w-full">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain p-4"
              />
            </div>
            <div className="p-6 bg-slate-950 border-t border-white/10 text-center">
              <h4 className="text-white font-bold text-lg">{activeImage.caption}</h4>
              <p className="text-slate-400 text-xs mt-1">{activeImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
