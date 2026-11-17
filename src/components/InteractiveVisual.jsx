import React, { useState, useEffect } from "react";
import { Sparkles, Terminal, CheckCircle2, TrendingUp, Layers } from "lucide-react";

export default function InteractiveVisual({ type }) {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => (p + 1) % 8);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  if (type === "sports") {
    return (
      <div className="dash-window">
        <div className="dash-bar">
          <span className="dash-dot red"></span>
          <span className="dash-dot yellow"></span>
          <span className="dash-dot green"></span>
          <span className="dash-label">POWER_BI // ATHLETE_KPI_MONITOR.pbix</span>
        </div>
        <div className="dash-body">
          <div className="kpi-banner">
            <div className="kpi-pill">
              <span>ACTIVE COHORT</span>
              <strong>24 Athletes</strong>
              <small>↑ +4 vs Last Match</small>
            </div>
            <div className="kpi-pill">
              <span>EFFICIENCY INDEX</span>
              <strong className="accent-teal">89.4 / 100</strong>
              <small>Top Decile Rank</small>
            </div>
          </div>
          <div className="live-bars">
            {[58, 85, 70, 94, 62, 88, 76, 92].map((height, i) => (
              <div className="bar-column" key={i}>
                <div
                  className="bar-fill"
                  style={{
                    height: `${height}%`,
                    transition: "height 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                    background:
                      i === pulse
                        ? "linear-gradient(180deg, #38bdf8 0%, #2dd4bf 100%)"
                        : "linear-gradient(180deg, rgba(56,189,248,0.7) 0%, rgba(99,102,241,0.5) 100%)",
                  }}
                >
                  <span className="bar-val">{height}%</span>
                </div>
                <span className="bar-tag">P{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "cab") {
    return (
      <div className="dash-window">
        <div className="dash-bar">
          <span className="dash-dot red"></span>
          <span className="dash-dot yellow"></span>
          <span className="dash-dot green"></span>
          <span className="dash-label">SQL_STUDIO // CAB_BOOKING_ANALYTICS.sql</span>
        </div>
        <div className="dash-body">
          <div className="query-snippet">
            <code>
              <span className="sql-kw">SELECT</span> hour(pickup_time),{" "}
              <span className="sql-fn">COUNT</span>(*), <span className="sql-fn">AVG</span>(fare_amount)<br />
              <span className="sql-kw">FROM</span> ride_trips{" "}
              <span className="sql-kw">GROUP BY</span> 1{" "}
              <span className="sql-kw">ORDER BY</span> 2 <span className="sql-kw">DESC</span>;
            </code>
          </div>
          <div className="records-table">
            <div className="tbl-header">
              <span>RIDE ID</span>
              <span>ZONE</span>
              <span>PEAK FARE</span>
              <span>STATUS</span>
            </div>
            <div className="tbl-row">
              <span className="mono">TR-9821</span>
              <span>Central Tech</span>
              <span className="mono">₹ 420.00</span>
              <span className="badge-ok">Settled</span>
            </div>
            <div className="tbl-row">
              <span className="mono">TR-9822</span>
              <span>Airport Bay</span>
              <span className="mono">₹ 850.00</span>
              <span className="badge-ok">Settled</span>
            </div>
            <div className="tbl-row">
              <span className="mono">TR-9823</span>
              <span>East Coast</span>
              <span className="mono">₹ 310.00</span>
              <span className="badge-active">In-Route</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "jobcard") {
    return (
      <div className="dash-window">
        <div className="dash-bar">
          <span className="dash-dot red"></span>
          <span className="dash-dot yellow"></span>
          <span className="dash-dot green"></span>
          <span className="dash-label">CNC_PROD // DIGITAL_JOB_CARD.api</span>
        </div>
        <div className="dash-body">
          <div className="query-snippet">
            <code>
              <span className="sql-kw">POST</span> /api/v1/jobs/batch-entry<br />
              <span className="sql-fn">Status</span>: 201 Created · <span className="sql-kw">Latency</span>: 18ms
            </code>
          </div>
          <div className="records-table">
            <div className="tbl-header">
              <span>JOB ID</span>
              <span>MACHINE</span>
              <span>OPERATOR</span>
              <span>STAGE</span>
            </div>
            <div className="tbl-row">
              <span className="mono">JC-4081</span>
              <span>CNC-VMC 04</span>
              <span>Op #12 (Q: 250)</span>
              <span className="badge-ok">Approved</span>
            </div>
            <div className="tbl-row">
              <span className="mono">JC-4082</span>
              <span>CNC-LATHE 02</span>
              <span>Op #08 (Q: 140)</span>
              <span className="badge-active">In-Process</span>
            </div>
            <div className="tbl-row">
              <span className="mono">JC-4083</span>
              <span>CNC-DRILL 01</span>
              <span>Op #05 (Q: 320)</span>
              <span className="badge-ok">Super Admin</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "deprecicalc") {
    return (
      <div className="dash-window">
        <div className="dash-bar">
          <span className="dash-dot red"></span>
          <span className="dash-dot yellow"></span>
          <span className="dash-dot green"></span>
          <span className="dash-label">FIN_ENGINE // DEPRECICALC_SCHEDULE.json</span>
        </div>
        <div className="dash-body">
          <div className="kpi-banner">
            <div className="kpi-pill">
              <span>COMPLIANCE</span>
              <strong className="accent-teal">Sch II / Sec 32</strong>
              <small>Companies Act + IT Act</small>
            </div>
            <div className="kpi-pill">
              <span>METHOD ENGINE</span>
              <strong style={{ color: "var(--accent-cyan)" }}>WDV & SLM</strong>
              <small>Auto FY Carry-Forward</small>
            </div>
          </div>
          <div className="records-table">
            <div className="tbl-header">
              <span>ASSET CLASS</span>
              <span>ORIGINAL COST</span>
              <span>CURRENT WDV</span>
              <span>P&L DISPOSAL</span>
            </div>
            <div className="tbl-row">
              <span className="mono">Plant & Mach</span>
              <span className="mono">₹ 14,50,000</span>
              <span className="mono">₹ 9,28,450</span>
              <span className="badge-ok">+ ₹ 42,000</span>
            </div>
            <div className="tbl-row">
              <span className="mono">Comp Equip</span>
              <span className="mono">₹ 3,80,000</span>
              <span className="mono">₹ 1,12,300</span>
              <span className="badge-active">Depreciating</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default: business ledger visual
  return (
    <div className="dash-window">
      <div className="dash-bar">
        <span className="dash-dot red"></span>
        <span className="dash-dot yellow"></span>
        <span className="dash-dot green"></span>
        <span className="dash-label">MYSQL // ENTERPRISE_LEDGER_REPORT.views</span>
      </div>
      <div className="dash-body">
        <div className="donut-wrap">
          <div className="donut-chart">
            <div className="donut-center">
              <small>HEALTH</small>
              <strong>99.8%</strong>
            </div>
          </div>
          <div className="donut-legend">
            <div className="legend-item">
              <span className="dot teal"></span>
              <span>Direct Sales (68%)</span>
            </div>
            <div className="legend-item">
              <span className="dot blue"></span>
              <span>Wholesale Partner (22%)</span>
            </div>
            <div className="legend-item">
              <span className="dot indigo"></span>
              <span>Subscription (10%)</span>
            </div>
          </div>
        </div>
        <div className="perf-tag">
          <Sparkles size={13} className="spin-icon" />
          <span>Automated Daily Index Refresh · Latency 11ms</span>
        </div>
      </div>
    </div>
  );
}

