import './styles/WorskshopCard.css';

interface WorkshopCardProps {
	title: string;
	date: string;
	description: string;
  location: string;
	index?: number;
}

const WorkshopCard = ({ title, date, description, location, index = 0 }: WorkshopCardProps) => {
	return (
      <div className="workshop-card" style={{ zIndex: 100 - index }}>
        <h2 className="index-number">{String(index + 1).padStart(2, '0')}</h2>
        <h3>{title}</h3>
        <p className="workshop-date">{date}</p>
        <p className="workshop-location">{location}</p>
        <p className="workshop-description">{description}</p>
      </div>
	);
};

export default WorkshopCard;
