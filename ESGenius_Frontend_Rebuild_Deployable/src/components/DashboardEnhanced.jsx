import React from 'react';
import './DashboardEnhanced.css';

const mockEquipment = [
  { id: "INV_01", health: "위험", score: 0.87, carbon: 442.5, nextFail: "2024-06-05" },
  { id: "INV_02", health: "주의", score: 0.64, carbon: 300.0, nextFail: "2024-06-12" },
  { id: "INV_03", health: "안전", score: 0.33, carbon: 120.0, nextFail: "2024-06-19" }
];

const DashboardEnhanced = () => {
  return (
    <div className="ui-dashboard">
      <h1>ESGenius 실시간 모니터링 대시보드</h1>
      <p className="sub">설비 상태 / 예측 점수 / 탄소 배출량</p>
      <div className="grid">
        {mockEquipment.map((eq, i) => (
          <div key={i} className={`equip-card ${eq.health}`}>
            <div className="title">{eq.id}</div>
            <div className="score">이상 점수: {eq.score}</div>
            <div>상태: {eq.health}</div>
            <div>예상 고장일: {eq.nextFail}</div>
            <div>누적 탄소: {eq.carbon} kgCO₂</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardEnhanced;
