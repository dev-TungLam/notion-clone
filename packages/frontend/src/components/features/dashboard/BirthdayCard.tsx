import React from "react";
import { GlassCard } from "../../ui/GlassCard";

export function BirthdayCard() {
  return (
    <GlassCard className="rounded-3xl relative overflow-hidden flex-1 group transition-all duration-300">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-60 mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDC958Okp5oMbqNUQ0gu8dihT07z-WiboWdxVlkTQRPnDGdjhRLNG2CT5__H-RESnZLNXqggWccH034OemPG3D4uhy2RhDhU05sc1-PyN4MG1SMmMoc7ZVM-eLOjQHXx5zojmDjSsrR6vJrXfhM4ygAOHtrjDFivTsVgI2FuCz9oDpv9v6UJhqpiORNnaqV6DLGWYejCy9TxWP656yx0gT6H3jxdL_D_7PRvikyoUoGqkf5G4_r5hFHpssLKslbRfeqBA-sgywn8Qc')",
        }}
      ></div>
      <div className="absolute inset-0 bg-purple-900/40 z-0"></div>
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex justify-end pt-4 pr-4">
          <span className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm">
            All Day
          </span>
        </div>
        <div className="p-6">
          <p className="text-sm text-purple-200 mb-1">May 14</p>
          <h3 className="font-bold text-xl text-white">Baho's Birthday</h3>
        </div>
      </div>
    </GlassCard>
  );
}
