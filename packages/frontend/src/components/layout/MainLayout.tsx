"use client";

import { Sidebar } from "./Sidebar";
import { useSidebar, SidebarProvider } from "./sidebar/SidebarContext";

function MainContent({ children }: { children: React.ReactNode }) {
  const { mode } = useSidebar();

  return (
    <main
      className="flex-1 flex flex-col overflow-hidden relative p-6 pt-3 md:p-10 md:pt-6"
      style={{
        // When folded: leave enough space for burger + preview (280px + 50px padding)
        paddingInline: mode === "fold" ? "330px" : undefined,
      }}
    >
      {children}
    </main>
  );
}

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden text-text-main font-display selection:bg-[#0d63a5] selection:text-white">
        {/* Background Blobs */}
        <div className="fixed inset-0 pointer-events-none z-[-1]">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]"></div>
        </div>

        <Sidebar />
        <MainContent>{children}</MainContent>
      </div>
    </SidebarProvider>
  );
};
