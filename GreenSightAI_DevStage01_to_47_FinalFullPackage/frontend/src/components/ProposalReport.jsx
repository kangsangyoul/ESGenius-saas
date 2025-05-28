import React from 'react';

const ProposalReport = () => {
  const handleDownload = () => {
    window.open('http://localhost:8000/proposal/pdf', '_blank');
  };

  return (
    <div>
      <h3>제안서 PDF 다운로드</h3>
      <button onClick={handleDownload}>다운로드</button>
    </div>
  );
};

export default ProposalReport;
