import React from "react";
import {
  Code,
  Server,
  Network,
  Database,
  Cloud,
  GitBranch,
  BarChart3,
  FileSpreadsheet,
  Terminal,
  Layers,
  Sparkles
} from "lucide-react";

export default function SkillCard({ category, index }) {
  const getCategoryIcon = (title) => {
    const t = title.toUpperCase();
    if (t.includes("FRONTEND")) return <Code size={22} className="cat-icon-cyan" />;
    if (t.includes("BACKEND")) return <Server size={22} className="cat-icon-blue" />;
    if (t.includes("API") || t.includes("ORM")) return <Network size={22} className="cat-icon-teal" />;
    if (t.includes("DATABASE")) return <Database size={22} className="cat-icon-indigo" />;
    if (t.includes("CLOUD") || t.includes("DEPLOYMENT")) return <Cloud size={22} className="cat-icon-cyan" />;
    if (t.includes("VERSION") || t.includes("TOOLS")) return <GitBranch size={22} className="cat-icon-purple" />;
    if (t.includes("PROGRAMMING")) return <Terminal size={22} className="cat-icon-cyan" />;
    if (t.includes("DATA ANALYSIS")) return <Layers size={22} className="cat-icon-teal" />;
    if (t.includes("BUSINESS INTELLIGENCE")) return <BarChart3 size={22} className="cat-icon-blue" />;
    if (t.includes("SPREADSHEETS")) return <FileSpreadsheet size={22} className="cat-icon-indigo" />;
    return <Sparkles size={22} className="cat-icon-cyan" />;
  };

  return (
    <div className="skill-card">
      <div className="skill-card-top">
        <div className="skill-icon-box">
          {getCategoryIcon(category.title)}
        </div>
        <div>
          <h3 className="skill-card-title">{category.title}</h3>
          {category.description && (
            <p className="skill-card-desc">{category.description}</p>
          )}
        </div>
      </div>

      <div className="skill-badges-grid">
        {category.skills.map((skill, sIdx) => (
          <div className="skill-badge" key={sIdx}>
            <span className="skill-badge-dot"></span>
            <span className="skill-badge-text">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

