import './App.css'; // Make sure to import the CSS file
import Frontpage from './pages/Frontpage';
import About from './pages/About';
import Research from './pages/Research';
import Resources from './pages/Resources';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;