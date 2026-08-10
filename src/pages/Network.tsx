import PageContainer from '../components/PageContainer.js';
import { chapterInfo } from '../data/chapter.js';
import { networkMembers } from '../data/engagement.js';
import './styles/Network.css';

const Network = () => {
  const visibleMembers = networkMembers.filter((member) => member.consent);

  return (
    <PageContainer>
      <main className="network-page container">
        <header className="page-header">
          <p className="kicker">Member and alumni network</p>
          <h1>People, outcomes, and opt-in references.</h1>
          <p className="lede">
            This page will highlight members and alumni who opt in to sharing their work, socials,
            chapter history, and technical interests. It is meant to help students find peers,
            mentors, collaborators, and examples of where SPS work can lead.
          </p>
        </header>

        <section className="network-section section">
          <h2>Members and alumni</h2>
          {visibleMembers.length > 0 ? (
            <div className="network-member-grid">
              {visibleMembers.map((member) => {
                const meta = [member.role, member.term, member.affiliation]
                  .filter(Boolean)
                  .join(' · ');
                return (
                  <article key={member.name} className="card network-member-card">
                    <h3>{member.name}</h3>
                    {meta && <p className="network-member-meta mono">{meta}</p>}
                    {member.focus.length > 0 && (
                      <ul className="network-focus-list">
                        {member.focus.map((focus) => (
                          <li key={focus}>{focus}</li>
                        ))}
                      </ul>
                    )}
                    {member.socialLinks.length > 0 && (
                      <ul className="network-member-links">
                        {member.socialLinks.map((link) => (
                          <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="network-empty">Member profiles will appear here as people opt in.</p>
          )}
        </section>

        <hr className="rule" />

        <section className="network-section section">
          <h2>Our members have worked with</h2>
          {chapterInfo.memberAffiliations.length > 0 ? (
            <ul className="network-affiliation-list">
              {chapterInfo.memberAffiliations.map((affiliation) => (
                <li key={affiliation.name} className="network-affiliation-chip">
                  {affiliation.href ? (
                    <a href={affiliation.href}>{affiliation.name}</a>
                  ) : (
                    affiliation.name
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="network-empty">
              Company, lab, and collaborator references will be added as members opt in.
            </p>
          )}
        </section>
      </main>
    </PageContainer>
  );
};

export default Network;
