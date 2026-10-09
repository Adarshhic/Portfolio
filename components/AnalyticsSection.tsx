"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
import AnalyticsDashboard from "./AnalyticsDashboard";

export default function AnalyticsSection() {
  return (
    <section className="project-section">
      <SectionTitle>/analytics</SectionTitle>
      <AnalyticsDashboard />
    </section>
  );
}
