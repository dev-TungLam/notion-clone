"use client";

import { Sidebar } from "./Sidebar";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen overflow-hidden text-text-main font-display selection:bg-[#0d63a5] selection:text-white">
      {/* Background Blobs */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]"></div>
      </div>

      <Sidebar />

      <main className="flex-1 flex flex-col h-full overflow-hidden relative p-6 md:p-10 z-10 w-full">
        {children}
      </main>
    </div>
  );
};
