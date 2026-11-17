import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "../data/sharedData";
import "../styles/footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="main-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="f-brand-block">
            <span className="f-brand-title">BARSITH ROSHAN M</span>
            <span className="f-brand-sub">Full Stack Developer | Data Analyst</span>
          </div>

          <nav className="f-nav-links" aria-label="Footer navigation">
            <Link to="/" className="f-link" onClick={scrollToTop}>
              Home
            </Link>
            <Link to="/developer" className="f-link" onClick={scrollToTop}>
              Developer
            </Link>
            <Link to="/data-analyst" className="f-link" onClick={scrollToTop}>
              Data Analyst
            </Link>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="f-link"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="f-link"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="f-link"
            >
              Email
            </a>
          </nav>

          <div className="f-social-links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="f-social-btn"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="f-social-btn"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="f-social-btn"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Barsith Roshan M. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="f-return-top"
            aria-label="Scroll back to top"
          >
            Return to Top <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}

