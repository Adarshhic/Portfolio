import React from "react";

interface SectionTagProps {
  text: string;
  icon?: React.ReactNode;
}

export default function SectionTag({ text, icon }: SectionTagProps) {
  return (
    <div className="inline-flex items-center gap-1.5 bg-yellow border-2 border-dark px-3 py-[3px] text-dark font-grotesk font-bold text-[11px] uppercase tracking-wider select-none">
      {icon && <span className="inline-flex items-center justify-center">{icon}</span>}
      <span>{text}</span>
    </div>
  );
}
