// src/WaveChart.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function getRandomPercent(min = 60, max = 98) {
  return Math.round(Math.random() * (max - min) + min);
}

export default function WaveChart({ label = "실시간 예측", color = "#3b82f6" }) {
  const [percent, setPercent] = useState(getRandomPercent());

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(getRandomPercent());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", width: 220, height: 220, margin: "0 auto" }}>
      <motion.svg width="220" height="220" viewBox="0 0 220 220" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="waveClip">
            <circle cx="110" cy="110" r="100" />
          </clipPath>
        </defs>
        <motion.path
          d={`
            M0,${220 - percent*2}
            Q55,${200 - percent*2} 110,${220 - percent*2}
            T220,${220 - percent*2}
            V220 H0 Z
          `}
          fill={color}
          clipPath="url(#waveClip)"
          animate={{
            d: [
              `M0,${220 - percent*2} Q55,${200 - percent*2} 110,${220 - percent*2} T220,${220 - percent*2} V220 H0 Z`,
              `M0,${220 - percent*2 - 12} Q55,${200 - percent*2 - 6} 110,${220 - percent*2 - 12} T220,${220 - percent*2 - 6} V220 H0 Z`,
              `M0,${220 - percent*2} Q55,${200 - percent*2} 110,${220 - percent*2} T220,${220 - percent*2} V220 H0 Z`
            ]
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.svg>
      <div style={{
        position: "absolute",
        top: 0, left: 0, width: "100%", height: "100%",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        zIndex: 10
      }}>
        <span style={{ fontSize: 48, fontWeight: 800, color: "#1e3a8a" }}>{percent}%</span>
        <span style={{ fontSize: 18, fontWeight: 600, color: "#3b82f6", marginTop: 12 }}>{label}</span>
      </div>
    </div>
  );
}

// src/App.js
import React, { useState } from 'react';
import WaveChart from "./WaveChart";
import './AppLayout.css';

// 아래 파일들이 없을 경우 임시 주석처리하거나 빈 컴포넌트로 만들어도 무방
// import Dashboard from './Dashboard';
// import SensorUpload from './SensorUpload';
// import PredictionResult from './PredictionResult';
// import DownloadReport from './DownloadReport';
// import CarbonForm from './CarbonForm';
// import ProposalReport from './ProposalReport';

const App = () => {
  const [view, setView] = useState("dashboard");

  const renderView = () => {
    switch(view) {
      // case "upload": return <SensorUpload />;
      // case "predict": return <PredictionResult />;
      // case "report": return <DownloadReport />;
      // case "carbon": return <CarbonForm />;
      // case "proposal": return <ProposalReport />;
      default:
        return (
          <div style={{ padding: 40 }}>
            <h1 style={{ fontSize: 32, fontWeight: 700 }}>
              ESGenius 통합 설비 예측 대시보드
            </h1>
            <div style={{ margin: "40px 0" }}>
              <WaveChart label="이상점수 실시간 예측" color="#f87171" />
            </div>
            {/* <Dashboard /> */}
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2 className="logo">ESGenius</h2>
        <nav>
          <button onClick={() => setView("dashboard")}>대시보드</button>
          {/* <button onClick={() => setView("upload")}>CSV 업로드</button>
          <button onClick={() => setView("predict")}>예측 결과</button>
          <button onClick={() => setView("report")}>PDF 리포트</button>
          <button onClick={() => setView("carbon")}>탄소 계산기</button>
          <button onClick={() => setView("proposal")}>제안서 생성</button> */}
        </nav>
        <footer className="footer">
          © 2025 DexTion Inc.<br />
          sales@dextion.online
        </footer>
      </aside>
      <main className="content">{renderView()}</main>
    </div>
  );
};

export default App;
