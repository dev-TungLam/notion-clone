"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlassInput } from "@/components/ui/GlassInput";
import { GlassModal } from "@/components/ui/GlassModal";

export default function GlassDemoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen p-8 text-white space-y-8 pb-20">
      <h1 className="text-4xl font-bold mb-8">Glass Component Library</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">GlassCard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard title="Standard Card" variant="card">
            <h3 className="text-xl font-bold mb-2">Standard Card</h3>
            <p className="text-[var(--color-text-muted)]">
              This is a standard glass card with a subtle gradient and blur.
              Perfect for floating elements and content containers.
            </p>
          </GlassCard>

          <GlassCard title="Panel Panel" variant="panel">
            <h3 className="text-xl font-bold mb-2">Panel Variant</h3>
            <p className="text-[var(--color-text-muted)]">
              This is a flatter panel variant, often used for sidebars or
              sections that need to feel more grounded but still glassy.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">GlassButton</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <GlassButton variant="primary" onClick={() => console.log("Primary")}>
            Primary Button
          </GlassButton>
          <GlassButton variant="secondary">Secondary Button</GlassButton>
          <GlassButton variant="ghost">Ghost Button</GlassButton>
          <GlassButton variant="primary" size="sm">
            Small
          </GlassButton>
          <GlassButton variant="primary" size="lg">
            Large
          </GlassButton>
          <GlassButton disabled>Disabled</GlassButton>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">GlassInput</h2>
        <div className="max-w-md space-y-4">
          <GlassInput
            label="Username"
            placeholder="Enter username..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <GlassInput
            label="Email"
            placeholder="example@email.com"
            type="email"
            icon={<span className="text-lg">@</span>}
          />
          <GlassInput
            label="Error State"
            placeholder="Invalid input..."
            error="This field is required"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">GlassModal</h2>
        <GlassButton onClick={() => setIsModalOpen(true)}>
          Open Demo Modal
        </GlassButton>

        <GlassModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Glass Modal Demo"
          footer={
            <>
              <GlassButton
                variant="ghost"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </GlassButton>
              <GlassButton
                variant="primary"
                onClick={() => setIsModalOpen(false)}
              >
                Confirm Action
              </GlassButton>
            </>
          }
        >
          <div className="space-y-4">
            <p className="text-[var(--color-text-muted)]">
              This modal uses the glassmorphism aesthetic with a blurred
              backdrop. It uses React Portal to render at the document body
              level.
            </p>
            <GlassInput
              label="Modal Input"
              placeholder="Type inside modal..."
            />
            <p className="text-sm text-[var(--color-text-muted)]">
              Try resizing the window or scrolling the background (background
              scroll should be locked).
            </p>
          </div>
        </GlassModal>
      </section>
    </div>
  );
}
