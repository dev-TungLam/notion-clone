/**
 * Animation durations (in milliseconds)
 */
export const ANIMATION = {
  FAST: 150,
  DEFAULT: 300,
  SLOW: 500,
} as const;

/**
 * Sidebar configuration
 */
export const SIDEBAR = {
  EXPANDED_WIDTH: 280,
  COLLAPSED_WIDTH: 60,
} as const;

/**
 * Z-index layers
 */
export const Z_INDEX = {
  SIDEBAR: 50,
  MODAL: 100,
  TOOLTIP: 150,
  DROPDOWN: 200,
} as const;

/**
 * Breakpoints (in pixels)
 */
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
} as const;
