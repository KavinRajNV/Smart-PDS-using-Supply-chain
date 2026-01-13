import { useState } from 'react';
import { mockHouseholds } from '../data/mockData';
import './HouseholdView.css';

export default function HouseholdView() {
  const [verified, setVerified] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const [voicePlaying, setVoicePlaying] = useState(false);
  const household = mockHouseholds[0];

  const handleVerify = () => {
    setVerified(true);
    // Simulate voice playback
    setVoicePlaying(true);
    setTimeout(() => setVoicePlaying(false), 2000);
  };

  const handleFeedback = (received) => {
    setFeedbackGiven(true);
    if (received) {
      setVoicePlaying(true);
      setTimeout(() => setVoicePlaying(false), 2000);
    }
  };

  return (
    <div className="household-view">
      {!verified ? (
        <div className="verification-screen">
          <div className="verification-card">
            <div className="verification-icon">🔐</div>
            <h1>Identity Verification</h1>
            <p className="verification-subtitle">Please verify your identity to access your entitlement</p>
            
            <div className="verification-form">
              <div className="form-group">
                <label>Aadhaar Number</label>
                <input type="text" placeholder="XXXX-XXXX-1234" className="verification-input" />
              </div>
              <div className="form-group">
                <label>PAN Number (Optional)</label>
                <input type="text" placeholder="ABCDE1234F" className="verification-input" />
              </div>
              <button className="verify-button" onClick={handleVerify}>
                Verify Identity
              </button>
            </div>
          </div>
        </div>
      ) : feedbackGiven ? (
        <div className="success-screen">
          <div className="success-card">
            <div className="success-icon">✅</div>
            <h1>Feedback Recorded</h1>
            <p>Thank you for your feedback. Your response has been recorded.</p>
            <button className="reset-button" onClick={() => { setVerified(false); setFeedbackGiven(false); }}>
              Check Another Account
            </button>
          </div>
        </div>
      ) : (
        <div className="household-dashboard">
          <div className="household-header">
            <div className="household-icon">👨‍👩‍👧</div>
            <div>
              <h1>Entitled Household</h1>
              <p className="household-name">{household.name}</p>
              <p className="household-id">Aadhaar: {household.aadhaar}</p>
            </div>
          </div>

          <div className="entitlement-summary">
            <h2>Monthly Entitlement Summary</h2>
            <div className="entitlement-grid">
              <div className="entitlement-card">
                <div className="entitlement-label">Monthly Entitlement</div>
                <div className="entitlement-value">{household.monthlyEntitlement} kg</div>
              </div>
              <div className="entitlement-card">
                <div className="entitlement-label">Received This Month</div>
                <div className="entitlement-value received">{household.receivedThisMonth} kg</div>
              </div>
              <div className="entitlement-card">
                <div className="entitlement-label">Last Collection</div>
                <div className="entitlement-value">{household.lastCollection}</div>
              </div>
              <div className="entitlement-card">
                <div className="entitlement-label">Status</div>
                <div className="entitlement-value">
                  <span className="badge badge-success">{household.status}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="voice-interaction-panel">
            <h2>Voice Feedback</h2>
            <div className="voice-card">
              <div className="voice-prompt">
                <div className={`voice-icon ${voicePlaying ? 'playing' : ''}`}>
                  {voicePlaying ? '🔊' : '📢'}
                </div>
                <div className="voice-text">
                  {voicePlaying ? (
                    <span>Playing audio in Tamil...</span>
                  ) : (
                    <span>"Did you receive full quantity this month?"</span>
                  )}
                </div>
                {voicePlaying && (
                  <div className="voice-animation">
                    <div className="sound-wave"></div>
                    <div className="sound-wave"></div>
                    <div className="sound-wave"></div>
                  </div>
                )}
              </div>

              <div className="feedback-buttons">
                <button 
                  className="feedback-button yes-button"
                  onClick={() => handleFeedback(true)}
                >
                  <span className="button-icon">✓</span>
                  <span>YES</span>
                </button>
                <button 
                  className="feedback-button no-button"
                  onClick={() => handleFeedback(false)}
                >
                  <span className="button-icon">✗</span>
                  <span>NO</span>
                </button>
              </div>

              <div className="voice-help">
                <span className="help-icon">ℹ️</span>
                <span>Click the buttons or use voice command to respond</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

