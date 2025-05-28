import React from 'react';
import './DashboardVisualPolish.css';

const mockEquipments = [
  { id: "INV_01", score: 0.87, status: "위험", carbon: 442.5, failDate: "2024-06-05" },
  { id: "INV_02", score: 0.64, status: "주의", carbon: 312.1, failDate: "2024-06-10" },
  { id: "INV_03", score: 0.35, status: "안전", carbon: 155.0, failDate: "2024-06-17" }
];

const DashboardVisualPolish = () => {
  return (
    <div className="polished-dashboard">
      <header>
        <h1>ESGenius 통합 설비 대시보드</h1>
        <p className="subtitle">설비 이상 예측 및 탄소 분석 결과</p>
      </header>
      <div className="grid-container">
        {mockEquipments.map((item, idx) => (
          <div key={idx} className={`equip-box ${item.status}`}>
            <h3>{item.id}</h3>
            <p><strong>이상 점수:</strong> {item.score}</p>
            <p><strong>상태:</strong> {item.status}</p>
            <p><strong>예상 고장일:</strong> {item.failDate}</p>
            <p><strong>누적 탄소:</strong> {item.carbon} kgCO₂</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardVisualPolish;
