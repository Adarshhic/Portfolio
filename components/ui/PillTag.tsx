import React from "react";

interface PillTagProps {
  text: string;
  variant?: "light" | "dark";
}

export default function PillTag({ text, variant = "light" }: PillTagProps) {
  const styles =
    variant === "light"
      ? "bg-cream border-dark text-dark"
      : "bg-[#1a1a1a] border-[#444] text-[#ccc]";

  return (
    <span
      className={`inline-block font-grotesk font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 border-[1.5px] select-none ${styles}`}
    >
      {text}
    </span>
  );
}
