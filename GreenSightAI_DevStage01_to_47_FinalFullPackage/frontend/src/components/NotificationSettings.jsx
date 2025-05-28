import React, { useState } from 'react';
import './NotificationSettings.css';

const NotificationSettings = () => {
  const [threshold, setThreshold] = useState(0.8);
  const [enabled, setEnabled] = useState(true);
  const [log, setLog] = useState([]);

  const simulateAlert = () => {
    const simulatedScore = 0.91;
    if (enabled && simulatedScore > threshold) {
      const entry = {
        time: new Date().toLocaleString(),
        message: `설비 INV_01 이상 점수 ${simulatedScore} → 위험 경고 발생`
      };
      setLog([entry, ...log]);
    }
  };

  return (
    <div className="notification-settings">
      <h2>알림 설정</h2>
      <div className="config">
        <label>위험 기준 이상 점수:
          <input
            type="number"
            step="0.01"
            value={threshold}
            onChange={(e) => setThreshold(parseFloat(e.target.value))}
          />
        </label>
        <label>
          알림 활성화:
          <input
            type="checkbox"
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
          />
        </label>
        <button onClick={simulateAlert}>알림 테스트</button>
      </div>

      <h3>최근 알림 로그</h3>
      <div className="log">
        {log.length === 0 ? <p>알림 없음</p> :
          <ul>
            {log.map((entry, i) => (
              <li key={i}>
                <span>{entry.time}</span> - {entry.message}
              </li>
            ))}
          </ul>}
      </div>
    </div>
  );
};

export default NotificationSettings;
