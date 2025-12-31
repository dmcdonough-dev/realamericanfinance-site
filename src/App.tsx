import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Principles from './pages/Principles';
import Frameworks from './pages/Frameworks';
import IronPot from './pages/frameworks/IronPot';
import WealthArchitecture from './pages/frameworks/WealthArchitecture';
import ScenarioPlanning from './pages/frameworks/ScenarioPlanning';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Podcasts from './pages/Podcasts';
import Merch from './pages/Merch';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/frameworks" element={<Frameworks />} />
          <Route path="/frameworks/iron-pot" element={<IronPot />} />
          <Route path="/frameworks/wealth-architecture" element={<WealthArchitecture />} />
          <Route path="/frameworks/scenario-planning" element={<ScenarioPlanning />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
