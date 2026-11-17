import React from "react";
import { Download } from "lucide-react";

export default function ResumeButton({
  href = "/Barsith_Roshan_Resume.pdf",
  fileName = "Barsith_Roshan_Resume.pdf",
  className = "btn btn-outline",
  label = "Download Resume"
}) {
  return (
    <a
      href={href}
      download={fileName}
      className={className}
      aria-label={label}
    >
      <Download size={17} /> {label}
    </a>
  );
}

