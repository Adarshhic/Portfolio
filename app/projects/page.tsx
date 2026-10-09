import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { ALL_PROJECTS } from "@/lib/data";
import Footer from "@/components/Footer";
import { FiArrowLeft } from "react-icons/fi";

export const metadata = {
  title: "Projects | Adarsh Mishra",
  description: "Explore open-source, full-stack, and personal projects built by Adarsh Mishra.",
};

export default function ProjectsPage() {
  return (
    <div style={{ marginTop: "30px" }}>
      <section className="project-section">
        <SectionTitle>My Projects</SectionTitle>

        {ALL_PROJECTS.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}

        <div className="view-all-projects" style={{ marginTop: "24px", marginBottom: "24px" }}>
          <Link href="/" className="view-all-btn" aria-label="Back to home">
            <FiArrowLeft className="arrow-icon" />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
