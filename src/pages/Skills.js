import React from 'react';
import SkillCard from '../components/SkillCard';
import '../styles/pages/Skills.scss';

const SkillsSection = ({ skills }) => {
    return (
        <div className='skills'>
            <h2>Mes compétences</h2>
            <div className="skills-container">
                
                {skills.map(skill => (
                    <SkillCard
                        key={skill.title}
                        title={skill.title}
                        description={skill.description}
                        githubProjectTitle={skill.githubProjectTitle}
                        githubLink={skill.githubLink}
                        imageUrl={skill.imageUrl} 
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
