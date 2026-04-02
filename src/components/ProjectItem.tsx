import './styles/ProjectItem.css';
import type { Project } from '../data/projects.js';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BiSolidXSquare } from "react-icons/bi";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';


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
                </div>
                <p className="proj-summary">{project.summary}</p>
                <div className="proj-tags">
                    {project.tags.map((tag) => (
                        <span key={tag} className="proj-tag">{tag}</span>
                    ))}
                </div>
                <div onClick={() => setIsOpen(true)} className="proj-rdmore">
                    <p>Read More</p>
                    <BsFillArrowRightCircleFill/>
                </div>

                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className ="dlg" >
                    <div className="proj-dlg-container">
                         <DialogPanel className="proj-dlg-panel">
                            <DialogTitle className="dlg-title-container">
                                {project.title}
                                <BiSolidXSquare onClick={() => setIsOpen(false)} />
                            </DialogTitle>
                            <Description className="dlg-desc">
                                <p className="dlg-summary">{project.summary}</p>
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
                                            <a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
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
