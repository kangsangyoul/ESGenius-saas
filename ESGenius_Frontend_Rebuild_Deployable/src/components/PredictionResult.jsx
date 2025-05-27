import React, { useEffect, useState } from 'react';
import './PredictionCard.css';

const PredictionResult = () => {
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/predict")
      .then(res => res.json())
      .then(data => setPrediction(data));
  }, []);

  if (!prediction) return <p>예측 결과를 불러오는 중입니다...</p>;

  let riskLevel = "안전";
  let color = "green";
  let icon = "✅";

  if (prediction.anomaly_score > 0.8) {
    riskLevel = "위험";
    color = "red";
    icon = "⚠️";
  } else if (prediction.anomaly_score > 0.5) {
    riskLevel = "주의";
    color = "orange";
    icon = "⚠️";
  }

  return (
    <div className="prediction-card" style={{ borderColor: color }}>
      <h3>고장 예측 결과 {icon}</h3>
      <p><strong>설비 ID:</strong> {prediction.equipment_id}</p>
      <p><strong>예상 고장일:</strong> {prediction.expected_failure_date}</p>
      <p><strong>이상 점수:</strong> {prediction.anomaly_score}</p>
      <p><strong>신뢰도:</strong> {prediction.confidence}%</p>
      <p><strong>위험 등급:</strong> <span style={{ color }}>{riskLevel}</span></p>
    </div>
  );
};

export default PredictionResult;
