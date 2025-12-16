import React from "react";

export function CreateWorkspaceCard() {
  return (
    <div className="bg-gradient-to-br from-[#00c853]/90 to-[#009624]/90 backdrop-blur-sm text-white rounded-3xl p-6 flex-1 shadow-lg shadow-green-900/20 cursor-pointer flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-green-500/20 group relative overflow-hidden border border-white/10">
      <div className="absolute top-2 right-2 opacity-10">
        <span className="material-symbols-outlined text-[60px]">grid_4x4</span>
      </div>
      <span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">
        add
      </span>
      <span className="font-bold text-lg">Create Workspace</span>
    </div>
  );
}
