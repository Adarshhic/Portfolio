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
  FaWindows,
  FaLinux,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiSwagger,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiNetlify,
  SiRender,
  SiNotion,
  SiThymeleaf,
  SiApachemaven,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const TECH_SKILLS = [
  { name: "Java", icon: <FaJava style={{ color: "#df3d14" }} /> },
  { name: "HTML", icon: <FaHtml5 style={{ color: "#e34c26" }} /> },
  { name: "CSS", icon: <FaCss3Alt style={{ color: "#2965f1" }} /> },
  { name: "JavaScript", icon: <FaJs style={{ color: "#f7df1e" }} /> },
  { name: "TypeScript", icon: <SiTypescript style={{ color: "#3178c6" }} /> },
  { name: "React", icon: <FaReact style={{ color: "#61dafb" }} /> },
  { name: "NodeJS", icon: <FaNodeJs style={{ color: "#68a063" }} /> },
  { name: "Express", icon: <SiExpress style={{ color: "#ffffff" }} /> },
  { name: "Spring Security", icon: <SiSpringsecurity style={{ color: "#6DB33F" }} /> },
  { name: "Spring Jpa", icon: <SiSpring style={{ color: "#6DB33F" }} /> },
  { name: "Spring MVC", icon: <SiSpring style={{ color: "#6DB33F" }} /> },
  { name: "Thymeleaf", icon: <SiThymeleaf style={{ color: "#6DB33F" }} /> },
  { name: "Spring Boot", icon: <SiSpringboot style={{ color: "#6DB33F" }} /> },
  { name: "MySQL", icon: <SiMysql style={{ color: "#00758f" }} /> },
  { name: "MongoDB", icon: <SiMongodb style={{ color: "#01ec64" }} /> },
];

const TOOL_SKILLS = [
  { name: "Git", icon: <FaGitAlt style={{ color: "#f34f29" }} /> },
  { name: "GitHub", icon: <FaGithub style={{ color: "#ffffff" }} /> },
  { name: "Postman", icon: <SiPostman style={{ color: "#f34f29" }} /> },
  { name: "Swagger", icon: <SiSwagger style={{ color: "#01ec64" }} /> },
  { name: "VsCode", icon: <VscVscode style={{ color: "#007acc" }} /> },
  { name: "Linux", icon: <FaLinux style={{ color: "#ffffff" }} /> },
  { name: "Windows", icon: <FaWindows style={{ color: "#0078d4" }} /> },
  { name: "Docker", icon: <FaDocker style={{ color: "#2496ed" }} /> },
  { name: "Maven", icon: <SiApachemaven style={{ color: "#c71e3a" }} /> },
  { name: "Firebase", icon: <SiFirebase style={{ color: "#ffca28" }} /> },
  { name: "Supabase", icon: <SiSupabase style={{ color: "#01ec64" }} /> },
  { name: "Vercel", icon: <SiVercel style={{ color: "#ffffff" }} /> },
  { name: "Netlify", icon: <SiNetlify style={{ color: "#00c58e" }} /> },
  { name: "Render", icon: <SiRender style={{ color: "#ffffff" }} /> },
  { name: "Notion", icon: <SiNotion style={{ color: "#ffffff" }} /> },
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
