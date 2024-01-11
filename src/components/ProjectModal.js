import React from 'react';
import '../styles/components/ProjectModal.scss';

const ProjectModal = ({ project, closeModal }) => {
    if (!project) {
        return null;
    }

    return (
        <div className="project-modal-overlay" onClick={closeModal}>
            <div className="project-modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-modal" onClick={closeModal}>&times;</button>
                <h2 className='modal-title'>{project.title}</h2>
                <p className="project-mission"><span>Mission: </span>{project.mission}</p>
                <p className="project-year"><span>Année:</span> {project.year}</p>
                <h3>Technologies utilisées</h3>
                <div className="project-technologies">
                    {project.technologies && Array.isArray(project.technologies) ? (
                        project.technologies.map(tech => (
                            <span key={tech} className="project-technology">{tech}</span>
                        ))
                    ) : null}
                </div>
                <a href={project.githubLink} className="project-github-link">Voir sur GitHub</a>
                <div className="project-images">
                    <h3>Images du projet</h3>
                    {project.images && Array.isArray(project.images) ? (
                        project.images.map((image, index) => (
                            <img key={index} src={image} alt={`${project.title} image ${index}`} />
                        ))
                    ) : null}
                </div>
            </div>
        </div>
    );
};


export default ProjectModal;

