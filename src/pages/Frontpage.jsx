import { ChevronsDown } from 'lucide-react';
import './styles/Frontpage.css';
import Navbar from '../components/Navbar';

const Frontpage = () => {
    return (
        <>
            <div className='page-container'>
                <Navbar />
                <main className="front-container">
                    <div className="front-content">
                    <h1>
                        Signal<br />
                        Processing<br />
                        Society
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus purus et nulla facilisis, eu fringilla leo sagittis. Nam quis.
                    </p>

                    {/* Discord button */}
                    <button className="front-button">
                        Join Discord
                    </button>
                    </div>

                    {/* Page graphics */}
                    <div className="front-graphic">
                    <svg viewBox="0 0 500 500" className="wireframe-svg">
                        <circle cx="240" cy="160" r="180" />
                        <circle cx="200" cy="200" r="180" />
                        <circle cx="160" cy="240" r="180" />
                    </svg>
                    </div>
                </main>
            
                <div className="front-scroll">
                    <ChevronsDown size={32} color="#9ca3af" strokeWidth={1} />
                    <span>scroll down for calendar</span>
                </div>
            </div>
        </>
    );
};

export default Frontpage;