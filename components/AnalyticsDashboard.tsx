"use client";

import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";

const TIME_SERIES_DATA: Record<
  string,
  {
    visitors: number;
    pageviews: number;
    changeVisitors: number;
    changePageviews: number;
    points: { label: string; visitors: number; pageviews: number }[];
  }
> = {
  "24H": {
    visitors: 48,
    pageviews: 96,
    changeVisitors: -12.5,
    changePageviews: -10.2,
    points: [
      { label: "12 AM", visitors: 2, pageviews: 4 },
      { label: "03 AM", visitors: 1, pageviews: 2 },
      { label: "06 AM", visitors: 3, pageviews: 5 },
      { label: "09 AM", visitors: 8, pageviews: 14 },
      { label: "12 PM", visitors: 12, pageviews: 26 },
      { label: "03 PM", visitors: 10, pageviews: 22 },
      { label: "06 PM", visitors: 7, pageviews: 13 },
      { label: "09 PM", visitors: 5, pageviews: 10 },
    ],
  },
  "7D": {
    visitors: 462,
    pageviews: 895,
    changeVisitors: -86.2,
    changePageviews: -82.2,
    points: [
      { label: "Oct 3", visitors: 84, pageviews: 152 },
      { label: "Oct 4", visitors: 72, pageviews: 134 },
      { label: "Oct 5", visitors: 65, pageviews: 120 },
      { label: "Oct 6", visitors: 58, pageviews: 110 },
      { label: "Oct 7", visitors: 62, pageviews: 126 },
      { label: "Oct 8", visitors: 68, pageviews: 135 },
      { label: "Oct 9", visitors: 53, pageviews: 118 },
    ],
  },
  "30D": {
    visitors: 3410,
    pageviews: 6820,
    changeVisitors: 24.5,
    changePageviews: 18.2,
    points: [
      { label: "Sep 10", visitors: 95, pageviews: 180 },
      { label: "Sep 15", visitors: 115, pageviews: 220 },
      { label: "Sep 20", visitors: 130, pageviews: 260 },
      { label: "Sep 25", visitors: 125, pageviews: 245 },
      { label: "Sep 30", visitors: 110, pageviews: 215 },
      { label: "Oct 5", visitors: 140, pageviews: 290 },
      { label: "Oct 9", visitors: 120, pageviews: 240 },
    ],
  },
};

