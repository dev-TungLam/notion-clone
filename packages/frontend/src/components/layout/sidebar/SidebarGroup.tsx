"use client";

import React from "react";
import { useSidebar } from "./SidebarContext";

interface SidebarGroupProps {
  title?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}

export function SidebarGroup({ title, children, action }: SidebarGroupProps) {
  const { isCollapsed } = useSidebar();

  return (
    <div role="group" className="mb-4">
      {!isCollapsed && title && (
        <div className="px-3 mb-2 text-[11px] font-bold text-gray-600 uppercase tracking-wider flex items-center justify-between group/header">
          <span>{title}</span>
          {action && (
            <span className="opacity-0 group-hover/header:opacity-100 transition-opacity">
              {action}
            </span>
          )}
        </div>
      )}
      <nav className="space-y-0.5" aria-label={title || "Navigation Group"}>
        {children}
      </nav>
    </div>
  );
}
