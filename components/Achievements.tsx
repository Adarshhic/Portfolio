"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import SectionTag from "@/components/ui/SectionTag";

const ACHIEVEMENTS = [
  {
    num: "01",
    title: "Google Gen AI Study Jams",
    desc: "Top 10 rank · 15+ skill badges · GDG",
  },
  {
    num: "02",
    title: "200+ DSA Problems",
    desc: "LeetCode + GFG · strong algo skills",
  },
  {
    num: "03",
    title: "Smart India Hackathon 2024",
    desc: "college qualifier · India's largest hackathon",
  },
];

const rowVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

export default function Achievements() {
  return (
    <div
      id="achievements"
      className="bg-cream p-8 flex flex-col justify-between select-none"
    >
      <div>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-8">
          <SectionTag text="Wins" icon={<FiAward />} />
        </div>

        {/* Rows */}
        <div className="flex flex-col">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.num}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={rowVariants}
              className="flex items-start gap-4 py-5 border-b border-dark/15 last:border-b-0"
            >
              {/* Ghost number */}
              <span
                className="font-grotesk font-black text-4xl md:text-5xl text-yellow select-none leading-none flex-shrink-0"
                style={{ WebkitTextStroke: "1.5px #111111" }}
              >
                {item.num}
              </span>

              {/* Title & Desc */}
              <div className="flex flex-col text-left">
                <h4 className="font-grotesk font-bold text-sm uppercase tracking-wide text-dark">
                  {item.title}
                </h4>
                <p className="font-inter text-xs text-muted leading-relaxed mt-1.5">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
