"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "w-[280px] bg-sidebar-bg border-r border-border-dark flex flex-col shrink-0 z-50 h-full transition-all duration-300 relative group/sidebar",
        isCollapsed && "w-[60px]"
      )}
    >
      <div className="p-3">
        <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors group/workspace">
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
              onClick={() => setIsCollapsed(true)}
              className="w-6 h-6 flex items-center justify-center rounded text-gray-500 hover:text-white hover:bg-white/10 transition-colors opacity-0 group-hover/sidebar:opacity-100"
              title="Collapse sidebar"
            >
              <span className="material-symbols-outlined text-[18px]">
                keyboard_double_arrow_left
              </span>
            </button>
          )}
        </div>
      </div>

      <div className="px-3 pb-4 space-y-1 border-b border-white/5 mb-2">
        <button className="w-full flex items-center gap-3 px-3 py-1.5 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all group border border-transparent hover:border-white/5">
          <span className="material-symbols-outlined text-[20px] group-hover:text-white transition-colors">
            search
          </span>
          {!isCollapsed && (
            <>
              <span className="text-sm font-medium">Search</span>
              <span className="ml-auto text-xs bg-white/10 px-1.5 py-0.5 rounded text-gray-500 border border-white/5 font-mono group-hover:text-gray-300 transition-colors">
                ⌘K
              </span>
            </>
          )}
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-1.5 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all group border border-transparent hover:border-white/5">
          <span className="material-symbols-outlined text-[20px] group-hover:text-white transition-colors">
            add_circle
          </span>
          {!isCollapsed && (
            <span className="text-sm font-medium">New Page</span>
          )}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-6 custom-scrollbar">
        <div>
          {!isCollapsed && (
            <div className="px-3 mb-2 text-[11px] font-bold text-gray-600 uppercase tracking-wider">
              Menu
            </div>
          )}
          <nav className="space-y-0.5">
            {[
              { icon: "dashboard", label: "Overview" },
              { icon: "receipt_long", label: "Transactions" },
              { icon: "notifications_active", label: "Schedule Alerts" },
              { icon: "savings", label: "Cashstack" },
              { icon: "ssid_chart", label: "Finances" },
              { icon: "description", label: "Contracts" },
              { icon: "settings", label: "Settings" },
            ].map((item) => (
              <a
                key={item.label}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all group border border-transparent hover:border-white/5"
                href="#"
              >
                <span className="material-symbols-outlined text-[#0d63a5] text-[24px] opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </span>
                {!isCollapsed && <span className="text-sm">{item.label}</span>}
              </a>
            ))}
          </nav>
        </div>

        {!isCollapsed && (
          <div>
            <div className="px-3 mb-1 flex items-center justify-between group cursor-pointer hover:bg-white/5 py-1 rounded">
              <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider group-hover:text-gray-400 transition-colors">
                Projects
              </span>
              <span className="material-symbols-outlined text-[16px] text-gray-600 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                add
              </span>
            </div>
            <nav className="space-y-0.5 mt-1">
              {[
                "Q4 Marketing Campaign",
                "Website Redesign",
                "Mobile App Launch",
              ].map((project) => (
                <div key={project} className="group relative">
                  <a
                    className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all pl-2"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-[18px] text-gray-600 group-hover:text-gray-400 transition-colors">
                      arrow_right
                    </span>
                    <span className="material-symbols-outlined text-[18px] text-gray-500">
                      folder
                    </span>
                    <span className="text-sm truncate">{project}</span>
                  </a>
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>

      <div className="p-3 border-t border-white/5 bg-[#0a0a0a]">
        {!isCollapsed && (
          <a
            className="flex items-center gap-3 px-3 py-2 mb-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all group"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px] text-gray-500 group-hover:text-red-400 transition-colors">
              delete
            </span>
            <span className="text-sm font-medium">Trash</span>
          </a>
        )}
        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group border border-transparent hover:border-white/5">
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
            <button
              className="w-8 h-8 flex items-center justify-center rounded text-gray-500 hover:text-white hover:bg-white/10 transition-colors"
              title="Log out"
            >
              <span className="material-symbols-outlined text-[20px]">
                logout
              </span>
            </button>
          )}
        </div>
      </div>
      {isCollapsed && (
        <div className="absolute top-3 right-3">
          <button
            onClick={() => setIsCollapsed(false)}
            className="p-1 text-gray-500 hover:text-white"
          >
            <span className="material-symbols-outlined">menu_open</span>
          </button>
        </div>
      )}
    </aside>
  );
};
