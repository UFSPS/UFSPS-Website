import './styles/ProjectItem.css';
import type { Project, ProjectHealth, ProjectStatus } from '../data/projects.js';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const formatStatus = (status: string) => status.replace('-', ' ');

/**
 * Shared status/health taxonomy rendering: a mono pill with a 7px square
 * indicator. Used on project cards, /research/status, and project hubs so
 * the same value always looks the same.
 */
export const StatusPill = ({ kind, value }: { kind: 'status' | 'health'; value: ProjectStatus | ProjectHealth }) => (
    <span className={`status-pill ${kind}-${value}`}>{formatStatus(value)}</span>
);

const ProjectItem = ({project}: {project: Project}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article className="proj-wrapper">
            <div className="proj-img-container">
                <img src={project.img} alt={project.imgAlt}/>
            </div>
            <div className="proj-title-container">
                <div className="proj-title">
                    <h3>{project.title}</h3>
                    <p className="proj-meta">{project.meta}</p>
                    <div className="proj-status-row">
                        <StatusPill kind="status" value={project.status} />
                        <StatusPill kind="health" value={project.health} />
                    </div>
                </div>
                <div className="proj-actions">
                    <button type="button" onClick={() => setIsOpen(true)} className="proj-rdmore">
                        Quick View
                    </button>
                    <Link to={`/research/${project.slug}`} className="proj-hub-link">
                        Open Hub →
                    </Link>
                </div>

                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="dlg">
                    <div className="proj-dlg-container">
                        <DialogPanel className="proj-dlg-panel">
                            <DialogTitle className="dlg-title-container">
                                {project.title}
                                <button type="button" className="dlg-close-button" aria-label={`Close ${project.shortTitle ?? project.title} dialog`} onClick={() => setIsOpen(false)}>
                                    ✕
                                </button>
                            </DialogTitle>
                            <Description as="div" className="dlg-desc">
                                <p>{project.description}</p>
                                <div className="dlg-ov">
                                    <h3>Overview</h3>
                                    <p>{project.details.overview}</p>
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
                                {project.links && project.links.length > 0 && (
                                    <div className="dlg-links">
                                        <h3>Links</h3>
                                        <ul>
                                            {project.links.map((link) => (
                                                <li key={link.href}>
                                                    <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </Description>
                        </DialogPanel>
                    </div>
                </Dialog>
            </div>
        </article>
    );
};

export default ProjectItem;
