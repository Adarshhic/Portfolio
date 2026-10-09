import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";
import { HiDownload } from "react-icons/hi";
import { FiArrowLeft, FiExternalLink, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const metadata = {
  title: "Resume | Adarsh Mishra",
  description: "View and download the resume of Adarsh Mishra, Full Stack Developer & Frontend Developer Intern.",
};

export default function ResumePage() {
  return (
    <div className="resume-layout">
      <div className="resume-container standard-container">
        <SectionTitle>/resume</SectionTitle>

        <p className="resume-description">
          My resume &mdash; view the structured details below or download a copy.
        </p>

        <div className="resume-actions">
          <a
            href="/resume/resume.pdf"
            download="Adarsh_Mishra_Resume.pdf"
            className="resume-download-btn"
            aria-label="Download resume PDF"
          >
            <HiDownload className="resume-download-icon" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Structured Resume Content Card */}
        <div
          style={{
            background: "#111418",
            border: "1px dashed #262626",
            borderRadius: "8px",
            padding: "2rem",
            marginBottom: "2rem",
            fontSize: "0.95rem",
            lineHeight: "1.6",
            color: "#d4d4d8",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", borderBottom: "1px solid #262626", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
            <h1 style={{ fontSize: "1.85rem", fontWeight: "bold", color: "#fff", marginBottom: "0.5rem" }}>
              Adarsh Mishra
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", color: "#a1a1aa", fontSize: "0.875rem" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <FiMapPin /> Lucknow, Uttar Pradesh
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <FiPhone /> +91-7651808279
              </span>
              <a href="mailto:adarsh.mishradu0001@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#38bdf8" }}>
                <FiMail /> adarsh.mishradu0001@gmail.com
              </a>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "1.25rem", marginTop: "0.75rem", fontSize: "0.875rem" }}>
              <a href="https://www.linkedin.com/in/adarshic/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#60a5fa" }}>
                <FaLinkedin /> LinkedIn <FiExternalLink size={12} />
              </a>
              <a href="https://github.com/Adarshhic" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#e2e8f0" }}>
                <FaGithub /> GitHub <FiExternalLink size={12} />
              </a>
              <a href="https://github.com/Adarshhic" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#fbbf24" }}>
                <SiLeetcode /> LeetCode <FiExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Education */}
          <section style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#38bdf8", borderBottom: "1px solid #27272a", paddingBottom: "0.25rem", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Education
            </h2>
            <div style={{ marginBottom: "0.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", fontWeight: "600", color: "#f4f4f5" }}>
                <span>B.Tech in Information Technology &mdash; Shri Ramswaroop College of Engineering and Management</span>
                <span style={{ color: "#a1a1aa" }}>2023 &ndash; 2027</span>
              </div>
              <div style={{ color: "#a1a1aa", fontSize: "0.875rem" }}>CGPA: 8.0 / 10.0</div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", fontWeight: "600", color: "#f4f4f5" }}>
                <span>Class XII, Science Stream &mdash; Rani Laxmi Bai Memorial School</span>
                <span style={{ color: "#a1a1aa" }}>2022 &ndash; 2023</span>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#38bdf8", borderBottom: "1px solid #27272a", paddingBottom: "0.25rem", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Experience
            </h2>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", fontWeight: "600", color: "#f4f4f5" }}>
                <span>Frontend Developer Intern &mdash; Stravio Media Solutions LLP</span>
                <span style={{ color: "#a1a1aa" }}>2026 &ndash; Present</span>
              </div>
              <div style={{ color: "#38bdf8", fontSize: "0.85rem", fontStyle: "italic", marginBottom: "0.5rem" }}>
                Shopify, Liquid, Next.js, React, GSAP, JavaScript, Tailwind CSS
              </div>
              <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", color: "#d4d4d8", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <li>Built and deployed custom Shopify storefronts for multiple client brands, including full theme development, hero/landing section redesigns, and GSAP-based scroll animations.</li>
                <li>Developed responsive, production-ready websites using Next.js and React, handling everything from component architecture to deployment.</li>
                <li>Collaborated closely with design and product teams to translate brand and business requirements into polished, performant web experiences across e-commerce and marketing sites.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#38bdf8", borderBottom: "1px solid #27272a", paddingBottom: "0.25rem", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Projects
            </h2>
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", fontWeight: "600", color: "#f4f4f5" }}>
                <span>Codzy &mdash; LeetCode-Style Online Judge Platform</span>
                <span style={{ color: "#a1a1aa" }}>Jan 2026</span>
              </div>
              <div style={{ color: "#38bdf8", fontSize: "0.85rem", fontStyle: "italic", marginBottom: "0.5rem" }}>
                React.js, Node.js, MongoDB, JWT, WebSocket, Judge0 API, Cloudinary
              </div>
              <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", color: "#d4d4d8", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <li>Architected a LeetCode-style full-stack coding platform with 50+ DSA problems and real-time code execution across 3+ languages via Judge0 API.</li>
                <li>Engineered 10+ JWT-secured RESTful APIs with Role-Based Access Control (RBAC) and an admin CRUD panel managing 2 user roles and 50+ problems.</li>
                <li>Built real-time collaborative study groups via WebSockets enabling 5+ concurrent users; integrated Google Generative AI chatbot for hints and Cloudinary CDN, cutting load time 40%.</li>
              </ul>
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", fontWeight: "600", color: "#f4f4f5" }}>
                <span>AI Customer Support Chatbot &mdash; SaaS</span>
                <span style={{ color: "#a1a1aa" }}>2026</span>
              </div>
              <div style={{ color: "#38bdf8", fontSize: "0.85rem", fontStyle: "italic", marginBottom: "0.5rem" }}>
                Next.js, MongoDB, Scalekit, Gemini API, Vercel
              </div>
              <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", color: "#d4d4d8", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <li>Built and deployed a full-stack, multi-tenant SaaS platform that lets any website embed an AI-powered customer support chatbot via a single script tag.</li>
                <li>Integrated the Gemini API to power the chatbot&apos;s conversational responses, with organization-based authentication and session management via Scalekit, per-tenant configuration (custom system prompts, branding), and MongoDB-backed conversation/message storage.</li>
                <li>Designed a dashboard for managing clients and viewing chat logs, and shipped a lightweight embeddable JS widget for zero-config integration on external sites.</li>
                <li>Debugged and resolved a production OAuth redirect_uri misconfiguration during deployment on Vercel.</li>
              </ul>
            </div>
          </section>

          {/* Technical Skills */}
          <section style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#38bdf8", borderBottom: "1px solid #27272a", paddingBottom: "0.25rem", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Technical Skills
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "0.9rem" }}>
              <div><strong style={{ color: "#f4f4f5" }}>Languages:</strong> JavaScript, TypeScript, Java</div>
              <div><strong style={{ color: "#f4f4f5" }}>Frameworks &amp; Libraries:</strong> React.js, Next.js, Node.js, Express.js, Axios, Tailwind CSS, GSAP</div>
              <div><strong style={{ color: "#f4f4f5" }}>Databases:</strong> MongoDB, MySQL, PostgreSQL, Redis</div>
              <div><strong style={{ color: "#f4f4f5" }}>Tools &amp; Platforms:</strong> Git, GitHub, VS Code, Postman, Cloudinary, Vercel, Shopify</div>
              <div><strong style={{ color: "#f4f4f5" }}>Core Concepts:</strong> REST APIs, JWT Authentication, RBAC, WebSockets, CRUD, Data Structures &amp; Algorithms</div>
            </div>
          </section>

          {/* Achievements */}
          <section style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#38bdf8", borderBottom: "1px solid #27272a", paddingBottom: "0.25rem", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Achievements
            </h2>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", color: "#d4d4d8", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <li><strong>Competitive Programming:</strong> Solved 200+ problems on LeetCode and GeeksforGeeks, demonstrating strong DSA and problem-solving skills.</li>
              <li><strong>Smart India Hackathon 2024:</strong> Selected at college level for SIH 2024, India&apos;s largest national hackathon, demonstrating teamwork and engineering skills.</li>
            </ul>
          </section>

          {/* Certifications */}
          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#38bdf8", borderBottom: "1px solid #27272a", paddingBottom: "0.25rem", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Certifications &amp; Learning
            </h2>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", color: "#d4d4d8", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <li>Mobile Application Development &mdash; L&amp;T EduTech (SRDT)</li>
              <li>Python Full Stack Development Program &mdash; SRDT</li>
            </ul>
          </section>
        </div>

        <div className="resume-nav">
          <Link href="/" className="resume-nav-btn" aria-label="back to home">
            <FiArrowLeft className="arrow-icon" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
