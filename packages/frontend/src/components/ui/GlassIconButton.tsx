import React from "react";

interface GlassIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function GlassIconButton({
  children,
  className = "",
  size = "md",
  ...props
}: GlassIconButtonProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  return (
    <button
      className={`glass-icon-btn ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
