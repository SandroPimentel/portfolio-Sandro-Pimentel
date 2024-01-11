import React from 'react';
import '../styles/pages/About.scss'; 

const About = () => {
    return (
        <div id="about" className="about-container">
            <h2>À Propos de moi</h2>
            <div className='about-content'>
                <div className="profile-pic-container">
                    <img src="/images/profilepic.jpg" alt="Votre Nom" className="profile-pic"/>
                </div>
                <div className="description-container">
                    <p>Je suis Sandro, un développeur web innovant, spécialisé dans la création de solutions web élégantes et performantes. Passionné par la technologie et l'innovation, je combine compétences techniques et créativité pour transformer vos idées en expériences numériques captivantes.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
