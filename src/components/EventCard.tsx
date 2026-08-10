import type { EventItem } from '../data/events.js';
import { isUpcomingEvent } from '../data/events.js';
import './styles/EventCard.css';

/* ISO-flavored mono metadata (spec §10): 2026-09-10 · 17:30 · Venue */
const isoDate = (event: EventItem) =>
  new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: event.timezone,
  }).format(new Date(event.startsAt));

const isoTime = (event: EventItem) =>
  new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: event.timezone,
  }).format(new Date(event.startsAt));

const EventCard = ({ event }: { event: EventItem }) => {
  const upcoming = isUpcomingEvent(event);
  const primaryLink = event.rsvp.enabled ? event.rsvp.url : event.links.details ?? event.links.repo;

  const secondaryLinks: { label: string; href: string }[] = [];
  if (event.links.repo && event.links.repo !== primaryLink) {
    secondaryLinks.push({ label: 'Repo', href: event.links.repo });
  }
  if (event.links.slides && event.links.slides !== primaryLink) {
    secondaryLinks.push({ label: 'Slides', href: event.links.slides });
  }
  if (event.links.recording && event.links.recording !== primaryLink) {
    secondaryLinks.push({ label: 'Recording', href: event.links.recording });
  }

  return (
    <article className="event-card">
      {event.image && <img src={event.image} alt={`${event.title} photo`} loading="lazy" />}
      <div className="event-card-body">
        <div className="event-card-meta">
          <span className={`event-state ${upcoming ? 'event-state--upcoming' : 'event-state--past'}`}>
            {upcoming ? 'upcoming' : 'past'}
          </span>
          {upcoming && event.status !== 'scheduled' && (
            <span className="event-flag">{event.status}</span>
          )}
          <span className="event-type">{event.type}</span>
        </div>
        <h3>{event.title}</h3>
        <p>{event.summary}</p>
        <p className="event-card-details">
          <span>{isoDate(event)}</span>
          <span>{isoTime(event)}</span>
          <span>{event.location.label}</span>
        </p>
        <div className="event-tag-row">
          {event.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="event-actions">
          {primaryLink ? (
            <a
              className={event.rsvp.enabled ? 'btn btn--accent' : 'btn'}
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {event.rsvp.enabled ? 'RSVP' : 'View details'}
              {event.rsvp.enabled && <span aria-hidden="true">→</span>}
            </a>
          ) : (
            <span className="event-closed">{event.rsvp.closedMessage ?? 'Details coming soon'}</span>
          )}
          {secondaryLinks.map(({ label, href }) => (
            <a key={label} className="event-link" href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default EventCard;
