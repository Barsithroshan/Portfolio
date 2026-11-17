import React from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Server,
  Database,
  Cloud,
  Layers,
  GraduationCap,
  Award,
  CheckCircle2,
  Cpu,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Calendar
} from "lucide-react";
import { personalInfo, certificationsData, softSkillsData } from "../data/sharedData";
import { developerData } from "../data/developerData";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import CertificationCard from "../components/CertificationCard";
import ContactSection from "../components/ContactSection";
import ResumeButton from "../components/ResumeButton";
import CodePreview from "../components/CodePreview";
import "../styles/developer.css";

export default function Developer() {
  return (
    <div className="developer-page-container">
      {/* 5.1 DEVELOPER HERO SECTION */}
      <section className="dev-hero wrap">
        <div className="dev-hero-grid">
          <div className="dev-hero-text">
            <div className="status-chip">
              <span className="live-pulsar"></span>
              <span>{developerData.hero.tag}</span>
            </div>

            <h1 className="dev-hero-heading">
              Hi, I'm <br />
              <span className="text-gradient">Barsith Roshan M.</span>
            </h1>

            <p className="dev-hero-lead">
              {developerData.hero.lead}
            </p>

            <p className="dev-hero-sublead">
              {developerData.hero.sublead}
            </p>

            <div className="dev-hero-actions">
              <a href="#projects" className="btn btn-glow">
                View My Projects <ArrowDown size={17} />
              </a>
              <ResumeButton
                href="/resumes/Barsith_Roshan_Developer_Resume.pdf"
                fileName="Barsith_Roshan_Developer_Resume.pdf"
                label="Download Resume"
                className="btn btn-outline"
              />
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>

          {/* Interactive Code Preview Window */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CodePreview />
          </div>
        </div>

        {/* Developer Stats Strip */}
        <div className="dev-stat-strip">
          {developerData.hero.stats.map((st, sIdx) => (
            <div className="dev-stat-unit" key={sIdx}>
              <span className="dev-stat-number">{st.value}</span>
              <span className="dev-stat-label">{st.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5.2 ABOUT ME SECTION */}
      <section id="about" className="section wrap">
        <SectionHeading
          pre="01 / ABOUT ME"
          title="Building Scalable & Reliable"
          gradientTitle="Full-Stack Solutions"
          subtitle="Engineering practical applications with clean code, modern architecture, and database rigor."
        />

        <div className="dev-about-grid" style={{ marginTop: "32px" }}>
          <div className="dev-about-paragraphs">
            <p>
              {developerData.about.bio1}
            </p>
            <p>
              {developerData.about.bio2}
            </p>
            <p>
              {developerData.about.bio3}
            </p>
          </div>

          <div className="dev-about-highlights">
            <div className="dev-highlight-card">
              <div className="dev-highlight-icon">
                <Code2 size={22} />
              </div>
              <div>
                <h4>Modern Frontend Architecture</h4>
                <p>Component-driven React.js, responsive layouts, dynamic state management, and optimized asset delivery.</p>
              </div>
            </div>

            <div className="dev-highlight-card">
              <div className="dev-highlight-icon">
                <Server size={22} />
              </div>
              <div>
                <h4>RESTful Backend Services</h4>
                <p>High-throughput REST API endpoints in Spring Boot and Node.js/Express, with strict validation and business logic.</p>
              </div>
            </div>

            <div className="dev-highlight-card">
              <div className="dev-highlight-icon">
                <Database size={22} />
              </div>
              <div>
                <h4>Relational Data Systems</h4>
                <p>PostgreSQL and MySQL schema design, Prisma ORM integration, ACID transactions, and index query tuning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.3 TECHNICAL SKILLS SECTION (6 CATEGORIES, NO FAKE PERCENTAGES) */}
      <section id="skills" className="section wrap">
        <SectionHeading
          pre="02 / TECHNICAL ARSENAL"
          title="Full Stack"
          gradientTitle="Skill Toolkit"
          subtitle="A comprehensive overview of programming languages, frameworks, databases, and deployment platforms I work with."
        />

        <div className="skills-card-grid" style={{ marginTop: "36px" }}>
          {developerData.skillCategories.map((cat, idx) => (
            <SkillCard key={cat.title} category={cat} index={idx} />
          ))}
        </div>
      </section>

      {/* 5.4 PROFESSIONAL EXPERIENCE (MODERN VERTICAL TIMELINE) */}
      <section id="experience" className="section wrap">
        <SectionHeading
          pre="03 / WORK HISTORY"
          title="Professional"
          gradientTitle="Experience"
          subtitle="Industry experience delivering full-stack applications, managing databases, and deploying services."
        />

        <div className="timeline-flow">
          {developerData.experience.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} />
          ))}
        </div>
      </section>

      {/* 5.5 FEATURED DEVELOPER PROJECTS */}
      <section id="projects" className="section wrap">
        <SectionHeading
          pre="04 / FEATURED APPLICATIONS"
          title="Enterprise"
          gradientTitle="Software Projects"
          subtitle="Real-world production systems built with React.js, Spring Boot, Node.js, and PostgreSQL."
        />

        <div className="projects-collection" style={{ marginTop: "36px" }}>
          {developerData.projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} isDeveloper={true} />
          ))}
        </div>
      </section>

      {/* 5.6 & 5.7 EDUCATION & CERTIFICATIONS */}
      <section id="education" className="section wrap">
        <SectionHeading
          pre="05 / ACADEMICS & CREDENTIALS"
          title="Education &"
          gradientTitle="Certifications"
          subtitle="Verified academic foundations, coursework, and technical accreditations."
        />

        <div className="education-cert-grid">
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
              Accreditations & Certificates
            </h3>
            <div className="cert-stack">
              {certificationsData.map((cert, cIdx) => (
                <CertificationCard key={cIdx} cert={cert} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5.8 & 5.9 DEVELOPER CONTACT & RESUME DOWNLOAD */}
      <ContactSection
        heading="Let's build systems that deliver results."
        subheading="Seeking a Full Stack Developer with React.js, Spring Boot, Node.js, and PostgreSQL skills? Feel free to reach out directly or download my developer resume."
        showResume={true}
        resumePath="/resumes/Barsith_Roshan_Developer_Resume.pdf"
        resumeLabel="Developer Resume"
      />
    </div>
  );
}

