import React, { useState } from 'react';

const SensorUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState([]);
  const [status, setStatus] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setStatus(null);
  };

  const handleUpload = async () => {
    if (!file) return alert("CSV 파일을 선택하세요.");

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      setPreview(data.preview || []);
      setStatus(`✅ ${data.rows}개 항목 업로드 완료`);
    } catch {
      setStatus("❌ 업로드 실패. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <h3>센서 데이터 업로드</h3>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>업로드</button>
      {status && <p>{status}</p>}
      {preview.length > 0 && (
        <table>
          <thead>
            <tr>{Object.keys(preview[0]).map((col, idx) => <th key={idx}>{col}</th>)}</tr>
          </thead>
          <tbody>
            {preview.map((row, i) => (
              <tr key={i}>{Object.values(row).map((val, j) => <td key={j}>{val}</td>)}</tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SensorUpload;
