import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import PageContainer from '../components/PageContainer.js';
import { chapterInfo } from '../data/chapter.js';
import { networkMembers } from '../data/engagement.js';
import './styles/Network.css';

const Network = () => {
  const visibleMembers = networkMembers.filter((member) => member.consent);

  return (
    <PageContainer className="network-wrapper">
      <Navbar />
      <main className="network-main">
        <section className="network-hero">
          <p className="section-kicker">Member and alumni network</p>
          <h1>People, outcomes, and opt-in references.</h1>
          <p>
            This page will highlight members and alumni who opt in to sharing their work, socials,
            chapter history, and technical interests. It is meant to help students find peers,
            mentors, collaborators, and examples of where SPS work can lead.
          </p>
        </section>

        <section className="network-section">
          <h2>Members and alumni</h2>
          {visibleMembers.length > 0 ? (
            <div className="network-member-grid">
              {visibleMembers.map((member) => (
                <article key={member.name}>
                  <h3>{member.name}</h3>
                  <p>{[member.role, member.term, member.affiliation].filter(Boolean).join(' · ')}</p>
                  <div>
                    {member.focus.map((focus) => <span key={focus}>{focus}</span>)}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="network-empty">Opt-in member and alumni references will be added here.</p>
          )}
        </section>

        <section className="network-section">
          <h2>Our members have worked with</h2>
          {chapterInfo.memberAffiliations.length > 0 ? (
            <div className="network-affiliation-grid">
              {chapterInfo.memberAffiliations.map((affiliation) => (
                <span key={affiliation.name}>{affiliation.name}</span>
              ))}
            </div>
          ) : (
            <p className="network-empty">Company, lab, and collaborator references will be added as members opt in.</p>
          )}
        </section>
      </main>
      <Footer />
    </PageContainer>
  );
};

export default Network;
