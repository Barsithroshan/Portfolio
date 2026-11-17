import React, { useState, useMemo } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Database,
  Terminal,
  FileSpreadsheet,
  Layers,
  GraduationCap,
  Sparkles,
  TrendingUp,
  Zap,
  MapPin,
  Calendar
} from "lucide-react";
import { personalInfo, certificationsData } from "../data/sharedData";
import { analyticsData } from "../data/analyticsData";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import CertificationCard from "../components/CertificationCard";
import ContactSection from "../components/ContactSection";
import ResumeButton from "../components/ResumeButton";
import "../styles/analyst.css";

export default function DataAnalyst() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return analyticsData.projects;
    return analyticsData.projects.filter((p) =>
      p.tools.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
    );
  }, [activeFilter]);

  return (
    <div className="analyst-page-container">
      {/* 6.1 DATA ANALYST HERO SECTION (NO PROFILE PHOTOGRAPH - FULL WIDTH) */}
      <section className="analyst-hero wrap">
        <div className="analyst-hero-content">
          <div className="status-chip">
            <span className="live-pulsar"></span>
            <span>{analyticsData.hero.tag}</span>
          </div>

          <h1 className="analyst-hero-heading">
            Translating Raw Data Into <br />
            <span className="text-gradient">Strategic Business Value</span>
          </h1>

          <p className="analyst-hero-lead">
            {analyticsData.hero.lead}
          </p>

          <div className="analyst-hero-actions">
            <a href="#projects" className="btn btn-secondary">
              Explore Analytics Work <ArrowDown size={17} />
            </a>
            <ResumeButton
              href="/resumes/Barsith_Roshan_Data_Analyst_Resume.pdf"
              fileName="Barsith_Roshan_Data_Analyst_Resume.pdf"
              label="Download Resume"
              className="btn btn-outline"
            />
          </div>
        </div>

        {/* Existing Professional Statistics Strip */}
        <div className="analyst-stat-strip">
          {analyticsData.hero.stats.map((st, sIdx) => (
            <div className="analyst-stat-unit" key={sIdx}>
              <span className="analyst-stat-number">{st.value}</span>
              <span className="analyst-stat-label">{st.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6.2 ABOUT ME SECTION */}
      <section id="about" className="section wrap">
        <SectionHeading
          pre="01 / PROFILE"
          title="Passionate about discovering the"
          gradientTitle="signal inside the noise."
          subtitle="Transforming complex multi-table data into intuitive, verified, and reproducible executive metrics."
        />

        <div className="dev-about-grid" style={{ marginTop: "32px" }}>
          <div className="dev-about-paragraphs">
            <p className="lead-text" style={{ fontSize: "1.1rem", color: "var(--text-primary)", fontWeight: 500 }}>
              {analyticsData.about.bio1}
            </p>
            <p>
              {analyticsData.about.bio2}
            </p>
          </div>

          <div className="dev-about-highlights">
            <div className="dev-highlight-card">
              <div className="dev-highlight-icon" style={{ color: "var(--accent-teal)" }}>
                <TrendingUp size={22} />
              </div>
              <div>
                <h4>Data Storytelling</h4>
                <p>Transforming complex multi-table data into intuitive visual insights and executive summaries.</p>
              </div>
            </div>

            <div className="dev-highlight-card">
              <div className="dev-highlight-icon" style={{ color: "var(--accent-teal)" }}>
                <Zap size={22} />
              </div>
              <div>
                <h4>ETL & Optimization</h4>
                <p>Automating dataset pipelines using Power Query, SQL triggers, and composite indexing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.3 ANALYTICS TECHNICAL SKILLS (6 CATEGORIES, NO FAKE PERCENTAGES) */}
      <section id="skills" className="section wrap">
        <SectionHeading
          pre="02 / TECHNICAL ARSENAL"
          title="Core"
          gradientTitle="Data Stack"
          subtitle="Technologies, analytical methodologies, and development environments I use daily."
        />

        <div className="skills-card-grid" style={{ marginTop: "36px" }}>
          {analyticsData.skillCategories.map((cat, idx) => (
            <SkillCard key={cat.title} category={cat} index={idx} />
          ))}
        </div>
      </section>

      {/* 6.4 ANALYTICS PROJECTS (3 EXACT EXISTING PROJECTS WITH FILTERING) */}
      <section id="projects" className="section wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", marginBottom: "20px" }}>
          <SectionHeading
            pre="03 / CASE STUDIES"
            title="Featured"
            gradientTitle="Analytics Projects"
            subtitle="Engineered with real-world schemas, business metrics, and dynamic dashboards."
          />

          <div className="filter-pill-bar">
            {["All", "Power BI", "SQL", "Python"].map((filt) => (
              <button
                key={filt}
                className={`filter-btn ${activeFilter === filt ? "active" : ""}`}
                onClick={() => setActiveFilter(filt)}
              >
                {filt}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-collection" style={{ marginTop: "24px" }}>
          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} isDeveloper={false} />
          ))}
        </div>
      </section>

      {/* METHODOLOGY: THE 5-STEP ANALYTICS CYCLE */}
      <section id="methodology" className="section wrap">
        <div className="process-frame">
          <div className="process-header">
            <div className="section-pre">04 / METHODOLOGY</div>
            <h2 className="section-title">
              The End-to-End <span className="text-gradient">Analytics Cycle</span>
            </h2>
            <p className="process-lead" style={{ color: "var(--text-secondary)", maxWidth: "600px" }}>
              A structured, disciplined methodology to convert ambiguity into measurable outcomes.
            </p>
          </div>

          <div className="process-steps-grid">
            {analyticsData.methodology.map((st) => (
              <div className="p-step-card" key={st.step}>
                <div className="step-badge">{st.step}</div>
                <h4>{st.name}</h4>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5 & 6.6 EXPERIENCE, EDUCATION & CERTIFICATIONS */}
      <section id="experience" className="section wrap">
        <SectionHeading
          pre="05 / BACKGROUND"
          title="Education &"
          gradientTitle="Experience"
          subtitle="Academic foundation coupled with transferable engineering and database exposure."
        />

        <div className="timeline-flow" style={{ marginTop: "32px" }}>
          {analyticsData.experience.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} />
          ))}
        </div>

        <div className="education-cert-grid" style={{ marginTop: "48px" }}>
          {/* Education Card */}
          <div className="edu-card">
            <div className="edu-header">
              <div className="edu-icon-frame">
                <GraduationCap size={26} />
              </div>
              <div>
                <h3 className="edu-institution">{personalInfo.education.institution}</h3>
                <h4 className="edu-degree">{personalInfo.education.degree}</h4>
              </div>
            </div>

            <div className="edu-meta-row">
              <span>
                <MapPin size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: 5 }} />
                {personalInfo.education.location}
              </span>
              <span>
                <Calendar size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: 5 }} />
                Graduation: {personalInfo.education.graduation}
              </span>
              <span className="edu-cgpa-badge">
                CGPA: {personalInfo.education.cgpa}
              </span>
            </div>

            <p className="edu-desc">
              {personalInfo.education.description}
            </p>
          </div>

          {/* Certifications Stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)" }}>
              Accreditations & Honors
            </h3>
            <div className="cert-stack">
              {certificationsData.map((cert, cIdx) => (
                <CertificationCard key={cIdx} cert={cert} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6.7 DATA ANALYST CONTACT & RESUME DOWNLOAD */}
      <ContactSection
        heading="Let's create data systems that deliver results."
        subheading="Seeking a dedicated Data Analyst with Python, SQL, and Power BI expertise? I am open to full-time roles, data projects, and technical collaborations."
        showResume={true}
        resumePath="/resumes/Barsith_Roshan_Data_Analyst_Resume.pdf"
        resumeLabel="Data Analyst Resume"
      />
    </div>
  );
}

