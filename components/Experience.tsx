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
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt={`${company} logo`}
                  className="exp-logo-img"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#262626",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#a3a3a3",
                    borderRadius: "6px",
                  }}
                >
                  {company.substring(0, 2).toUpperCase()}
                </div>
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
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <div>
      <section className="experience-section">
        <SectionTitle>Work Experience</SectionTitle>

        <div className="exp-timeline-container">
          <div className="exp-timeline-line" />

          <ExperienceItem
            company="Stravio Media Solutions LLP"
            role="Frontend Developer Intern"
            dates="2026 – Present"
            status="present"
            logoUrl="/images/misc/jabsz.png"
            description={[
              "Built and deployed custom Shopify storefronts for multiple client brands, including full theme development, hero/landing section redesigns, and GSAP-based scroll animations.",
              "Developed responsive, production-ready websites using Next.js and React, handling everything from component architecture to deployment.",
              "Collaborated closely with design and product teams to translate brand and business requirements into polished, performant web experiences across e-commerce and marketing sites.",
            ]}
            isExpanded={expandedId === 1}
            onToggle={() => setExpandedId(expandedId === 1 ? null : 1)}
          />

          <ExperienceItem
            company="Open Source & Independent Dev"
            role="Full Stack Developer"
            dates="2024 – Present"
            status="present"
            description={[
              "Architected Codzy (LeetCode clone) with 50+ DSA problems, Judge0 API code execution across 3+ languages, and WebSocket study rooms.",
              "Built full-stack AI Customer Support Chatbot SaaS with Gemini API, Scalekit org auth, and embeddable JS widget.",
              "Engineered 10+ RESTful APIs with JWT authentication, RBAC, and MongoDB message storage.",
            ]}
            isExpanded={expandedId === 2}
            onToggle={() => setExpandedId(expandedId === 2 ? null : 2)}
          />

          <ExperienceItem
            company="Smart India Hackathon & CP"
            role="Finalist & Problem Solver"
            dates="2023 – 2024"
            status="past"
            description={[
              "Solved 200+ problems on LeetCode and GeeksforGeeks, mastering Data Structures & Algorithms.",
              "Smart India Hackathon 2024 – Selected at college level for India's largest national hackathon.",
              "Completed Mobile Application Development and Python Full Stack Development certifications.",
            ]}
            isExpanded={expandedId === 3}
            onToggle={() => setExpandedId(expandedId === 3 ? null : 3)}
          />
        </div>

        <GitHubCalendar username="Adarshhic" />
      </section>
    </div>
  );
}
