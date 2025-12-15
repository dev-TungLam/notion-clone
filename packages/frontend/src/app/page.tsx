"use client";

export default function HomePage() {
  return (
    <>
      <header className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2 drop-shadow-sm">
            Dashboard
          </h1>
          <p className="text-text-muted font-medium">May 2, 2023</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-white/10 text-text-muted hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[32px]">add</span>
          </button>
          <button className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-white/10 text-text-muted hover:text-white transition-colors relative">
            <span className="material-symbols-outlined text-[32px]">
              notifications
            </span>
            <span className="absolute top-3.5 right-4 w-2.5 h-2.5 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></span>
          </button>
          <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/10 ml-2 shadow-lg cursor-pointer hover:ring-primary/50 transition-all">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKHFdpWox3DDoA17F98Pz4ueEGNuiYUXdhPOJ3tWW8DBvL1s-eKCyOLGOwVhC0DLU0ldBYKLRncqq_1NJDwJVYAtALAkace5DIIklmid1nyWxBSKrguEkhI1XCMxkk8WqA1i00hPEuSwR33DkR0uzphcJ5w1C8rqt1sxMwHRFbDXW5wZCnt6Q0_jRPYe_teC1RiJMgpD5H-Q0G6CXu-lYY9uL-zgg1sl4ZPrsKadieIcSCu5tMmkaFPkDkXAcYLeQIwJHYO73wy6G_"
            />
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto pr-2 pb-10 scroll-smooth">
        {/* Top Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 h-auto lg:h-[420px]">
          {/* Col 1: Team & Birthday */}
          <div className="flex flex-col gap-6 col-span-1 lg:col-span-1 h-full">
            {/* Team Card */}
            <div className="glass-card rounded-3xl p-6 relative flex flex-col justify-between h-[180px] group transition-all duration-300 hover:bg-white/10 hover:border-white/20">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-white">My Team</h3>
                  <p className="text-xs text-gray-400 font-medium mt-1 group-hover:text-gray-300 transition-colors">
                    +9 Members
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end mt-4">
                <div className="flex -space-x-3">
                  <img
                    alt="Team member"
                    className="w-10 h-10 rounded-full border-2 border-gray-800 shadow-md"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXYev4am1uz-0ys_Dl2S4lDfqumtxlSiPPEp5VaoRigHS_WQmVHCuLdLnDg66y09Cp8a8NCoGlRzZxP5HMLSKVqycQ5cxGCne-I177-O-b06g2FMruTy6lyiP-cGrh0bE5oVltXbMhh3A1vCyZZ2Fg0YKxpezWSQtZCSB6bj4G_eCKUTDwb6Eg0_6UD7Z_wCNVlz4gj7Odxrfmjzd9mq1NBvViGdUGasiILkJakeNSGh8WLWBvZ0ZsT5CcWXEmmskp-yIPWUIcKyJE"
                  />
                  <img
                    alt="Team member"
                    className="w-10 h-10 rounded-full border-2 border-gray-800 shadow-md"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBop-29cD_d06Sd9aBzIQdlOh7J28d2kMABBZARo9tXtW8Zq4Wj-7HRXWUXlRPxS8G-JvGDVhsoLChRA2LexUBjbXHNjGgJq_LQV176c7xK1O0-uEtEfh-10S4ukqyY2WtRpDpIBeQmAEK6sCtEYbjK9xn4lj4UxZNn4gbaV9lzePeBLT_eE2_zEUvgPWSb3r2bEXfm0E3XOHkMH1BzHt91ev8w4xR7QbO-g2LqFJ25VrNmUZJudII_5L7C9CS7VoaaBFU5QTkOSJDJ"
                  />
                  <img
                    alt="Team member"
                    className="w-10 h-10 rounded-full border-2 border-gray-800 shadow-md"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKHFdpWox3DDoA17F98Pz4ueEGNuiYUXdhPOJ3tWW8DBvL1s-eKCyOLGOwVhC0DLU0ldBYKLRncqq_1NJDwJVYAtALAkace5DIIklmid1nyWxBSKrguEkhI1XCMxkk8WqA1i00hPEuSwR33DkR0uzphcJ5w1C8rqt1sxMwHRFbDXW5wZCnt6Q0_jRPYe_teC1RiJMgpD5H-Q0G6CXu-lYY9uL-zgg1sl4ZPrsKadieIcSCu5tMmkaFPkDkXAcYLeQIwJHYO73wy6G_"
                  />
                </div>
              </div>
            </div>

            {/* Birthday Card */}
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden flex-1 group transition-all duration-300">
              <div
                className="absolute inset-0 bg-cover bg-center z-0 opacity-60 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDC958Okp5oMbqNUQ0gu8dihT07z-WiboWdxVlkTQRPnDGdjhRLNG2CT5__H-RESnZLNXqggWccH034OemPG3D4uhy2RhDhU05sc1-PyN4MG1SMmMoc7ZVM-eLOjQHXx5zojmDjSsrR6vJrXfhM4ygAOHtrjDFivTsVgI2FuCz9oDpv9v6UJhqpiORNnaqV6DLGWYejCy9TxWP656yx0gT6H3jxdL_D_7PRvikyoUoGqkf5G4_r5hFHpssLKslbRfeqBA-sgywn8Qc')",
                }}
              ></div>
              <div className="absolute inset-0 bg-purple-900/40 z-0"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm">
                    All Day
                  </span>
                </div>
                <div>
                  <p className="text-sm text-purple-200 mb-1">May 14</p>
                  <h3 className="font-bold text-xl text-white">
                    Baho's Birthday
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2 & 3: Template Gallery */}
          <div className="col-span-1 lg:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group cursor-pointer h-full hover:border-white/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 rounded-full blur-[60px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>
            <div className="h-full flex flex-col items-center justify-center text-center relative z-10">
              <div className="absolute top-4 left-4 w-40 h-56 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg -rotate-6 shadow-xl z-0 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-105"></div>
              <div className="absolute bottom-4 right-4 w-48 h-40 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg rotate-3 shadow-xl z-0 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"></div>
              <h2 className="text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 z-10 drop-shadow-lg">
                Template
                <br />
                Gallery
              </h2>
            </div>
            <div className="absolute bottom-6 left-6 bg-white/10 border border-white/10 backdrop-blur-md text-white p-3 rounded-xl shadow-lg group-hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-[24px]">
                grid_view
              </span>
            </div>
          </div>

          {/* Col 4: Inbox & Create */}
          <div className="flex flex-col gap-6 col-span-1 lg:col-span-1 h-full">
            <div className="glass-card rounded-3xl p-6 flex flex-col h-[200px] items-center justify-center relative group hover:bg-white/10 transition-all duration-300 hover:border-white/20">
              <h3 className="font-bold text-lg absolute top-6 left-6 text-white">
                Inbox
              </h3>
              <div className="flex flex-col items-center gap-3 text-gray-500 group-hover:text-gray-400 transition-colors">
                <div className="p-3 bg-white/5 rounded-full ring-1 ring-white/10">
                  <span className="material-symbols-outlined text-[32px]">
                    inbox
                  </span>
                </div>
                <span className="text-sm font-medium">Empty</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#00c853]/90 to-[#009624]/90 backdrop-blur-sm text-white rounded-3xl p-6 flex-1 shadow-lg shadow-green-900/20 cursor-pointer flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-green-500/20 group relative overflow-hidden border border-white/10">
              <div className="absolute top-2 right-2 opacity-10">
                <span className="material-symbols-outlined text-[60px]">
                  grid_4x4
                </span>
              </div>
              <span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">
                add
              </span>
              <span className="font-bold text-lg">Create Workspace</span>
            </div>
          </div>
        </div>

        <section>
          <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-gray-400">
              history
            </span>
            Recently Edited Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="glass-card rounded-3xl p-6 h-[180px] relative overflow-hidden group cursor-pointer hover:border-white/30 transition-all duration-300">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="bg-black/30 p-2 rounded-lg backdrop-blur-md border border-white/10">
                    <span className="material-symbols-outlined text-blue-400">
                      check_box
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-gray-400 hover:text-white transition-colors">
                    more_horiz
                  </span>
                </div>
                <div>
                  <h4 className="text-white text-2xl font-bold mb-1 shadow-black/50 drop-shadow-md">
                    To-Do List
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <span className="material-symbols-outlined text-[14px]">
                      edit
                    </span>
                    <span>Edited 24 min ago</span>
                  </div>
                </div>
                <button className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors group-hover:rotate-45 duration-300">
                  <span className="material-symbols-outlined text-white text-[20px]">
                    arrow_outward
                  </span>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-card rounded-3xl p-6 h-[180px] relative overflow-hidden group cursor-pointer hover:border-white/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 z-0"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-start justify-between w-full">
                  <div className="flex gap-4 w-full text-xs text-cyan-200/70 font-mono border-b border-white/10 pb-2 mb-2">
                    <span>November 8, 2022</span>
                    <span>New York, NY</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-cyan-400 text-[20px] drop-shadow-glow">
                      flight_takeoff
                    </span>
                    <h4 className="text-white text-2xl font-bold">
                      Travel Planner
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>Edited 2 days ago</span>
                  </div>
                </div>
                <button className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors group-hover:rotate-45 duration-300">
                  <span className="material-symbols-outlined text-white text-[20px]">
                    arrow_outward
                  </span>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-card rounded-3xl p-6 h-[180px] relative overflow-hidden group cursor-pointer hover:border-[#d4a59a]/50 transition-all duration-300">
              <div className="absolute inset-0 bg-[#5a3a32]/60 z-0 transition-opacity group-hover:opacity-80"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex gap-2 mb-2">
                  <span className="bg-black/30 border border-white/10 backdrop-blur-md text-white/90 text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>{" "}
                    Not Started
                  </span>
                </div>
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <h4 className="text-white text-2xl font-bold mb-1">
                      Design Sprint
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <span className="material-symbols-outlined text-[14px]">
                        location_on
                      </span>
                      <span>Ryo • Edited 5 days ago</span>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-orange-300/80 border-2 border-[#5a3a32] backdrop-blur-sm"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-300/80 border-2 border-[#5a3a32] backdrop-blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
