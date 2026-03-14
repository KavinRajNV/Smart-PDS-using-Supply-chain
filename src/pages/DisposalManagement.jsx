import { mockDisposals } from '../data/mockData';
import './DisposalManagement.css';

export default function DisposalManagement() {
  const disposals = [
    ...mockDisposals,
    {
      id: 'DP002',
      fpsId: 'FPS002',
      fpsName: 'Fair Price Shop - T Nagar',
      quantity: 200,
      reason: 'Expired stock',
      date: '2024-01-15',
      status: 'Pending',
      channel: null,
      buyerRef: null
    },
    {
      id: 'DP003',
      fpsId: 'FPS003',
      fpsName: 'Fair Price Shop - Central',
      quantity: 100,
      reason: 'Damaged during transport',
      date: '2024-01-10',
      status: 'Approved',
      channel: 'Ethanol Production',
      buyerRef: 'BF-***-456'
    }
  ];

  const frequencyData = [
    { month: 'Oct 2023', count: 12 },
    { month: 'Nov 2023', count: 15 },
    { month: 'Dec 2023', count: 18 },
    { month: 'Jan 2024', count: 8 }
  ];

  const maxFrequency = Math.max(...frequencyData.map(d => d.count));

  const getStatusClass = (status) => {
    if (status === 'Approved') return 'badge-success';
    if (status === 'Pending') return 'badge-warning';
    return 'badge-info';
  };

  return (
    <div className="disposal-management">
      <h1>Disposal Management Screen</h1>
      <p className="subtitle">Track and manage grain disposal requests</p>

      <div className="dashboard-grid">
        <div className="frequency-analysis">
          <h2>Disposal Frequency Analysis</h2>
          <div className="frequency-chart">
            {frequencyData.map((item, index) => (
              <div key={index} className="frequency-item">
                <div className="frequency-bar-container">
                  <div 
                    className="frequency-bar" 
                    style={{ height: `${(item.count / maxFrequency) * 100}%` }}
                  ></div>
                </div>
                <div className="frequency-label">{item.month}</div>
                <div className="frequency-value">{item.count}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="summary-stats">
          <div className="stat-card">
            <div className="stat-icon">📋</div>
            <div className="stat-content">
              <div className="stat-value">{disposals.length}</div>
              <div className="stat-label">Total Requests</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <div className="stat-value">{disposals.filter(d => d.status === 'Approved').length}</div>
              <div className="stat-label">Approved</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <div className="stat-content">
              <div className="stat-value">{disposals.filter(d => d.status === 'Pending').length}</div>
              <div className="stat-label">Pending</div>
            </div>
          </div>
        </div>
      </div>

      <div className="disposal-requests">
        <h2>Disposal Request List</h2>
        <div className="requests-list">
          {disposals.map((disposal) => (
            <div key={disposal.id} className="request-card">
              <div className="request-header">
                <div className="request-id">Request {disposal.id}</div>
                <span className={`badge ${getStatusClass(disposal.status)}`}>
                  {disposal.status}
                </span>
              </div>

              <div className="request-details">
                <div className="detail-row">
                  <label>FPS Name</label>
                  <div>{disposal.fpsName}</div>
                </div>
                <div className="detail-row">
                  <label>FPS ID</label>
                  <div>{disposal.fpsId}</div>
                </div>
                <div className="detail-row">
                  <label>Quantity</label>
                  <div>{disposal.quantity} kg</div>
                </div>
                <div className="detail-row">
                  <label>Reason</label>
                  <div className="reason-text">{disposal.reason}</div>
                </div>
                <div className="detail-row">
                  <label>Request Date</label>
                  <div>{disposal.date}</div>
                </div>
              </div>

              {disposal.status === 'Approved' && (
                <div className="approval-details">
                  <div className="approval-flow">
                    <div className="flow-step completed">
                      <div className="step-icon">✓</div>
                      <div className="step-label">Request Submitted</div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step completed">
                      <div className="step-icon">✓</div>
                      <div className="step-label">Approved</div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step completed">
                      <div className="step-icon">✓</div>
                      <div className="step-label">Disposed</div>
                    </div>
                  </div>

                  <div className="disposal-channel">
                    <div className="channel-tag">
                      <span className="channel-label">Disposal Channel:</span>
                      <span className="channel-value">{disposal.channel}</span>
                    </div>
                    <div className="buyer-ref">
                      <span className="buyer-label">Buyer Reference:</span>
                      <span className="buyer-value">{disposal.buyerRef}</span>
                    </div>
                  </div>

                  <div className="public-badge">
                    <span className="badge-icon">👁️</span>
                    <span>Public Visibility: Enabled</span>
                  </div>
                </div>
              )}

              {disposal.status === 'Pending' && (
                <div className="pending-actions">
                  <button className="action-button approve">Approve</button>
                  <button className="action-button reject">Reject</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

