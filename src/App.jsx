import './App.css';
import Layout from './components/Layout';
import Frontpage from './pages/Frontpage';
import About from './pages/About';
import Research from './pages/Research';
import Resources from './pages/Resources';
import Events from './pages/Events';
import Join from './pages/Join';
import Network from './pages/Network';
import Collaborate from './pages/Collaborate';
import ProjectHub from './pages/ProjectHub';
import ResearchStatus from './pages/ResearchStatus';
import ResearchPhilosophy from './pages/ResearchPhilosophy';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

const App = () => {
  return (
      <BrowserRouter basename={basename}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Frontpage />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/research/status" element={<ResearchStatus />} />
            <Route path="/research/philosophy" element={<ResearchPhilosophy />} />
            <Route path="/research/:slug" element={<ProjectHub />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/join" element={<Join />} />
            <Route path="/network" element={<Network />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
