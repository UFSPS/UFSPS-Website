import { ChevronsDown } from 'lucide-react';
import './styles/Frontpage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from '../assets/background.png';

const Frontpage = () => {
    return (
        <>
            <div className="page-container">
                <img className="front-image" src={Image} alt="background image"/>
                <Navbar />
                <main className="front-container">
                    <div className="front-content">
                    <h1>
                        Signal<br />
                        Processing<br />
                        Society
                    </h1>
                    <p>
                        For engineers, mathematicians, and scientists. We receive, analyze, process,
                        and transmit signals. Everything in life can be represented by a signal. Explore
                        reality through the digital interface.
                    </p>
                    <p>
                        Welcome to the Signal Processing Society.
                    </p>

                    {/* Discord button */}
                    <a href="https://discord.gg/6GRymPjgKc">
                        <button className="front-button">
                            Join Discord
                        </button>
                    </a>
                    </div>
                </main>
            
                {/* Note: Optional in case we want to implement a calendar
                <div className="front-scroll">
                    <ChevronsDown size={32} color="#9ca3af" strokeWidth={1} />
                    <span>scroll down for calendar</span>
                </div>
                */}
            </div>
            <Footer />
        </>
    );
};

export default Frontpage;