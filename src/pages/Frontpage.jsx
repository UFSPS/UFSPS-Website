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
                    <a href="https://discord.gg/6GRymPjgKc">
                        <button className="front-button">
                            Join Discord
                        </button>
                    </a>
                    </div>

                    {/* Page graphics */}
                    <div className="front-graphic">
                    <svg viewBox="0 0 800 800" className="circles-svg">
                        <circle cx="450" cy="305" r="300" />
                        <circle cx="410" cy="355" r="300" />
                        <circle cx="370" cy="405" r="300" />
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