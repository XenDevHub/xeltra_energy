"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useAdmin } from "@/context/AdminContext";

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  img: string;
  category?: string;
  isAdminAdded?: boolean;
}

const SEED_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "achieve-1",
    title: "Official Government Recognition & Certificate",
    issuer: "Bangladesh Regulatory Authority & Energy Sector",
    date: "2025 - 2026",
    description:
      "Official certificate and recognition authorizing Xeltra Energy Ltd's sustainable clean-energy development and solar EV infrastructure expansion across Bangladesh.",
    img: "/assets/images/certificate.png",
    category: "Official License & Certificate",
  },
];

export default function Achievements() {
  const { isAdmin } = useAdmin();
  const [achievements, setAchievements] = useState<AchievementItem[]>(SEED_ACHIEVEMENTS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [activeItem, setActiveItem] = useState<AchievementItem | null>(null);

  // Form states for Admin Upload
  const [form, setForm] = useState({
    title: "",
    issuer: "",
    date: new Date().getFullYear().toString(),
    description: "",
    category: "Certificate & Award",
  });
  const [imgPreview, setImgPreview] = useState<string>("");
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  // Load custom achievements from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("xeltra_achievements");
      if (stored) {
        const parsed = JSON.parse(stored);
        setAchievements([...parsed, ...SEED_ACHIEVEMENTS]);
      }
    } catch {}
  }, []);

  const saveAchievements = (customItems: AchievementItem[]) => {
    localStorage.setItem("xeltra_achievements", JSON.stringify(customItems));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setImgPreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleAddAchievement = () => {
    if (!form.title || !form.issuer || !imgPreview) {
      setError("Title, Issuer, and Certificate Image are required!");
      return;
    }

    const newItem: AchievementItem = {
      id: `custom-${Date.now()}`,
      ...form,
      img: imgPreview,
      isAdminAdded: true,
    };

    const existingCustomStored = localStorage.getItem("xeltra_achievements");
    let existingCustom: AchievementItem[] = [];
    if (existingCustomStored) {
      try {
        existingCustom = JSON.parse(existingCustomStored);
      } catch {}
    }

    const updatedCustom = [newItem, ...existingCustom];
    saveAchievements(updatedCustom);
    setAchievements([newItem, ...achievements]);
    setShowAddModal(false);
    setForm({ title: "", issuer: "", date: new Date().getFullYear().toString(), description: "", category: "Certificate & Award" });
    setImgPreview("");
    setError("");
  };

  const handleDelete = (id: string) => {
    const existingCustomStored = localStorage.getItem("xeltra_achievements");
    if (!existingCustomStored) return;
    try {
      const existingCustom: AchievementItem[] = JSON.parse(existingCustomStored);
      const updatedCustom = existingCustom.filter((item) => item.id !== id);
      saveAchievements(updatedCustom);
      setAchievements(achievements.filter((item) => item.id !== id));
    } catch {}
  };

  return (
    <section id="achievements" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
            🏆 Trust &amp; Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Our <span className="text-green-400">Achievements</span> &amp; Certifications
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Recognitions, licenses, and verified certifications supporting Xeltra Energy&apos;s mission to power Bangladesh with sustainable clean energy.
          </p>

          {/* Admin Upload Button (Only visible if logged in as Admin) */}
          {isAdmin && (
            <div className="mt-6">
              <button
                onClick={() => setShowAddModal(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold px-6 py-3 rounded-2xl text-xs uppercase tracking-wider shadow-lg shadow-green-950/50 transition-all hover:scale-105"
              >
                <span>➕</span> Add New Achievement / Certificate (Admin)
              </button>
            </div>
          )}
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden hover:border-green-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between relative"
            >
              {item.isAdminAdded && isAdmin && (
                <button
                  onClick={() => handleDelete(item.id)}
                  title="Delete Achievement"
                  className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-red-600/80 hover:bg-red-600 text-white flex items-center justify-center text-xs shadow-lg transition-all"
                >
                  🗑
                </button>
              )}

              {/* Certificate Image Box */}
              <div
                className="relative h-64 bg-slate-950 border-b border-slate-800/80 cursor-pointer overflow-hidden p-4 flex items-center justify-center"
                onClick={() => setActiveItem(item)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="bg-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    🔍 Click to View Full Certificate
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest bg-green-500/10 px-2.5 py-1 rounded-md border border-green-500/20">
                      {item.category || "Certificate"}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{item.date}</span>
                  </div>

                  <h3
                    onClick={() => setActiveItem(item)}
                    className="text-white font-bold text-lg leading-snug mb-2 cursor-pointer hover:text-green-400 transition-colors"
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 mb-3 font-semibold">
                    Issuer: <span className="text-slate-300">{item.issuer}</span>
                  </p>

                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveItem(item)}
                    className="text-green-400 hover:text-green-300 text-xs font-bold transition-colors flex items-center gap-1"
                  >
                    View Document &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-700/60 rounded-3xl overflow-hidden shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-white font-[Outfit]">{activeItem.title}</h3>
              <p className="text-xs text-green-400 mt-1">{activeItem.issuer} • {activeItem.date}</p>
            </div>

            <div className="relative max-h-[70vh] flex items-center justify-center bg-slate-950 rounded-2xl p-4 border border-slate-800 overflow-auto">
              <img
                src={activeItem.img}
                alt={activeItem.title}
                className="max-h-[65vh] w-auto object-contain rounded-lg shadow-xl"
              />
            </div>

            <p className="text-slate-300 text-xs sm:text-sm mt-4 text-center leading-relaxed">
              {activeItem.description}
            </p>
          </div>
        </div>
      )}

      {/* Admin Add Achievement Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700/60 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white font-[Outfit]">➕ Add Achievement / Certificate</h3>
              <p className="text-xs text-slate-400 mt-1">Upload official certificate image and detail specifications</p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-3 rounded-xl mb-4">
                ⚠️ {error}
              </div>
            )}

            <div className="space-y-4 text-left">
              {/* Image Upload Box */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Certificate Image *
                </label>
                <div
                  onClick={() => fileRef.current?.click()}
                  className="h-44 bg-slate-950 border-2 border-dashed border-slate-800 hover:border-green-500/50 rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden relative group transition-colors"
                >
                  {imgPreview ? (
                    <img src={imgPreview} alt="Preview" className="w-full h-full object-contain p-2" />
                  ) : (
                    <div className="text-center">
                      <div className="text-3xl mb-2">📜</div>
                      <p className="text-xs text-slate-400">Click to upload certificate image</p>
                    </div>
                  )}
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Title / Achievement Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. SREDA Solar Energy License / Award"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Issuing Authority *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SREDA / Ministry of Power"
                    value={form.issuer}
                    onChange={(e) => setForm({ ...form, issuer: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Year / Date
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2026"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Brief explanation of the certificate or award..."
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500/50 resize-none"
                />
              </div>

              <button
                type="button"
                onClick={handleAddAchievement}
                className="w-full py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-green-950/50 mt-2"
              >
                Save Achievement
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
