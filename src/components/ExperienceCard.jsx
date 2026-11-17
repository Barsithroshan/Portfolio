import React from "react";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function ExperienceCard({ exp }) {
  return (
    <div className="timeline-item">
      <div className="t-icon-box">
        <Briefcase size={18} />
      </div>
      <div className="t-content">
        <div className="t-header-row">
          <div>
            <span className="t-period">
              <Calendar size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} />
              {exp.duration}
            </span>
            <h3 className="t-role">{exp.position}</h3>
            <h4 className="t-company">{exp.company}</h4>
          </div>
          {exp.location && (
            <span className="t-location">
              <MapPin size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} />
              {exp.location}
            </span>
          )}
        </div>

        {exp.responsibilities && (
          <ul className="t-responsibilities-list">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="t-responsibility-item">
                <CheckCircle2 size={14} className="resp-icon" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

