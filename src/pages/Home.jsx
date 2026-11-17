import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  BarChart3,
  Mail,
  Linkedin,
  MapPin,
  CheckCircle2,
  Database,
  Layers,
  Sparkles,
  Cpu,
  TrendingUp,
  Server
} from "lucide-react";
import { personalInfo } from "../data/sharedData";
import { developerData } from "../data/developerData";
import { analyticsData } from "../data/analyticsData";
import ContactSection from "../components/ContactSection";
import profilePhoto from "../assets/images/profile.jpg";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-page-container">
      {/* 3.1 & 3.2 HERO SECTION */}
      <section className="home-hero wrap">
        <div className="home-hero-grid">
          <div className="home-hero-text">
            <div className="status-chip">
              <span className="live-pulsar"></span>
              <span>PERSONAL PORTFOLIO · CHENNAI, INDIA</span>
            </div>

            <h1 className="home-hero-heading">
              Hi, I'm <br />
              <span className="text-gradient">BARSITH ROSHAN M.</span>
            </h1>

            <div className="home-hero-title">
              Full Stack Developer & Data Analyst
            </div>

            <p className="home-hero-intro">
              I build practical web applications, develop backend systems and work with data to create clear, useful insights. Explore my two professional portfolios below.
            </p>

            <div className="home-hero-actions">
              <Link to="/developer" className="btn btn-glow">
                Explore Developer Portfolio <ArrowRight size={18} />
              </Link>
              <Link to="/data-analyst" className="btn btn-secondary">
                Explore Data Analyst Portfolio <ArrowRight size={18} />
              </Link>
            </div>

            {/* Contact links under hero - strictly NO resume PDF link */}
            <div className="home-quick-links">
              <a
                href={`mailto:${personalInfo.email}`}
                className="home-quick-link"
                aria-label="Email Barsith Roshan"
              >
                <Mail size={17} className="accent-teal" />
                <span>{personalInfo.email}</span>
              </a>
              <span className="home-quick-divider">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="home-quick-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={17} className="accent-teal" />
                <span>LinkedIn Profile</span>
              </a>
              <span className="home-quick-divider">•</span>
              <span className="home-quick-link">
                <MapPin size={17} className="accent-teal" />
                <span>{personalInfo.location}</span>
              </span>
            </div>
          </div>

          {/* 3.2 PROFILE PHOTOGRAPH WITH GRADIENT BORDER & INFO CARD */}
          <div className="home-image-container">
            <div className="home-image-frame">
              <div className="home-image-inner">
                <img
                  src={profilePhoto}
                  alt="Barsith Roshan M"
                  className="home-profile-photo"
                  onError={(e) => {
                    e.currentTarget.src = "/profile.jpg";
                  }}
                />
                {/* Professional Information Card Over Bottom */}
                <div className="home-image-badge">
                  <span className="home-badge-name">Barsith Roshan M</span>
                  <span className="home-badge-tag">
                    Computer Science Engineer · 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Key Stats Strip */}
        <div className="home-stat-strip">
          <div className="home-stat-unit">
            <span className="home-stat-number">2+</span>
            <span className="home-stat-label">Full Stack Production Apps</span>
          </div>
          <div className="home-stat-unit">
            <span className="home-stat-number">50K+</span>
            <span className="home-stat-label">Analytics Records Processed</span>
          </div>
          <div className="home-stat-unit">
            <span className="home-stat-number">B.E.</span>
            <span className="home-stat-label">Computer Science Engineer</span>
          </div>
          <div className="home-stat-unit">
            <span className="home-stat-number">100%</span>
            <span className="home-stat-label">Engineering Rigor & Quality</span>
          </div>
        </div>
      </section>

      {/* 3.3 PROFESSIONAL INTRODUCTION */}
      <section className="section wrap">
        <div className="section-pre">ABOUT ME</div>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
          <div>
            <h2 className="section-title">
              Bridging robust software engineering with{" "}
              <span className="text-gradient">data-driven intelligence.</span>
            </h2>
            <p className="section-subtitle" style={{ marginTop: "16px" }}>
              As a Computer Science Engineering graduate, I bring dual competencies to the table: crafting responsive, scalable web applications with modern frameworks, and extracting high-impact business insights from complex datasets.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="spec-chip" style={{ padding: "16px", borderRadius: "var(--radius-md)", background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
              <strong style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--accent-cyan)", marginBottom: "6px" }}>
                <Cpu size={18} /> Full Stack Engineering
              </strong>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0 }}>
                Developing end-to-end web applications with React.js, Node.js, Spring Boot, REST APIs, and relational databases (PostgreSQL & MySQL).
              </p>
            </div>
            <div className="spec-chip" style={{ padding: "16px", borderRadius: "var(--radius-md)", background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
              <strong style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--accent-teal)", marginBottom: "6px" }}>
                <TrendingUp size={18} /> Business Intelligence & Analytics
              </strong>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0 }}>
                Synthesizing multi-table relational records into interactive Power BI dashboards, automated SQL queries, and Python exploratory models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.3 TWO SPECIALIZATION CARDS */}
      <section className="section wrap">
        <div className="section-pre">SPECIALIZATIONS</div>
        <h2 className="section-title">
          Explore My <span className="text-gradient">Professional Portfolios</span>
        </h2>
        <p className="section-subtitle">
          Select a portfolio below to examine tailored projects, technical toolkits, work experience, and accreditations.
        </p>

        <div className="specialization-grid">
          {/* Card 1: Full Stack Developer Portfolio */}
          <div className="spec-card">
            <div className="spec-card-header">
              <div className="spec-icon-box">
                <Code2 size={28} />
              </div>
              <span className="spec-tag">SOFTWARE & APPS</span>
            </div>

            <div>
              <h3 className="spec-title">Full Stack Developer</h3>
              <p className="spec-desc">
                Building modern, responsive and scalable web applications. Specializing in React.js, Node.js, Express.js, Spring Boot, and robust relational database architecture.
              </p>

              <div className="spec-features">
                <span className="spec-chip">React.js</span>
                <span className="spec-chip">JavaScript</span>
                <span className="spec-chip">Node.js</span>
                <span className="spec-chip">Spring Boot</span>
                <span className="spec-chip">PostgreSQL</span>
                <span className="spec-chip">REST APIs</span>
                <span className="spec-chip">AWS EC2 & IIS</span>
              </div>
            </div>

            <Link to="/developer" className="btn btn-glow" style={{ width: "fit-content" }}>
              Explore Developer Portfolio <ArrowRight size={17} />
            </Link>
          </div>

          {/* Card 2: Data Analyst Portfolio */}
          <div className="spec-card analyst">
            <div className="spec-card-header">
              <div className="spec-icon-box">
                <BarChart3 size={28} />
              </div>
              <span className="spec-tag" style={{ color: "var(--accent-teal)" }}>
                DATA & BI
              </span>
            </div>

            <div>
              <h3 className="spec-title">Data Analyst</h3>
              <p className="spec-desc">
                Translating raw data into strategic business value. Specializing in interactive Power BI dashboards, complex DAX calculations, SQL relational pipelines, and Python exploratory analysis.
              </p>

              <div className="spec-features">
                <span className="spec-chip">Python</span>
                <span className="spec-chip">Pandas & NumPy</span>
                <span className="spec-chip">SQL & MySQL</span>
                <span className="spec-chip">Power BI</span>
                <span className="spec-chip">DAX Measures</span>
                <span className="spec-chip">Power Query</span>
                <span className="spec-chip">Microsoft Excel</span>
              </div>
            </div>

            <Link to="/data-analyst" className="btn btn-secondary" style={{ width: "fit-content" }}>
              Explore Data Analyst Portfolio <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3.3 HOMEPAGE CONTACT SECTION (NO RESUME DOWNLOAD ON HOMEPAGE) */}
      <ContactSection
        heading="Let's build systems that deliver results."
        subheading="Looking for a Full Stack Developer or a Data Analyst? I am available for full-time opportunities, engineering roles, and technical collaborations."
        showResume={false}
      />
    </div>
  );
}

