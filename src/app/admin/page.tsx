"use client";

import { useEffect } from "react";
import { useAdmin } from "@/context/AdminContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AdminPage() {
  const { isAdmin, openLoginModal, logout } = useAdmin();

  useEffect(() => {
    if (!isAdmin) {
      openLoginModal();
    }
  }, [isAdmin, openLoginModal]);

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-32 w-full text-center">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 text-green-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
            🛡️
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3 font-[Outfit]">
            Admin Control Center
          </h1>

          {isAdmin ? (
            <div className="space-y-6">
              <p className="text-green-400 font-semibold bg-green-500/10 border border-green-500/20 py-2.5 px-4 rounded-xl inline-block text-sm">
                Status: Authenticated Admin
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto pt-4">
                <Link
                  href="/gallery"
                  className="p-5 bg-slate-950 border border-slate-800 rounded-2xl hover:border-green-500/40 text-left transition-all hover:scale-105 group"
                >
                  <div className="text-2xl mb-2">📰</div>
                  <h3 className="font-bold text-white group-hover:text-green-400">Manage News & Updates</h3>
                  <p className="text-xs text-slate-400 mt-1">Upload images, add news posts, and edit articles</p>
                </Link>

                <Link
                  href="/about"
                  className="p-5 bg-slate-950 border border-slate-800 rounded-2xl hover:border-green-500/40 text-left transition-all hover:scale-105 group"
                >
                  <div className="text-2xl mb-2">🏆</div>
                  <h3 className="font-bold text-white group-hover:text-green-400">Manage Achievements</h3>
                  <p className="text-xs text-slate-400 mt-1">Upload certificates, awards, and recognitions</p>
                </Link>
              </div>

              <div className="pt-6">
                <button
                  onClick={logout}
                  aria-label="Log Out Admin"
                  className="px-6 py-2.5 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 rounded-xl font-bold text-xs transition-all"
                >
                  Log Out Admin
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">
                You need to log in to access admin privileges.
              </p>
              <button
                onClick={openLoginModal}
                aria-label="Open Admin Login"
                className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-green-950/50"
              >
                Log In as Admin
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
