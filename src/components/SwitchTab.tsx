import { useState } from 'react';
import './styles/SwitchTab.css';

const SwitchTab = () => {
    const [selected, setSelected] = useState('upcoming')

    return (
        <div className="switch-wrapper">

            <div className={`selection-pill ${selected}`} />
            <button
                className={`switch-btn ${selected === 'upcoming' ? 'active' : ''}`}
                onClick={() => setSelected('upcoming')}
            >
                Upcoming
            </button>
            <button
                className={`switch-btn ${selected === 'past' ? 'active' : ''}`}
                onClick={() => setSelected('past')}
            >
                Past
            </button>
        </div>
    );
};

export default SwitchTab;