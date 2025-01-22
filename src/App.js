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
const Blog = React.lazy(() => import('./components/website/Blog'));
const ResourceSection = React.lazy(() => import('./components/website/ResourceSection'));
const Node = React.lazy(() => import('./components/website/Node'));
const Partnership = React.lazy(() => import('./components/website/Partnership'));

const TabMenu = React.lazy(() => import('./components/node/symphony/TabMenu'));
const DillMenu = React.lazy(() => import('./components/node/dill/DillMenu'));
const BrinxaiMenu = React.lazy(() => import('./components/node/brinxai/BrinxaiMenu'));

const MangoMenu = React.lazy(() => import('./components/blog/mangonetwork/MangoMenu'));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/mangonetwork/*" element={<MangoMenu />}/>

            <Route path="/node" element={<Node />} />
            <Route path="/node/symphony/*" element={<TabMenu />} />
            <Route path="/node/dill/*" element={<DillMenu />} />  
            <Route path="/node/brinxai/*" element={<BrinxaiMenu />} />

            <Route path="/partnership" element={<Partnership />} />

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
