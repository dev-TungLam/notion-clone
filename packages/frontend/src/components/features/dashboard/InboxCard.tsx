import React from "react";
import { GlassCard } from "../../ui/GlassCard";

export function InboxCard() {
  return (
    <GlassCard className="rounded-3xl p-6 flex flex-col h-[200px] items-center justify-center relative group hover:bg-white/10 transition-all duration-300 hover:border-white/20">
      <h3 className="font-bold text-lg absolute top-6 left-6 text-white">
        Inbox
      </h3>
      <div className="flex flex-col items-center gap-3 text-[var(--color-text-muted)] group-hover:text-gray-400 transition-colors">
        <div className="p-3 bg-white/5 rounded-full ring-1 ring-white/10">
          <span className="material-symbols-outlined text-[32px]">inbox</span>
        </div>
        <span className="text-sm font-medium">Empty</span>
      </div>
    </GlassCard>
  );
}
