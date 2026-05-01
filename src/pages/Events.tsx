import { useMemo, useState } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import PageContainer from '../components/PageContainer.js';
import EventCard from '../components/EventCard.js';
import { events, pastEvents, upcomingEvents } from '../data/events.js';
import './styles/Events.css';

type EventFilter = 'upcoming' | 'past' | 'all';

const Events = () => {
  const [filter, setFilter] = useState<EventFilter>('upcoming');
  const visibleEvents = useMemo(() => {
    if (filter === 'upcoming') return upcomingEvents();
    if (filter === 'past') return pastEvents();
    return [...events].sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());
  }, [filter]);

  return (
    <PageContainer className="events-wrapper">
      <Navbar />
      <main className="events-main">
        <section className="events-hero">
          <div>
            <p className="section-kicker">Calendar and workshops</p>
            <h1>Events</h1>
            <p>
              Workshops, project calls, and technical events for students who want to learn by building.
              RSVP links currently point to external tools so the site can stay static and reliable.
            </p>
          </div>
          <div className="events-filter" role="group" aria-label="Event filter">
            {(['upcoming', 'past', 'all'] as EventFilter[]).map((item) => (
              <button
                key={item}
                type="button"
                className={filter === item ? 'active' : ''}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="events-grid">
          {visibleEvents.map((event) => <EventCard key={event.id} event={event} />)}
          {visibleEvents.length === 0 && <p className="events-empty">No events in this view yet.</p>}
        </section>
      </main>
      <Footer />
    </PageContainer>
  );
};

export default Events;
