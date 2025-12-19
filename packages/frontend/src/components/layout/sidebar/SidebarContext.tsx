"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

// Type definitions
type SidebarExpandState = Record<string, boolean>;
type SidebarMode = "fold" | "unfold";

interface SidebarContextType {
  // Sidebar mode (fold = hidden, unfold = visible)
  mode: SidebarMode;
  setMode: (mode: SidebarMode) => void;
  toggleMode: () => void;

  // Hover preview state (when folded)
  isHoverPreview: boolean;
  setHoverPreview: (preview: boolean) => void;
  hoverY: number; // Cursor Y position for cropped view
  setHoverY: (y: number) => void;

  // Legacy collapse (icon-only mode) - kept for compatibility
  isCollapsed: boolean;
  toggleSidebar: () => void;
  setCollapsed: (collapsed: boolean) => void;

  // Expansion state (tree nodes)
  expandState: SidebarExpandState;
  toggleExpand: (id: string) => void;
  setExpand: (id: string, expanded: boolean) => void;
  expandPathTo: (
    pageId: string,
    parentMap: Record<string, string | null>
  ) => void;

  // Active page
  activePageId: string | null;
  setActivePageId: (id: string | null) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

const STORAGE_KEY_MODE = "sidebar-mode";
const STORAGE_KEY_EXPAND = "sidebar-expand";

export function SidebarProvider({
  children,
  defaultMode = "unfold",
}: {
  children: React.ReactNode;
  defaultMode?: SidebarMode;
}) {
  const [mode, setModeState] = useState<SidebarMode>(defaultMode);
  const [isHoverPreview, setHoverPreview] = useState(false);
  const [hoverY, setHoverY] = useState(0);
  const [expandState, setExpandState] = useState<SidebarExpandState>({});
  const [activePageId, setActivePageId] = useState<string | null>(null);

  // Derived state for legacy compatibility
  const isCollapsed = mode === "fold" && !isHoverPreview;

  // Hydrate from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem(STORAGE_KEY_MODE);
    if (savedMode === "fold" || savedMode === "unfold") {
      setModeState(savedMode);
    }

    const savedExpand = localStorage.getItem(STORAGE_KEY_EXPAND);
    if (savedExpand) {
      try {
        setExpandState(JSON.parse(savedExpand));
      } catch {
        // Invalid JSON, ignore
      }
    }
  }, []);

  // Persist expand state to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_EXPAND, JSON.stringify(expandState));
  }, [expandState]);

  // Set sidebar mode
  const setMode = useCallback((newMode: SidebarMode) => {
    setModeState(newMode);
    localStorage.setItem(STORAGE_KEY_MODE, newMode);
    if (newMode === "unfold") {
      setHoverPreview(false);
    }
  }, []);

  // Toggle mode
  const toggleMode = useCallback(() => {
    setMode(mode === "fold" ? "unfold" : "fold");
  }, [mode, setMode]);

  // Legacy toggle (maps to mode toggle)
  const toggleSidebar = useCallback(() => {
    toggleMode();
  }, [toggleMode]);

  const setCollapsed = useCallback(
    (collapsed: boolean) => {
      setMode(collapsed ? "fold" : "unfold");
    },
    [setMode]
  );

  // Toggle expand for a single node (pure, no side effects)
  const toggleExpand = useCallback((id: string) => {
    setExpandState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }, []);

  // Set expand state for a specific node
  const setExpand = useCallback((id: string, expanded: boolean) => {
    setExpandState((prev) => ({
      ...prev,
      [id]: expanded,
    }));
  }, []);

  // Expand all ancestors of a given page (for route synchronization)
  const expandPathTo = useCallback(
    (pageId: string, parentMap: Record<string, string | null>) => {
      setExpandState((prev) => {
        const next = { ...prev };
        let current = parentMap[pageId];

        while (current) {
          next[current] = true;
          current = parentMap[current];
        }

        return next;
      });
    },
    []
  );

  return (
    <SidebarContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
        isHoverPreview,
        setHoverPreview,
        hoverY,
        setHoverY,
        isCollapsed,
        toggleSidebar,
        setCollapsed,
        expandState,
        toggleExpand,
        setExpand,
        expandPathTo,
        activePageId,
        setActivePageId,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
