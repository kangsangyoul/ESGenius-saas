import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // 가짜 상태 데이터를 설정 (실제 연동 시 API 호출 예정)
    setStatus({
      equipment_id: "INV_01",
      health: "위험",
      anomaly_score: 0.87,
      carbon_today: 62.5,
      total_carbon: 442.5,
      last_prediction: "2024-06-05"
    });
  }, []);

  if (!status) return <p>대시보드를 불러오는 중입니다...</p>;

  return (
    <div className="dashboard">
      <h2>ESGenius AI 통합 대시보드</h2>
      <div className="card-group">
        <div className="card danger">
          <h4>설비 상태</h4>
          <p>ID: {status.equipment_id}</p>
          <p>상태: {status.health} (이상점수 {status.anomaly_score})</p>
          <p>예측 고장일: {status.last_prediction}</p>
        </div>
        <div className="card">
          <h4>오늘의 탄소 배출량</h4>
          <p>{status.carbon_today} kgCO₂</p>
        </div>
        <div className="card">
          <h4>총 누적 탄소 배출량</h4>
          <p>{status.total_carbon} kgCO₂</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
