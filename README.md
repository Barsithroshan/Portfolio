# Barsith Roshan M — Full Stack Developer & Data Analyst Portfolio

A modern, high-performance dual-specialization personal portfolio built with **React 18**, **React Router DOM**, **Vite**, and **Lucide React Icons**.

---

## 🚀 Live Routes & Architecture

The application is structured into three dedicated, unified pages using a shared dark navy design system:

- **`/` — Homepage**: Premium landing page introducing Barsith Roshan M as a Full Stack Developer & Data Analyst. Highlights dual competencies, features the framed profile photograph with an overlay credentials badge, previews both portfolios, and provides contact channels. (*Strictly no resume download on the homepage as per specifications.*)
- **`/developer` — Full Stack Developer Portfolio**: Focuses on modern web application engineering, RESTful backend services, and database systems. Includes an interactive code preview panel with syntax highlighting and copy functionality, 6 skill categories, vertical career timeline (Thay Technologies & IQmath Technologies), featured projects (Digital Job Card System and DepreciCalc), education, certifications, and a direct resume download.
- **`/data-analyst` — Data Analyst Portfolio**: Focuses on business intelligence, interactive dashboards, SQL query optimization, and exploratory data modeling. Text-focused hero taking full content width (*photo completely removed*), 6 skill categories, interactive Power BI and SQL case studies (Online Cab Booking Analysis, Sports Performance Dashboard, Enterprise Business System) with dynamic category filtering, 5-step analytics methodology, and a direct resume download.

---

## ⚡ Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   ├── profile.jpg                           # Framed homepage profile photo (IMG_8634 2.jpg)
│   ├── resumes/
│   │   ├── Barsith_Roshan_Developer_Resume.pdf    # Newly uploaded Developer Resume (137 KB)
│   │   └── Barsith_Roshan_Data_Analyst_Resume.pdf # Original Data Analyst Resume (73 KB)
│   ├── Barsith_Roshan_Developer_Resume.pdf   # Root fallback for Developer resume
│   └── Barsith_Roshan_Data_Analyst_Resume.pdf# Root fallback for Data Analyst resume
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── profile.jpg                   # Newly uploaded photograph (IMG_8634 2.jpg)
│   │       └── IMG_8634 2.jpg                # Source upload copy
│   ├── components/
│   │   ├── Navbar.jsx                        # Shared responsive navigation with theme toggle
│   │   ├── Footer.jsx                        # Shared footer across all routes
│   │   ├── SectionHeading.jsx                # Standardized section headings
│   │   ├── SkillCard.jsx                     # Professional skill cards (no fake percentages)
│   │   ├── ProjectCard.jsx                   # Project showcase cards with metrics and tags
│   │   ├── ExperienceCard.jsx                # Modern vertical timeline item
│   │   ├── CertificationCard.jsx             # Accreditation cards
│   │   ├── ContactSection.jsx                # Contact box with conditional resume download
│   │   ├── ResumeButton.jsx                  # Direct PDF download button
│   │   ├── SocialLinks.jsx                   # Social channels
│   │   ├── ScrollToTop.jsx                   # Route change scroll-reset handler
│   │   ├── InteractiveVisual.jsx             # Interactive visualizations (Cab, Sports, Business, JobCard, DepreciCalc)
│   │   └── CodePreview.jsx                   # Interactive IDE code preview panel for Developer page
│   ├── data/
│   │   ├── sharedData.js                     # Personal bio, education, certs, social links
│   │   ├── developerData.js                  # Developer hero, skills, experience, projects
│   │   └── analyticsData.js                  # Analytics hero, skills, projects, methodology
│   ├── pages/
│   │   ├── Home.jsx                          # Homepage landing route (/)
│   │   ├── Developer.jsx                     # Full Stack Developer route (/developer)
│   │   └── DataAnalyst.jsx                   # Data Analyst route (/data-analyst)
│   ├── styles/
│   │   ├── variables.css                     # Common design system CSS variables
│   │   ├── global.css                        # Global typography, buttons, ambient mesh spheres
│   │   ├── navbar.css                        # Navigation styling
│   │   ├── footer.css                        # Footer styling
│   │   ├── home.css                          # Homepage layout & image frame
│   │   ├── developer.css                     # Developer page styling
│   │   ├── analyst.css                       # Analyst page styling & process grid
│   │   └── components.css                    # Cards, interactive windows, timeline styling
│   ├── App.jsx                               # Router configuration and layout wrapper
│   └── main.jsx                              # Vite React 18 entrypoint
├── index.html                                # HTML root with SEO metadata
└── package.json                              # Project scripts and dependencies
```

---

## 🎨 Shared Design System

The application utilizes a shared visual theme defined in `src/styles/variables.css`:

```css
:root {
  --bg-primary: #070D18;
  --bg-secondary: #0B1422;
  --bg-card: #111C2D;
  --border-color: #1E3045;
  --accent-cyan: #38BDF8;
  --accent-blue: #3B82F6;
  --accent-teal: #2DD4BF;
  --accent-indigo: #818CF8;
  --accent-purple: #A78BFA;
  --text-primary: #F1F5F9;
  --text-secondary: #94A3B8;
}
```
