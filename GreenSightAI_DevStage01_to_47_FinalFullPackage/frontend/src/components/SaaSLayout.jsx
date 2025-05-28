import React, { useEffect, useState } from 'react';
import './SaaSLayout.css';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const SaaSLayout = () => {
  const [equipments, setEquipments] = useState([]);
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState('전체 요약');

  useEffect(() => {
    fetch('/mock_equipment_data.json')
      .then((res) => res.json())
      .then((data) => {
        setEquipments(data.equipments);
        setSelected(data.equipments[0]);
      });
  }, []);

  const chartData = {
    labels: ['T-4', 'T-3', 'T-2', 'T-1', 'T'],
    datasets: selected ? [
      {
        label: `${selected.id} 이상 점수`,
        data: selected.scores,
        borderColor: '#0072ff',
        tension: 0.3,
        fill: false
      },
      {
        label: '위험 기준선',
        data: Array(5).fill(0.8),
        borderColor: 'red',
        borderDash: [4, 4],
        pointRadius: 0
      }
    ] : []
  };

  return (
    <div className="saas-layout">
      <aside className="sidebar">
        <h2>ESGenius</h2>
        <nav>
          <ul>
            <li onClick={() => setTab('전체 요약')}>대시보드</li>
            <li onClick={() => setTab('AI 예측')}>설비 모니터링</li>
            <li onClick={() => setTab('탄소 분석')}>탄소 배출</li>
            <li>보고서</li>
            <li>설정</li>
          </ul>
        </nav>
      </aside>
      <main className="main">
        <header>
          <h1>통합 설비 예측 대시보드</h1>
          <div className="tabs">
            {['전체 요약', 'AI 예측', '탄소 분석'].map((t) => (
              <button key={t} className={tab === t ? 'active' : ''} onClick={() => setTab(t)}>{t}</button>
            ))}
          </div>
        </header>

        <section className="cards">
          {equipments.map((eq, i) => (
            <div key={i} className={`card ${eq.status}`} onClick={() => setSelected(eq)}>
              <h3>{eq.id}</h3>
              <p>상태: {eq.status}</p>
              <p>이상 점수: {eq.score}</p>
              <p>예상 고장일: {eq.failDate}</p>
            </div>
          ))}
        </section>

        <section className="chart-table">
          <div className="chart-container">
            <h4>{selected?.id} 예측 추이</h4>
            <Line data={chartData} />
          </div>
          <div className="table">
            <table>
              <thead>
                <tr><th>설비 ID</th><th>이상 점수</th><th>상태</th><th>예상 고장일</th></tr>
              </thead>
              <tbody>
                {equipments.map((row, i) => (
                  <tr key={i}>
                    <td>{row.id}</td>
                    <td>{row.score}</td>
                    <td>{row.status}</td>
                    <td>{row.failDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SaaSLayout;
