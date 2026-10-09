import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Footer from "@/components/Footer";
import { FiArrowLeft } from "react-icons/fi";

export const metadata = {
  title: "404 - Page Not Found | Manish Kumar",
};

export default function NotFound() {
  return (
    <div className="standard-container" style={{ minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: "60px" }}>
      <div style={{ textAlign: "center" }}>
        <SectionTitle>404</SectionTitle>
        <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginTop: "16px", marginBottom: "8px", color: "#fff" }}>
          Page Not Found
        </h1>
        <p style={{ color: "#b3b3b3", fontSize: "0.95rem", marginBottom: "28px" }}>
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="/" className="view-all-btn" aria-label="Back to home">
            <FiArrowLeft className="arrow-icon" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
