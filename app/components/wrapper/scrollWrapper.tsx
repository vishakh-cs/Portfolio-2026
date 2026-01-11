'use client';

import React, { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CustomScrollWrapperProps {
  children: ReactNode;
  height?: string | number;
  onScroll?: (scrollTop: number) => void;
}

export default function CustomScrollWrapper({
  children,
  height = "100vh",
  onScroll,
}: CustomScrollWrapperProps) {
  return (
    <ScrollArea
      className="relative w-full"
      style={{ height }}
      onScrollCapture={(e) => {
        if (onScroll) {
          const target = e.target as HTMLElement;
          onScroll(target.scrollTop);
        }
      }}
    >
      {children}
    </ScrollArea>
  );
}
