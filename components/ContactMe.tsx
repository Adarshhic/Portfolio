"use client";

import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaRegFileAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

const CONNECT_LINKS = [
  {
    name: "Email",
    url: "mailto:adarsh.mishradu0001@gmail.com",
    icon: <MdEmail />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adarshic/",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    url: "https://github.com/Adarshhic",
    icon: <FaGithub />,
  },
  {
    name: "LeetCode",
    url: "https://github.com/Adarshhic",
    icon: <SiLeetcode />,
  },
  {
    name: "Resume",
    url: "/resume",
    icon: <FaRegFileAlt />,
  },
];

export default function ContactMe() {
  return (
    <section className="contact-me-section">
      <div className="contact-me-card">
        <h3 className="contact-me-title">Let&apos;s Connect</h3>
        <p className="contact-me-description">
          Feel free to reach out through any of these platforms
        </p>
        <div className="contact-links">
          {CONNECT_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="contact-link-btn"
            >
              <span className="contact-link-icon">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
