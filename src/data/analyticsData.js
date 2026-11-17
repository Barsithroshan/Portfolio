export const analyticsData = {
  hero: {
    tag: "AVAILABLE FOR ANALYTICS & BI ROLES",
    heading: "Translating Raw Data Into Strategic Business Value.",
    lead: "I'm Barsith Roshan M., a Data Analyst focused on data analysis, business intelligence, interactive dashboards and extracting meaningful insights from data using Python, SQL and Power BI.",
    stats: [
      { value: "4+", label: "Core BI Tools" },
      { value: "100%", label: "Data Rigor" },
      { value: "50K+", label: "Records Analyzed" },
      { value: "B.E.", label: "Computer Science" }
    ]
  },
  about: {
    title: "Passionate about discovering the signal inside the noise.",
    bio1: "With a strong Computer Science foundation and hands-on analytics training, I specialize in the complete data intelligence cycle: identifying business needs, cleaning noisy datasets, modeling relational schemas, and surfacing executive metrics.",
    bio2: "Whether crafting DAX measures for sports analytics dashboards or optimizing SQL queries for transactional platforms, my objective is to eliminate guesswork with verified, reproducible metrics."
  },
  skillCategories: [
    {
      title: "PROGRAMMING",
      description: "Scripting statistical logic and data transformation",
      skills: ["Python"]
    },
    {
      title: "DATA ANALYSIS",
      description: "Data wrangling, aggregation, cleaning and modeling",
      skills: ["Pandas", "NumPy"]
    },
    {
      title: "DATABASE",
      description: "Structuring schemas, relational tuning & complex querying",
      skills: ["SQL", "MySQL", "PostgreSQL"]
    },
    {
      title: "BUSINESS INTELLIGENCE",
      description: "Interactive dashboard design, DAX measures and ETL modeling",
      skills: ["Power BI", "DAX", "Power Query"]
    },
    {
      title: "SPREADSHEETS",
      description: "Pivot tables, financial formulas, lookup and data validation",
      skills: ["Microsoft Excel"]
    },
    {
      title: "TOOLS",
      description: "Version control, collaborative workflows and reproducibility",
      skills: ["Git", "GitHub"]
    }
  ],
  experience: [
    {
      company: "THAY TECHNOLOGIES PVT LTD",
      position: "Full Stack Developer (Transferable Technical Experience)",
      location: "Chennai, Tamil Nadu",
      duration: "2026 – Present",
      type: "Full-Time",
      responsibilities: [
        "Developed and maintained full-stack web applications using React.js, JavaScript, Node.js and Express.js.",
        "Designed and integrated RESTful APIs with structured data payloads.",
        "Managed relational databases using PostgreSQL and MySQL with complex joins and query tuning.",
        "Implemented backend business logic, financial calculations and database operations.",
        "Worked on database migrations, server monitoring and application deployment using AWS EC2 and IIS."
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
        "Followed Software Development Life Cycle practices and relational data verification."
      ]
    }
  ],
  projects: [
    {
      id: "01",
      type: "SQL + PYTHON",
      category: "SQL",
      title: "Online Cab Booking Analysis",
      subtitle: "Ridership Trends & Fare Optimization",
      description:
        "Engineered an end-to-end data pipeline to analyze 50,000+ ride records. Designed relational SQL schemas, conducted multi-factor surge pricing analysis, and automated customer booking frequency insights with Python.",
      highlights: [
        "Relational database schema with 3NF normalization",
        "Dynamic booking frequency and peak-hour heatmaps",
        "CRUD operations integrated with automated analytics reports"
      ],
      tools: ["Python", "SQL", "MySQL", "Pandas", "CRUD"],
      visual: "cab",
      metrics: [
        { label: "Rides Processed", value: "50K+" },
        { label: "Query Speedup", value: "38%" },
        { label: "Peak Efficiency", value: "94.2%" }
      ]
    },
    {
      id: "02",
      type: "POWER BI + EXCEL",
      category: "Power BI",
      title: "Sports Performance Analytics Dashboard",
      subtitle: "Athlete KPI & Team Efficiency Tracking",
      description:
        "Architected interactive Power BI executive dashboards utilizing complex DAX measures, automated Power Query ETL pipelines, and parameter-driven player benchmarking to elevate matchday strategy.",
      highlights: [
        "Custom DAX calculations for stamina-to-output ratios",
        "Automated weekly data refresh via Power Query ETL",
        "Interactive drill-through player profile cards"
      ],
      tools: ["Power BI", "DAX", "Excel", "Power Query", "Data Modeling"],
      visual: "sports",
      metrics: [
        { label: "Active Players", value: "24" },
        { label: "KPI Accuracy", value: "98.5%" },
        { label: "Report Turnaround", value: "-60%" }
      ]
    },
    {
      id: "03",
      type: "DATABASE + REPORTING",
      category: "SQL",
      title: "Enterprise Online Business System",
      subtitle: "Transaction Integrity & Financial Reporting",
      description:
        "Designed and deployed a high-performance transactional database system in MySQL. Built indexed analytical views, transaction auditing queries, and automated financial turnover reports for business operations.",
      highlights: [
        "ACID-compliant transactional schema design",
        "Optimized query response times with composite B-Tree indexing",
        "Automated summary views for executive ledger audits"
      ],
      tools: ["MySQL", "SQL Indexing", "Financial Reporting", "ETL"],
      visual: "business",
      metrics: [
        { label: "Daily Txns", value: "12K+" },
        { label: "Index Latency", value: "< 14ms" },
        { label: "Audit Accuracy", value: "100%" }
      ]
    }
  ],
  methodology: [
    {
      step: "01",
      name: "Problem Definition",
      desc: "Aligning on core business OKRs, stakeholders, and hypothesis questions."
    },
    {
      step: "02",
      name: "Data Extraction & Prep",
      desc: "SQL retrieval, missing value treatment, outlier trimming, and normalization."
    },
    {
      step: "03",
      name: "Exploratory Analytics",
      desc: "Uncovering cohort patterns, variance drivers, and cross-metric correlations."
    },
    {
      step: "04",
      name: "Dashboard Architecture",
      desc: "Building interactive visual logic, drill-downs, and automated Power Query ETL."
    },
    {
      step: "05",
      name: "Strategy Delivery",
      desc: "Translating dashboard insights into executive summaries with clear ROI actions."
    }
  ]
};

