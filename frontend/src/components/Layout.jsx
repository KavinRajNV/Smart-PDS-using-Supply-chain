import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

export default function Layout({ children }) {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/farmer', label: 'Farmer', icon: '🧑‍🌾' },
    { path: '/procurement', label: 'Procurement', icon: '🏢' },
    { path: '/transport', label: 'Transport', icon: '🚚' },
    { path: '/rice-mill', label: 'Rice Mill', icon: '🏭' },
    { path: '/godown', label: 'Godown', icon: '🏬' },
    { path: '/distributor', label: 'Distributor', icon: '🚛' },
    { path: '/fps', label: 'FPS', icon: '🏪' },
    { path: '/household', label: 'Household', icon: '👨‍👩‍👧' },
    { path: '/ai-voice', label: 'AI Voice', icon: '🤖' },
    { path: '/disposal', label: 'Disposal', icon: '♻️' },
    { path: '/governance', label: 'Governance', icon: '🏛️' }
  ];

  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <h1>SMART-PDS</h1>
            <p>Transparent Public Distribution System</p>
          </div>
        </div>
      </header>
      <nav className="sidebar">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

