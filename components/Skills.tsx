"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiPostman,
  SiVercel,
  SiShopify,
  SiSocketdotio,
  SiCloudinary,
  SiJsonwebtokens,
  SiGoogle,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const TECH_SKILLS = [
  { name: "JavaScript", icon: <FaJs style={{ color: "#f7df1e" }} /> },
  { name: "TypeScript", icon: <SiTypescript style={{ color: "#3178c6" }} /> },
  { name: "Java", icon: <FaJava style={{ color: "#df3d14" }} /> },
  { name: "React.js", icon: <FaReact style={{ color: "#61dafb" }} /> },
  { name: "Next.js", icon: <SiNextdotjs style={{ color: "#ffffff" }} /> },
  { name: "Node.js", icon: <FaNodeJs style={{ color: "#68a063" }} /> },
  { name: "Express.js", icon: <SiExpress style={{ color: "#ffffff" }} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss style={{ color: "#38bdf8" }} /> },
  { name: "WebSockets", icon: <SiSocketdotio style={{ color: "#ffffff" }} /> },
  { name: "MongoDB", icon: <SiMongodb style={{ color: "#01ec64" }} /> },
  { name: "PostgreSQL", icon: <SiPostgresql style={{ color: "#336791" }} /> },
  { name: "MySQL", icon: <SiMysql style={{ color: "#00758f" }} /> },
  { name: "Redis", icon: <SiRedis style={{ color: "#dc382d" }} /> },
  { name: "HTML5", icon: <FaHtml5 style={{ color: "#e34c26" }} /> },
  { name: "CSS3", icon: <FaCss3Alt style={{ color: "#2965f1" }} /> },
];

const TOOL_SKILLS = [
  { name: "Git", icon: <FaGitAlt style={{ color: "#f34f29" }} /> },
  { name: "GitHub", icon: <FaGithub style={{ color: "#ffffff" }} /> },
  { name: "VS Code", icon: <VscVscode style={{ color: "#007acc" }} /> },
  { name: "Postman", icon: <SiPostman style={{ color: "#f34f29" }} /> },
  { name: "Vercel", icon: <SiVercel style={{ color: "#ffffff" }} /> },
  { name: "Shopify", icon: <SiShopify style={{ color: "#95BF47" }} /> },
  { name: "Cloudinary", icon: <SiCloudinary style={{ color: "#3448C5" }} /> },
  { name: "JWT Auth", icon: <SiJsonwebtokens style={{ color: "#d63aff" }} /> },
  { name: "Gemini AI", icon: <SiGoogle style={{ color: "#4285F4" }} /> },
  { name: "Linux", icon: <FaLinux style={{ color: "#ffffff" }} /> },
  { name: "Docker", icon: <FaDocker style={{ color: "#2496ed" }} /> },
];

export default function Skills() {
  return (
    <section className="skill-section">
      <SectionTitle>My Skills</SectionTitle>

      {/* Marquee Row 1 */}
      <div className="marquee-container">
        <div className="marquee">
          {[...TECH_SKILLS, ...TECH_SKILLS, ...TECH_SKILLS].map((skill, index) => (
            <div key={`tech-${index}`} className="skill-pill">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="marquee-container">
        <div className="marquee reverse">
          {[...TOOL_SKILLS, ...TOOL_SKILLS, ...TOOL_SKILLS].map((skill, index) => (
            <div key={`tool-${index}`} className="skill-pill">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
