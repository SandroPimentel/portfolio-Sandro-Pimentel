import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectModal from './components/ProjectModal'; 
import './styles/App.scss';

const App = () => {

    const [selectedProject, setSelectedProject] = useState(null);


    const skillsData = [
        {
            title: "HTML - CSS",
            description: [
                "Intégrer du contenu conformément à une maquette avec HTML et CSS",
                "Implémenter une interface responsive avec HTML et CSS"
            ],
            githubProjectTitle: "Projet d'étude : création d'une page d'accueil en HTML - CSS",
            githubLink: "https://github.com/SandroPimentel/Code-Projet-2-OCR",
            imageUrl: "/images/htmlcss.webp"
        },
        {
            title: "JavaScript",
            description: [
                "Récupérer les données utilisateurs dans le JavaScript via des formulaires",
                "Manipuler les éléments du DOM avec JavaScript",
                "Gérer les événements utilisateurs avec JavaScript"
            ],
            githubProjectTitle: "Projet d'étude : création du frontend pour le site d'une architecte",
            githubLink: "https://github.com/SandroPimentel/Projet-3",
            imageUrl: "/images/js.webp"
        },
        {
            title: "React",
            description: [
                "Configurer la navigation entre les pages de l'application avec React Router",
                "Initialiser une application avec Create React App",
                "Développer des éléments de l'interface d'un site web grâce à des composants React"
            ],
            githubProjectTitle: "Projet d'étude : création du frontend d'un site de location immobilière",
            githubLink: "https://github.com/SandroPimentel/projet-6",
            imageUrl: "/images/react.webp"
        },
        {
            title: "NodeJS",
            description: [
                "Implémenter un modèle logique de données conformément à la réglementation",
                "Mettre en œuvre des opérations CRUD de manière sécurisée",
                "Stocker des données de manière sécurisée"
            ],
            githubProjectTitle: "Projet d'étude : création du backend d'un site notation de livre",
            githubLink: "https://github.com/SandroPimentel/projet-7",
            imageUrl: "/images/nodejs.webp"
        },
        {
            title: "Optimisation et debug",
            description: [
                "Optimiser les performances d’un site web",
                "Débugger un site web grâce aux Chrome DevTools",
                "Rédiger un cahier de recette pour tester un site"
            ],
            githubProjectTitle: "Projet d'étude : optimisation et débuggage d'un site d'une photographe freelance",
            githubLink: "https://github.com/SandroPimentel/Site-projet-5",
            imageUrl: "/images/chromedevtools.webp"
        },
        
    ];
    


    const projectData = [
        {
            id: 'project-booki',
            title: "Projet d'étude Booki",
            year: '2023',
            mission: "Ce projet, réalisé durant ma formation avec OpenClassrooms, m'a permis d'acquérir des compétences fondamentales en HTML et CSS. J'y ai appris à structurer et styliser efficacement des interfaces web, posant ainsi les bases de mon développement en tant que développeur frontend.",
            technologies: ['Html-CSS'],
            images: ['/images/Booki.webp'],
            githubLink: 'https://github.com/SandroPimentel/Code-Projet-2-OCR',
        },
        {
            id: 'project-booki',
            title: "Projet d'étude Booki",
            year: '2023',
            mission: "Ce projet, réalisé durant ma formation avec OpenClassrooms, m'a permis d'acquérir des compétences fondamentales en HTML et CSS. J'y ai appris à structurer et styliser efficacement des interfaces web, posant ainsi les bases de mon développement en tant que développeur frontend.",
            technologies: ['Html-CSS'],
            images: ['/images/Booki.webp'],
            githubLink: 'https://github.com/SandroPimentel/Code-Projet-2-OCR',
        },
        {
            id: 'project-booki',
            title: "Projet d'étude Booki",
            year: '2023',
            mission: "Ce projet, réalisé durant ma formation avec OpenClassrooms, m'a permis d'acquérir des compétences fondamentales en HTML et CSS. J'y ai appris à structurer et styliser efficacement des interfaces web, posant ainsi les bases de mon développement en tant que développeur frontend.",
            technologies: ['Html-CSS'],
            images: ['/images/Booki.webp'],
            githubLink: 'https://github.com/SandroPimentel/Code-Projet-2-OCR',
        },
        {
            id: 'project-booki',
            title: "Projet d'étude Booki",
            year: '2023',
            mission: "Ce projet, réalisé durant ma formation avec OpenClassrooms, m'a permis d'acquérir des compétences fondamentales en HTML et CSS. J'y ai appris à structurer et styliser efficacement des interfaces web, posant ainsi les bases de mon développement en tant que développeur frontend.",
            technologies: ['Html-CSS'],
            images: ['/images/Booki.webp'],
            githubLink: 'https://github.com/SandroPimentel/Code-Projet-2-OCR',
        },
        {
            id: 'project-booki',
            title: "Projet d'étude Booki",
            year: '2023',
            mission: "Ce projet, réalisé durant ma formation avec OpenClassrooms, m'a permis d'acquérir des compétences fondamentales en HTML et CSS. J'y ai appris à structurer et styliser efficacement des interfaces web, posant ainsi les bases de mon développement en tant que développeur frontend.",
            technologies: ['Html-CSS'],
            images: ['/images/Booki.webp'],
            githubLink: 'https://github.com/SandroPimentel/Code-Projet-2-OCR',
        },
        {
            id: 'project-booki',
            title: "Projet d'étude Booki",
            year: '2023',
            mission: "Ce projet, réalisé durant ma formation avec OpenClassrooms, m'a permis d'acquérir des compétences fondamentales en HTML et CSS. J'y ai appris à structurer et styliser efficacement des interfaces web, posant ainsi les bases de mon développement en tant que développeur frontend.",
            technologies: ['Html-CSS'],
            images: ['/images/Booki.webp', '/images/Booki.webp'],
            githubLink: 'https://github.com/SandroPimentel/Code-Projet-2-OCR',
        },
    ];

   
    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <div className="App">
             <div>
            <Navbar />
            <Home />
            <About />
            <Skills skills={skillsData} />
            <Projects projects={projectData} openModal={openModal} />
            <Contact />
            <Footer />
            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    closeModal={closeModal} 
                />
            )}
            </div>
        </div>
    );
};

export default App;
