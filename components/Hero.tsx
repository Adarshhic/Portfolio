"use client";

import React, { useState, useEffect, memo } from "react";
import Tooltip from "./Tooltip";
import {
  FaLinkedin,
  FaGithub,
  FaRegFileAlt,
  FaQrcode,
  FaUser,
  FaCode,
} from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsPatchCheckFill } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const DECORATIONS = [
  { filename: "/images/decorations/soul_leaving_body.png", name: "Soul Leaving Body", dayIndex: 0 },
  { filename: "/images/decorations/cyber_katana.png", name: "Cyber Katana", dayIndex: 1 },
  { filename: "/images/decorations/candlelight_dark.png", name: "Candlelight Dark", dayIndex: 2 },
  { filename: "/images/decorations/cyber_katana.png", name: "Cyber Katana", dayIndex: 3 },
  { filename: "/images/decorations/candlelight_dark.png", name: "Candlelight Dark", dayIndex: 4 },
  { filename: "/images/decorations/shy.png", name: "Shy", dayIndex: 5 },
  { filename: "/images/decorations/blossomburst.png", name: "Blossom Burst", dayIndex: 6 },
];

const SOCIAL_LINKS = [
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

const LiveClock = memo(function LiveClock() {
  const [time, setTime] = useState({ hms: "--:--:--", ampm: "AM" });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const localeString = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      const [hms, ampm] = localeString.split(" ");
      setTime({ hms, ampm: ampm || "" });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="hero-section-profile-meta">
      <HiOutlineClock />
      <span style={{ display: "inline-flex", alignItems: "flex-end", marginLeft: 4 }}>
        <span>{time.hms}</span>
        <span style={{ marginLeft: "8px", alignSelf: "flex-end" }}>{time.ampm}</span>
      </span>
    </span>
  );
});

