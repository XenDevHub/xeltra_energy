"use client";

import Image from "next/image";
import { useState } from "react";
import { GALLERY_IMAGES } from "@/lib/data";

const CATEGORIES = ["All", "Solar Installations", "Battery Swapping", "Field Operations", "Team & Events"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeImage, setActiveImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
            🖼️ Real-World Impact & Field Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Xeltra Energy in <span className="text-green-400">Action</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Take an authentic visual tour of our rooftop solar installations, battery swap hubs, field testing, and on-site engineering operations across Bangladesh.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                activeCategory === cat
                  ? "bg-green-500/20 border-green-500 text-green-400 shadow-lg shadow-green-500/10"
                  : "bg-slate-900/60 border-white/5 text-slate-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-dense">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              className={`relative h-64 sm:h-72 rounded-3xl overflow-hidden border border-white/10 cursor-pointer group shadow-xl bg-slate-900 ${
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="bg-green-500/20 text-green-400 border border-green-500/30 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                      {img.category}
                    </span>
                    <span className="text-slate-400 text-xs font-semibold">Click to Enlarge 🔍</span>
                  </div>
                  <p className="text-white font-bold text-sm sm:text-base leading-snug">{img.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
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
            <div className="relative h-[60vh] sm:h-[75vh] w-full bg-slate-950">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain p-4"
              />
            </div>
            <div className="p-6 bg-slate-950 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-green-400 text-xs font-bold uppercase tracking-widest block mb-1">
                  {activeImage.category}
                </span>
                <h4 className="text-white font-bold text-lg sm:text-xl">{activeImage.caption}</h4>
                <p className="text-slate-400 text-xs mt-1">{activeImage.alt}</p>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="bg-green-600 hover:bg-green-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors shrink-0"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
