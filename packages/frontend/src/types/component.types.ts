import type { ReactNode, HTMLAttributes } from "react";

/**
 * Base props that most components extend
 */
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

/**
 * Props for components with variant support
 */
export interface VariantProps<T extends string = string> {
  variant?: T;
}

/**
 * Common HTML element props extensions
 */
export type DivProps = HTMLAttributes<HTMLDivElement>;
export type ButtonProps = HTMLAttributes<HTMLButtonElement>;

/**
 * Glass component variants
 */
export type GlassVariant = "panel" | "card";
export type GlassButtonVariant = "primary" | "secondary" | "ghost";