export default function Hero() {
  const [isQrCode, setIsQrCode] = useState(false);
  const [decoration, setDecoration] = useState(DECORATIONS[5]);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const day = new Date().getDay();
    setDecoration(DECORATIONS[day] || DECORATIONS[5]);
  }, []);

  const toggleQr = () => {
    setIsQrCode((prev) => !prev);
  };

  return (
    <div className="hero-section-banner-outer">
      <div className="hero-section-profile">
        <div className="hero-section-avatar-wrapper">
          <div className="user-image hero-section-avatar">
            <img
              src={isQrCode ? "/images/profile/qr-code.webp" : "/images/profile/pfp-latest.jpg"}
              alt={isQrCode ? "QR Code" : "Adarsh Mishra"}
              style={{
                transition: "opacity 0.3s ease",
                backgroundColor: "#1F1F23",
                borderRadius: "10px",
              }}
            />
            <button
              type="button"
              className="qr-toggle-btn"
              onClick={toggleQr}
              aria-label="Toggle QR code"
            >
              {isQrCode ? <FaUser size={12} /> : <FaQrcode size={12} />}
            </button>
            {!isQrCode && (
              <div className="decoration" style={{ visibility: imageLoaded ? "visible" : "hidden" }}>
                <img
                  src={decoration.filename}
                  alt={decoration.name}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            )}
          </div>
        </div>

        <div className="hero-section-profile-info">
          <div className="hero-section-profile-main">
            <div className="hero-section-profile-name-row">
              <h1 className="hero-section-profile-name">
                Adarsh Mishra{" "}
                <Tooltip text="Always ready to build something awesome" position="right">
                  <span className="heart">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      color="red"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "red" }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l3.103-3.104a.5.5 0 1 1 .708.708L4.5 12.207V14a.5.5 0 0 1-.146.354zM16 3.5a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182A24 24 0 0 1 5.8 12.323L8.31 9.81a1.5 1.5 0 0 0-2.122-2.122L3.657 10.22a9 9 0 0 1-1.039-1.57c-.798-1.576-.775-2.997-.213-4.093C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5z"
                      />
                    </svg>
                  </span>
                </Tooltip>
              </h1>
            </div>

            <div className="hero-section-profile-username">
              <a href="https://github.com/Adarshhic" target="_blank" rel="noopener noreferrer">
                @adarshic
              </a>
            </div>

            <div className="hero-section-profile-status-row">
              <span
                className="availability-text"
                onClick={() => window.open("https://github.com/Adarshhic/codzy", "_blank")}
                style={{
                  cursor: "pointer",
                  fontWeight: "700",
                  color: "#fff",
                  textDecoration: "underline",
                  fontSize: "1em",
                  marginLeft: 4,
                }}
              >
                <Tooltip
                  text="LeetCode-style online judge & coding platform"
                  position="bottom"
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    Building Codzy{" "}
                    <FaCode style={{ color: "#38bdf8", fontSize: "14px" }} />
                  </span>
                </Tooltip>
              </span>
            </div>

            <div className="hero-section-profile-meta-row">
              <span className="hero-section-profile-meta">
                <MdOutlineLocationOn /> Lucknow, India
              </span>
              <span className="hero-section-profile-dot">•</span>
              <LiveClock />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-section container">
        <div className="about-me">
          <div className="about-me-content">
            <ul className="about-bio">
              <li className="about-bio-item">
                <span className="about-bio-marker"></span>
                <span>
                  Hi, I am a <span className="bio-highlight">Full Stack Developer</span> &amp;{" "}
                  <span className="bio-highlight">Frontend Developer Intern</span> at Stravio Media.
                </span>
              </li>
              <li className="about-bio-item">
                <span className="about-bio-marker"></span>
                <span>
                  Creator of <span className="bio-highlight">Codzy</span> &amp; AI-driven SaaS solutions,
                  building fast, scalable, and responsive web products.
                </span>
              </li>
              <li className="about-bio-item">
                <span className="about-bio-marker"></span>
                <span>
                  Solved <span className="bio-highlight">200+ DSA problems</span> across LeetCode &amp; GFG,
                  and <span className="bio-highlight">Smart India Hackathon</span> finalist.
                </span>
              </li>
            </ul>
          </div>

          <div className="hero-divider"></div>

          <div className="community-links">
            <a
              href="https://github.com/Adarshhic"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter-card"
            >
              <div className="twitter-card-left">
                <FaGithub className="twitter-icon" style={{ fontSize: "1.3em" }} />
              </div>
              <div className="twitter-card-middle">
                <span className="twitter-name">
                  Adarsh Mishra{" "}
                  <BsPatchCheckFill style={{ color: "#1D9BF0" }} />
                </span>
                <span className="twitter-handle">@Adarshhic</span>
              </div>
              <div className="twitter-card-right">
                <span className="twitter-follow-btn">Follow</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/adarshic/"
              target="_blank"
              rel="noopener noreferrer"
              className="discord-invite"
            >
              <div className="discord-invite-left">
                <FaLinkedin style={{ fontSize: "1.4em", color: "#0077b5" }} />
              </div>
              <div className="discord-invite-middle">
                <span className="discord-server-name">Adarsh Mishra ( LinkedIn )</span>
                <span className="discord-server-stats">
                  <span className="discord-online-dot"></span>
                  <span>Connect &amp; Collaborate</span>
                </span>
              </div>
              <div className="discord-invite-right">
                <span className="discord-join-btn">Connect</span>
              </div>
            </a>
          </div>

          <div className="contact-me">
            <Tooltip text="Feel free to email me directly" position="top">
              <a target="_blank" href="mailto:adarsh.mishradu0001@gmail.com">
                <button type="button" className="contact-btn">
                  <svg
                    height="1em"
                    width="1em"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "6px" }}
                  >
                    <g fill="#737373">
                      <path
                        d="M14.75 6H3.25C2.8359 6 2.5 6.3359 2.5 6.75V13.25C2.5 14.7666 3.7334 16 5.25 16H12.75C14.2666 16 15.5 14.7666 15.5 13.25V6.75C15.5 6.3359 15.1641 6 14.75 6Z"
                        fill="#737373"
                        opacity="0.4"
                      />
                      <path
                        d="M2.58841 6.86181C1.73781 6.86181 0.989809 6.23921 0.858909 5.37351L0.634311 3.89061C0.490311 2.93601 1.14941 2.04251 2.10311 1.89791L14.4624 0.0288128C15.4238 -0.111287 16.3105 0.543913 16.4546 1.49801L16.6792 2.98041C16.8232 3.93501 16.1641 4.82811 15.2104 4.97261L2.85101 6.84221C2.76261 6.85541 2.67481 6.86181 2.58841 6.86181Z"
                        fill="#737373"
                      />
                      <path
                        d="M11.7803 11.0303L9.53029 13.2803C9.38379 13.4268 9.19189 13.5 8.99999 13.5C8.80809 13.5 8.61619 13.4268 8.46969 13.2803L6.21969 11.0303C5.92669 10.7373 5.92669 10.2627 6.21969 9.9698C6.51269 9.6769 6.98729 9.6768 7.28019 9.9698L8.24989 10.9395V8.25C8.24989 7.8359 8.58579 7.5 8.99989 7.5C9.41399 7.5 9.74989 7.8359 9.74989 8.25V10.9395L10.7196 9.9698C11.0126 9.6768 11.4872 9.6768 11.7801 9.9698C12.073 10.2628 12.0733 10.7374 11.7803 11.0303Z"
                        fill="#737373"
                      />
                    </g>
                  </svg>
                  Email Me
                </button>
              </a>
            </Tooltip>

            <span>|</span>

            <div className="contact-links">
              {SOCIAL_LINKS.map((link) => (
                <Tooltip key={link.name} text={link.name} position="top">
                  <a
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="contact-link-btn"
                  >
                    <span className="contact-link-icon">{link.icon}</span>
                  </a>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
