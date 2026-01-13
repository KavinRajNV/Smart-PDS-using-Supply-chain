import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import FarmerView from './pages/FarmerView';
import ProcurementDashboard from './pages/ProcurementDashboard';
import TransportTracking from './pages/TransportTracking';
import RiceMillDashboard from './pages/RiceMillDashboard';
import GodownControl from './pages/GodownControl';
import DistributorView from './pages/DistributorView';
import FPSDashboard from './pages/FPSDashboard';
import HouseholdView from './pages/HouseholdView';
import AIVoicePanel from './pages/AIVoicePanel';
import DisposalManagement from './pages/DisposalManagement';
import GovernanceDashboard from './pages/GovernanceDashboard';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/farmer" element={<FarmerView />} />
          <Route path="/procurement" element={<ProcurementDashboard />} />
          <Route path="/transport" element={<TransportTracking />} />
          <Route path="/rice-mill" element={<RiceMillDashboard />} />
          <Route path="/godown" element={<GodownControl />} />
          <Route path="/distributor" element={<DistributorView />} />
          <Route path="/fps" element={<FPSDashboard />} />
          <Route path="/household" element={<HouseholdView />} />
          <Route path="/ai-voice" element={<AIVoicePanel />} />
          <Route path="/disposal" element={<DisposalManagement />} />
          <Route path="/governance" element={<GovernanceDashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
