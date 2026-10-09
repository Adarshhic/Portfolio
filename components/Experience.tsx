"use client";

import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import GitHubCalendar from "./GitHubCalendar";
import { FiChevronDown } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ExperienceItemProps {
  company: string;
  role: string;
  dates: string;
  status: "present" | "past" | "future";
  logoUrl?: string;
  links?: { url: string }[];
  description?: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

function ExperienceItem({
  company,
  role,
  dates,
  status,
  logoUrl,
  links,
  description,
  isExpanded,
  onToggle,
}: ExperienceItemProps) {
  const dotClass =
    status === "past"
      ? "exp-timeline-dot past"
      : status === "future"
      ? "exp-timeline-dot future"
      : "exp-timeline-dot";

  const hasDescription = description && description.length > 0;

  return (
    <div className="exp-timeline-item">
      <div className={dotClass} />
      <div className="exp-card">
        <div className="exp-header">
          <div className="exp-header-left">
            <div className="exp-logo">
              {logoUrl && (
                <img
                  src={logoUrl}
                  alt={`${company} logo`}
                  className="exp-logo-img"
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
            <div className="exp-company-info">
              <div className="exp-company-row">
                <span className="exp-company-name">{company}</span>
                <div className="exp-company-icons">
                  {links &&
                    links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="exp-company-link"
                      >
                        <FaExternalLinkAlt size={10} />
                      </a>
                    ))}
                  <span className={`exp-status-badge ${status}`}>
                    <span className={`exp-status-dot ${status}`}>●</span>{" "}
                    {status === "past" ? "Done" : status === "future" ? "Upcoming" : "Active"}
                  </span>
                </div>
              </div>
              <div className="exp-role-text">{role}</div>
            </div>
          </div>

          <div className="exp-header-right">
            <div className="exp-meta">
              <span>{dates}</span>
            </div>
            {hasDescription && (
              <button
                type="button"
                className="exp-expand-btn"
                onClick={onToggle}
                aria-label="Toggle details"
              >
                <FiChevronDown className={`exp-expand-icon ${isExpanded ? "open" : ""}`} />
              </button>
            )}
          </div>
        </div>

        {hasDescription && (
          <div className={`exp-details ${isExpanded ? "expanded" : ""}`}>
            <ul className="exp-bullets">
              {description.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div>
      <section className="experience-section">
        <SectionTitle>Work Experience</SectionTitle>

        <div className="exp-timeline-container">
          <div className="exp-timeline-line" />

          <ExperienceItem
            company="mx corp."
            role="Developer"
            dates="Dec 2025 - Now"
            status="present"
            logoUrl="https://avatars.githubusercontent.com/u/250987841?s=200&v=4"
            links={[{ url: "https://mxcorp.in/?ref=manixh.dev" }]}
            description={[
              "Products owned by mx corp. - Ossium, mx-icons, Repolyze ...more.",
              "Achieved 1200+ Users on our Products",
              "Sharing journey on X (@Manixh02) with 5,500+ followers",
            ]}
            isExpanded={expandedId === 1}
            onToggle={() => setExpandedId(expandedId === 1 ? null : 1)}
          />

          <ExperienceItem
            company="JabszGaming"
            role="Full Stack Dev Intern"
            dates="May 2025 - Sep 2025"
            status="past"
            logoUrl="/images/misc/jabsz.png"
            links={[{ url: "https://www.jabszgamingstudios.com/" }]}
            description={[
              "Built a Project where users can solve Coding Problems",
              "Compete with other users and shine on the leaderboard",
              "Collaborated with the team remotely",
            ]}
            isExpanded={expandedId === 2}
            onToggle={() => setExpandedId(expandedId === 2 ? null : 2)}
          />
        </div>

        <GitHubCalendar username="ig-imanish" />
      </section>
    </div>
  );
}
