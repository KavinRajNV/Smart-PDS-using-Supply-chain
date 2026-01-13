import { useState } from 'react';
import './ProcurementDashboard.css';

export default function ProcurementDashboard() {
  const [formData, setFormData] = useState({
    farmerId: '',
    farmerName: '',
    quantity: '',
    location: ''
  });

  const shipments = [
    {
      id: 'SH001',
      truckNumber: 'TN-45-A-1234',
      destination: 'Rice Mill - Trichy',
      quantity: 25000,
      status: 'QR Lock Active',
      sensorReading: 24800
    },
    {
      id: 'SH002',
      truckNumber: 'TN-45-B-5678',
      destination: 'Rice Mill - Chennai',
      quantity: 30000,
      status: 'QR Lock Sealed',
      sensorReading: 29950
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Farmer intake recorded (Mock)');
  };

  const expectedRiceOutput = formData.quantity ? Math.floor(formData.quantity * 0.65) : 0;

  return (
    <div className="procurement-dashboard">
      <h1>Procurement Agency Dashboard</h1>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Farmer Intake Form</h2>
          <form onSubmit={handleSubmit} className="intake-form">
            <div className="form-group">
              <label>Farmer ID</label>
              <input
                type="text"
                value={formData.farmerId}
                onChange={(e) => setFormData({ ...formData, farmerId: e.target.value })}
                placeholder="Enter Farmer ID"
              />
            </div>
            <div className="form-group">
              <label>Farmer Name</label>
              <input
                type="text"
                value={formData.farmerName}
                onChange={(e) => setFormData({ ...formData, farmerName: e.target.value })}
                placeholder="Enter Farmer Name"
              />
            </div>
            <div className="form-group">
              <label>Grain Quantity (kg)</label>
              <input
                type="number"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="Enter quantity"
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Enter location"
              />
            </div>
            <div className="form-group">
              <label>Expected Rice Output (auto-calculated)</label>
              <div className="calculated-output">{expectedRiceOutput} kg</div>
            </div>
            <button type="submit" className="submit-button">Record Intake</button>
          </form>
        </div>

        <div className="dashboard-card">
          <h2>Load Sensor Reading</h2>
          <div className="sensor-gauge">
            <div className="gauge-container">
              <div className="gauge-value">24,800 kg</div>
              <div className="gauge-label">Current Weight</div>
              <div className="gauge-bar">
                <div className="gauge-fill" style={{ width: '99.2%' }}></div>
              </div>
              <div className="gauge-status">
                <span className="badge badge-success">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-card shipments-section">
        <h2>Active Shipments</h2>
        <div className="shipments-grid">
          {shipments.map((shipment) => (
            <div key={shipment.id} className="shipment-card">
              <div className="shipment-header">
                <h3>Shipment {shipment.id}</h3>
                <span className={`badge ${shipment.status.includes('Active') ? 'badge-success' : 'badge-info'}`}>
                  {shipment.status}
                </span>
              </div>
              <div className="shipment-details">
                <div className="shipment-item">
                  <label>Truck Number</label>
                  <div>{shipment.truckNumber}</div>
                </div>
                <div className="shipment-item">
                  <label>Destination</label>
                  <div>{shipment.destination}</div>
                </div>
                <div className="shipment-item">
                  <label>Quantity</label>
                  <div>{shipment.quantity.toLocaleString()} kg</div>
                </div>
                <div className="shipment-item">
                  <label>Sensor Reading</label>
                  <div>{shipment.sensorReading.toLocaleString()} kg</div>
                </div>
              </div>
              <div className="weight-bar">
                <div className="weight-bar-fill" style={{ width: `${(shipment.sensorReading / shipment.quantity) * 100}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

