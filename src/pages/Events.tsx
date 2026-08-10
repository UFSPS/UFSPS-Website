import { useState } from 'react';
import PageContainer from '../components/PageContainer.js';
import EventCard from '../components/EventCard.js';
import { events, pastEvents, upcomingEvents } from '../data/events.js';
import './styles/Events.css';

type EventFilter = 'upcoming' | 'past' | 'all';

const filters: EventFilter[] = ['upcoming', 'past', 'all'];

const filterHeadings: Record<EventFilter, string> = {
  upcoming: 'Upcoming events',
  past: 'Past events',
  all: 'All events',
};

const Events = () => {
  const [filter, setFilter] = useState<EventFilter>('upcoming');

  // Computed on render so the upcoming/past split never freezes on a stale clock.
  const now = new Date();
  const visibleEvents =
    filter === 'upcoming'
      ? upcomingEvents(now)
      : filter === 'past'
        ? pastEvents(now)
        : [...events].sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());

  return (
    <PageContainer className="events-wrapper">
      <main className="events-main container">
        <header className="page-header">
          <p className="kicker">Calendar and workshops</p>
          <h1>Events</h1>
          <p className="lede">
            Workshops, project calls, and technical events for students who want to learn by building.
            RSVP through Discord to get reminders and updates.
          </p>
        </header>

        <section className="events-section">
          <h2 className="visually-hidden">{filterHeadings[filter]}</h2>
          <div className="events-filter" role="group" aria-label="Event filter">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="events-list">
            {visibleEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
            {visibleEvents.length === 0 && <p className="events-empty">No events in this view yet.</p>}
          </div>
        </section>
      </main>
    </PageContainer>
  );
};

export default Events;
