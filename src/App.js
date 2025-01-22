import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@styles/App.css';
import Navbar from './components/website/Navbar';
import Footer from './components/website/Footer';
import FAQ from './components/website/FAQ'; // Sesuaikan jalur jika diperlukan  

// Lazy load components
const Header = React.lazy(() => import('./components/website/Header'));
const FeatureSection = React.lazy(() => import('./components/website/FeatureSection'));
const JalanMenu = React.lazy(() => import('./components/website/JalanMenu'));
const BlogSection = React.lazy(() => import('./components/website/BlogSection'));
const NetworkSection = React.lazy(() => import('./components/website/NetworkSection'));
const Services = React.lazy(() => import('./components/website/Services'));
const Blog = React.lazy(() => import('./components/website/Blog'));
const ResourceSection = React.lazy(() => import('./components/website/ResourceSection'));
const Node = React.lazy(() => import('./components/website/Node'));

const TabMenu = React.lazy(() => import('./components/node/symphony/TabMenu'));
const DillMenu = React.lazy(() => import('./components/node/dill/DillMenu'));
const FiammaMenu = React.lazy(() => import('./components/node/fiamma/FiammaMenu'));
const NillonMenu = React.lazy(() => import('./components/node/nillon/NillonMenu'));
const TernMenu = React.lazy(() => import('./components/node/t3rn/TernMenu'));
const AutoMenu = React.lazy(() => import('./components/node/autonomys/AutoMenu'));
const ElixirMenu = React.lazy(() => import('./components/node/elixir/ElixirMenu'));

const MangoMenu = React.lazy(() => import('./components/blog/mangonetwork/MangoMenu'));

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

            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/mangonetwork/*" element={<MangoMenu />}/>

            <Route path="/node" element={<Node />} />

            <Route path="/" element={
              <>
                <Header />
                <JalanMenu />
                <ResourceSection/>
                <FeatureSection />
                <BlogSection />
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
