"use client";

import { motion } from "framer-motion";

interface TapeMarkProps {
  className?: string;
  rotation?: "left" | "right";
}

export default function TapeMark({ className = "", rotation = "left" }: TapeMarkProps) {
  const rotateClass = rotation === "left" ? "-rotate-6" : "rotate-6";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`h-[14px] w-[48px] bg-[rgba(200,200,150,0.55)] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] select-none pointer-events-none ${rotateClass} ${className}`}
    />
  );
}
