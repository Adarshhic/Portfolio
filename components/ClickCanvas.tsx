"use client";

import React, { useEffect, useRef } from "react";

interface Spark {
  x: number;
  y: number;
  angle: number;
  start: number;
}

export default function ClickCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);
  const isRunningRef = useRef(false);
  const duration = 400; // ms
  const sparkCount = 8;
  const length = 12;
  const speed = 70;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const handleClick = (e: MouseEvent) => {
      const now = performance.now();
      const x = e.clientX;
      const y = e.clientY;

      for (let i = 0; i < sparkCount; i++) {
        const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() * 0.4 - 0.2);
        sparksRef.current.push({
          x,
          y,
          angle,
          start: now,
        });
      }

      if (!isRunningRef.current) {
        isRunningRef.current = true;
        requestAnimationFrame(render);
      }
    };

    const render = (time: number) => {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = time - spark.start;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const ease = 1 - Math.pow(1 - progress, 2);
        const dist = ease * speed;
        const currentLen = length * (1 - ease);

        const x1 = spark.x + dist * Math.cos(spark.angle);
        const y1 = spark.y + dist * Math.sin(spark.angle);
        const x2 = spark.x + (dist + currentLen) * Math.cos(spark.angle);
        const y2 = spark.y + (dist + currentLen) * Math.sin(spark.angle);

        ctx.strokeStyle = `rgba(255, 255, 255, ${0.8 * (1 - progress)})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      if (sparksRef.current.length > 0) {
        requestAnimationFrame(render);
      } else {
        isRunningRef.current = false;
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        imageRendering: "crisp-edges",
        zIndex: 9999,
      }}
    />
  );
}
