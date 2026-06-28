"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiFolder, FiGithub } from "react-icons/fi";
import SectionTag from "@/components/ui/SectionTag";
import TapeMark from "@/components/ui/TapeMark";
import PillTag from "@/components/ui/PillTag";

const cardVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-12 dot-grid border-b-2 border-dark select-none"
    >
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-12">
          <SectionTag text="Projects" icon={<FiFolder />} />
          <span className="font-dancing text-muted text-base md:ml-3">
            what i've built
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Card 1: Codzy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative bg-white border-2 border-dark p-6 shadow-[6px_6px_0px_#111] flex flex-col justify-between min-h-[480px] text-left group"
          >
            {/* Tape Mark absolute top-center */}
            <div className="absolute top-[-7px] left-1/2 -translate-x-1/2 z-10">
              <TapeMark rotation="left" />
            </div>

            {/* Featured Badge */}
            <div className="absolute top-0 right-0 bg-yellow border-l-2 border-b-2 border-dark px-3 py-1 font-grotesk font-bold text-[9px] uppercase tracking-wider">
              Featured
            </div>

            <div>
              {/* Year */}
              <span className="font-grotesk font-bold text-[10px] text-muted tracking-wider block mt-2">
                2026
              </span>

              {/* Title */}
              <h3 className="font-playfair font-black text-2xl text-dark mt-1">
                Codzy
              </h3>

              {/* Description */}
              <p className="font-inter text-xs text-dark/95 leading-relaxed mt-4">
                LeetCode-style coding platform. Real-time execution via Judge0 API across 3+ languages. 
                100+ registered users. WebSocket study groups, Google AI chatbot, Cloudinary CDN (~40% load time reduction).
              </p>

              {/* Bullet highlights */}
              <ul className="mt-4 flex flex-col gap-1.5 pl-4 list-disc text-[11px] text-dark/80">
                <li>JWT-secured RBAC (Role-Based Access Control)</li>
                <li>Admin CRUD panel (2 roles, 50+ problems)</li>
              </ul>
            </div>

            <div className="mt-6">
              {/* Tech Stack tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {["React.js", "Node.js", "MongoDB", "JWT", "WebSocket", "Judge0", "Cloudinary"].map((tag) => (
                  <PillTag key={tag} text={tag} variant="light" />
                ))}
              </div>

              {/* Action Button */}
              <a
                href="https://github.com/Adarshhic/codzy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-dark text-yellow font-grotesk font-bold text-xs uppercase tracking-wider border-2 border-dark hover:bg-yellow hover:text-dark transition-all duration-200"
              >
                <FiGithub />
                <span>GitHub Repository</span>
              </a>
            </div>
          </motion.div>

          {/* Card 2: Second Brain (Dark Card) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative bg-dark border-2 border-[#333] p-6 shadow-[6px_6px_0px_#111] flex flex-col justify-between min-h-[480px] text-left group"
          >
            {/* Tape Mark absolute top-center */}
            <div className="absolute top-[-7px] left-1/2 -translate-x-1/2 z-10">
              <TapeMark rotation="right" />
            </div>

            <div>
              {/* Year */}
              <span className="font-grotesk font-bold text-[10px] text-[#888] tracking-wider block mt-2">
                2026
              </span>

              {/* Title */}
              <h3 className="font-playfair font-black text-2xl text-yellow mt-1">
                Second Brain
              </h3>

              {/* Description */}
              <p className="font-inter text-xs text-[#ccc]/90 leading-relaxed mt-4">
                Personal knowledge management app. Save, tag, organise YouTube videos and tweets. 
                Shareable public brain via unique hash-based URLs.
              </p>

              {/* Bullet highlights */}
              <ul className="mt-4 flex flex-col gap-1.5 pl-4 list-disc text-[11px] text-[#aaa]">
                <li>6+ RESTful APIs with Zod schema validation</li>
                <li>bcrypt authentication, type-safe React + TS frontend</li>
              </ul>
            </div>

            <div className="mt-6">
              {/* Tech Stack tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT", "Zod"].map((tag) => (
                  <PillTag key={tag} text={tag} variant="dark" />
                ))}
              </div>

              {/* Action Button */}
              <a
                href="https://github.com/Adarshhic/second-brain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-transparent text-yellow font-grotesk font-bold text-xs uppercase tracking-wider border-2 border-yellow hover:bg-yellow hover:text-dark transition-all duration-200"
              >
                <FiGithub />
                <span>GitHub Repository</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
