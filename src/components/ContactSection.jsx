import React from "react";
import { Mail, Linkedin, Github, Download, ArrowUpRight, MapPin, Phone, Sparkles } from "lucide-react";
import { personalInfo } from "../data/sharedData";

export default function ContactSection({
  heading = "Let's create solutions that deliver results.",
  subheading = "Open to full-time opportunities, engineering roles, and technical collaborations.",
  showResume = false,
  resumePath = "/Barsith_Roshan_Resume.pdf",
  resumeLabel = "Curriculum Vitae"
}) {
  return (
    <section id="contact" className="section contact-section wrap">
      <div className="contact-box">
        <div className="contact-header">
          <div className="section-pre">GET IN TOUCH</div>
          <h2 className="contact-hero-text">
            {heading.split("deliver results")[0]}
            {heading.includes("deliver results") && (
              <span className="text-gradient">deliver results.</span>
            )}
          </h2>
          <p className="contact-sub">{subheading}</p>
        </div>

        <div className="contact-cards-grid">
          <a
            href={`mailto:${personalInfo.email}?subject=Professional%20Inquiry%20-%20Barsith%20Roshan`}
            className="contact-card"
          >
            <div className="c-icon-circle">
              <Mail size={22} />
            </div>
            <div>
              <small>EMAIL DIRECTLY</small>
              <strong>{personalInfo.email}</strong>
            </div>
            <ArrowUpRight size={18} className="c-arrow" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="c-icon-circle">
              <Linkedin size={22} />
            </div>
            <div>
              <small>LINKEDIN PROFILE</small>
              <strong>barsith-roshan-m</strong>
            </div>
            <ArrowUpRight size={18} className="c-arrow" />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="c-icon-circle">
              <Github size={22} />
            </div>
            <div>
              <small>GITHUB REPOSITORIES</small>
              <strong>barsithroshan</strong>
            </div>
            <ArrowUpRight size={18} className="c-arrow" />
          </a>

          {showResume && (
            <a
              href={resumePath}
              download={resumePath.split("/").pop()}
              className="contact-card"
            >
              <div className="c-icon-circle">
                <Download size={22} />
              </div>
              <div>
                <small>{resumeLabel.toUpperCase()}</small>
                <strong>Download PDF</strong>
              </div>
              <ArrowUpRight size={18} className="c-arrow" />
            </a>
          )}
        </div>

        <div className="contact-footer-bar">
          <span>
            <MapPin size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: 5 }} />
            {personalInfo.location}
          </span>
          <span>
            <Phone size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: 5 }} />
            {personalInfo.phone}
          </span>
          <span>
            <Sparkles size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: 5 }} />
            Open to Relocation & Remote Roles
          </span>
        </div>
      </div>
    </section>
  );
}

