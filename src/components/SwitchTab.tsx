import './styles/SwitchTab.css';

interface SwitchTabProps {
    selected: 'upcoming' | 'past';
    onSelect: (tab: 'upcoming' | 'past') => void;
}

const SwitchTab = ({ selected, onSelect }: SwitchTabProps) => {
    return (
        <div className="switch-wrapper">

            <div className={`selection-pill ${selected}`} />
            <button
                className={`switch-btn ${selected === 'upcoming' ? 'active' : ''}`}
                onClick={() => onSelect('upcoming')}
            >
                Upcoming
            </button>
            <button
                className={`switch-btn ${selected === 'past' ? 'active' : ''}`}
                onClick={() => onSelect('past')}
            >
                Past
            </button>
        </div>
    );
};

export default SwitchTab;