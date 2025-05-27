import React from 'react';
import './EquipmentDashboard.css';

const mockData = [
  { id: "INV_01", status: "안전", score: 0.32 },
  { id: "INV_02", status: "주의", score: 0.58 },
  { id: "INV_03", status: "위험", score: 0.85 }
];

const EquipmentDashboard = () => {
  return (
    <div className="equipment-dashboard">
      <h2>설비 상태 리스트</h2>
      <table>
        <thead>
          <tr><th>설비 ID</th><th>상태</th><th>이상 점수</th></tr>
        </thead>
        <tbody>
          {mockData.map((eq, i) => (
            <tr key={i} className={eq.status}>
              <td>{eq.id}</td>
              <td>{eq.status}</td>
              <td>{eq.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>예측 점수 추이 (최근 10회)</h3>
      <img src="equipment_trend_chart.png" alt="예측 점수 추이 그래프" />
    </div>
  );
};

export default EquipmentDashboard;
