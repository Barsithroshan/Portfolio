export const developerData = {
  hero: {
    tag: "FULL STACK DEVELOPER",
    heading: "Hi, I'm Barsith Roshan M.",
    lead: "I develop full-stack web applications, build backend systems, integrate REST APIs and manage relational databases.",
    sublead: "My focus is on developing practical applications that solve real-world business problems through modern web technologies.",
    stats: [
      { value: "2+", label: "Production Projects" },
      { value: "React & Node", label: "Core Full Stack" },
      { value: "Spring & SQL", label: "Backend & Systems" },
      { value: "AWS & IIS", label: "Cloud Deployment" }
    ]
  },
  about: {
    title: "Full Stack Engineer with a Passion for Scalable Systems",
    bio1: "I'm Barsith Roshan M, a Computer Science Engineering graduate and Full Stack Developer at Thay Technologies Pvt Ltd.",
    bio2: "I specialize in developing full-stack web applications using React.js, JavaScript, Node.js and Express.js, with experience in REST API development, database management and application deployment.",
    bio3: "I enjoy building practical applications, solving real-world technical problems and continuously improving my development skills."
  },
  skillCategories: [
    {
      title: "FRONTEND DEVELOPMENT",
      description: "Responsive, high-performance UI components & SPAs",
      skills: ["React.js", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "BACKEND DEVELOPMENT",
      description: "Robust business logic, microservices & runtime engines",
      skills: ["Node.js", "Express.js", "Python", "Java", "Spring Boot"]
    },
    {
      title: "API & ORM",
      description: "Contract-driven REST endpoints & object-relational mapping",
      skills: ["REST APIs", "Prisma ORM"]
    },
    {
      title: "DATABASE MANAGEMENT",
      description: "ACID transactions, relational normalization & indexing",
      skills: ["PostgreSQL", "MySQL", "SQL"]
    },
    {
      title: "CLOUD & DEPLOYMENT",
      description: "Server provisioning, reverse proxying & continuous deployment",
      skills: ["AWS EC2", "IIS", "Application Deployment"]
    },
    {
      title: "VERSION CONTROL",
      description: "Branching strategies, collaborative code reviews & CI/CD",
      skills: ["Git", "GitHub"]
    }
  ],
  experience: [
    {
      company: "THAY TECHNOLOGIES PVT LTD",
      position: "Full Stack Developer",
      location: "Chennai, Tamil Nadu",
      duration: "2026 – Present",
      type: "Full-Time",
      responsibilities: [
        "Developed and maintained full-stack web applications using React.js, JavaScript, Node.js and Express.js.",
        "Designed and integrated RESTful APIs.",
        "Managed relational databases using PostgreSQL and MySQL.",
        "Implemented backend business logic, authentication and database operations.",
        "Worked on application deployment, database migrations and server configuration using AWS EC2 and IIS."
      ]
    },
    {
      company: "IQMATH TECHNOLOGIES",
      position: "Full Stack Web Developer Intern",
      location: "Chennai, Tamil Nadu",
      duration: "October 2024 – November 2024",
      type: "Internship",
      responsibilities: [
        "Developed responsive web applications using HTML5, CSS3, JavaScript and React.js.",
        "Collaborated with a team of four developers on UI enhancements using React.js.",
        "Followed Software Development Life Cycle practices."
      ]
    }
  ],
  projects: [
    {
      id: "01",
      title: "DIGITAL JOB CARD SYSTEM",
      category: "CNC Production & Job Tracking",
      techStack: [
        "React.js",
        "JavaScript",
        "Spring Boot",
        "Java",
        "PostgreSQL",
        "REST APIs",
        "Prisma",
        "Git",
        "GitHub"
      ],
      description:
        "Developed a desktop-based Digital Job Card System to manage CNC production jobs, machine assignments, operator entries and job status tracking.",
      contributions: [
        "Built a React frontend for production management.",
        "Developed RESTful APIs using Spring Boot.",
        "Implemented job creation and quantity-wise operator entries.",
        "Implemented PostgreSQL database operations.",
        "Developed Admin and Super Admin approval management."
      ],
      metrics: [
        { label: "Approval Flow", value: "Multi-Tier" },
        { label: "Data Pipeline", value: "REST / Spring" },
        { label: "Database", value: "PostgreSQL" }
      ],
      previewType: "jobcard"
    },
    {
      id: "02",
      title: "DEPRECICALC – FIXED ASSET DEPRECIATION CALCULATOR",
      category: "Financial Management System",
      techStack: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "REST APIs",
        "PostgreSQL"
      ],
      description:
        "Developed a full-stack Fixed Asset Depreciation Management System to manage company assets, calculate depreciation and generate financial-year-wise Fixed Asset Schedules.",
      contributions: [
        "Implemented backend depreciation calculations using Node.js and Express.js.",
        "Supported Written Down Value (WDV) and Straight Line Method (SLM).",
        "Implemented Companies Act, 2013 Schedule II depreciation calculations.",
        "Implemented Income Tax Act Section 32 depreciation calculations.",
        "Integrated PostgreSQL database operations.",
        "Implemented asset additions, accumulated depreciation carry-forward, current-year depreciation and sale adjustments.",
        "Implemented Profit/Loss on Asset Sale calculations."
      ],
      metrics: [
        { label: "Compliance", value: "Sch II & Sec 32" },
        { label: "Methods", value: "WDV & SLM" },
        { label: "Asset Schedules", value: "Automated FY" }
      ],
      previewType: "deprecicalc"
    }
  ]
};

