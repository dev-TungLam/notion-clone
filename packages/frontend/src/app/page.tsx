"use client";

import {
  DashboardHeader,
  TeamCard,
  BirthdayCard,
  TemplateGalleryCard,
  InboxCard,
  CreateWorkspaceCard,
  ProjectCard,
} from "@/components/features/dashboard";

export default function HomePage() {
  return (
    <>
      <DashboardHeader />

      <div className="flex-1 overflow-y-auto pr-2 pb-10 scroll-smooth">
        {/* Top Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 h-auto lg:h-[420px]">
          {/* Col 1: Team & Birthday */}
          <div className="flex flex-col gap-6 col-span-1 lg:col-span-1 h-full">
            <TeamCard />
            <BirthdayCard />
          </div>

          {/* Col 2 & 3: Template Gallery */}
          <div className="col-span-1 lg:col-span-2 h-full">
            <TemplateGalleryCard />
          </div>

          {/* Col 4: Inbox & Create */}
          <div className="flex flex-col gap-6 col-span-1 lg:col-span-1 h-full">
            <InboxCard />
            <CreateWorkspaceCard />
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
            {/* Project 1: To-Do List */}
            <ProjectCard
              title="To-Do List"
              editedTime="Edited 24 min ago"
              image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop"
              status={
                <div className="bg-black/30 p-2 rounded-lg backdrop-blur-md border border-white/10">
                  <span className="material-symbols-outlined text-blue-400">
                    check_box
                  </span>
                </div>
              }
              meta={
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <span className="material-symbols-outlined text-[14px]">
                    edit
                  </span>
                </div>
              }
            >
              <span className="material-symbols-outlined text-gray-400 hover:text-white transition-colors">
                more_horiz
              </span>
            </ProjectCard>

            {/* Project 2: Travel Planner */}
            <ProjectCard
              title="Travel Planner"
              editedTime="Edited 2 days ago"
              theme="blue"
              status={
                <div className="flex gap-4 w-full text-xs text-cyan-200/70 font-mono border-b border-white/10 pb-2 mb-2">
                  <span>November 8, 2022</span>
                  <span>New York, NY</span>
                </div>
              }
              icon={
                <span className="material-symbols-outlined text-cyan-400 text-[20px] drop-shadow-glow">
                  flight_takeoff
                </span>
              }
            />

            {/* Project 3: Design Sprint */}
            <ProjectCard
              title="Design Sprint"
              editedTime="Ryo • Edited 5 days ago"
              theme="brown"
              status={
                <span className="bg-black/30 border border-white/10 backdrop-blur-md text-white/90 text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>{" "}
                  Not Started
                </span>
              }
              meta={
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <span className="material-symbols-outlined text-[14px]">
                    location_on
                  </span>
                </div>
              }
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-orange-300/80 border-2 border-[#5a3a32] backdrop-blur-sm"></div>
                <div className="w-8 h-8 rounded-full bg-blue-300/80 border-2 border-[#5a3a32] backdrop-blur-sm"></div>
              </div>
            </ProjectCard>
          </div>
        </section>
      </div>
    </>
  );
}
