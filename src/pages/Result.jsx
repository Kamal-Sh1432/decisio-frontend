import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

function Result() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(`${import.meta.env.VITE_API_URL}/analysis/${id}`)
        .then((res) => {
          if (res.data.status === "completed") {
            setData(res.data.analysis);
            clearInterval(interval);
          }
        })
        .catch(() => clearInterval(interval));
    }, 2000);

    return () => clearInterval(interval);
  }, [id]);

  if (!data) {
    return (
      <div className="loading-screen">
        Analyzing dataset... Generating executive insights...
      </div>
    );
  }

  const charts = data.executive_dashboard?.charts || [];

  return (
    <div className="page-wrapper">

      {/* Industry */}
      <div className="industry-badge">
        Industry: {data.industry || "General Business"}
      </div>

      {/* Executive Summary */}
      {data.executive_summary && (
        <div className="section">
          <h2>Executive Summary</h2>
          <p className="executive-summary">
            {data.executive_summary}
          </p>
        </div>
      )}

      {/* KPI Cards */}
      {data.primary_kpis?.length > 0 && (
        <div className="kpi-grid">
          {data.primary_kpis.map((kpi, index) => (
            <div key={index} className="kpi-card">
              <span>{kpi.name}</span>
              <strong>{kpi.value}</strong>
            </div>
          ))}
        </div>
      )}

      {/* Charts Section */}
      {charts.length > 0 && (
        <div className="charts-grid">

          {charts.map((chart, index) => {
            const type = chart.type?.toLowerCase();

            return (
              <div key={index} className="chart-card">

                {/* PIE / DONUT */}
                {(type === "pie" || type === "donut") && chart.data?.length > 0 && (
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie
                        data={chart.data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={100}
                        label={({ name, percent }) =>
                          `${name} (${(percent * 100).toFixed(0)}%)`
                        }
                      >
                        {chart.data.map((_, i) => (
                          <Cell
                            key={i}
                            fill={
                              ["#FFD700", "#00E5FF", "#FF6B6B", "#00C49F"][
                                i % 4
                              ]
                            }
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                )}

                {/* TREND LINE */}
                {type === "trend" && chart.data?.length > 0 && (
                  <ResponsiveContainer width="100%" height={280}>
                    <LineChart data={chart.data}>
                      <XAxis dataKey="month" stroke="#aaa" />
                      <YAxis stroke="#aaa" />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#00E5FF"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}

                {/* BAR CHART */}
                {type === "bar" && chart.data?.length > 0 && (
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={chart.data}>
                      <XAxis dataKey="category" stroke="#aaa" />
                      <YAxis stroke="#aaa" />
                      <Tooltip />
                      <Bar
                        dataKey="value"
                        fill="#FFD700"
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                )}

              </div>
            );
          })}

        </div>
      )}

      {/* Key Insights */}
      {data.key_insights?.length > 0 && (
        <div className="section">
          <h2>Key Insights</h2>
          {data.key_insights.map((insight, index) => (
            <div key={index} className="insight-card">
              <strong>{insight.title}</strong>
              <p>{insight.analysis}</p>
            </div>
          ))}
        </div>
      )}

      {/* Recommendations */}
      {data.recommendations?.length > 0 && (
        <div className="section">
          <h2>Strategic Recommendations</h2>
          {data.recommendations.map((rec, index) => (
            <div key={index} className="recommendation-card">
              <strong>{rec.strategy}</strong>
              <p>Action: {rec.action}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Result;