import React from "react";
import { GlassCard } from "../../ui/GlassCard";
import { GlassIconButton } from "../../ui/GlassIconButton";

interface ProjectCardProps {
  title: string;
  editedTime: string;
  icon?: React.ReactNode;
  image?: string;
  theme?: "blue" | "brown";
  status?: string | React.ReactNode;
  meta?: React.ReactNode;
  children?: React.ReactNode;
}

export function ProjectCard({
  title,
  editedTime,
  icon,
  image,
  theme,
  status,
  meta,
  children,
}: ProjectCardProps) {
  return (
    <GlassCard
      className={`rounded-3xl p-0 h-[180px] relative overflow-hidden group cursor-pointer hover:border-white/30 transition-all duration-300`}
    >
      {image && (
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
      )}

      {/* Special case for the "Design Sprint" card style with brown background */}
      {theme === "brown" && (
        <div className="absolute inset-0 bg-[#5a3a32]/60 z-0 transition-opacity group-hover:opacity-80"></div>
      )}

      {/* Special case for Travel Planner */}
      {theme === "blue" && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 z-0"></div>
      )}

      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        {status && (
          <div className="flex items-start justify-between">
            {status}
            {children}
          </div>
        )}

        {!status && children && (
          <div className="absolute top-6 right-6 z-20">{children}</div>
        )}

        {/* Content Area */}
        <div className="mt-auto">
          {meta}
          <div className="flex items-center gap-2 mb-1">
            {icon}
            <h4 className="text-white text-2xl font-bold shadow-black/50 drop-shadow-md">
              {title}
            </h4>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-300">
            {/* Fallback edit icon if not customizing */}
            <span>{editedTime}</span>
          </div>
        </div>

        <GlassIconButton
          size="sm"
          className="absolute bottom-6 right-6 bg-white/5 backdrop-blur-sm hover:bg-white/20 border border-white/30 group-hover:rotate-45 duration-300"
        >
          <span className="material-symbols-outlined text-white text-[20px]">
            arrow_outward
          </span>
        </GlassIconButton>
      </div>
    </GlassCard>
  );
}
