import React, { useState } from "react";
import { Terminal, Check, Copy, Code2, Cpu, Database } from "lucide-react";

export default function CodePreview() {
  const [activeTab, setActiveTab] = useState("api");
  const [copied, setCopied] = useState(false);

  const snippets = {
    api: {
      file: "JobCardController.java",
      lang: "Java / Spring Boot",
      code: `@RestController
@RequestMapping("/api/v1/jobs")
public class JobCardController {

    @Autowired
    private JobCardService jobService;

    @PostMapping("/entry")
    public ResponseEntity<JobCardResponse> recordOperatorEntry(
            @Valid @RequestBody OperatorEntryDTO dto) {
        JobCard job = jobService.recordBatch(dto);
        return ResponseEntity.status(HttpStatus.CREATED)
                             .body(new JobCardResponse(job));
    }
}`
    },
    node: {
      file: "deprecicalcEngine.js",
      lang: "Node.js / Express",
      code: `// Companies Act 2013 Sch II & IT Act Sec 32
export function calculateDepreciation(asset, method, fy) {
  const { cost, usefulLife, salvageRate = 0.05 } = asset;
  if (method === "WDV") {
    const rate = 1 - Math.pow(salvageRate, 1 / usefulLife);
    const currentDep = asset.openingWDV * rate;
    return { currentDep, closingWDV: asset.openingWDV - currentDep };
  }
  const slmRate = (cost * (1 - salvageRate)) / usefulLife;
  return { currentDep: slmRate, closingWDV: asset.openingWDV - slmRate };
}`
    },
    react: {
      file: "ProductionMonitor.jsx",
      lang: "React.js",
      code: `export default function ProductionMonitor() {
  const [activeJobs, setActiveJobs] = useState([]);

  useEffect(() => {
    fetchActiveJobs().then(data => setActiveJobs(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {activeJobs.map(job => (
        <JobCardItem key={job.id} job={job} />
      ))}
    </div>
  );
}`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-preview-window">
      <div className="code-preview-header">
        <div className="code-dots">
          <span className="dash-dot red"></span>
          <span className="dash-dot yellow"></span>
          <span className="dash-dot green"></span>
        </div>
        <div className="code-tabs">
          <button
            className={`code-tab-btn ${activeTab === "api" ? "active" : ""}`}
            onClick={() => setActiveTab("api")}
          >
            JobCardController.java
          </button>
          <button
            className={`code-tab-btn ${activeTab === "node" ? "active" : ""}`}
            onClick={() => setActiveTab("node")}
          >
            deprecicalcEngine.js
          </button>
          <button
            className={`code-tab-btn ${activeTab === "react" ? "active" : ""}`}
            onClick={() => setActiveTab("react")}
          >
            ProductionMonitor.jsx
          </button>
        </div>
        <button
          className="code-copy-btn"
          onClick={handleCopy}
          aria-label="Copy code"
          title="Copy code snippet"
        >
          {copied ? <Check size={14} className="accent-teal" /> : <Copy size={14} />}
        </button>
      </div>

      <div className="code-preview-body">
        <pre className="code-pre mono">
          <code>
            {snippets[activeTab].code.split("\n").map((line, idx) => (
              <div key={idx} className="code-line">
                <span className="line-num">{idx + 1}</span>
                <span className="line-text">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      <div className="code-preview-footer">
        <div className="code-status-pill">
          <span className="live-pulsar"></span>
          <span>REST API · Spring Boot & Express.js · PostgreSQL Ready</span>
        </div>
        <span className="code-lang-tag mono">{snippets[activeTab].lang}</span>
      </div>
    </div>
  );
}

