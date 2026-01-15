import './styles/Profile.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface ProfileProps {
    name?: string
    position?: string
    githubLink?: string
    linkedinLink?: string
}

const Profile = ({name, position, githubLink, linkedinLink}: ProfileProps) => {
    return (
        <div className="exec-profile-container">
            <div className="profile-content-container">
                <div className="profile-img">
                    <img src={`../assets/profiles/${name}.png`} />
                </div>
                <div className="profile-info">
                    <div className="name-pos">
                        <h3>{name}</h3>
                        <div className="pos">
                            <p>{position}</p>
                        </div>
                    </div>
                    <div className="profile-social-links">
                        {githubLink && <a href={githubLink} target="_blank"><FaGithub /></a>}
                        {linkedinLink && <a href={linkedinLink} target="_blank"><FaLinkedin /></a>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;