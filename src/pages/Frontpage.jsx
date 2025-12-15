import './styles/Frontpage.css'
import Navbar from '../components/Navbar';

const Frontpage = () => {
    return (
        <>
        <div className='page-container'>
            <Navbar />
               
      {/* --- Main Hero Section --- */}
      <main className="front-container">
        
        {/* Left Column: Text Content */}
        <div className="front-content">
          <h1>
            Signal<br />
            Processing<br />
            Society
          </h1>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus purus et nulla facilisis, eu fringilla leo sagittis. Nam quis.
          </p>

          <button className="front-button">
            Join Discord
          </button>
        </div>

        {/* Right Column: Illustration */}
        <div className="front-graphic">
          <svg viewBox="0 0 500 500" className="wireframe-svg">
            {/* Three overlapping circles */}
            <circle cx="240" cy="160" r="180" />
            <circle cx="200" cy="200" r="180" />
            <circle cx="160" cy="240" r="180" />
          </svg>
        </div>
      </main>
        </div>
        </>

    );
};

export default Frontpage;