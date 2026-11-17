import React from "react";
import { Award, Check } from "lucide-react";

export default function CertificationCard({ cert }) {
  return (
    <div className="cert-item">
      <div className="cert-left">
        <div className="cert-check-circle">
          <Check size={14} />
        </div>
        <div>
          <strong className="cert-title">{cert.title}</strong>
          <span className="cert-issuer">{cert.issuer} {cert.year && `· ${cert.year}`}</span>
        </div>
      </div>
      {cert.tag && <span className="cert-tag">{cert.tag}</span>}
    </div>
  );
}

