import React from 'react';
import '../styles/components/SkillCard.scss';

const SkillCard = ({ title, description, githubProjectTitle, githubLink, imageUrl }) => {
    return (
        <div className="skill-card">
             {imageUrl && (
                <img src={imageUrl} alt={title} className="skill-image" />
            )}
            <h3 className="skill-title">{title}</h3>
            <div className="skill-content">
                {description.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        {githubProjectTitle}
                    </a>
                )}
            </div>
        </div>
    );
};

export default SkillCard;
