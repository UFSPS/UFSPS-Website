import type { EventItem } from '../data/events.js';
import { formatEventDate, formatEventTime, isUpcomingEvent } from '../data/events.js';
import './styles/EventCard.css';

const EventCard = ({ event }: { event: EventItem }) => {
  const upcoming = isUpcomingEvent(event);
  const primaryLink = event.rsvp.enabled ? event.rsvp.url : event.links.details ?? event.links.repo;

  return (
    <article className={`event-card event-${event.type}`}>
      {event.image && <img src={event.image} alt="" loading="lazy" />}
      <div className="event-card-body">
        <div className="event-card-meta">
          <span>{event.type}</span>
          <span>{event.status}</span>
          <span>{upcoming ? 'upcoming' : 'past'}</span>
        </div>
        <h2>{event.title}</h2>
        <p>{event.summary}</p>
        <div className="event-card-details">
          <span>{formatEventDate(event)}</span>
          <span>{formatEventTime(event)}</span>
          <span>{event.location.label}</span>
        </div>
        <div className="event-tag-row">
          {event.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="event-actions">
          {primaryLink ? (
            <a href={primaryLink} target="_blank" rel="noopener noreferrer">
              {event.rsvp.enabled ? 'RSVP' : 'View details'}
            </a>
          ) : (
            <span>{event.rsvp.closedMessage ?? 'Details coming soon'}</span>
          )}
          {event.links.repo && (
            <a href={event.links.repo} target="_blank" rel="noopener noreferrer">Repo</a>
          )}
          {event.links.slides && (
            <a href={event.links.slides} target="_blank" rel="noopener noreferrer">Slides</a>
          )}
          {event.links.recording && (
            <a href={event.links.recording} target="_blank" rel="noopener noreferrer">Recording</a>
          )}
        </div>
      </div>
    </article>
  );
};

export default EventCard;
