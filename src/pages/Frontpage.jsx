import './styles/Frontpage.css';
import Model from '../components/Model';
import { chapterInfo } from '../data/chapter';

const discordHref = chapterInfo.socialLinks.find((link) => link.label === 'Discord')?.href;

const Frontpage = () => {
    return (
        <main className="front">
            <div className="front-backdrop bg-grid" aria-hidden="true"></div>
            <div className="front-model">
                <Model />
            </div>
            <div className="front-hero container">
                <span className="kicker">01 / UF · IEEE SPS</span>
                <h1>Everything in life can be represented by a signal.</h1>
                <p className="lede">
                    For engineers, mathematicians, and scientists — we receive, analyze,
                    process, and transmit signals, exploring reality through the digital
                    interface.
                </p>
                <p>Welcome to the IEEE Signal Processing Society at the University of Florida.</p>
                {discordHref && (
                    <a className="btn front-cta" href={discordHref}>
                        Join Discord <span aria-hidden="true">→</span>
                    </a>
                )}
            </div>
        </main>
    );
};

export default Frontpage;
