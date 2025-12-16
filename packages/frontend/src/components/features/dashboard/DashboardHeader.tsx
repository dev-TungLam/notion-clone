import React from "react";
import { GlassIconButton } from "../../ui/GlassIconButton";

export function DashboardHeader() {
  return (
    <header className="flex items-start justify-between mb-8">
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

        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/10 ml-2 shadow-lg cursor-pointer hover:ring-[var(--color-primary)]/50 transition-all">
          <img
            alt="User Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKHFdpWox3DDoA17F98Pz4ueEGNuiYUXdhPOJ3tWW8DBvL1s-eKCyOLGOwVhC0DLU0ldBYKLRncqq_1NJDwJVYAtALAkace5DIIklmid1nyWxBSKrguEkhI1XCMxkk8WqA1i00hPEuSwR33DkR0uzphcJ5w1C8rqt1sxMwHRFbDXW5wZCnt6Q0_jRPYe_teC1RiJMgpD5H-Q0G6CXu-lYY9uL-zgg1sl4ZPrsKadieIcSCu5tMmkaFPkDkXAcYLeQIwJHYO73wy6G_"
          />
        </div>
      </div>
    </header>
  );
}
