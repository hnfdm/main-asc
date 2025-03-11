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
const ResourceSection = React.lazy(() => import('./components/website/ResourceSection'));

const Blog = React.lazy(() => import('./components/website/Blog'));
const Node = React.lazy(() => import('./components/website/Node'));
const Partnership = React.lazy(() => import('./components/website/Partnership'));
const Journey = React.lazy(() => import('./components/website/Journey'));
const Team = React.lazy(() => import('./components/website/Team'));

const TabMenu = React.lazy(() => import('./components/node/symphony/TabMenu'));
const DillMenu = React.lazy(() => import('./components/node/dill/DillMenu'));
const BrinxaiMenu = React.lazy(() => import('./components/node/brinxai/BrinxaiMenu'));
const GaianetMenu = React.lazy(() => import('./components/node/gaianet/GaianetMenu'));

const MangoBlog = React.lazy(() => import('./components/blog/mangonetwork/Menu'));
const InitVerseBlog = React.lazy(() => import('./components/blog/initverse/Menu'));
const HyperliquidBlog = React.lazy(() => import('./components/blog/hyperliquid/Menu'));
const FogoChainBlog = React.lazy(() => import('./components/blog/fogochain/Menu'));
const ArweaveAOBlog = React.lazy(() => import('./components/blog/arweaveao/Menu'));
const SomniaBlog = React.lazy(() => import('./components/blog/somnia/Menu'));

const MegaETHBlog = React.lazy(() => import('./components/blog/megaeth/Menu'));
const RiseChainBlog = React.lazy(() => import('./components/blog/risechain/Menu'));
const UniChainBlog = React.lazy(() => import('./components/blog/unichain/Menu'));

const PayFiBlog = React.lazy(() => import('./components/blog/payfi/Menu'));
const ISLMBlog = React.lazy(() => import('./components/blog/islm/Menu'));
const MevXBlog = React.lazy(() => import('./components/blog/mevx/Menu'));

const PermaBrawlBlog = React.lazy(() => import('./components/blog/permabrawl/Menu'));
const KaitoBlog = React.lazy(() => import('./components/blog/kaito/Menu'));
const HaloBlog = React.lazy(() => import('./components/blog/halo/Menu'));
const LensBlog = React.lazy(() => import('./components/blog/lens/Menu'));

const AnlogBlog = React.lazy(() => import('./components/blog/anlog/Menu'));
const ARIOBlog = React.lazy(() => import('./components/blog/ario/Menu'));
const OktoBlog = React.lazy(() => import('./components/blog/okto/Menu'));
const GoPlusBlog = React.lazy(() => import('./components/blog/goplus/Menu'));

const KGeNBlog = React.lazy(() => import('./components/blog/kgen/Menu'));
const CARVBlog = React.lazy(() => import('./components/blog/carv/Menu'));

const SaharaBlog = React.lazy(() => import('./components/blog/sahara/Menu'));
const GaianetBlog = React.lazy(() => import('./components/blog/gaianet/Menu'));
const PrivaseaBlog = React.lazy(() => import('./components/blog/privasea/Menu'));

const DepinBlog = React.lazy(() => import('./components/blog/depin/Menu'));
const AirdropBlog = React.lazy(() => import('./components/blog/airdrop/Menu'));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/blog" element={<Blog />} />
            
            <Route path="/blog/mangonetwork/*" element={<MangoBlog />}/>
            <Route path="/blog/initverse/*" element={<InitVerseBlog />}/>
            <Route path="/blog/hyperliquid/*" element={<HyperliquidBlog />}/>
            <Route path="/blog/fogochain/*" element={<FogoChainBlog />}/>
            <Route path="/blog/arweaveao/*" element={<ArweaveAOBlog />}/>
            <Route path="/blog/somnia/*" element={<SomniaBlog />}/>

            <Route path="/blog/megaeth/*" element={<MegaETHBlog />}/>
            <Route path="/blog/risechain/*" element={<RiseChainBlog />}/>
            <Route path="/blog/unichain/*" element={<UniChainBlog />}/>

            <Route path="/blog/payfi/*" element={<PayFiBlog />}/>
            <Route path="/blog/islm/*" element={<ISLMBlog />}/>
            <Route path="/blog/mevx/*" element={<MevXBlog />}/>

            <Route path="/blog/permabrawl/*" element={<PermaBrawlBlog />}/> 
            <Route path="/blog/kaito/*" element={<KaitoBlog />}/> 
            <Route path="/blog/halo/*" element={<HaloBlog />}/>
            <Route path="/blog/lens/*" element={<LensBlog />}/>
            
            <Route path="/blog/anlog/*" element={<AnlogBlog />}/>
            <Route path="/blog/ario/*" element={<ARIOBlog />}/>
            <Route path="/blog/okto/*" element={<OktoBlog />}/>
            <Route path="/blog/goplus/*" element={<GoPlusBlog />}/>
            
            <Route path="/blog/kgen/*" element={<KGeNBlog />}/>
            <Route path="/blog/carv/*" element={<CARVBlog />}/>

            <Route path="/blog/sahara/*" element={<SaharaBlog />}/>
            <Route path="/blog/gaianet/*" element={<GaianetBlog />}/>
            <Route path="/blog/privasea/*" element={<PrivaseaBlog />}/>

            <Route path="/blog/depin/*" element={<DepinBlog />}/>
            <Route path="/blog/airdrop/*" element={<AirdropBlog />}/>

            <Route path="/node" element={<Node />} />

            <Route path="/node/symphony/*" element={<TabMenu />} />
            <Route path="/node/dill/*" element={<DillMenu />} />  
            <Route path="/node/brinxai/*" element={<BrinxaiMenu />} />
            <Route path="/node/gaianet/*" element={<GaianetMenu />} />
            
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/about" element={
              <>
                <Journey />
                <Team />
              </>
            } />
            
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
