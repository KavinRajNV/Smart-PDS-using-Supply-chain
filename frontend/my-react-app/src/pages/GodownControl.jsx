import { mockGodowns } from '../data/mockData';
import './GodownControl.css';

export default function GodownControl() {
  const godown = mockGodowns[0];

  const fpsAllocations = [
    { fpsId: 'FPS001', name: 'FPS - Anna Nagar', quantity: 5000, status: 'Allocated' },
    { fpsId: 'FPS002', name: 'FPS - T Nagar', quantity: 4500, status: 'Allocated' },
    { fpsId: 'FPS003', name: 'FPS - Central', quantity: 4000, status: 'Pending' }
  ];

  const dispatches = [
    { id: 'DP001', fpsId: 'FPS001', quantity: 5000, date: '2024-01-18', status: 'Dispatched' },
    { id: 'DP002', fpsId: 'FPS002', quantity: 4500, date: '2024-01-19', status: 'Scheduled' }
  ];

  return (
    <div className="godown-control">
      <h1>TNCSC / FCI Godown Control Panel</h1>
      <p className="subtitle">{godown.name}</p>

      <div className="stock-visualization">
        <h2>Central Stock</h2>
        <div className="stock-meter">
          <div className="stock-info">
            <div className="stock-value">{godown.currentStock.toLocaleString()} kg</div>
            <div className="stock-capacity">of {godown.capacity.toLocaleString()} kg</div>
          </div>
          <div className="stock-bar">
            <div 
              className="stock-fill" 
              style={{ width: `${(godown.currentStock / godown.capacity) * 100}%` }}
            ></div>
          </div>
          <div className="stock-percentage">
            {Math.round((godown.currentStock / godown.capacity) * 100)}% Capacity Used
          </div>
        </div>
      </div>

      <div className="sensor-pool-section">
        <h2>Sensor Pool Manager</h2>
        <div className="sensor-grid">
          <div className="sensor-card available">
            <div className="sensor-icon">📊</div>
            <div className="sensor-count">{godown.sensorsAvailable}</div>
            <div className="sensor-label">Available Sensors</div>
          </div>
          <div className="sensor-card in-use">
            <div className="sensor-icon">🔄</div>
            <div className="sensor-count">{godown.sensorsInUse}</div>
            <div className="sensor-label">In-Use Sensors</div>
          </div>
          <div className="sensor-card returned">
            <div className="sensor-icon">✅</div>
            <div className="sensor-count">{godown.sensorsReturned}</div>
            <div className="sensor-label">Returned Sensors</div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="allocation-card">
          <h2>FPS Allocation Planner</h2>
          <div className="allocation-list">
            {fpsAllocations.map((allocation) => (
              <div key={allocation.fpsId} className="allocation-item">
                <div className="allocation-header">
                  <div>
                    <div className="allocation-fps">{allocation.name}</div>
                    <div className="allocation-id">ID: {allocation.fpsId}</div>
                  </div>
                  <span className={`badge ${allocation.status === 'Allocated' ? 'badge-success' : 'badge-warning'}`}>
                    {allocation.status}
                  </span>
                </div>
                <div className="allocation-quantity">
                  <label>Quantity</label>
                  <div>{allocation.quantity.toLocaleString()} kg</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dispatch-card">
          <h2>Dispatch Overview</h2>
          <div className="dispatch-list">
            {dispatches.map((dispatch) => (
              <div key={dispatch.id} className="dispatch-item">
                <div className="dispatch-header">
                  <div>
                    <div className="dispatch-id">Dispatch {dispatch.id}</div>
                    <div className="dispatch-fps">To: {dispatch.fpsId}</div>
                  </div>
                  <span className={`badge ${dispatch.status === 'Dispatched' ? 'badge-success' : 'badge-info'}`}>
                    {dispatch.status}
                  </span>
                </div>
                <div className="dispatch-details">
                  <div className="dispatch-detail">
                    <label>Quantity</label>
                    <div>{dispatch.quantity.toLocaleString()} kg</div>
                  </div>
                  <div className="dispatch-detail">
                    <label>Date</label>
                    <div>{dispatch.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

