import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!file || !question) {
      alert("Please upload a file and enter a business question.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("question", question);

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/upload`,
      formData
    );

    navigate(`/result/${response.data.analysis_id}`);
  };

  return (
    <div className="page-wrapper">

      <div className="page-header">
        <h1>Upload Business Dataset</h1>
        <p>
          Provide structured data and define your business objective.
          Decisio will identify KPIs, generate executive insights,
          and prepare structured documentation.
        </p>
      </div>

      <div className="upload-panel">

        <div className="upload-section">
          <label>Upload Data File (CSV / Excel)</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <div className="upload-section">
          <label>Define Your Business Question</label>
          <textarea
            placeholder="Example: Identify revenue leakage drivers and operational bottlenecks."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>

        <button onClick={handleSubmit}>
          RUN EXECUTIVE ANALYSIS
        </button>

      </div>

    </div>
  );
}

export default Upload;