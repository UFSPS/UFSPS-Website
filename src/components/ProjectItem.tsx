import './styles/ProjectItem.css';
import type { Project } from '../data/projects.js';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BiSolidXSquare } from "react-icons/bi";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const formatStatus = (status: string) => status.replace('-', ' ');


const ProjectItem = ({project}: {project: Project}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="proj-wrapper">
            <div className="proj-img-container">
                <img src={project.img} alt={`${project.imgAlt} image`}/>
            </div>
            <div className="proj-title-container">
                <div className="proj-title">
                    <h3>{project.title}</h3>
                    <p>{project.meta}</p>
                    <div className="proj-status-row">
                        <span className={`project-status status-${project.status}`}>{formatStatus(project.status)}</span>
                        <span className={`project-health health-${project.health}`}>{formatStatus(project.health)}</span>
                    </div>
                </div>
                <div className="proj-actions">
                    <button type="button" onClick={() => setIsOpen(true)} className="proj-rdmore">
                        <span>Quick View</span>
                        <BsFillArrowRightCircleFill/>
                    </button>
                    <Link to={`/research/${project.slug}`} className="proj-hub-link">
                        Open Hub
                    </Link>
                </div>

                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className ="dlg" >
                    <div className="proj-dlg-container">
                         <DialogPanel className="proj-dlg-panel">
                            <DialogTitle className="dlg-title-container">
                                {project.title}
                                <button type="button" className="dlg-close-button" aria-label={`Close ${project.shortTitle ?? project.title} dialog`} onClick={() => setIsOpen(false)}>
                                    <BiSolidXSquare />
                                </button>
                            </DialogTitle>
                            <Description className="dlg-desc">
                                {project.description}
                                 <div className="dlg-ov">
                                <h3>Overview</h3>
                                {project.details.overview}
                            </div>
                            <div className="dlg-whatblt">
                                <h3>What we built</h3>
                                <ul>
                                    {project.details.what_we_built.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div> 
                            <div className="dlg-stack">
                                <h3>Stack</h3>
                                <ul>
                                    {project.details.stack.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            {project.links && project.links.length > 0 && (<div className="dlg-links">
                                <h3>Links</h3>
                                <ul>
                                    {project.links?.map((link) => (
                                        <li key={link.href}>
                                            <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>)}
                            </Description>          
                        </DialogPanel>
                    </div>
                </Dialog>
            </div>
        </div>
    );
};

export default ProjectItem;
