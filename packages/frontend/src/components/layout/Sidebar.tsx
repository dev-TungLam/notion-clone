"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { SidebarProvider, useSidebar } from "./sidebar/SidebarContext";
import { SidebarItem } from "./sidebar/SidebarItem";
import { SidebarGroup } from "./sidebar/SidebarGroup";
import { SidebarTree, TreeNode } from "./sidebar/SidebarTree";
import { SettingsModal } from "@/components/features/settings/SettingsModal";

const mockTreeData: TreeNode[] = [
  { id: "prod-docs", label: "Product Docs", children: [] },
  {
    id: "sprint-notes",
    label: "Sprint Notes",
    children: [
      { id: "daily-log", label: "Daily Log", icon: "description" },
      { id: "retro", label: "Retrospective", icon: "description" },
      { id: "planning", label: "Planning", icon: "description" },
    ],
  },
  {
    id: "design-sys",
    label: "Design System",
    children: [],
  },
];

// Burger menu icon at top-left corner when folded
function BurgerMenuTrigger() {
  const { mode, setHoverPreview, setMode } = useSidebar();

  if (mode !== "fold") return null;

  return (
    <div
      className="fixed left-3 top-3 z-[60]"
      onMouseEnter={() => setHoverPreview(true)}
    >
      <button
        onClick={() => setMode("unfold")}
        className="p-2.5 rounded-lg bg-[var(--color-glass-surface)] hover:bg-[var(--color-glass-surface-hover)] border border-white/10 text-gray-400 hover:text-white transition-all shadow-lg shadow-black/30 backdrop-blur-md"
        title="Open sidebar"
        aria-label="Open sidebar"
      >
        <span className="material-symbols-outlined text-[22px]">menu</span>
      </button>
    </div>
  );
}

