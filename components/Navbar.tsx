"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Tooltip from "./Tooltip";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Analytics", href: "/analytics" },
  { name: "Support", href: "/support" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <nav className="navbar-links">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`navbar-link ${isActive ? "navbar-link-active" : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <Tooltip text="Give A Star Please" position="bottom">
          <a
            href="https://github.com/Adarshhic/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-star"
            aria-label="Star this portfolio on GitHub"
          >
            <img
              alt=""
              className="navbar-star-icon"
              src="/images/star.png"
            />
            <span>Open-source</span>
          </a>
        </Tooltip>
      </div>
    </header>
  );
}
