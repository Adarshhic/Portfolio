"use client";

import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaMedium,
  FaRegFileAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const CONNECT_LINKS = [
  {
    name: "Twitter",
    url: "https://x.com/Manixh02",
    icon: <FaTwitter />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/imanish02",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    url: "https://github.com/ig-imanish",
    icon: <FaGithub />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/manixh.dev",
    icon: <FaInstagram />,
  },
  {
    name: "Medium",
    url: "https://medium.com/@manixh02",
    icon: <FaMedium />,
  },
  {
    name: "Email",
    url: "mailto:work.manishh02@gmail.com",
    icon: <MdEmail />,
  },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1zBwD9nwcVyMwwhu_FEQzQzrmD5Ky1V9x/view?usp=drivesdk",
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
              target="_blank"
              rel="noopener noreferrer"
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
