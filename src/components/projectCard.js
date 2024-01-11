import React from 'react';
import '../styles/components/ProjectCard.scss';

const ProjectCard = ({ project, openModal }) => {
    return (
        <div className="project-card" onClick={() => openModal(project)}>
            <img src={project.images[0]} alt={project.title} className="project-image"/>
            <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
            </div>
        </div>
    );
};

export default ProjectCard;
