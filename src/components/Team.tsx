"use client";

import Image from "next/image";
import { TEAM } from "@/lib/data";

export default function Team() {
  const featuredMembers = TEAM.filter((m) => m.featured);
  const otherMembers = TEAM.filter((m) => !m.featured);

  return (
    <section id="team" className="py-24 bg-slate-900/60 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Featured Leadership Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-green-400 text-xs font-bold uppercase tracking-widest bg-green-500/10 px-4 py-1.5 rounded-full border border-green-500/20">
              Board & Executive Leadership
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-3">
              Executive Directors
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-slate-950/80 border border-green-500/30 rounded-3xl p-6 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center group hover:border-green-500 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-green-500/30 mb-5 shadow-lg group-hover:scale-105 transition-transform duration-500 bg-slate-900 flex items-center justify-center">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="144px"
                    className={member.imgClass || "object-cover group-hover:scale-105 transition-transform duration-500"}
                  />
                </div>
                <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2">
                  {member.role}
                </span>
                <h4 className="text-xl font-black text-white mb-2">{member.name}</h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical & Operational Leadership */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
              Departmental Directors & Engineering Leaders
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherMembers.map((member) => (
              <div
                key={member.id}
                className="bg-slate-950/60 border border-white/10 rounded-2xl p-5 backdrop-blur-xl hover:border-green-500/40 transition-all duration-300 flex items-center gap-5 group hover:bg-slate-900/80"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-white/10 shrink-0 shadow-md bg-slate-900 flex items-center justify-center">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="80px"
                    className={member.imgClass || "object-cover group-hover:scale-105 transition-transform duration-500"}
                  />
                </div>
                <div>
                  <span className="text-green-400 text-[10px] font-bold uppercase tracking-wider block">
                    {member.role}
                  </span>
                  <h4 className="text-white font-bold text-base leading-tight group-hover:text-green-400 transition-colors mt-0.5">
                    {member.name}
                  </h4>
                  <p className="text-slate-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
