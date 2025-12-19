"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { GlassCard } from "./GlassCard";
import { GlassButton } from "./GlassButton";
import { GlassIconButton } from "./GlassIconButton";

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

export function GlassModal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "md",
}: GlassModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-xl",
    lg: "max-w-3xl",
    xl: "max-w-5xl",
  };

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <GlassCard
        className={`relative z-10 w-full ${sizeClasses[size]} flex flex-col max-h-[90vh] shadow-2xl animate-in fade-in zoom-in-95 duration-200`}
        variant="card"
      >
        <GlassCard.Header className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)]">
          {title && (
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          )}
          <GlassIconButton onClick={onClose} aria-label="Close" size="sm">
            <span className="material-symbols-outlined">close</span>
          </GlassIconButton>
        </GlassCard.Header>

        <GlassCard.Content className="flex-1 overflow-y-auto min-h-0">
          {children}
        </GlassCard.Content>

        {footer && (
          <GlassCard.Footer className="border-t border-[rgba(255,255,255,0.08)] flex justify-end gap-3">
            {footer}
          </GlassCard.Footer>
        )}
      </GlassCard>
    </div>
  );

  return createPortal(modalContent, document.body);
}
