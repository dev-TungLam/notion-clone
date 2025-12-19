import React from "react";
import { GlassCard } from "../../ui/GlassCard";

export function TemplateGalleryCard() {
  return (
    <GlassCard className="rounded-3xl p-8 relative overflow-hidden group cursor-pointer h-full hover:border-white/20 transition-all duration-300">
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 rounded-full blur-[60px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

      <div className="h-full flex flex-col items-center justify-center text-center relative z-10">
        <div className="absolute top-4 left-4 w-40 h-56 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg -rotate-6 shadow-xl z-0 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-105"></div>
        <div className="absolute bottom-4 right-4 w-48 h-40 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg rotate-3 shadow-xl z-0 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"></div>
        <h2 className="text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 z-10 drop-shadow-lg">
          Template
          <br />
          Gallery
        </h2>
      </div>

      <div className="absolute bottom-6 left-6 bg-white/10 border border-white/10 backdrop-blur-md text-white p-3 rounded-xl shadow-lg group-hover:bg-white/20 transition-colors">
        <span className="material-symbols-outlined text-[24px]">grid_view</span>
      </div>
    </GlassCard>
  );
}
