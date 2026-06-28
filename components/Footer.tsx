import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-dark/30 py-5 px-6 md:px-12 flex items-center justify-between select-none">
      {/* Left side: Space Grotesk 11px */}
      <span className="font-grotesk text-[11px] text-[#555] tracking-wide">
        Built by{" "}
        <span className="text-yellow font-bold">Adarsh Mishra</span> · 2026
      </span>

      {/* Right side: Dancing Script 13px */}
      <span className="font-dancing text-[13px] text-[#444] italic">
        designed with intention
      </span>
    </footer>
  );
}
