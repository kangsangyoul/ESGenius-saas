import React from 'react';
import './SaaSLayout.css';

const SaaSLayout = () => {
  return (
    <div className="saas-layout">
      <aside className="sidebar">
        <h2>ESGenius</h2>
        <nav>
          <ul>
            <li>대시보드</li>
            <li>설비 모니터링</li>
            <li>탄소 배출</li>
            <li>보고서</li>
            <li>설정</li>
          </ul>
        </nav>
      </aside>

      <main className="main">
        <header>
          <h1>통합 설비 예측 대시보드</h1>
          <div className="tabs">
            <button className="active">전체 요약</button>
            <button>AI 예측</button>
            <button>탄소 분석</button>
          </div>
        </header>

        <section className="cards">
          <div className="card danger">
            <h3>설비 INV_01</h3>
            <p>상태: 위험</p>
            <p>이상 점수: 0.87</p>
            <p>예상 고장일: 2024-06-05</p>
          </div>
          <div className="card warning">
            <h3>설비 INV_02</h3>
            <p>상태: 주의</p>
            <p>이상 점수: 0.64</p>
            <p>예상 고장일: 2024-06-10</p>
          </div>
          <div className="card safe">
            <h3>설비 INV_03</h3>
            <p>상태: 안전</p>
            <p>이상 점수: 0.35</p>
            <p>예상 고장일: 2024-06-17</p>
          </div>
        </section>

        <section className="chart-table">
          <div className="chart-placeholder">[그래프 영역]</div>
          <div className="table">
            <table>
              <thead>
                <tr><th>설비 ID</th><th>이상 점수</th><th>상태</th><th>고장예측일</th></tr>
              </thead>
              <tbody>
                <tr><td>INV_01</td><td>0.87</td><td>위험</td><td>2024-06-05</td></tr>
                <tr><td>INV_02</td><td>0.64</td><td>주의</td><td>2024-06-10</td></tr>
                <tr><td>INV_03</td><td>0.35</td><td>안전</td><td>2024-06-17</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SaaSLayout;
