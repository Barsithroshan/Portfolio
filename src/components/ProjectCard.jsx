import React from "react";
import { Sparkles, Check, ExternalLink, Github } from "lucide-react";
import InteractiveVisual from "./InteractiveVisual";

export default function ProjectCard({ project, isDeveloper = false }) {
  const contributionsOrHighlights = project.contributions || project.highlights || [];
  const visualType = project.visual || project.previewType;
  const tagList = project.techStack || project.tools || [];

  return (
    <article className="project-feature-card">
      <div className="p-visual-container">
        {visualType && <InteractiveVisual type={visualType} />}
        <span className="watermark-id">{project.id}</span>
      </div>

      <div className="p-narrative-container">
        <div className="p-type-tag">
          <Sparkles size={13} /> {project.type || project.category}
        </div>
        
        <h3 className="p-headline">{project.title}</h3>
        {project.subtitle && <span className="p-subhead">{project.subtitle}</span>}

        <p className="p-summary">{project.description}</p>

        {contributionsOrHighlights.length > 0 && (
          <div className="p-highlights-list">
            {contributionsOrHighlights.map((item, idx) => (
              <div className="p-point" key={idx}>
                <Check size={14} className="point-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {project.metrics && project.metrics.length > 0 && (
          <div className="p-metrics-row">
            {project.metrics.map((m, mIdx) => (
              <div className="metric-box" key={mIdx}>
                <strong>{m.value}</strong>
                <small>{m.label}</small>
              </div>
            ))}
          </div>
        )}

        {tagList.length > 0 && (
          <div className="p-tags-group">
            {tagList.map((tag) => (
              <span className="p-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* GitHub / Demo Links if provided */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="p-actions-row">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline"
              >
                <Github size={15} /> Source Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-glow"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

