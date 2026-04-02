import './styles/Profile.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface ProfileProps {
    name?: string
    position?: string
    term?: string
    bio?: string
    image?: string
    githubLink?: string | undefined
    linkedinLink?: string |undefined
}

const Profile = ({name, position, term, bio, image, githubLink, linkedinLink}: ProfileProps) => {
    return (
        <div className="exec-profile-container">
            <div className="profile-content-container">
                <div className="profile-img-container">
                    <img className="profile-img" src={image} alt={`${name} portrait`} loading="lazy" />
                </div>
                <div className="profile-info">
                    <div className="name-pos">
                        <h3>{name}</h3>
                        <div className="pos">
                            <p>{position}</p>
                        </div>
                        {term && <p className="profile-term">{term}</p>}
                    </div>
                    {bio && <p className="profile-bio">{bio}</p>}
                    <div className="profile-social-links">
                        {githubLink && <a href={githubLink} target="_blank" rel="noreferrer" aria-label={`${name} GitHub`}><FaGithub /></a>}
                        {linkedinLink && <a href={linkedinLink} target="_blank" rel="noreferrer" aria-label={`${name} LinkedIn`}><FaLinkedin /></a>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
