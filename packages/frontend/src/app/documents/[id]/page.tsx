"use client";

import { use } from "react";
import { EditorPage } from "@/components/features/editor";
import { MainLayout } from "@/components/layout/MainLayout";

interface DocumentPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function DocumentPage({ params }: DocumentPageProps) {
  // Unwrapping params using React.use() as recommended in Next.js 15/16
  const { id } = use(params);

  return (
    <MainLayout>
      <EditorPage documentId={id} />
    </MainLayout>
  );
}