// Preview panel that appears on hover (completely fixed positioned)
function SidebarPreview() {
  const { mode, isHoverPreview, setHoverPreview, setMode } = useSidebar();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  if (mode !== "fold" || !isHoverPreview) return null;

  return (
    <>
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
      <aside
        className="sidebar fixed left-3 top-14 bottom-3 w-[280px] z-[55] shadow-2xl shadow-black/50 rounded-xl overflow-hidden flex flex-col"
        onMouseLeave={() => setHoverPreview(false)}
        aria-label="Sidebar Preview"
      >
        {/* Workspace Header */}
        <div className="p-3">
          <div className="flex items-center justify-between p-2 hover:bg-[var(--color-glass-surface-hover)] rounded-lg cursor-pointer transition-colors">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-6 h-6 shrink-0 bg-[#0d63a5] rounded-md flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-900/30 ring-1 ring-white/10">
                W
              </div>
              <span className="font-semibold text-sm text-gray-200">
                Workspace
              </span>
            </div>
            <button
              onClick={() => setMode("unfold")}
              className="px-2 py-1 text-xs bg-[var(--color-primary)] hover:bg-[var(--color-primary-700)] text-white rounded transition-colors"
            >
              Unfold
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-3 pb-2">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[var(--color-glass-surface)] hover:bg-[var(--color-glass-surface-hover)] border border-white/5 text-white transition-all">
            <span className="material-symbols-outlined text-[20px] text-blue-400">
              add_circle
            </span>
            <span className="text-sm font-medium">New Page</span>
          </button>
        </div>

        {/* Navigation */}
        <div className="px-3 py-2 border-b border-white/5">
          <SidebarGroup>
            <SidebarItem icon="home" label="Home" active />
            <SidebarItem icon="search" label="Search" />
            <SidebarItem icon="schedule" label="Recent" />
            <SidebarItem icon="star" label="Favorites" />
          </SidebarGroup>
        </div>

        {/* Scrollable Pages */}
        <div className="flex-1 overflow-y-auto px-3 py-2 custom-scrollbar">
          <SidebarGroup title="Pages">
            <SidebarTree data={mockTreeData} />
          </SidebarGroup>
        </div>
      </aside>
    </>
  );
}

// Main sidebar (only shown in unfold mode)
function SidebarContent() {
  const { mode, setMode } = useSidebar();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Don't render in fold mode - preview handles that
  if (mode === "fold") {
    return (
      <>
        <BurgerMenuTrigger />
        <SidebarPreview />
      </>
    );
  }

  return (
    <>
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      <aside
        className="sidebar flex flex-col shrink-0 w-[280px] h-full z-50 relative group/sidebar"
        aria-label="Main Navigation"
      >
        {/* Tier 0: Workspace Context */}
        <div className="p-3">
          <div className="flex items-center justify-between p-2 hover:bg-[var(--color-glass-surface-hover)] rounded-lg cursor-pointer transition-colors group/workspace">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-6 h-6 shrink-0 bg-[#0d63a5] rounded-md flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-900/30 ring-1 ring-white/10">
                W
              </div>
              <span className="font-semibold text-sm text-gray-200 truncate group-hover/workspace:text-white transition-colors">
                Workspace
              </span>
              <span className="material-symbols-outlined text-gray-500 text-[16px] ml-auto">
                unfold_more
              </span>
            </div>
            <button
              onClick={() => setMode("fold")}
              className="w-6 h-6 flex items-center justify-center rounded text-gray-500 hover:text-white hover:bg-white/10 transition-colors opacity-0 group-hover/sidebar:opacity-100"
              title="Fold sidebar"
              aria-label="Fold sidebar"
            >
              <span className="material-symbols-outlined text-[18px]">
                keyboard_double_arrow_left
              </span>
            </button>
          </div>
        </div>

        {/* Tier 1: Primary Action */}
        <div className="px-3 pb-2">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[var(--color-glass-surface)] hover:bg-[var(--color-glass-surface-hover)] border border-white/5 hover:border-white/10 text-white transition-all group focus:ring-2 focus:ring-blue-500 outline-none">
            <span className="material-symbols-outlined text-[20px] text-blue-400 group-hover:text-blue-300">
              add_circle
            </span>
            <span className="text-sm font-medium">New Page</span>
          </button>
        </div>

        {/* Sticky Section: Personal Navigation */}
        <div className="px-3 py-2 border-b border-white/5 bg-gradient-to-b from-transparent to-black/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <SidebarGroup>
            <SidebarItem icon="home" label="Home" active />
            <SidebarItem icon="search" label="Search" />
            <SidebarItem icon="schedule" label="Recent" />
            <SidebarItem icon="star" label="Favorites" />
          </SidebarGroup>
        </div>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto px-3 py-2 custom-scrollbar">
          {/* Pages Content Tree */}
          <SidebarGroup
            title="Pages"
            action={
              <span className="material-symbols-outlined text-[14px] text-gray-600 hover:text-white transition-colors cursor-pointer">
                add
              </span>
            }
          >
            <SidebarTree data={mockTreeData} />
          </SidebarGroup>

          {/* Utilities */}
          <SidebarGroup title="Utilities">
            <SidebarItem icon="grid_view" label="Templates" />
            <SidebarItem icon="upload_file" label="Import" />
            <SidebarItem icon="delete" label="Trash" />
          </SidebarGroup>
        </div>

        {/* Tier 5: Footer */}
        <div className="p-3 border-t border-white/5 bg-[#0a0a0a]">
          <div
            className="flex items-center justify-between p-2 rounded-lg hover:bg-[var(--color-glass-surface-hover)] cursor-pointer transition-colors group focus-visible:ring-2 focus-visible:ring-blue-500 outline-none"
            role="button"
            tabIndex={0}
            aria-label="User profile and settings"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative shrink-0">
                <img
                  alt="User"
                  className="w-8 h-8 rounded object-cover ring-1 ring-white/10"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKHFdpWox3DDoA17F98Pz4ueEGNuiYUXdhPOJ3tWW8DBvL1s-eKCyOLGOwVhC0DLU0ldBYKLRncqq_1NJDwJVYAtALAkace5DIIklmid1nyWxBSKrguEkhI1XCMxkk8WqA1i00hPEuSwR33DkR0uzphcJ5w1C8rqt1sxMwHRFbDXW5wZCnt6Q0_jRPYe_teC1RiJMgpD5H-Q0G6CXu-lYY9uL-zgg1sl4ZPrsKadieIcSCu5tMmkaFPkDkXAcYLeQIwJHYO73wy6G_"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#0a0a0a]"></div>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-medium text-gray-200 truncate group-hover:text-white transition-colors">
                  Amir Baqian
                </span>
                <span className="text-[11px] text-gray-500 truncate">
                  Product Designer
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="p-1 rounded hover:bg-white/10 transition-colors"
              aria-label="Open settings"
            >
              <span className="material-symbols-outlined text-[20px] text-gray-500 hover:text-white transition-colors">
                settings
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export const Sidebar = () => {
  return <SidebarContent />;
};
