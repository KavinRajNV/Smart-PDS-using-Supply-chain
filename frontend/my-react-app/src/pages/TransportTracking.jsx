import { useState } from 'react';
import { mockShipments } from '../data/mockData';
import './TransportTracking.css';

export default function TransportTracking() {
  const [selectedShipment, setSelectedShipment] = useState(mockShipments[0]);

  const getStatusTag = (status) => {
    if (status === 'On Route') return { label: 'On Route', class: 'status-on-route' };
    if (status === 'In Transit') return { label: 'Minor Diversion', class: 'status-diversion' };
    return { label: 'Investigation Required', class: 'status-investigation' };
  };

  const statusInfo = getStatusTag(selectedShipment.status);
  const weightVariance = selectedShipment.loadedWeight - selectedShipment.currentWeight;
  const variancePercent = ((weightVariance / selectedShipment.loadedWeight) * 100).toFixed(2);

  return (
    <div className="transport-tracking">
      <h1>Live Transport Tracking</h1>
      <p className="subtitle">Real-time monitoring of grain shipments</p>

      <div className="tracking-container">
        <div className="map-section">
          <div className="map-header">
            <h2>Route Map</h2>
            <div className="shipment-selector">
              <select 
                value={selectedShipment.id} 
                onChange={(e) => setSelectedShipment(mockShipments.find(s => s.id === e.target.value))}
                className="shipment-select"
              >
                {mockShipments.map(ship => (
                  <option key={ship.id} value={ship.id}>
                    {ship.truckNumber} - {ship.from} → {ship.to}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="map-container">
            <div className="route-map">
              <div className="route-line"></div>
              <div className="route-points">
                {selectedShipment.route.map((point, index) => (
                  <div key={index} className="route-point">
                    <div className="point-marker">
                      {index === 0 ? '📍' : index === selectedShipment.route.length - 1 ? '🎯' : '📍'}
                    </div>
                    <div className="point-label">{point.name}</div>
                    {index === 0 && (
                      <div className="truck-icon">🚚</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="map-status">
            <div className={`status-tag ${statusInfo.class}`}>
              {statusInfo.label}
            </div>
          </div>
        </div>

        <div className="tracking-sidebar">
          <div className="tracking-card">
            <h3>Shipment Details</h3>
            <div className="tracking-details">
              <div className="detail-row">
                <label>Truck Number</label>
                <div className="value">{selectedShipment.truckNumber}</div>
              </div>
              <div className="detail-row">
                <label>From</label>
                <div className="value">{selectedShipment.from}</div>
              </div>
              <div className="detail-row">
                <label>To</label>
                <div className="value">{selectedShipment.to}</div>
              </div>
              <div className="detail-row">
                <label>Expected Arrival</label>
                <div className="value">{selectedShipment.expectedArrival}</div>
              </div>
              <div className="detail-row">
                <label>QR Lock Status</label>
                <div className="value">
                  <span className={`badge ${selectedShipment.qrLockStatus === 'Active' ? 'badge-success' : 'badge-info'}`}>
                    {selectedShipment.qrLockStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="tracking-card weight-comparison">
            <h3>Weight Comparison</h3>
            <div className="weight-widget">
              <div className="weight-item">
                <label>Loaded Weight</label>
                <div className="weight-value">{selectedShipment.loadedWeight.toLocaleString()} kg</div>
              </div>
              <div className="weight-item">
                <label>Current Weight</label>
                <div className="weight-value current">{selectedShipment.currentWeight.toLocaleString()} kg</div>
              </div>
              <div className="weight-variance">
                <label>Variance</label>
                <div className={`variance-indicator ${weightVariance > 500 ? 'variance-high' : 'variance-normal'}`}>
                  {weightVariance > 0 ? '-' : '+'}{Math.abs(weightVariance).toLocaleString()} kg ({Math.abs(variancePercent)}%)
                </div>
              </div>
            </div>
          </div>

          {weightVariance > 500 && (
            <div className="tracking-card alert-card">
              <div className="alert-icon">⚠️</div>
              <div className="alert-content">
                <div className="alert-title">Weight Variance Detected</div>
                <div className="alert-message">
                  Minor weight variance detected. Monitoring continues.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

