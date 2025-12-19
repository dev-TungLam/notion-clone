"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useSidebar } from "./SidebarContext";

interface SidebarItemProps {
  icon: string | React.ReactNode;
  label: string;
  href?: string;
  active?: boolean;
  hasSubmenu?: boolean;
  isExpanded?: boolean;
  onClick?: () => void;
  action?: React.ReactNode;
  level?: number;
}

export function SidebarItem({
  icon,
  label,
  href = "#",
  active = false,
  hasSubmenu = false,
  isExpanded = false,
  onClick,
  action,
  level = 0,
}: SidebarItemProps) {
  const { isCollapsed } = useSidebar();
  const [isHovered, setIsHovered] = useState(false);

  // Determine if icon is a string (Material Symbol) or React Node
  const iconContent =
    typeof icon === "string" ? (
      <span
        className={cn(
          "material-symbols-outlined text-[20px] transition-colors",
          active ? "text-blue-400" : "group-hover:text-gray-200"
        )}
      >
        {icon}
      </span>
    ) : (
      icon
    );

  return (
    <div className="relative flex items-center group/item">
      <a
        href={href}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ paddingLeft: level ? `${level * 12 + 12}px` : "12px" }}
        className={cn(
          "flex items-center gap-2 py-1.5 pr-3 rounded-lg text-gray-400 hover:bg-[var(--color-glass-surface-hover)] hover:text-white transition-all group w-full border border-transparent hover:border-white/5 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:shadow-[0_2px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)]",
          active &&
            "bg-[var(--color-glass-surface-hover)] text-white font-medium shadow-[0_2px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.08)]"
        )}
        role="menuitem"
        aria-label={label}
        tabIndex={0}
      >
        <div className="flex items-center justify-center w-5 shrink-0">
          {iconContent}
        </div>

        {!isCollapsed && (
          <>
            <span className="text-sm truncate flex-1">{label}</span>
            {hasSubmenu && (
              <span
                className="material-symbols-outlined text-[16px] text-gray-600 group-hover:text-gray-400 ml-auto transition-transform duration-200"
                style={{ transform: isExpanded ? "rotate(90deg)" : "none" }}
              >
                chevron_right
              </span>
            )}
            {action}
          </>
        )}
      </a>

      {/* Tooltip for collapsed state */}
      {isCollapsed && isHovered && (
        <div className="absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 z-[60] bg-gray-900 border border-white/10 text-white text-xs px-2 py-1.5 rounded-md shadow-xl whitespace-nowrap animate-in fade-in zoom-in-95 duration-200">
          {label}
        </div>
      )}
    </div>
  );
}
