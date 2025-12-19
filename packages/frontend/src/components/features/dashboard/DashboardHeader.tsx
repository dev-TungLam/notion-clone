import React from "react";
import { GlassIconButton } from "../../ui/GlassIconButton";

export function DashboardHeader() {
  return (
    <header className="flex items-start justify-between mb-6">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white mb-2 drop-shadow-sm">
          Dashboard
        </h1>
        <p className="text-[var(--color-text-muted)] font-medium">
          May 2, 2023
        </p>
      </div>
      <div className="flex items-center gap-4">
        <GlassIconButton
          size="lg"
          className="hover:bg-white/10 text-[var(--color-text-muted)] hover:text-white"
        >
          <span className="material-symbols-outlined text-[32px]">add</span>
        </GlassIconButton>

        <GlassIconButton
          size="lg"
          className="hover:bg-white/10 text-[var(--color-text-muted)] hover:text-white relative"
        >
          <span className="material-symbols-outlined text-[32px]">
            notifications
          </span>
          <span className="absolute top-3.5 right-4 w-2.5 h-2.5 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></span>
        </GlassIconButton>
      </div>
    </header>
  );
}
