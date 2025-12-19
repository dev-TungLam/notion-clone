"use client";

import {
  DashboardHeader,
  TeamCard,
  BirthdayCard,
  TemplateGalleryCard,
  InboxCard,
  CreateWorkspaceCard,
  PageCard,
  HorizontalScrollMenu,
} from "@/components/features/dashboard";
import { MainLayout } from "@/components/layout/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <DashboardHeader />
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pr-2 pb-10 no-scrollbar">
        {/* Top Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 h-auto lg:h-[420px] width: max-content overflow-x-hidden">
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
          <HorizontalScrollMenu>
            <div className="flex gap-6 flex-nowrap overflow-visible">
              {RECENT_PROJECTS.map((project) => (
                <PageCard
                  key={project.id}
                  title={project.title}
                  editedTime={project.editedTime}
                  image={project.image}
                  theme={project.theme}
                  status={project.status}
                >
                  <div className="flex items-center gap-2 mt-3 text-xs text-white/40 font-medium">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px]">
                      {project.title[0]}
                    </div>
                    <span>Private • 2 members</span>
                  </div>
                </PageCard>
              ))}
            </div>
          </HorizontalScrollMenu>
        </section>
      </div>
    </MainLayout>
  );
}

const RECENT_PROJECTS = [
  {
    id: 1,
    title: "To-Do List",
    editedTime: "Edited 24 min ago",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
    theme: "default",
    status: "In Progress", // simplified for now
  },
  {
    id: 2,
    title: "Travel Planner",
    editedTime: "Edited 2 days ago",
    theme: "blue",
    status: "Planning",
  },
  {
    id: 3,
    title: "Design Sprint",
    editedTime: "Edited 5 days ago",
    theme: "brown",
    status: "Not Started",
  },
];
