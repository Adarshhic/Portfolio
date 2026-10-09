"use client";

import React from "react";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { FiArrowRight } from "react-icons/fi";

export default function UsesSection() {
  return (
    <section className="project-section">
      <SectionTitle>/uses</SectionTitle>

      <div className="uses-section-content">
        <span>Curious about my setup? Check out the tools, gear, and software I use daily.</span>
        <Link href="/uses" className="uses-section-link">
          <span>See my setup</span>
          <FiArrowRight className="arrow-icon" />
        </Link>
      </div>
    </section>
  );
}
