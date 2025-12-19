import React from "react";

interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export function GlassButton({
  children,
  className = "",
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: GlassButtonProps) {
  return (
    <button
      className={`glass-btn glass-btn-${variant} glass-btn-${size} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
