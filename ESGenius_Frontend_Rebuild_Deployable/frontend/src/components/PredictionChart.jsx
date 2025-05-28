import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './SaaSLayout.css';

const PredictionChart = () => {
  const data = {
    labels: Array.from({ length: 10 }, (_, i) => `T-${9 - i}`),
    datasets: [
      {
        label: '이상 점수',
        data: [0.35, 0.42, 0.48, 0.51, 0.63, 0.69, 0.72, 0.80, 0.89, 0.91],
        fill: false,
        borderColor: '#0072ff',
        tension: 0.2,
        pointBackgroundColor: '#0072ff'
      },
      {
        label: '위험 기준선',
        data: Array(10).fill(0.8),
        borderColor: 'red',
        borderDash: [5, 5],
        pointRadius: 0,
        tension: 0
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: { enabled: true }
    },
    scales: {
      y: {
        min: 0,
        max: 1.2,
        title: { display: true, text: '이상 점수' }
      }
    }
  };

  return (
    <div className="chart-container">
      <h4>설비 INV_01 예측 점수 추이</h4>
      <Line data={data} options={options} />
    </div>
  );
};

export default PredictionChart;
