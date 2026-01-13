import './DistributorView.css';

export default function DistributorView() {
  const assignedShipments = [
    {
      id: 'SH001',
      from: 'TNCSC Godown - Chennai',
      to: 'FPS - Anna Nagar',
      quantity: 5000,
      status: 'In Transit',
      compliance: 98,
      expectedDelivery: '2024-01-20 10:00'
    },
    {
      id: 'SH002',
      from: 'TNCSC Godown - Chennai',
      to: 'FPS - T Nagar',
      quantity: 4500,
      status: 'Delivered',
      compliance: 100,
      deliveredAt: '2024-01-19 14:30'
    }
  ];

  const getComplianceClass = (compliance) => {
    if (compliance >= 95) return 'compliance-excellent';
    if (compliance >= 85) return 'compliance-good';
    return 'compliance-poor';
  };

  return (
    <div className="distributor-view">
      <h1>Distributor View</h1>
      <p className="subtitle">Manage your assigned shipments and deliveries</p>

      <div className="shipments-section">
        <h2>Assigned Shipments</h2>
        <div className="shipments-grid">
          {assignedShipments.map((shipment) => (
            <div key={shipment.id} className="shipment-card">
              <div className="shipment-header">
                <h3>Shipment {shipment.id}</h3>
                <span className={`badge ${shipment.status === 'Delivered' ? 'badge-success' : 'badge-info'}`}>
                  {shipment.status}
                </span>
              </div>

              <div className="shipment-route">
                <div className="route-item">
                  <label>From</label>
                  <div>{shipment.from}</div>
                </div>
                <div className="route-arrow">↓</div>
                <div className="route-item">
                  <label>To</label>
                  <div>{shipment.to}</div>
                </div>
              </div>

              <div className="shipment-details-grid">
                <div className="detail-cell">
                  <label>Quantity</label>
                  <div>{shipment.quantity.toLocaleString()} kg</div>
                </div>
                <div className="detail-cell">
                  <label>{shipment.status === 'Delivered' ? 'Delivered At' : 'Expected Delivery'}</label>
                  <div>{shipment.status === 'Delivered' ? shipment.deliveredAt : shipment.expectedDelivery}</div>
                </div>
              </div>

              <div className="compliance-indicator">
                <div className="compliance-header">
                  <label>Route Compliance</label>
                  <span className={`compliance-score ${getComplianceClass(shipment.compliance)}`}>
                    {shipment.compliance}%
                  </span>
                </div>
                <div className="compliance-bar">
                  <div 
                    className={`compliance-fill ${getComplianceClass(shipment.compliance)}`}
                    style={{ width: `${shipment.compliance}%` }}
                  ></div>
                </div>
              </div>

              {shipment.status === 'In Transit' && (
                <div className="delivery-timeline">
                  <div className="timeline-step completed">
                    <div className="step-marker">✓</div>
                    <div className="step-label">Picked Up</div>
                  </div>
                  <div className="timeline-step active">
                    <div className="step-marker">⟳</div>
                    <div className="step-label">In Transit</div>
                  </div>
                  <div className="timeline-step">
                    <div className="step-marker">○</div>
                    <div className="step-label">Delivered</div>
                  </div>
                </div>
              )}

              {shipment.status === 'Delivered' && (
                <div className="completion-badge">
                  <span className="badge-icon">✅</span>
                  <span>Delivery completed successfully</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

