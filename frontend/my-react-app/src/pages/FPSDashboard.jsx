import { mockFPS } from '../data/mockData';
import './FPSDashboard.css';

export default function FPSDashboard() {
  const fps = mockFPS[0];

  const distributionPattern = [
    { day: 'Mon', quantity: 450 },
    { day: 'Tue', quantity: 520 },
    { day: 'Wed', quantity: 480 },
    { day: 'Thu', quantity: 600 },
    { day: 'Fri', quantity: 550 },
    { day: 'Sat', quantity: 750 },
    { day: 'Sun', quantity: 500 }
  ];

  const maxDistribution = Math.max(...distributionPattern.map(d => d.quantity));

  const trustScoreBreakdown = [
    { label: 'Delivery Accuracy', value: fps.deliveryAccuracy, color: '#28a745' },
    { label: 'Beneficiary Feedback', value: fps.beneficiaryFeedback, color: '#17a2b8' },
    { label: 'Disposal Frequency', value: 100 - (fps.disposalFrequency * 10), color: '#ffc107' }
  ];

  const getRiskLevel = (score) => {
    if (score >= 90) return { level: 'Low', class: 'risk-low', color: '#28a745' };
    if (score >= 75) return { level: 'Medium', class: 'risk-medium', color: '#ffc107' };
    return { level: 'High', class: 'risk-high', color: '#dc3545' };
  };

  const riskInfo = getRiskLevel(fps.trustScore);

  return (
    <div className="fps-dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Fair Price Shop Intelligence Dashboard</h1>
          <p className="fps-name">{fps.name}</p>
        </div>
        <div className="trust-score-display">
          <div className="trust-score-value">{fps.trustScore}</div>
          <div className="trust-score-label">Trust Score</div>
          <div className={`trust-score-badge ${riskInfo.class}`}>{riskInfo.level} Risk</div>
        </div>
      </div>

      <div className="stock-panel-section">
        <h2>Stock Management</h2>
        <div className="stock-grid">
          <div className="stock-card received">
            <div className="stock-card-header">
              <span className="stock-icon">📥</span>
              <h3>Stock Received</h3>
            </div>
            <div className="stock-value-large">{fps.stockReceived.toLocaleString()} kg</div>
          </div>
          <div className="stock-card distributed">
            <div className="stock-card-header">
              <span className="stock-icon">📤</span>
              <h3>Stock Distributed</h3>
            </div>
            <div className="stock-value-large">{fps.stockDistributed.toLocaleString()} kg</div>
            <div className="distribution-percentage">
              {Math.round((fps.stockDistributed / fps.stockReceived) * 100)}% of received stock
            </div>
          </div>
          <div className="stock-card remaining">
            <div className="stock-card-header">
              <span className="stock-icon">📦</span>
              <h3>Stock Remaining</h3>
            </div>
            <div className="stock-value-large">{fps.stockRemaining.toLocaleString()} kg</div>
          </div>
          <div className="stock-card next-delivery">
            <div className="stock-card-header">
              <span className="stock-icon">🚚</span>
              <h3>Next Expected Delivery</h3>
            </div>
            <div className="stock-value-large">{fps.nextDelivery}</div>
          </div>
        </div>
      </div>

      <div className="analytics-section">
        <div className="analytics-main">
          <h2>AI Stock Analysis</h2>
          <div className="distribution-chart">
            <div className="chart-header">
              <h3>Distribution Pattern (Last 7 Days)</h3>
            </div>
            <div className="chart-bars">
              {distributionPattern.map((item, index) => (
                <div key={index} className="chart-bar-item">
                  <div className="bar-container">
                    <div 
                      className="bar-fill" 
                      style={{ 
                        height: `${(item.quantity / maxDistribution) * 100}%`,
                        backgroundColor: index === distributionPattern.length - 1 ? '#28a745' : '#17a2b8'
                      }}
                    ></div>
                  </div>
                  <div className="bar-label">{item.day}</div>
                  <div className="bar-value">{item.quantity} kg</div>
                </div>
              ))}
            </div>
          </div>

          <div className="risk-indicators">
            <div className="risk-card">
              <div className="risk-header">
                <span className="risk-icon">⚖️</span>
                <h3>Under-weighing Risk</h3>
              </div>
              <div className="risk-status low">
                <span className="risk-status-text">Low Risk Detected</span>
                <div className="risk-meter">
                  <div className="risk-meter-fill" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>

            <div className="risk-card">
              <div className="risk-header">
                <span className="risk-icon">📈</span>
                <h3>Abnormal Trends</h3>
              </div>
              <div className="trend-alerts">
                <div className="trend-item normal">
                  <span className="trend-icon">✓</span>
                  <span>Distribution pattern normal</span>
                </div>
                <div className="trend-item normal">
                  <span className="trend-icon">✓</span>
                  <span>Stock levels optimal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="trust-score-section">
          <h2>FPS Trust Score Breakdown</h2>
          <div className="trust-score-meter">
            <div className="score-circle">
              <svg viewBox="0 0 200 200" className="score-svg">
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="#e0e0e0"
                  strokeWidth="20"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke={riskInfo.color}
                  strokeWidth="20"
                  strokeDasharray={`${(fps.trustScore / 100) * 534} 534`}
                  strokeDashoffset="0"
                  transform="rotate(-90 100 100)"
                  className="score-arc"
                />
              </svg>
              <div className="score-text">
                <div className="score-number">{fps.trustScore}</div>
                <div className="score-label">Score</div>
              </div>
            </div>
          </div>

          <div className="score-breakdown">
            {trustScoreBreakdown.map((item, index) => (
              <div key={index} className="breakdown-item">
                <div className="breakdown-header">
                  <span>{item.label}</span>
                  <span className="breakdown-value">{item.value}%</span>
                </div>
                <div className="breakdown-bar">
                  <div 
                    className="breakdown-bar-fill" 
                    style={{ width: `${item.value}%`, backgroundColor: item.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="public-visibility-badge">
            <span className="visibility-icon">👁️</span>
            <span>All data publicly viewable in simplified mode</span>
          </div>
        </div>
      </div>
    </div>
  );
}

