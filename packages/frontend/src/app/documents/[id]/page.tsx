"use client";

import { use } from "react";

interface DocumentPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function DocumentPage({ params }: DocumentPageProps) {
  // Unwrapping params using React.use() as recommended in Next.js 15/16
  const { id } = use(params);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#1F1F1F]">
      {/* Cover Image Placeholder */}
      <div className="h-[20vh] bg-neutral-100 dark:bg-neutral-800 w-full group relative">
        <div className="absolute bottom-4 right-10 opacity-0 group-hover:opacity-100 transition">
          <button className="text-xs bg-white/50 hover:bg-white text-black p-1 rounded">
            Change cover
          </button>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-4xl mx-auto w-full pb-32 px-12 md:px-24">
        {/* Icon */}
        <div className="-mt-10 mb-4">
          <span className="text-6xl">📄</span>
        </div>

        {/* Title Input */}
        <div className="pb-4">
          <h1 className="text-4xl font-bold font-sans text-neutral-800 dark:text-neutral-100 outline-none placeholder:text-neutral-300 dark:placeholder:text-neutral-600">
            Untitled Page {id}
          </h1>
        </div>

        {/* Content Editable Area (Placeholder) */}
        <div className="min-h-[50vh] text-neutral-700 dark:text-neutral-300">
          <p className="italic text-neutral-400">Start typing here...</p>
        </div>
      </div>
    </div>
  );
}
