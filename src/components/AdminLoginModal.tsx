"use client";

import { useState } from "react";
import { useAdmin } from "@/context/AdminContext";

export default function AdminLoginModal() {
  const { isLoginModalOpen, closeLoginModal, login, isAdmin, logout } = useAdmin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const success = login(username, password);
    if (!success) {
      setError("Invalid username or password. (Default: admin / xeltra2026)");
    } else {
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/60 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
        <button
          onClick={closeLoginModal}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-green-500/10 border border-green-500/20 text-green-400 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3">
            🔐
          </div>
          <h3 className="text-2xl font-bold text-white font-[Outfit]">Admin Portal Access</h3>
          <p className="text-xs text-slate-400 mt-1">
            Sign in to manage news updates, images, and achievements
          </p>
        </div>

        {isAdmin ? (
          <div className="text-center py-4 space-y-4">
            <div className="bg-green-500/10 border border-green-500/30 text-green-400 text-sm py-3 px-4 rounded-xl">
              ✅ You are currently logged in as <strong>Admin</strong>.
            </div>
            <button
              onClick={() => {
                logout();
                closeLoginModal();
              }}
              aria-label="Log Out of Admin"
              className="w-full py-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 font-bold rounded-xl text-sm transition-all"
            >
              Log Out Admin
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-3 rounded-xl">
                ⚠️ {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin username (admin)"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-green-500/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password (xeltra2026)"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-green-500/50"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                aria-label="Sign In as Admin"
                className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-green-950/50"
              >
                Sign In
              </button>
            </div>

            <p className="text-[11px] text-center text-slate-500 mt-2">
              Default login: <code className="text-slate-400">admin</code> / <code className="text-slate-400">xeltra2026</code>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
