import React, { useState } from 'react';
import Dashboard from './Dashboard';
import SensorUpload from './SensorUpload';
import PredictionResult from './PredictionResult';
import DownloadReport from './DownloadReport';
import CarbonForm from './CarbonForm';
import ProposalReport from './ProposalReport';
import './AppLayout.css';

const App = () => {
  const [view, setView] = useState("dashboard");

  const renderView = () => {
    switch(view) {
      case "upload": return <SensorUpload />;
      case "predict": return <PredictionResult />;
      case "report": return <DownloadReport />;
      case "carbon": return <CarbonForm />;
      case "proposal": return <ProposalReport />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2 className="logo">ESGenius</h2>
        <nav>
          <button onClick={() => setView("dashboard")}>대시보드</button>
          <button onClick={() => setView("upload")}>CSV 업로드</button>
          <button onClick={() => setView("predict")}>예측 결과</button>
          <button onClick={() => setView("report")}>PDF 리포트</button>
          <button onClick={() => setView("carbon")}>탄소 계산기</button>
          <button onClick={() => setView("proposal")}>제안서 생성</button>
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
