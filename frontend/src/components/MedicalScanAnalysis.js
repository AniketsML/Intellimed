import React, { useState } from 'react';
import axios from 'axios';

function MedicalScanAnalysis() {
  const [file, setFile] = useState(null);
  const [analysisType, setAnalysisType] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalysisTypeChange = (e) => {
    setAnalysisType(e.target.value);
  };

  const handleUpload = async () => {
    if (!file || !analysisType) {
      alert("Please upload a file and select an analysis type.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", analysisType);

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setResult(response.data.result);
    } catch (error) {
      console.error("Error uploading file:", error);
      setResult("Error analyzing the scan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h1>Medical Scan Disease Detection</h1>
      <div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>
      <div style={{ margin: '20px' }}>
        <label>Select Analysis Type:</label>
        <select onChange={handleAnalysisTypeChange}>
          <option value="">--Select--</option>
          <option value="blood_cancer">Blood Cancer Detection</option>
          <option value="lung_cancer">Lung Cancer Detection</option>
        </select>
      </div>
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Analyzing..." : "Upload and Analyze"}
      </button>
      {result && (
        <div>
          <h2>Analysis Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default MedicalScanAnalysis;
