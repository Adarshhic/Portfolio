"use client";

import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import Footer from "@/components/Footer";
import { FiArrowLeft, FiRefreshCw } from "react-icons/fi";

export default function AnalyticsPage() {
  const [refreshKey, setRefreshKey] = React.useState(0);

  return (
    <div className="analytics-layout">
      <div className="analytics-container standard-container">
        <SectionTitle>/analytics</SectionTitle>
        <div className="analytics-description">
          Real traffic data straight from Vercel Web Analytics.
        </div>

        <AnalyticsDashboard key={refreshKey} />

        <div
          className="view-all-projects analytics-actions"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "24px",
            marginBottom: "24px",
          }}
        >
          <Link href="/" className="view-all-btn" aria-label="Back to home">
            <FiArrowLeft className="arrow-icon" />
            <span>Back to Home</span>
          </Link>

          <button
            type="button"
            className="view-all-btn analytics-refresh"
            onClick={() => setRefreshKey((k) => k + 1)}
            aria-label="Refresh analytics"
          >
            <FiRefreshCw className="arrow-icon" />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
