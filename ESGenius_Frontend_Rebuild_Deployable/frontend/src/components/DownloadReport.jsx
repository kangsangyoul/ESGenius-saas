import React from 'react';

const DownloadReport = () => {
  const handleDownload = () => {
    window.open('http://localhost:8000/report/pdf', '_blank');
  };

  return (
    <div>
      <h3>PDF 리포트</h3>
      <button onClick={handleDownload}>리포트 다운로드</button>
    </div>
  );
};

export default DownloadReport;
