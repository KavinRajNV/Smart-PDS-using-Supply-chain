import { mockRiceMills } from '../data/mockData';
import './RiceMillDashboard.css';

export default function RiceMillDashboard() {
  const mill = mockRiceMills[0];
  
  const incomingShipments = [
    { id: 'SH001', date: '2024-01-15', quantity: 25000, status: 'Received', riceOutput: 16250 },
    { id: 'SH002', date: '2024-01-16', quantity: 30000, status: 'Processing', riceOutput: null },
    { id: 'SH003', date: '2024-01-17', quantity: 28000, status: 'Expected', riceOutput: null }
  ];

  const yieldAccuracyClass = mill.yieldAccuracy >= 99 ? 'accuracy-excellent' : 
                            mill.yieldAccuracy >= 95 ? 'accuracy-good' : 'accuracy-poor';

  return (
    <div className="rice-mill-dashboard">
      <h1>Rice Mill Dashboard</h1>
      <p className="subtitle">{mill.name}</p>

      <div className="dashboard-grid">
        <div className="stats-card">
          <h3>Overview</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <label>Incoming Shipments</label>
              <div className="stat-value">{mill.incomingShipments}</div>
            </div>
            <div className="stat-item">
              <label>Processed</label>
              <div className="stat-value success">{mill.processed}</div>
            </div>
            <div className="stat-item">
              <label>Pending</label>
              <div className="stat-value warning">{mill.pending}</div>
            </div>
          </div>
        </div>

        <div className="yield-card">
          <h3>Yield Accuracy</h3>
          <div className={`yield-indicator ${yieldAccuracyClass}`}>
            <div className="yield-value">{mill.yieldAccuracy}%</div>
            <div className="yield-label">Expected vs Actual Output</div>
          </div>
          <div className="yield-details">
            <div className="yield-item">
              <label>Expected Output</label>
              <div>{mill.expectedOutput.toLocaleString()} kg</div>
            </div>
            <div className="yield-item">
              <label>Actual Output</label>
              <div>{mill.actualOutput.toLocaleString()} kg</div>
            </div>
          </div>
        </div>
      </div>

      <div className="shipments-card">
        <h2>Incoming Shipment Timeline</h2>
        <div className="shipments-timeline">
          {incomingShipments.map((shipment, index) => (
            <div key={shipment.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="shipment-header-row">
                  <div>
                    <h4>Shipment {shipment.id}</h4>
                    <div className="shipment-date">{shipment.date}</div>
                  </div>
                  <span className={`badge ${shipment.status === 'Received' ? 'badge-success' : 
                                                      shipment.status === 'Processing' ? 'badge-warning' : 
                                                      'badge-info'}`}>
                    {shipment.status}
                  </span>
                </div>
                <div className="shipment-comparison">
                  <div className="comparison-item">
                    <label>Quantity Received</label>
                    <div>{shipment.quantity.toLocaleString()} kg</div>
                  </div>
                  {shipment.riceOutput && (
                    <div className="comparison-item">
                      <label>Rice Output</label>
                      <div className="output-value">{shipment.riceOutput.toLocaleString()} kg</div>
                    </div>
                  )}
                </div>
                {shipment.status === 'Processing' && (
                  <button className="confirm-button">Confirm Processing Complete</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

