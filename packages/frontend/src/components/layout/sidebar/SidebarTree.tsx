"use client";

import React, { useState } from "react";
import { SidebarItem } from "./SidebarItem";

export interface TreeNode {
  id: string;
  label: string;
  icon?: string;
  children?: TreeNode[];
}

interface SidebarTreeProps {
  data: TreeNode[];
  level?: number;
}

export function SidebarTree({ data, level = 0 }: SidebarTreeProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    new Set(["sprint-notes"])
  ); // Default expanded for demo

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  return (
    <>
      {data.map((node) => {
        const hasChildren = node.children && node.children.length > 0;
        const isExpanded = expandedIds.has(node.id);

        // Determine icon: Use explicit icon if provided, otherwise use folder for parents or description for leaves
        const icon =
          node.icon && node.icon !== "arrow_right"
            ? node.icon
            : hasChildren
              ? "folder"
              : "description";

        return (
          <React.Fragment key={node.id}>
            <SidebarItem
              label={node.label}
              icon={icon}
              level={level}
              hasSubmenu={hasChildren}
              isExpanded={hasChildren ? isExpanded : undefined}
              onClick={hasChildren ? () => toggleExpand(node.id) : undefined}
            />
            {hasChildren && isExpanded && (
              <SidebarTree data={node.children!} level={level + 1} />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}
