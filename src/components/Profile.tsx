import './styles/Profile.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface ProfileProps {
    name?: React.ReactNode
}

const Profile = ({name}: ProfileProps) => {
    return (
        <div className="exec-profile-container">
            <div className="profile-content-container">
                <div className="profile-img">
                    <img src={`../assets/profiles/${name}.png`} />
                </div>
                <div className="profile-info">
                    <div className="name-pos">
                        <h3>Raul Valle</h3>
                        <div className="pos">
                            <p>President</p>
                        </div>
                    </div>
                    <div className="social-links">
                        <FaGithub />
                        <FaLinkedin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;