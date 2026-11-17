import React from "react";

export default function SectionHeading({ pre, title, gradientTitle, subtitle, align = "left" }) {
  return (
    <div className={`section-header-wrap ${align === "center" ? "text-center" : ""}`}>
      {pre && <div className="section-pre">{pre}</div>}
      <h2 className="section-title">
        {title}{" "}
        {gradientTitle && <span className="text-gradient">{gradientTitle}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

