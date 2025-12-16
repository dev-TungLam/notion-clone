import React from "react";

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export function GlassInput({
  label,
  error,
  icon,
  className = "",
  id,
  ...props
}: GlassInputProps) {
  // Generate a unique ID if not provided, for accessibility
  const inputId =
    id || `glass-input-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-[var(--color-text-muted)] mb-1.5"
        >
          {label}
        </label>
      )}

      <div className="glass-input-wrapper">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--color-text-muted)]">
            {icon}
          </div>
        )}

        <input
          id={inputId}
          className={`glass-input ${icon ? "pl-10" : "pl-3"} ${
            error ? "glass-input-error" : ""
          } ${className}`}
          {...props}
        />
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
