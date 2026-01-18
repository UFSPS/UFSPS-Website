import './styles/ProjectItem.css';
import type { Project } from '../data/projects.js';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BiSolidXSquare } from "react-icons/bi";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import platosCaveImg from '../assets/projects/Plato\'s Cave.png';

// interface ProjectItemProps {
//     title: string
//     meta?: string
//     description?: string
// }

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
                            <Description className="dlg-desc">{project.description}</Description>
                        </DialogPanel>
                    </div>
                </Dialog>
            </div>
        </div>
    );
};

export default ProjectItem;