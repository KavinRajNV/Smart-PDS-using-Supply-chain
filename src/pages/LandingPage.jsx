import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockStats } from '../data/mockData';
import './LandingPage.css';

export default function LandingPage() {
  const navigate = useNavigate();
  const [animatedStats, setAnimatedStats] = useState({
    grainTracked: 0,
    activeShipments: 0,
    fpsScore: 0
  });

  useEffect(() => {
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setAnimatedStats({
        grainTracked: Math.floor(mockStats.totalGrainTracked * progress),
        activeShipments: Math.floor(mockStats.activeShipments * progress),
        fpsScore: Math.floor(mockStats.fpsTransparencyScore * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedStats({
          grainTracked: mockStats.totalGrainTracked,
          activeShipments: mockStats.activeShipments,
          fpsScore: mockStats.fpsTransparencyScore
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const supplyChainSteps = [
    { icon: '🧑‍🌾', label: 'Farmer', color: '#28a745' },
    { icon: '🏢', label: 'Procurement', color: '#17a2b8' },
    { icon: '🏭', label: 'Rice Mill', color: '#ffc107' },
    { icon: '🏬', label: 'Godown', color: '#6f42c1' },
    { icon: '🚛', label: 'Distributor', color: '#fd7e14' },
    { icon: '🏪', label: 'FPS', color: '#20c997' },
    { icon: '👨‍👩‍👧', label: 'Household', color: '#e83e8c' },
    { icon: '♻️', label: 'Disposal', color: '#6c757d' }
  ];

  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1 className="hero-title">SMART-PDS</h1>
        <p className="hero-subtitle">Transparent Public Distribution System</p>
        <p className="hero-tagline">From Farm to Family – Every Grain Accounted For</p>
      </div>

      <div className="supply-chain-visualization">
        <h2>Supply Chain Flow</h2>
        <div className="chain-flow">
          {supplyChainSteps.map((step, index) => (
            <div key={index} className="chain-step">
              <div className="chain-icon" style={{ backgroundColor: step.color + '20', borderColor: step.color }}>
                <span style={{ fontSize: '2.5rem' }}>{step.icon}</span>
              </div>
              <div className="chain-label">{step.label}</div>
              {index < supplyChainSteps.length - 1 && (
                <div className="chain-arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="live-counters">
        <div className="counter-card">
          <div className="counter-icon">🌾</div>
          <div className="counter-value">{animatedStats.grainTracked.toLocaleString()}</div>
          <div className="counter-label">Total Grain Tracked (Kg)</div>
        </div>
        <div className="counter-card">
          <div className="counter-icon">🚚</div>
          <div className="counter-value">{animatedStats.activeShipments}</div>
          <div className="counter-label">Active Shipments</div>
        </div>
        <div className="counter-card">
          <div className="counter-icon">📊</div>
          <div className="counter-value">{animatedStats.fpsScore}%</div>
          <div className="counter-label">FPS Transparency Score</div>
        </div>
      </div>

      <div className="cta-section">
        <button className="cta-button primary" onClick={() => navigate('/procurement')}>
          View Supply Chain
        </button>
        <button className="cta-button secondary" onClick={() => navigate('/governance')}>
          Open Governance Dashboard
        </button>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>Transparency</h3>
          <p>Complete visibility into every stage of the supply chain</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">✅</div>
          <h3>Accountability</h3>
          <p>Track and verify every transaction and movement</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3>Fraud Detection</h3>
          <p>AI-powered anomaly detection and alerts</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">👥</div>
          <h3>Citizen Inclusion</h3>
          <p>Direct feedback and participation mechanisms</p>
        </div>
      </div>
    </div>
  );
}

