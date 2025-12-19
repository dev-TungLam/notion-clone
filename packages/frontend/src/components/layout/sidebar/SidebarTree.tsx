"use client";

import React, { useMemo, useRef, useEffect, useState } from "react";
import { useSidebar } from "./SidebarContext";

export interface TreeNode {
  id: string;
  label: string;
  icon?: string;
  children?: TreeNode[];
}

interface SidebarTreeProps {
  data: TreeNode[];
}

// Build parent map for route synchronization
function buildParentMap(
  nodes: TreeNode[],
  parentId: string | null = null,
  map: Record<string, string | null> = {}
): Record<string, string | null> {
  for (const node of nodes) {
    map[node.id] = parentId;
    if (node.children?.length) {
      buildParentMap(node.children, node.id, map);
    }
  }
  return map;
}

export function SidebarTree({ data }: SidebarTreeProps) {
  // Build parent map once for route synchronization
  const parentMap = useMemo(() => buildParentMap(data), [data]);

  return (
    <div role="tree">
      {data.map((node) => (
        <SidebarNode
          key={node.id}
          node={node}
          level={0}
          parentMap={parentMap}
        />
      ))}
    </div>
  );
}

interface SidebarNodeProps {
  node: TreeNode;
  level: number;
  parentMap: Record<string, string | null>;
}

function SidebarNode({ node, level, parentMap }: SidebarNodeProps) {
  const {
    expandState,
    toggleExpand,
    activePageId,
    setActivePageId,
    isCollapsed,
  } = useSidebar();

  const childrenRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandState[node.id] ?? false; // Absence = collapsed
  const isActive = activePageId === node.id;

  // Determine icon: Use explicit icon if provided, otherwise folder/description
  const icon =
    node.icon && node.icon !== "arrow_right"
      ? node.icon
      : hasChildren
        ? "folder"
        : "description";

  // Caret visibility: hidden by default, visible on hover OR if expanded
  const showCaret = hasChildren && (isHovered || isExpanded);

  const handleCaretClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent row click
    e.preventDefault();
    toggleExpand(node.id);
  };

  const handleRowClick = () => {
    setActivePageId(node.id);
    // Navigation would happen here in real implementation
    // e.g., router.push(`/page/${node.id}`)
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" && hasChildren && !isExpanded) {
      e.preventDefault();
      toggleExpand(node.id);
    } else if (e.key === "ArrowLeft" && hasChildren && isExpanded) {
      e.preventDefault();
      toggleExpand(node.id);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleRowClick();
    }
  };

  return (
    <div>
      {/* Row */}
      <div
        role="treeitem"
        tabIndex={0}
        aria-expanded={hasChildren ? isExpanded : undefined}
        onClick={handleRowClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ paddingLeft: level ? `${level * 16 + 8}px` : "8px" }}
        className={`
          flex items-center gap-1 py-1.5 pr-3 rounded-lg 
          text-gray-400 hover:bg-[var(--color-glass-surface-hover)] hover:text-white 
          transition-all duration-150 ease-out
          group w-full border border-transparent hover:border-white/5 
          cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500 
          hover:shadow-[0_2px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)]
          select-none
          ${
            isActive
              ? "bg-[var(--color-glass-surface-hover)] text-white font-medium shadow-[0_2px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.08)]"
              : ""
          }
        `}
      >
        {/* Caret (expand/collapse) - separate interaction zone */}
        {/* Larger hitbox, hidden by default, visible on hover or expanded */}
        <div
          className={`
            w-6 h-6 -ml-1 flex items-center justify-center shrink-0 rounded
            transition-all duration-150
            ${hasChildren ? "cursor-pointer hover:bg-white/10" : ""}
          `}
          onClick={hasChildren ? handleCaretClick : undefined}
        >
          {hasChildren && (
            <span
              className={`
                material-symbols-outlined text-[16px] 
                transition-all duration-150 ease-out
                ${showCaret ? "opacity-100" : "opacity-0"}
                ${isExpanded ? "rotate-90 text-gray-400" : "text-gray-600"}
                hover:text-white
              `}
            >
              chevron_right
            </span>
          )}
        </div>

        {/* Icon */}
        <span
          className={`
            material-symbols-outlined text-[18px] transition-colors duration-150 shrink-0
            ${isActive ? "text-blue-400" : "group-hover:text-gray-200"}
          `}
        >
          {icon}
        </span>

        {/* Label */}
        {!isCollapsed && (
          <span className="text-sm truncate flex-1">{node.label}</span>
        )}
      </div>

      {/* Children - height-based animation, only render when expanded */}
      <div
        ref={childrenRef}
        role="group"
        className={`
          overflow-hidden
          transition-all duration-150
          ${isExpanded ? "ease-out" : "ease-in"}
        `}
        style={{
          maxHeight: isExpanded ? "1000px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
      >
        {hasChildren &&
          node.children!.map((child) => (
            <SidebarNode
              key={child.id}
              node={child}
              level={level + 1}
              parentMap={parentMap}
            />
          ))}
      </div>
    </div>
  );
}
