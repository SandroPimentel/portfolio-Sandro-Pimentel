import React, { useState } from 'react';
import ProjectCard from '../components/projectCard'; 
import ProjectModal from '../components/ProjectModal';
import '../styles/pages/Projects.scss';

const Projects = ({ projects, openModal }) => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="projects">
            <h2>Mes projets</h2>
            <div className='projects-cards'>
            {projects.map(project => (
                <ProjectCard 
                    key={project.id} 
                    project={project} 
                    openModal={() => setSelectedProject(project)} 
                />
            ))}
            </div>
            {selectedProject && (
                <ProjectModal project={selectedProject} closeModal={() => setSelectedProject(null)} />
            )}
        </div>
    );
};

export default Projects;
