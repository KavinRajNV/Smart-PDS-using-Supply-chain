import { mockNonCollection } from '../data/mockData';
import './AIVoicePanel.css';

export default function AIVoicePanel() {
  const nonCollectionCases = [
    ...mockNonCollection,
    {
      householdId: 'HH002',
      name: 'Selvi P.',
      lastCall: '2024-01-16',
      reason: 'Traveling',
      status: 'Pending',
      escalation: false
    },
    {
      householdId: 'HH003',
      name: 'Murugan R.',
      lastCall: '2024-01-14',
      reason: 'No response',
      status: 'Escalated',
      escalation: true
    }
  ];

  const getStatusClass = (status) => {
    if (status === 'Resolved') return 'badge-success';
    if (status === 'Escalated') return 'badge-danger';
    return 'badge-warning';
  };

  const reasons = [
    { reason: 'Illness', count: 45, color: '#ff9800' },
    { reason: 'Traveling', count: 32, color: '#17a2b8' },
    { reason: 'No response', count: 18, color: '#dc3545' },
    { reason: 'Financial constraints', count: 12, color: '#6c757d' }
  ];

  return (
    <div className="ai-voice-panel">
      <h1>AI Voice & Welfare Intelligence</h1>
      <p className="subtitle">Non-collection detection and automated welfare outreach</p>

      <div className="dashboard-grid">
        <div className="summary-cards">
          <div className="summary-card">
            <div className="summary-icon">📞</div>
            <div className="summary-content">
              <div className="summary-value">156</div>
              <div className="summary-label">Total Calls Made</div>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">✅</div>
            <div className="summary-content">
              <div className="summary-value">98</div>
              <div className="summary-label">Resolved Cases</div>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">⏳</div>
            <div className="summary-content">
              <div className="summary-value">35</div>
              <div className="summary-label">Pending Cases</div>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🚨</div>
            <div className="summary-content">
              <div className="summary-value">23</div>
              <div className="summary-label">Escalated Cases</div>
            </div>
          </div>
        </div>

        <div className="reason-analysis">
          <h2>Reason Categorization</h2>
          <div className="reason-chart">
            {reasons.map((item, index) => (
              <div key={index} className="reason-item">
                <div className="reason-header">
                  <span className="reason-label">{item.reason}</span>
                  <span className="reason-count">{item.count}</span>
                </div>
                <div className="reason-bar">
                  <div 
                    className="reason-bar-fill" 
                    style={{ 
                      width: `${(item.count / reasons[0].count) * 100}%`,
                      backgroundColor: item.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="non-collection-panel">
        <h2>Non-Collection Detection Panel</h2>
        <div className="cases-table">
          <div className="table-header">
            <div className="table-cell">Household ID</div>
            <div className="table-cell">Name</div>
            <div className="table-cell">Last Call</div>
            <div className="table-cell">Reason</div>
            <div className="table-cell">Status</div>
            <div className="table-cell">Escalation</div>
          </div>
          {nonCollectionCases.map((caseItem, index) => (
            <div key={index} className="table-row">
              <div className="table-cell">{caseItem.householdId}</div>
              <div className="table-cell">{caseItem.name}</div>
              <div className="table-cell">{caseItem.lastCall}</div>
              <div className="table-cell">{caseItem.reason}</div>
              <div className="table-cell">
                <span className={`badge ${getStatusClass(caseItem.status)}`}>
                  {caseItem.status}
                </span>
              </div>
              <div className="table-cell">
                {caseItem.escalation ? (
                  <span className="escalation-badge">🚨 Escalated</span>
                ) : (
                  <span className="no-escalation">-</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="escalation-timeline-section">
        <h2>Escalation Timeline</h2>
        <div className="timeline-card">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-title">Auto-Call Initiated</div>
              <div className="timeline-description">AI system detects non-collection and initiates automated call</div>
              <div className="timeline-time">Within 24 hours of non-collection</div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-title">Reason Captured</div>
              <div className="timeline-description">System categorizes reason and updates case status</div>
              <div className="timeline-time">After call completion</div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker active"></div>
            <div className="timeline-content">
              <div className="timeline-title">Escalation to Officials</div>
              <div className="timeline-description">Unresolved cases escalated to district welfare officers</div>
              <div className="timeline-time">After 3 failed contact attempts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

