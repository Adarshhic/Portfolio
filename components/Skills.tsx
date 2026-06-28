"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiZap, FiAward } from "react-icons/fi";
import SectionTag from "@/components/ui/SectionTag";
import PillTag from "@/components/ui/PillTag";

interface SkillItem {
  label: string;
  value: number; // Out of 10
}

const SKILLS: SkillItem[] = [
  { label: "React / Next.js", value: 9 },
  { label: "Node / Express", value: 8 },
  { label: "TypeScript", value: 8 },
  { label: "MongoDB / SQL", value: 7 },
  { label: "C / C++", value: 8 },
  { label: "WebSockets / JWT", value: 7 },
];

const TOOLS = [
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "Linux",
  "Cloudinary",
  "Judge0",
  "Redis",
  "Docker*",
  "AWS*"
];

const CERTS = [
  { name: "Mobile App Dev", organization: "L&T EduTech", filled: true },
  { name: "Python Full Stack", organization: "SRDT", filled: true },
  { name: "Google Gen AI", organization: "Top 10", filled: false },
];

export default function Skills() {
  return (
    <>
      {/* Column 1: Skills (bg-cream) */}
      <div
        id="skills"
        className="bg-cream p-8 flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-dark select-none"
      >
        <div>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-8">
            <SectionTag text="Skills" icon={<FiZap />} />
            <span className="font-dancing text-muted text-sm sm:ml-2">
              things i can do
            </span>
          </div>

          {/* Skill Bars List */}
          <div className="flex flex-col gap-6">
            {SKILLS.map((skill, index) => (
              <div key={skill.label} className="flex flex-col gap-1.5 w-full">
                <div className="flex justify-between items-end">
                  <span className="font-grotesk font-bold text-xs uppercase tracking-wider text-dark">
                    {skill.label}
                  </span>
                  <span className="font-grotesk font-bold text-xs text-dark">
                    {skill.value}/10
                  </span>
                </div>
                <div className="w-full bg-[#D1CDCE] h-4 border-2 border-dark">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value * 10}%` }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                      damping: 20,
                      delay: index * 0.05,
                    }}
                    className="h-full bg-dark"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Column 2: Tools (bg-white) */}
      <div className="bg-white p-8 flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-dark select-none">
        <div>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-6">
            <SectionTag text="Tools" />
          </div>

          {/* Tools Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
            }}
            className="flex flex-wrap gap-2 mb-4"
          >
            {TOOLS.map((tool) => (
              <motion.div
                key={tool}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <PillTag text={tool} />
              </motion.div>
            ))}
          </motion.div>

          {/* Note */}
          <p className="font-dancing text-xs text-muted mb-8">
            * still learning
          </p>

          {/* Certifications Sub-section */}
          <div className="mt-4">
            <div className="mb-4">
              <SectionTag text="Certs" icon={<FiAward />} />
            </div>

            <div className="flex flex-col gap-3">
              {CERTS.map((cert) => (
                <div key={cert.name} className="flex items-center gap-3">
                  {/* Square bullet */}
                  <span
                    className={`w-2.5 h-2.5 border-2 border-dark flex-shrink-0 ${
                      cert.filled ? "bg-yellow" : "bg-dark"
                    }`}
                  />
                  <div className="flex flex-col text-left">
                    <span className="font-grotesk font-bold text-xs uppercase tracking-wide text-dark">
                      {cert.name}
                    </span>
                    <span className="font-inter text-[11px] text-muted leading-none mt-0.5">
                      {cert.organization}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
