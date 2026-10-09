"use client";

import React from "react";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { FEATURED_PROJECTS } from "@/lib/data";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectsSection() {
  return (
    <section className="project-section">
      <SectionTitle>My Projects</SectionTitle>

      {FEATURED_PROJECTS.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}

      <div className="view-all-projects right-side">
        <Link href="/projects" className="view-all-btn" aria-label="More Projects">
          <span>More Projects</span>
          <FiArrowRight className="arrow-icon" />
        </Link>
      </div>
    </section>
  );
}
