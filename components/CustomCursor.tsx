"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isHoverable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.classList.contains("clickable");

      setHovered(!!isHoverable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <div className="hidden lg:block select-none pointer-events-none fixed inset-0 z-[9999]">
      {/* Central precise dot */}
      <motion.div
        className="fixed w-2 h-2 bg-dark rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          left: cursorX,
          top: cursorY,
        }}
      />
      {/* Trailing yellow-filled indicator */}
      <motion.div
        className="fixed rounded-full -translate-x-1/2 -translate-y-1/2 border-2 border-dark"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        animate={{
          width: hovered ? 42 : 20,
          height: hovered ? 42 : 20,
          backgroundColor: hovered ? "rgba(232, 240, 0, 0.4)" : "rgba(232, 240, 0, 0)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
      />
    </div>
  );
}