export default function AnalyticsDashboard() {
  const [period, setPeriod] = useState<"24H" | "7D" | "30D">("7D");
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const currentData = TIME_SERIES_DATA[period];
  const maxVal = Math.max(
    ...currentData.points.map((p) => Math.max(p.visitors, p.pageviews)),
    10
  );

  const chartWidth = 620;
  const chartHeight = 180;
  const paddingX = 40;
  const paddingY = 20;

  const getCoordinates = (index: number, val: number) => {
    const x =
      paddingX +
      (index / (currentData.points.length - 1)) * (chartWidth - paddingX * 2);
    const y =
      chartHeight -
      paddingY -
      (val / maxVal) * (chartHeight - paddingY * 2);
    return { x, y };
  };

  const visitorsPath = currentData.points
    .map((p, idx) => {
      const { x, y } = getCoordinates(idx, p.visitors);
      return `${idx === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const pageviewsPath = currentData.points
    .map((p, idx) => {
      const { x, y } = getCoordinates(idx, p.pageviews);
      return `${idx === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const visitorsArea = `${visitorsPath} L ${
    chartWidth - paddingX
  } ${chartHeight - paddingY} L ${paddingX} ${chartHeight - paddingY} Z`;

  const pageviewsArea = `${pageviewsPath} L ${
    chartWidth - paddingX
  } ${chartHeight - paddingY} L ${paddingX} ${chartHeight - paddingY} Z`;

  return (
    <div>
      <div className="analytics-stats">
        <div className="analytics-stat-card">
          <span className="analytics-stat-label">Visitors</span>
          <span className="analytics-stat-value">
            {currentData.visitors.toLocaleString()}
          </span>
          <span
            className={`analytics-stat-change ${
              currentData.changeVisitors >= 0
                ? "analytics-stat-change-up"
                : "analytics-stat-change-down"
            }`}
          >
            {currentData.changeVisitors >= 0 ? "↑" : "↓"}{" "}
            {Math.abs(currentData.changeVisitors).toFixed(1)}%
          </span>
        </div>

        <div className="analytics-stat-card">
          <span className="analytics-stat-label">Page Views</span>
          <span className="analytics-stat-value">
            {currentData.pageviews.toLocaleString()}
          </span>
          <span
            className={`analytics-stat-change ${
              currentData.changePageviews >= 0
                ? "analytics-stat-change-up"
                : "analytics-stat-change-down"
            }`}
          >
            {currentData.changePageviews >= 0 ? "↑" : "↓"}{" "}
            {Math.abs(currentData.changePageviews).toFixed(1)}%
          </span>
        </div>
      </div>

      <div className="analytics-chart-card">
        <div className="analytics-chart-topbar">
          <div className="analytics-chart-topbar-left">
            <FiSettings className="analytics-chart-gear" />
            <span className="analytics-chart-codelabel">~/analytics.tsx</span>
          </div>

          <div
            className="analytics-period-tabs"
            role="tablist"
            aria-label="Analytics period"
          >
            {(["24H", "7D", "30D"] as const).map((p) => (
              <button
                key={p}
                type="button"
                role="tab"
                aria-selected={period === p}
                className={`analytics-period-tab ${
                  period === p ? "analytics-period-tab-active" : ""
                }`}
                onClick={() => {
                  setPeriod(p);
                  setHoverIndex(null);
                }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="analytics-chart-legend">
          <span className="analytics-legend-item">
            <i className="analytics-legend-dot analytics-legend-visitors"></i>
            Visitors
          </span>
          <span className="analytics-legend-item">
            <i className="analytics-legend-dot analytics-legend-pageviews"></i>
            Page Views
          </span>
        </div>

        <div
          className="analytics-chart"
          style={{ position: "relative", width: "100%", height: "200px" }}
        >
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            style={{ width: "100%", height: "100%", overflow: "visible" }}
          >
            <defs>
              <linearGradient id="visitorsGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="pageviewsGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Grid horizontal lines */}
            {[0, 0.33, 0.66, 1].map((ratio, idx) => {
              const y =
                paddingY + (1 - ratio) * (chartHeight - paddingY * 2);
              return (
                <line
                  key={idx}
                  x1={paddingX}
                  y1={y}
                  x2={chartWidth - paddingX}
                  y2={y}
                  stroke="rgba(255,255,255,0.08)"
                  strokeDasharray="4 4"
                />
              );
            })}

            {/* Area fills */}
            <path d={pageviewsArea} fill="url(#pageviewsGrad)" />
            <path d={visitorsArea} fill="url(#visitorsGrad)" />

            {/* Lines */}
            <path
              d={pageviewsPath}
              fill="none"
              stroke="#f43f5e"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d={visitorsPath}
              fill="none"
              stroke="#14b8a6"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* X-axis labels */}
            {currentData.points.map((p, idx) => {
              const { x } = getCoordinates(idx, 0);
              return (
                <text
                  key={idx}
                  x={x}
                  y={chartHeight - 4}
                  fill="#737373"
                  fontSize="10"
                  textAnchor="middle"
                  fontFamily="inherit"
                >
                  {p.label}
                </text>
              );
            })}

            {/* Interactive hover points & vertical line */}
            {hoverIndex !== null && (
              <g>
                <line
                  x1={getCoordinates(hoverIndex, 0).x}
                  y1={paddingY}
                  x2={getCoordinates(hoverIndex, 0).x}
                  y2={chartHeight - paddingY}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1"
                />
                <circle
                  cx={getCoordinates(hoverIndex, currentData.points[hoverIndex].visitors).x}
                  cy={getCoordinates(hoverIndex, currentData.points[hoverIndex].visitors).y}
                  r="4"
                  fill="#14b8a6"
                  stroke="#1a1b1c"
                  strokeWidth="2"
                />
                <circle
                  cx={getCoordinates(hoverIndex, currentData.points[hoverIndex].pageviews).x}
                  cy={getCoordinates(hoverIndex, currentData.points[hoverIndex].pageviews).y}
                  r="4"
                  fill="#f43f5e"
                  stroke="#1a1b1c"
                  strokeWidth="2"
                />
              </g>
            )}

            {/* Hover transparent target bands */}
            {currentData.points.map((_, idx) => {
              const { x } = getCoordinates(idx, 0);
              const bandWidth = (chartWidth - paddingX * 2) / currentData.points.length;
              return (
                <rect
                  key={idx}
                  x={x - bandWidth / 2}
                  y={0}
                  width={bandWidth}
                  height={chartHeight}
                  fill="transparent"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHoverIndex(idx)}
                />
              );
            })}
          </svg>

          {/* Hover Floating Tooltip */}
          {hoverIndex !== null && (
            <div
              style={{
                position: "absolute",
                left: `${(getCoordinates(hoverIndex, 0).x / chartWidth) * 100}%`,
                top: "10px",
                transform: "translate(-50%, 0)",
                backgroundColor: "rgba(26,27,28,0.9)",
                backdropFilter: "blur(8px)",
                border: "1.5px dashed #444",
                padding: "6px 12px",
                borderRadius: "4px",
                fontSize: "11px",
                color: "#fff",
                pointerEvents: "none",
                zIndex: 10,
                boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
              }}
            >
              <div style={{ color: "#aaa", marginBottom: "4px" }}>
                {currentData.points[hoverIndex].label}
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <span style={{ color: "#14b8a6" }}>
                  Visitors: {currentData.points[hoverIndex].visitors}
                </span>
                <span style={{ color: "#f43f5e" }}>
                  Page Views: {currentData.points[hoverIndex].pageviews}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
