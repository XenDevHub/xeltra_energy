"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { GALLERY_IMAGES } from "@/lib/data";
import { useAdmin } from "@/context/AdminContext";

// ─── Types ───────────────────────────────────────────────────────────────────
interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  tag: string;         // e.g. "Announcements", "Reports"
  author: string;
  date: string;
  readTime: string;
  img: string;
  wide?: boolean;
  isAdmin?: boolean;   // uploaded by admin (stored in localStorage)
}

// ─── Seed Data (from existing gallery) ───────────────────────────────────────
const SEED_NEWS: NewsItem[] = [
  {
    id: "news-1",
    title: "Historic Day: China National Cable Engineering Corporation Visits Xeltra Energy",
    excerpt: "Representatives from China National Cable Engineering Corporation visited our operations to explore potential collaborations in Bangladesh's EV infrastructure development.",
    category: "Announcements",
    tag: "ANNOUNCEMENT",
    author: "Xeltra Energy Team",
    date: "October 16, 2025",
    readTime: "4 min read",
    img: "/assets/images/whatsapp5.jpg",
    wide: true,
  },
  {
    id: "news-2",
    title: "International Partnership with Tian Lu Xin Neng Yuan Confirmed",
    excerpt: "Chinese renewable energy leader joins forces with Xeltra to bring world-class technology and expertise to Bangladesh's EV infrastructure.",
    category: "Announcements",
    tag: "ANNOUNCEMENT",
    author: "Xeltra Energy Team",
    date: "October 20, 2025",
    readTime: "4 min read",
    img: "/assets/images/whatsapp10.jpg",
  },
  {
    id: "news-3",
    title: "Hybrid Solar System: How Solar, Grid & Batteries Work Together",
    excerpt: "A complete technical breakdown of the hybrid inverter layout — how DC power from solar panels and battery banks flows through a single intelligent hub to deliver uninterrupted power.",
    category: "Reports",
    tag: "REPORT",
    author: "Solar Engineer",
    date: "February 10, 2026",
    readTime: "7 min read",
    img: "/assets/images/whatsapp8.jpg",
  },
  {
    id: "news-4",
    title: "Xeltra EcoTrike EVX1 — Bangladesh's Heritage Electric Rickshaw",
    excerpt: "Inspired by the heritage pedal rickshaw of Bangladesh, EcoTrike EVX1 preserves the familiar cultural form while replacing conventional propulsion with modern electric mobility.",
    category: "Technology",
    tag: "TECHNOLOGY",
    author: "Xeltra Energy Team",
    date: "March 5, 2026",
    readTime: "5 min read",
    img: "/assets/images/ecotrike-heritage.png",
    wide: true,
  },
  {
    id: "news-5",
    title: "SREDA License Application Submitted for EV Charging Station",
    excerpt: "Xeltra Energy has officially submitted its EV Charging Station license application to SREDA — a major regulatory milestone toward large-scale operations.",
    category: "Announcements",
    tag: "OFFICIAL",
    author: "Xeltra Energy Team",
    date: "September 12, 2025",
    readTime: "3 min read",
    img: "/assets/images/charging-station.png",
  },
  {
    id: "news-6",
    title: "Solar Installations Completed Across 4 Sites in Bangladesh",
    excerpt: "Xeltra Energy has successfully completed rooftop solar installations across CMB Chittagong, Cumilla BSIC, Khulshi CTG, and Chanpur Cumilla.",
    category: "Reports",
    tag: "REPORT",
    author: "Field Operations",
    date: "August 22, 2025",
    readTime: "4 min read",
    img: "/assets/images/whatsapp7.jpg",
  },
];

const CATEGORIES = ["All News", "Announcements", "Reports", "Technology", "Environment"];

const CATEGORY_ICONS: Record<string, string> = {
  "All News": "📰",
  "Announcements": "📣",
  "Reports": "📋",
  "Technology": "⚡",
  "Environment": "🌿",
};

