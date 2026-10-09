import React, { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="card-title">
      <div className="corner top left"></div>
      <div className="corner top right"></div>
      <div className="corner bottom left"></div>
      <div className="corner bottom right"></div>
      {children}
    </h2>
  );
}
