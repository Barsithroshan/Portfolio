import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { personalInfo } from "../data/sharedData";

export default function SocialLinks({ showLabels = false, className = "" }) {
  return (
    <div className={`social-links-row ${className}`}>
      <a
        href={`mailto:${personalInfo.email}`}
        className="social-link-item"
        aria-label="Email Barsith Roshan"
      >
        <Mail size={18} />
        {showLabels && <span>{personalInfo.email}</span>}
      </a>
      <a
        href={personalInfo.linkedin}
        target="_blank"
        rel="noreferrer"
        className="social-link-item"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={18} />
        {showLabels && <span>LinkedIn</span>}
      </a>
      <a
        href={personalInfo.github}
        target="_blank"
        rel="noreferrer"
        className="social-link-item"
        aria-label="GitHub Profile"
      >
        <Github size={18} />
        {showLabels && <span>GitHub</span>}
      </a>
    </div>
  );
}

