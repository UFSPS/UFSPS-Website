import { useState, useEffect } from 'react';
import './styles/Resources.css';

import PageContainer from '../components/PageContainer.js';
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import SwitchTab from "../components/SwitchTab.js";
import WorkshopCard from '../components/Workshopcard.js';
import { workshops } from '../data/workshops.js';

const Resources = () => {
    const [selected, setSelected] = useState<'upcoming' | 'past'>('upcoming');
    const [cardCount, setCardCount] = useState(10);

    useEffect(() => {
        const updateCardCount = () => {
        const width = window.innerWidth;

        if (width < 640) setCardCount(3);
        else if (width < 1024) setCardCount(5);
        else setCardCount(10);
        };

        updateCardCount();
        window.addEventListener('resize', updateCardCount);

        return () => window.removeEventListener('resize', updateCardCount);
    }, []);


    const filteredWorkshops = workshops.filter((workshop) => {
        const workshopDate = new Date(workshop.date);
        const now = new Date();
        return selected === 'past' ? workshopDate < now : workshopDate >= now;
    }).slice(0, cardCount);

    return (
        <PageContainer className="resources-wrapper">
            <Navbar />
            <div className="workshop-title-container">
                <h1>Workshops</h1>
                <SwitchTab selected={selected} onSelect={setSelected} />
            </div>
            <div className="workshop-cards-container">
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
            </div>
        </PageContainer>
    );
};

export default Resources;