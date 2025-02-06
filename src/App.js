import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@styles/App.css';
import Navbar from './components/website/Navbar';
import Footer from './components/website/Footer';
import FAQ from './components/website/FAQ';  

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
const GaianetMenu = React.lazy(() => import('./components/node/gaianet/GaianetMenu'));

const MangoMenu = React.lazy(() => import('./components/blog/mangonetwork/MangoMenu'));
const InitVerseMenu = React.lazy(() => import('./components/blog/initverse/InitVerseMenu'));
const HyperliquidMenu = React.lazy(() => import('./components/blog/hyperliquid/HyperliquidMenu'));
const FogoChainMenu = React.lazy(() => import('./components/blog/fogochain/FogoChainMenu'));
const ArweaveAOMenu = React.lazy(() => import('./components/blog/arweaveao/ArweaveAOMenu'));
const SomniaMenu = React.lazy(() => import('./components/blog/somnia/SomniaMenu'));

const MegaETHMenu = React.lazy(() => import('./components/blog/megaeth/MegaETHMenu'));
const RiseChainMenu = React.lazy(() => import('./components/blog/risechain/RiseChainMenu'));
const UniChainMenu = React.lazy(() => import('./components/blog/unichain/UniChainMenu'));

const PayFiMenu = React.lazy(() => import('./components/blog/payfi/PayFiMenu'));
const ISLMMenu = React.lazy(() => import('./components/blog/islm/ISLMMenu'));
const MevXMenu = React.lazy(() => import('./components/blog/mevx/MevXMenu'));

const HaloMenu = React.lazy(() => import('./components/blog/halo/HaloMenu'));
const LensMenu = React.lazy(() => import('./components/blog/lens/LensMenu'));

const ARIOMenu = React.lazy(() => import('./components/blog/ario/ARIOMenu'));
const OktoMenu = React.lazy(() => import('./components/blog/okto/OktoMenu'));
const GoPlusMenu = React.lazy(() => import('./components/blog/goplus/GoPlusMenu'));

const CARVMenu = React.lazy(() => import('./components/blog/carv/CARVMenu'));
const SaharaMenu = React.lazy(() => import('./components/blog/sahara/SaharaMenu'));
const GaianetBlog = React.lazy(() => import('./components/blog/gaianet/Menu'));
const PrivaseaMenu = React.lazy(() => import('./components/blog/privasea/PrivaseaMenu'));

const DepinMenu = React.lazy(() => import('./components/blog/depin/DepinMenu'));
const AirdropMenu = React.lazy(() => import('./components/blog/airdrop/AirdropMenu'));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/blog" element={<Blog />} />
            
            <Route path="/blog/mangonetwork/*" element={<MangoMenu />}/>
            <Route path="/blog/initverse/*" element={<InitVerseMenu />}/>
            <Route path="/blog/hyperliquid/*" element={<HyperliquidMenu />}/>
            <Route path="/blog/fogochain/*" element={<FogoChainMenu />}/>
            <Route path="/blog/arweaveao/*" element={<ArweaveAOMenu />}/>
            <Route path="/blog/somnia/*" element={<SomniaMenu />}/>

            <Route path="/blog/megaeth/*" element={<MegaETHMenu />}/>
            <Route path="/blog/risechain/*" element={<RiseChainMenu />}/>
            <Route path="/blog/unichain/*" element={<UniChainMenu />}/>

            <Route path="/blog/payfi/*" element={<PayFiMenu />}/>
            <Route path="/blog/islm/*" element={<ISLMMenu />}/>
            <Route path="/blog/mevx/*" element={<MevXMenu />}/>

            <Route path="/blog/halo/*" element={<HaloMenu />}/>
            <Route path="/blog/lens/*" element={<LensMenu />}/>
            
            <Route path="/blog/ario/*" element={<ARIOMenu />}/>
            <Route path="/blog/okto/*" element={<OktoMenu />}/>
            <Route path="/blog/goplus/*" element={<GoPlusMenu />}/>
            
            <Route path="/blog/carv/*" element={<CARVMenu />}/>
            <Route path="/blog/sahara/*" element={<SaharaMenu />}/>
            <Route path="/blog/gaianet/*" element={<GaianetBlog />}/>
            <Route path="/blog/privasea/*" element={<PrivaseaMenu />}/>

            <Route path="/blog/depin/*" element={<DepinMenu />}/>
            <Route path="/blog/airdrop/*" element={<AirdropMenu />}/>

            <Route path="/node" element={<Node />} />
            <Route path="/node/symphony/*" element={<TabMenu />} />
            <Route path="/node/dill/*" element={<DillMenu />} />  
            <Route path="/node/brinxai/*" element={<BrinxaiMenu />} />
            <Route path="/node/gaianet/*" element={<GaianetMenu />} />
            
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
