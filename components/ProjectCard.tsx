"use client";

import React from "react";
import { FaGithub, FaExternalLinkAlt, FaLock, FaTools } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { BsLightningFill } from "react-icons/bs";
import { ProjectData } from "@/lib/data";

export default function ProjectCard({
  banner,
  name,
  desc,
  tech,
  github,
  live,
  demoWarning,
  isUnderDevelopment,
  isPrivate,
  stats,
  hasSponsor,
}: ProjectData) {
  return (
    <div className="project-card">
      <div className="banner">
        <img src={banner} alt={name} loading="lazy" decoding="async" />
        {stats && (
          <div className="stats-badge">
            <span className="stats-text">{stats}</span>
          </div>
        )}
        {hasSponsor && (
          <div className="sponsor-badge">
            <span className="sponsor-text">Sponsored By</span>
            <BsLightningFill className="sponsor-icon" />
          </div>
        )}
      </div>

      <div className="project-details">
        <div className="project-header-row">
          <div className="project-name">
            {name}
            {demoWarning && (
              <div className="demo-warning-container yellow">
                <IoWarning className="demo-warning-icon" />
                <div className="demo-warning-tooltip">
                  <p>Live demo might not work properly</p>
                  <p>Check GitHub for code and setup instructions</p>
                </div>
              </div>
            )}
            {isUnderDevelopment && (
              <div className="demo-warning-container green">
                <FaTools className="demo-warning-icon" />
                <div className="demo-warning-tooltip">
                  <p>Functionality might not work properly</p>
                  <p>Currently Building This Project, So its Under Development</p>
                </div>
              </div>
            )}
            {isPrivate && (
              <div className="demo-warning-container green">
                <FaLock className="demo-warning-icon" />
                <div className="demo-warning-tooltip">
                  <p>This is a private Project</p>
                  <p>Github Repo/ Code is not available for this project</p>
                </div>
              </div>
            )}
          </div>

          <div className="project-link-icons">
            {live && (
              <a
                className="project-pill"
                href={live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt size={10} />
                Live
              </a>
            )}
            <a
              className="project-pill"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={12} />
              GitHub
            </a>
          </div>
        </div>

        <div className="project-desc">{desc}</div>
        <span className="project-tech-label">Technologies Used:</span>
        <div className="project-tech">
          {tech.map((t, idx) => (
            <span key={idx}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
