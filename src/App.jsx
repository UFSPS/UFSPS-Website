import './App.css'; // Make sure to import the CSS file
import Frontpage from './pages/Frontpage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;