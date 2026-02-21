import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">

      {/* LEFT – Executive KPI Panel */}
      <div className="exec-panel-left">

        <div className="exec-kpi">
          <span className="kpi-label">Revenue</span>
          <span className="kpi-value">$1.24M</span>
        </div>

        <div className="exec-kpi">
          <span className="kpi-label">Operational Efficiency</span>
          <span className="kpi-value">82%</span>
        </div>

        <div className="exec-kpi">
          <span className="kpi-label">Risk Exposure</span>
          <span className="kpi-value">Low</span>
        </div>

      </div>

      {/* CENTER CONTENT */}
      <div className="content">

        <h1>Turn Raw Data Into Strategic Decisions</h1>

        <p>
          Twenty years in business analysis has taught me that a tool should
          solve problems, not create more work. I’m Kamal Sharma, and I built
          this to cut through the realities I’ve navigated for two decades—
          from messy datasets and vague KPIs to relentless stakeholder pressure.
          It’s designed to transform documentation overload into clear,
          decisive action.
        </p>

        <button onClick={() => navigate("/upload")}>
          GENERATE EXECUTIVE INSIGHTS
        </button>

      </div>

      {/* RIGHT – Trend + Bar Chart */}
      <div className="exec-panel-right">

        {/* TREND LINE CHART */}
        <svg viewBox="0 0 450 220" className="executive-chart">
          <polyline
            fill="none"
            stroke="gold"
            strokeWidth="4"
            points="0,180 60,150 120,160 180,120 240,140 300,90 360,110 420,70"
            className="line-gold"
          />
        </svg>

        {/* BAR PERFORMANCE CHART */}
        <div className="bar-chart">
          <div className="bar-item">
            <span>Q1</span>
            <div className="bar-fill gold"></div>
          </div>
          <div className="bar-item">
            <span>Q2</span>
            <div className="bar-fill blue"></div>
          </div>
          <div className="bar-item">
            <span>Q3</span>
            <div className="bar-fill gold"></div>
          </div>
          <div className="bar-item">
            <span>Q4</span>
            <div className="bar-fill blue"></div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;