import React, { useState } from 'react';

const CarbonForm = () => {
  const [type, setType] = useState("solar");
  const [runtime, setRuntime] = useState("");
  const [output, setOutput] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    const res = await fetch("http://localhost:8000/carbon/calculate", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, runtime, output })
    });
    const data = await res.json();
    setResult(data);
  };

  const getColor = (emission) => {
    if (emission > 500) return "red";
    if (emission > 200) return "orange";
    return "green";
  };

  const getLevel = (emission) => {
    if (emission > 500) return "높음 ⚠️";
    if (emission > 200) return "보통 ⚠️";
    return "낮음 ✅";
  };

  return (
    <div>
      <h3>탄소 배출량 계산기</h3>
      <label>설비 유형:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="solar">태양광</option>
          <option value="wind">풍력</option>
          <option value="diesel">디젤</option>
        </select>
      </label>
      <br />
      <input type="number" placeholder="운전 시간 (h)" value={runtime} onChange={(e) => setRuntime(e.target.value)} />
      <input type="number" placeholder="평균 출력 (kW)" value={output} onChange={(e) => setOutput(e.target.value)} />
      <button onClick={handleCalculate}>계산하기</button>

      {result && (
        <div style={{ border: "2px solid " + getColor(result.emission_kgco2), padding: "10px", marginTop: "15px" }}>
          <h4>결과</h4>
          <p>설비 유형: {result.equipment_type}</p>
          <p>운전 시간: {result.runtime_hours} h</p>
          <p>출력: {result.output_kw} kW</p>
          <p><strong>탄소 배출량: {result.emission_kgco2} kgCO₂</strong></p>
          <p><strong>위험 등급: <span style={{ color: getColor(result.emission_kgco2) }}>{getLevel(result.emission_kgco2)}</span></strong></p>
        </div>
      )}
    </div>
  );
};

export default CarbonForm;
