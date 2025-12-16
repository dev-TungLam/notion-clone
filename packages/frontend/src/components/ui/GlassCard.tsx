import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "panel" | "card";
}

export function GlassCard({
  children,
  className = "",
  variant = "card",
  ...props
}: GlassCardProps) {
  const baseClass = variant === "panel" ? "glass-panel" : "glass-card";

  return (
    <div
      className={`${baseClass} rounded-xl text-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function GlassCardHeader({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 pb-3 ${className}`} {...props}>
      {children}
    </div>
  );
}

function GlassCardContent({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
}

function GlassCardFooter({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 pt-0 mt-auto ${className}`} {...props}>
      {children}
    </div>
  );
}

GlassCard.Header = GlassCardHeader;
GlassCard.Content = GlassCardContent;
GlassCard.Footer = GlassCardFooter;
