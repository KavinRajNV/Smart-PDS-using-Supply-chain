import { mockFarmers } from '../data/mockData';
import './FarmerView.css';

export default function FarmerView() {
  const farmer = mockFarmers[0];

  return (
    <div className="farmer-view">
      <h1>Farmer Portal</h1>
      <p className="subtitle">View your procurement summary</p>

      <div className="farmer-summary-card">
        <div className="farmer-header">
          <div className="farmer-icon">🧑‍🌾</div>
          <div>
            <h2>{farmer.name}</h2>
            <p className="farmer-id">Farmer ID: {farmer.id}</p>
          </div>
        </div>

        <div className="farmer-details">
          <div className="detail-item">
            <label>Procurement Date</label>
            <div className="detail-value">{farmer.procurementDate}</div>
          </div>
          <div className="detail-item">
            <label>Quantity Delivered</label>
            <div className="detail-value">{farmer.quantity.toLocaleString()} kg</div>
          </div>
          <div className="detail-item">
            <label>Location</label>
            <div className="detail-value">{farmer.location}</div>
          </div>
          <div className="detail-item">
            <label>Procurement Status</label>
            <div className="detail-value">
              <span className="badge badge-success">{farmer.status}</span>
            </div>
          </div>
        </div>

        <div className="visual-confirmation">
          <div className="confirmation-badge">
            <span className="badge-icon">✅</span>
            <div>
              <div className="badge-title">Verified & Confirmed</div>
              <div className="badge-subtitle">Your grain has been successfully procured</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

