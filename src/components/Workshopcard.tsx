import './styles/WorskshopCard.css';

interface WorkshopCardProps {
	title: string;
	date: string;
	time: string;
	description: string;
  location: string;
	index?: number;
	image?: string;
}

const WorkshopCard = ({ title, date, time, description, location, index = 0, image }: WorkshopCardProps) => {
	return (
      <div className="workshop-card" style={{ zIndex: 100 - index, '--card-bg-image': image ? `url(${image})` : 'none' } as React.CSSProperties}>
        <h2 className="index-number">{String(index + 1).padStart(2, '0')}</h2>
        <h3>{title}</h3>
        <p className="workshop-description">{description}</p>
        <div className="workshop-info">
          <p className="workshop-location"> {location}</p>
          <div className="workshop-date-time">
            <p className="workshop-date">{date}</p>
            <p className="workshop-time">{time}</p>
          </div>
        </div>
      </div>
	);
};

export default WorkshopCard;
