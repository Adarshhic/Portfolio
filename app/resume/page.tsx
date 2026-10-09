import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";
import { HiDownload } from "react-icons/hi";
import { FiArrowLeft } from "react-icons/fi";

export const metadata = {
  title: "Resume | Manish Kumar",
  description: "View and download the resume of Manish Kumar, Full Stack Developer.",
};

export default function ResumePage() {
  return (
    <div className="resume-layout">
      <div className="resume-container standard-container">
        <SectionTitle>/resume</SectionTitle>

        <p className="resume-description">
          My resume &mdash; view it inline below or download a copy.
        </p>

        <div className="resume-actions">
          <a
            href="/resume/resume.pdf"
            download="Manish_Kumar_Resume.pdf"
            className="resume-download-btn"
            aria-label="Download resume PDF"
          >
            <HiDownload className="resume-download-icon" />
            <span>Download PDF</span>
          </a>
        </div>

        <div className="resume-viewer">
          <iframe
            src="/resume/resume.pdf"
            title="Resume PDF"
            className="resume-iframe"
          />
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