// ─── Share helpers ────────────────────────────────────────────────────────────
function shareUrl(platform: string, title: string, img?: string) {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://www.xeltraenergy.com";
  const pageUrl = typeof window !== "undefined" ? window.location.href : "https://www.xeltraenergy.com/gallery";

  // Construct absolute image URL
  let fullImgUrl = "";
  if (img) {
    if (img.startsWith("http")) {
      fullImgUrl = img;
    } else if (img.startsWith("/")) {
      fullImgUrl = `${origin}${img}`;
    }
  }

  const encodedPageUrl = encodeURIComponent(pageUrl);
  const encodedImgUrl = fullImgUrl ? encodeURIComponent(fullImgUrl) : encodedPageUrl;
  const text = encodeURIComponent(title);

  // For Facebook & WhatsApp: passing direct absolute image URL allows Facebook crawler to scrap & preview the image
  const links: Record<string, string> = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedImgUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${text}&url=${encodedImgUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedPageUrl}&title=${text}`,
    whatsapp: `https://wa.me/?text=${text}%20${encodedImgUrl}`,
  };

  if (typeof window !== "undefined") {
    window.open(links[platform], "_blank", "noopener,noreferrer");
  }
}

// ─── Admin Modal ──────────────────────────────────────────────────────────────
const ADMIN_PASSWORD = "xeltra2026";

