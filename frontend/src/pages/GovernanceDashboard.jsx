import { mockGovernance } from '../data/mockData';
import './GovernanceDashboard.css';

export default function GovernanceDashboard() {
  const { districtRisk, fpsRisk, transporterRisk, monthlyLeakage } = mockGovernance;

  const getRiskColor = (risk) => {
    if (risk === 'Low') return '#28a745';
    if (risk === 'Medium') return '#ffc107';
    return '#dc3545';
  };

  const getRiskScore = (score) => {
    if (score >= 90) return 'low';
    if (score >= 75) return 'medium';
    return 'high';
  };

  return (
    <div className="governance-dashboard">
      <h1>Governance & Oversight Dashboard</h1>
      <p className="subtitle">Comprehensive monitoring and risk management</p>

      <div className="leakage-insights">
        <div className="insight-card">
          <div className="insight-icon">📉</div>
          <div className="insight-content">
            <div className="insight-value">{monthlyLeakage}%</div>
            <div className="insight-label">Monthly Leakage Prevention</div>
            <div className="insight-description">System detected and prevented potential leakage</div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="district-heatmap">
          <h2>District Risk Heatmap</h2>
          <div className="heatmap-grid">
            {districtRisk.map((district, index) => (
              <div 
                key={index} 
                className="heatmap-item"
                style={{ 
                  backgroundColor: getRiskColor(district.risk) + '20',
                  borderColor: getRiskColor(district.risk),
                  borderWidth: '3px',
                  borderStyle: 'solid'
                }}
              >
                <div className="district-name">{district.district}</div>
                <div className="district-score" style={{ color: getRiskColor(district.risk) }}>
                  Score: {district.score}
                </div>
                <div className={`district-risk-badge risk-${district.risk.toLowerCase()}`}>
                  {district.risk} Risk
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="risk-tables">
          <div className="fps-risk-table">
            <h2>FPS Risk Ranking</h2>
            <div className="table-container">
              <div className="table-header">
                <div className="header-cell">FPS Name</div>
                <div className="header-cell">Risk Level</div>
                <div className="header-cell">Score</div>
                <div className="header-cell">Action</div>
              </div>
              {fpsRisk.map((fps, index) => (
                <div key={index} className="table-row">
                  <div className="table-cell">{fps.name}</div>
                  <div className="table-cell">
                    <span 
                      className="risk-badge" 
                      style={{ backgroundColor: getRiskColor(fps.risk) + '20', color: getRiskColor(fps.risk) }}
                    >
                      {fps.risk}
                    </span>
                  </div>
                  <div className="table-cell score-cell">{fps.score}</div>
                  <div className="table-cell">
                    <button className="inspection-button">Inspect</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="transporter-risk-table">
            <h2>Transporter Risk Index</h2>
            <div className="table-container">
              <div className="table-header">
                <div className="header-cell">Transporter</div>
                <div className="header-cell">Risk Level</div>
                <div className="header-cell">Score</div>
                <div className="header-cell">Action</div>
              </div>
              {transporterRisk.map((transporter, index) => (
                <div key={index} className="table-row">
                  <div className="table-cell">{transporter.name}</div>
                  <div className="table-cell">
                    <span 
                      className="risk-badge" 
                      style={{ backgroundColor: getRiskColor(transporter.risk) + '20', color: getRiskColor(transporter.risk) }}
                    >
                      {transporter.risk}
                    </span>
                  </div>
                  <div className="table-cell score-cell">{transporter.score}</div>
                  <div className="table-cell">
                    <button className="inspection-button">Review</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="disposal-alerts">
        <h2>Disposal Anomaly Alerts</h2>
        <div className="alerts-list">
          <div className="alert-item">
            <div className="alert-icon">⚠️</div>
            <div className="alert-content">
              <div className="alert-title">High Disposal Frequency</div>
              <div className="alert-description">FPS-003 has shown 5 disposal requests in the last month</div>
            </div>
            <button className="alert-action-button">Investigate</button>
          </div>
          <div className="alert-item">
            <div className="alert-icon">📊</div>
            <div className="alert-content">
              <div className="alert-title">Unusual Pattern Detected</div>
              <div className="alert-description">FPS-005 disposal requests show irregular timing patterns</div>
            </div>
            <button className="alert-action-button">Review</button>
          </div>
        </div>
      </div>
    </div>
  );
}

