import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/website/Navbar/Navbar';
import Footer from './components/website/Footer/Footer';
import FAQ from './components/website/Accordion/FAQ'; // Sesuaikan jalur jika diperlukan

// Lazy load components
const Header = React.lazy(() => import('./components/website/Header/Header'));
const FeatureSection = React.lazy(() => import('./components/website/Fitur/FeatureSection'));
const JalanMenu = React.lazy(() => import('./components/website/Berjalan/JalanMenu'));
const NetworkSection = React.lazy(() => import('./components/website/Network/NetworkSection'));
const Services = React.lazy(() => import('./components/website/Services/Services'));
const TabMenu = React.lazy(() => import('./components/symphony/TabMenu'));
const DillMenu = React.lazy(() => import('./components/dill/DillMenu'));
const FiammaMenu = React.lazy(() => import('./components/fiamma/FiammaMenu'));
const NillonMenu = React.lazy(() => import('./components/nillon/NillonMenu'));
const TernMenu = React.lazy(() => import('./components/t3rn/TernMenu'));
const AutoMenu = React.lazy(() => import('./components/autonomys/AutoMenu'));
const ElixirMenu = React.lazy(() => import('./components/elixir/ElixirMenu'));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/services" element={<Services />} />
            <Route path="/services/testnet/symphony/*" element={<TabMenu />} />
            <Route path="/services/testnet/dill/*" element={<DillMenu />} />
            <Route path="/services/testnet/fiamma/*" element={<FiammaMenu />} />
            <Route path="/services/testnet/nillon/*" element={<NillonMenu />} />
            <Route path="/services/testnet/t3rn/*" element={<TernMenu />} />
            <Route path="/services/testnet/autonomys/*" element={<AutoMenu />} />
            <Route path="/services/testnet/elixir/*" element={<ElixirMenu />} />
            <Route path="/" element={
              <>
                <Header />
                <JalanMenu />
                <FeatureSection />
                <NetworkSection />
                <FAQ />
              </>
            } />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