function AdminModal({ onClose, onSave }: { onClose: () => void; onSave: (item: NewsItem) => void }) {
  const { isAdmin } = useAdmin();
  const [pass, setPass] = useState("");
  const [auth, setAuth] = useState(isAdmin);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    category: "Announcements",
    tag: "ANNOUNCEMENT",
    author: "Xeltra Energy Team",
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    readTime: "3 min read",
  });
  const [imgPreview, setImgPreview] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setImgPreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!form.title || !form.excerpt || !imgPreview) {
      setError("Title, excerpt, and image are required.");
      return;
    }
    const item: NewsItem = {
      id: `admin-${Date.now()}`,
      ...form,
      img: imgPreview,
      isAdmin: true,
    };
    onSave(item);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-white/10 rounded-3xl w-full max-w-lg shadow-2xl overflow-y-auto max-h-[90vh]">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h3 className="text-white font-black text-lg">🔐 Admin — Add News</h3>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-white/5 hover:bg-red-600 text-white flex items-center justify-center transition-colors">✕</button>
        </div>

        <div className="p-6 space-y-4">
          {!auth ? (
            <>
              <p className="text-slate-400 text-sm">Enter admin password to continue.</p>
              <input
                type="password"
                placeholder="Admin password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-500"
              />
              {error && <p className="text-red-400 text-xs">{error}</p>}
              <button
                onClick={() => { if (pass === ADMIN_PASSWORD) { setAuth(true); setError(""); } else setError("Wrong password."); }}
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl text-sm transition-colors"
              >
                Login
              </button>
            </>
          ) : (
            <>
              {/* Image Upload */}
              <div
                onClick={() => fileRef.current?.click()}
                className="relative h-40 rounded-2xl border-2 border-dashed border-white/20 hover:border-green-500/60 flex items-center justify-center cursor-pointer overflow-hidden transition-colors bg-slate-950"
              >
                {imgPreview ? (
                  <img src={imgPreview} alt="preview" className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-80" />
                ) : (
                  <div className="text-center">
                    <div className="text-3xl mb-2">📸</div>
                    <p className="text-slate-400 text-sm">Click to upload image</p>
                  </div>
                )}
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
              </div>

              {/* Title */}
              <input type="text" placeholder="News Title *" value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-500" />

              {/* Excerpt */}
              <textarea rows={3} placeholder="Short description / excerpt *" value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-500 resize-none" />

              {/* Category + Tag */}
              <div className="grid grid-cols-2 gap-3">
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-500">
                  {CATEGORIES.filter(c => c !== "All News").map(c => <option key={c}>{c}</option>)}
                </select>
                <select value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })}
                  className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-500">
                  {["ANNOUNCEMENT", "REPORT", "TECHNOLOGY", "ENVIRONMENT", "OFFICIAL"].map(t => <option key={t}>{t}</option>)}
                </select>
              </div>

              {/* Author + Read Time */}
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="Author" value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-500" />
                <input type="text" placeholder="Read time (e.g. 3 min read)" value={form.readTime}
                  onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                  className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-500" />
              </div>

              {error && <p className="text-red-400 text-xs">{error}</p>}

              <button onClick={handleSave}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-green-900/40">
                ✅ Publish News
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── News Card ────────────────────────────────────────────────────────────────
function NewsCard({ item, onClick }: { item: NewsItem; onClick: () => void }) {
  const tagColor: Record<string, string> = {
    ANNOUNCEMENT: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    REPORT: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    TECHNOLOGY: "bg-green-500/20 text-green-300 border-green-500/30",
    ENVIRONMENT: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    OFFICIAL: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  };

  return (
    <div className={`bg-slate-900/60 border border-white/8 rounded-3xl overflow-hidden group hover:border-green-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl flex flex-col ${item.wide ? "md:col-span-2" : ""}`}>
      {/* Image */}
      <div className="relative h-52 overflow-hidden cursor-pointer" onClick={onClick}>
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${tagColor[item.tag] || "bg-green-500/20 text-green-300 border-green-500/30"}`}>
            {item.tag}
          </span>
          <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
            LinkedIn
          </span>
          <span className="bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
            Official
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          onClick={onClick}
          className="text-white font-black text-base leading-snug mb-2 cursor-pointer hover:text-green-400 transition-colors line-clamp-2"
        >
          {item.title}
        </h3>

        {/* Meta */}
        <div className="flex items-center gap-3 text-slate-500 text-xs mb-3">
          <span className="flex items-center gap-1">👤 {item.author}</span>
          <span>•</span>
          <span>📅 {item.date}</span>
          <span>•</span>
          <span className="text-green-400">⏱ {item.readTime}</span>
        </div>

        <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 flex-1">{item.excerpt}</p>

        {/* Social Share */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/8">
          <span className="text-slate-500 text-xs font-semibold">Share:</span>
          {[
            { icon: "f", label: "Facebook", platform: "facebook", color: "hover:bg-blue-600" },
            { icon: "𝕏", label: "X", platform: "twitter", color: "hover:bg-slate-600" },
            { icon: "in", label: "LinkedIn", platform: "linkedin", color: "hover:bg-blue-700" },
            { icon: "💬", label: "WhatsApp", platform: "whatsapp", color: "hover:bg-emerald-600" },
          ].map((s) => (
            <button
              key={s.platform}
              onClick={() => shareUrl(s.platform, item.title, item.img)}
              title={`Share on ${s.label}`}
              className={`w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-bold flex items-center justify-center transition-colors ${s.color}`}
            >
              {s.icon}
            </button>
          ))}
          <button
            onClick={onClick}
            className="ml-auto text-green-400 text-xs font-bold hover:underline"
          >
            Read more →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Lightbox / Detail Modal ─────────────────────────────────────────────────
function NewsDetail({ item, onClose }: { item: NewsItem; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="relative max-w-3xl w-full bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-950/80 text-white flex items-center justify-center border border-white/10 hover:bg-red-600 transition-colors"
        >✕</button>

        <div className="relative h-64 sm:h-80">
          <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
          <div className="absolute bottom-4 left-6 flex gap-2">
            <span className="bg-green-500/20 text-green-300 border border-green-500/30 text-xs font-bold px-3 py-1 rounded-full">{item.category}</span>
            <span className="bg-white/10 text-slate-300 border border-white/20 text-xs font-bold px-3 py-1 rounded-full">{item.tag}</span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <h2 className="text-white font-black text-xl sm:text-2xl mb-3 leading-snug">{item.title}</h2>
          <div className="flex flex-wrap items-center gap-3 text-slate-400 text-xs mb-5">
            <span>👤 {item.author}</span>
            <span>•</span>
            <span>📅 {item.date}</span>
            <span>•</span>
            <span className="text-green-400">⏱ {item.readTime}</span>
          </div>
          <blockquote className="border-l-4 border-green-500 pl-4 text-slate-300 italic text-sm mb-4 leading-relaxed">
            {item.excerpt}
          </blockquote>
          <p className="text-slate-400 text-sm leading-relaxed">{item.excerpt} Xeltra Energy continues to push boundaries in Bangladesh's renewable energy landscape, delivering innovative solutions for EV charging infrastructure, rooftop solar, and smart battery management systems.</p>

          {/* Social Share */}
          <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/10">
            <span className="text-slate-400 text-sm font-semibold">Share this news:</span>
            {[
              { label: "Facebook", platform: "facebook", bg: "bg-blue-600 hover:bg-blue-500" },
              { label: "𝕏 Twitter", platform: "twitter", bg: "bg-slate-700 hover:bg-slate-600" },
              { label: "LinkedIn", platform: "linkedin", bg: "bg-blue-700 hover:bg-blue-600" },
              { label: "WhatsApp", platform: "whatsapp", bg: "bg-emerald-600 hover:bg-emerald-500" },
            ].map((s) => (
              <button
                key={s.platform}
                onClick={() => shareUrl(s.platform, item.title, item.img)}
                className={`${s.bg} text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function NewsUpdates() {
  const { isAdmin } = useAdmin();
  const [activeCategory, setActiveCategory] = useState("All News");
  const [adminNews, setAdminNews] = useState<NewsItem[]>([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [activeItem, setActiveItem] = useState<NewsItem | null>(null);
  const [search, setSearch] = useState("");

  // Load admin news from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("xeltra_news");
      if (stored) setAdminNews(JSON.parse(stored));
    } catch {}
  }, []);

  const saveAdminNews = (items: NewsItem[]) => {
    setAdminNews(items);
    localStorage.setItem("xeltra_news", JSON.stringify(items));
  };

  const handleAddNews = (item: NewsItem) => {
    saveAdminNews([item, ...adminNews]);
  };

  const handleDeleteNews = (id: string) => {
    const updated = adminNews.filter((n) => n.id !== id);
    saveAdminNews(updated);
  };

  const allNews = [...adminNews, ...SEED_NEWS];

  const filtered = allNews.filter((item) => {
    const matchCat = activeCategory === "All News" || item.category === activeCategory;
    const matchSearch = !search || item.title.toLowerCase().includes(search.toLowerCase()) || item.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="news-updates" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
            📰 Latest from Xeltra Energy
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            News &amp; <span className="text-green-400">Updates</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Stay updated with Xeltra Energy&apos;s latest news, announcements, reports, and technological developments.
          </p>
        </div>

        {/* Search + Admin Button (Only visible if logged in as Admin) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <div className="relative flex-1 w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
            <input
              type="text"
              placeholder="Search news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-900 border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>
          {isAdmin && (
            <button
              onClick={() => setShowAdmin(true)}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-5 py-3 rounded-2xl text-sm transition-all shadow-lg shadow-green-900/40 shrink-0"
            >
              <span>➕</span> Add News Item (Admin)
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                activeCategory === cat
                  ? "bg-green-500/20 border-green-500 text-green-400 shadow-lg shadow-green-500/10"
                  : "bg-slate-900/60 border-white/5 text-slate-400 hover:text-white hover:border-white/20"
              }`}
            >
              <span>{CATEGORY_ICONS[cat]}</span> {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-500">
            <div className="text-5xl mb-4">📭</div>
            <p className="text-lg font-semibold">No news found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div key={item.id} className="relative">
                <NewsCard item={item} onClick={() => setActiveItem(item)} />
                {item.isAdmin && (
                  <button
                    onClick={() => handleDeleteNews(item.id)}
                    title="Delete this news"
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-red-600/80 hover:bg-red-500 text-white text-xs flex items-center justify-center shadow-lg transition-colors"
                  >
                    🗑
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Admin Modal */}
      {showAdmin && (
        <AdminModal onClose={() => setShowAdmin(false)} onSave={handleAddNews} />
      )}

      {/* News Detail Modal */}
      {activeItem && (
        <NewsDetail item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </section>
  );
}
