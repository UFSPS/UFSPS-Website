import './styles/Profile.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface ProfileProps {
    name?: string
    position?: string
    term?: string
    bio?: string
    image?: string | undefined
    githubLink?: string | undefined
    linkedinLink?: string | undefined
}

const initials = (name?: string) =>
    (name ?? '').split(' ').filter(Boolean).slice(0, 2).map((part) => part[0]).join('');

const Profile = ({name, position, term, bio, image, githubLink, linkedinLink}: ProfileProps) => {
    return (
        <article className="exec-profile-container">
            <div className="profile-img-container">
                {image
                    ? <img className="profile-img" src={image} alt={`${name} portrait`} loading="lazy" />
                    : <span className="profile-img-initials" aria-hidden="true">{initials(name)}</span>}
            </div>
            <div className="profile-info">
                <h3>{name}</h3>
                {position && <p className="profile-position">{position}</p>}
                {term && <p className="profile-term">{term}</p>}
                {bio && <p className="profile-bio">{bio}</p>}
                {(githubLink || linkedinLink) && (
                    <div className="profile-social-links">
                        {githubLink && <a href={githubLink} target="_blank" rel="noreferrer" aria-label={`${name} GitHub`}><FaGithub /></a>}
                        {linkedinLink && <a href={linkedinLink} target="_blank" rel="noreferrer" aria-label={`${name} LinkedIn`}><FaLinkedin /></a>}
                    </div>
                )}
            </div>
        </article>
    );
};

export default Profile;
