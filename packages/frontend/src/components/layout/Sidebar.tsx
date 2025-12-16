"use client";

import { cn } from "@/lib/utils";
import { SidebarProvider, useSidebar } from "./sidebar/SidebarContext";
import { SidebarItem } from "./sidebar/SidebarItem";
import { SidebarGroup } from "./sidebar/SidebarGroup";
import { SidebarTree, TreeNode } from "./sidebar/SidebarTree";

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

function SidebarContent() {
  const { isCollapsed, setCollapsed } = useSidebar();

  return (
    <aside
      className={cn(
        "sidebar flex flex-col shrink-0 z-50 h-full transition-all duration-300 relative group/sidebar",
        isCollapsed ? "w-[60px]" : "w-[280px]"
      )}
      aria-label="Main Navigation"
    >
      {/* Tier 0: Workspace Context */}
      <div className="p-3">
        <div className="flex items-center justify-between p-2 hover:bg-[var(--color-glass-surface-hover)] rounded-lg cursor-pointer transition-colors group/workspace">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-6 h-6 shrink-0 bg-[#0d63a5] rounded-md flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-900/30 ring-1 ring-white/10">
              W
            </div>
            {!isCollapsed && (
              <>
                <span className="font-semibold text-sm text-gray-200 truncate group-hover/workspace:text-white transition-colors">
                  Workspace
                </span>
                <span className="material-symbols-outlined text-gray-500 text-[16px] ml-auto">
                  unfold_more
                </span>
              </>
            )}
          </div>
          {!isCollapsed && (
            <button
              onClick={() => setCollapsed(true)}
              className="w-6 h-6 flex items-center justify-center rounded text-gray-500 hover:text-white hover:bg-white/10 transition-colors opacity-0 group-hover/sidebar:opacity-100"
              title="Collapse sidebar"
              aria-label="Collapse sidebar"
            >
              <span className="material-symbols-outlined text-[18px]">
                keyboard_double_arrow_left
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Tier 1: Primary Action */}
      <div className="px-3 pb-4">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[var(--color-glass-surface)] hover:bg-[var(--color-glass-surface-hover)] border border-white/5 hover:border-white/10 text-white transition-all group focus:ring-2 focus:ring-blue-500 outline-none">
          <span className="material-symbols-outlined text-[20px] text-blue-400 group-hover:text-blue-300">
            add_circle
          </span>
          {!isCollapsed && (
            <span className="text-sm font-medium">New Page</span>
          )}
        </button>
      </div>

      {/* Scrollable Area */}
      <div className="flex-1 overflow-y-auto px-3 py-2 custom-scrollbar">
        {/* Tier 2: Personal Navigation */}
        <SidebarGroup>
          <SidebarItem icon="home" label="Home" active />
          <SidebarItem icon="schedule" label="Recent" />
          <SidebarItem icon="star" label="Favorites" />
          <SidebarItem icon="description" label="My Pages" />
        </SidebarGroup>

        {/* Tier 3: Pages Content Tree */}
        <SidebarGroup
          title="Pages" // 4. Update the "Workspace" SidebarGroup title to "Pages"
          action={
            <span className="material-symbols-outlined text-[14px] text-gray-600 hover:text-white transition-colors cursor-pointer">
              add
            </span>
          }
        >
          <SidebarTree data={mockTreeData} />{" "}
          {/* 3. Replace content with SidebarTree */}
        </SidebarGroup>

        {/* Tier 4: Utilities */}
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
            {!isCollapsed && (
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-medium text-gray-200 truncate group-hover:text-white transition-colors">
                  Amir Baqian
                </span>
                <span className="text-[11px] text-gray-500 truncate">
                  Product Designer
                </span>
              </div>
            )}
          </div>
          {!isCollapsed && (
            <span className="material-symbols-outlined text-[20px] text-gray-500 hover:text-white transition-colors">
              settings
            </span>
          )}
        </div>
      </div>

      {/* Expand Button (Mobile/Collapsed) */}
      {isCollapsed && (
        <div className="absolute top-3 right-3 z-50">
          <button
            onClick={() => setCollapsed(false)}
            className="p-1 text-gray-500 hover:text-white bg-black/50 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            title="Expand sidebar"
            aria-label="Expand sidebar"
          >
            <span className="material-symbols-outlined">menu_open</span>
          </button>
        </div>
      )}
    </aside>
  );
}

export const Sidebar = () => {
  return (
    <SidebarProvider>
      <SidebarContent />
    </SidebarProvider>
  );
};
