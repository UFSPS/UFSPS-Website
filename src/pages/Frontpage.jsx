import { ChevronsDown } from 'lucide-react';
import './styles/Frontpage.css';
import Navbar from '../components/Navbar';
import PageContainer from '../components/PageContainer';
import Image from '../assets/background.png';

const Frontpage = () => {
    return (
        <>
            <PageContainer 
                // 2. Add inline style for multiple backgrounds
                // The Gradient comes FIRST (Top Layer), the URL comes SECOND (Bottom Layer)
                style={{
                    backgroundImage: `
                        url("${Image}")
                    `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
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
                        and transmit signals. Everything in life can be represented by a signal, explore
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
            
                <div className="front-scroll">
                    <ChevronsDown size={32} color="#9ca3af" strokeWidth={1} />
                    <span>scroll down for calendar</span>
                </div>
            </PageContainer>
        </>
    );
};

export default Frontpage;