"use client";

import React, { ReactNode } from "react";

interface TooltipProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
  className?: string;
}

export default function Tooltip({
  text,
  position = "top",
  children,
  className = "",
}: TooltipProps) {
  const positionClass = `tooltip-${position}`;

  return (
    <div className={`tooltip-wrapper ${className}`}>
      {children}
      <span className={`tooltip-bubble ${positionClass}`}>{text}</span>
    </div>
  );
}
