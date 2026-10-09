"use client";

import React, { useState, useEffect } from "react";

export default function Footer() {
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formatted = new Intl.DateTimeFormat("en-GB", options).format(now);
      setIstTime(`${formatted} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-quote">
          &ldquo;Nothing Is Perfect &ndash; But You Can Make It Better.&rdquo;
        </div>
        <div className="footer-info">
          <div className="footer-made">Designed &amp; Made with ❤️</div>
          <div className="footer-bottom">
            <span className="footer-copyright">
              {currentYear}. All rights reserved
            </span>
            <span className="footer-visitors">{istTime || "IST"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
