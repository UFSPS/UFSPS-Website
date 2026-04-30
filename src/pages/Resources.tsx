import { useState, useRef, useMemo, useEffect} from 'react';
import './styles/Resources.css';

import PageContainer from '../components/PageContainer.js';
import Navbar from "../components/Navbar.js";
import SwitchTab from "../components/SwitchTab.js";
import WorkshopCard from '../components/Workshopcard.js';
import { workshops } from '../data/workshops.js';
import { chapterInfo } from '../data/chapter.js';

import {FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

const Resources = () => {
    const [selected, setSelected] = useState<'upcoming' | 'past'>('upcoming');
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const filteredWorkshops = useMemo(() => {
        const now = new Date();
        return workshops.filter((workshop) => {
            const workshopDate = new Date(workshop.date);
            return selected === 'past' ? workshopDate < now : workshopDate >= now;
        });
    }, [selected]);

    useEffect(() => {
        const scrollBox = scrollRef.current;
        if (!scrollBox) return;

        const updateButtons = () => {
            setShowLeft(scrollBox.scrollLeft > 0);
            setShowRight(
                scrollBox.scrollLeft + scrollBox.clientWidth < scrollBox.scrollWidth
            );
        };

        scrollBox.addEventListener('scroll', updateButtons);
        window.addEventListener('resize', updateButtons);

        updateButtons();

        return () => {
            scrollBox.removeEventListener('scroll', updateButtons);
            window.removeEventListener('resize', updateButtons);
        };
    }, [filteredWorkshops]);

    const handlePrev = () => {
        scrollRef.current?.scrollBy({ left: -1000, behavior: 'smooth' });
    };

    const handleNext = () => {
        scrollRef.current?.scrollBy({ left: 1000, behavior: 'smooth' });
    };

    return (
        <PageContainer className="resources-wrapper">
            <Navbar />
            <div className="workshop-title-container">
                <h1>Workshops</h1>
                <SwitchTab selected={selected} onSelect={setSelected} />
            </div>

            <section className="resource-links-section">
                <h2>Shared resources</h2>
                <div className="resource-links-grid">
                    {chapterInfo.resourceLinks.map((resource) => (
                        <a key={resource.href} href={resource.href} target="_blank" rel="noreferrer" className="resource-link-card">
                            <span>{resource.label}</span>
                            <p>{resource.description}</p>
                        </a>
                    ))}
                </div>
            </section>

            <div className="workshop-body-container">
                {showLeft && (
                    <FaRegArrowAltCircleLeft className="prev-button" onClick={handlePrev} />
                )}

                <div ref={scrollRef} className="workshop-cards-container">
                    {filteredWorkshops.map((workshop, index) => (
                        <WorkshopCard
                            key={index}
                            index={index}
                            title={workshop.title}
                            location={workshop.location}
                            date={workshop.date}
                            time={workshop.time}
                            description={workshop.description}
                            image={workshop.image}
                        />
                    ))}
                    {filteredWorkshops.length === 0 && 
                        <p>
                             Work in progress, check back later!
                        </p>
                    
                    }
                </div>

                {showRight && (
                    <FaRegArrowAltCircleRight className="next-button" onClick={handleNext} />
                )}
            </div>
        </PageContainer>
    );
};

export default Resources;
