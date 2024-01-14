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
            imageUrl: "https://sandropimentel.github.io/Images-projet8/images/htmlcss.webp"
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
            imageUrl: "https://sandropimentel.github.io/Images-projet8/images/js.webp"
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
            imageUrl: "https://sandropimentel.github.io/Images-projet8/images/react.webp"
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
            imageUrl: "https://sandropimentel.github.io/Images-projet8/images/nodejs.webp"
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
            imageUrl: "https://sandropimentel.github.io/Images-projet8/images/chromedevtools.webp"
        },
        
    ];
    


    const projectData = [
        {
            id: 'project-booki',
            title: "Projet d'étude : Agence immobilière",
            year: '2023',
            mission: "Ce projet, réalisé durant ma formation avec OpenClassrooms, m'a permis d'acquérir des compétences fondamentales en HTML et CSS. J'y ai appris à structurer et styliser efficacement des interfaces web, posant ainsi les bases de mon développement en tant que développeur frontend.",
            technologies: ['Html-CSS'],
            images: ['https://sandropimentel.github.io/Images-projet8/images/Booki.webp'],
            githubLink: 'https://github.com/SandroPimentel/Code-Projet-2-OCR',
        },
        {
            id: 'project-js',
            title: "Projet d'étude : Architecte d'intérieur",
            year: '2023',
            mission: "Dans le cadre de ma formation chez OpenClassrooms, ce projet m'a permis d'apprendre les bases de JavaScript. Cette expérience a été cruciale pour maîtriser les concepts clés du langage, notamment la manipulation du DOM et la gestion des événements.",
            technologies: ['Html-CSS', "JavaScript"],
            images: ['https://sandropimentel.github.io/Images-projet8/images/Projet-3-1.webp', 'https://sandropimentel.github.io/Images-projet8/images/Projet-3-2.webp', 'https://sandropimentel.github.io/Images-projet8/images/Projet-3-3.webp'],
            githubLink: 'https://github.com/SandroPimentel/Projet-3',
        },
        {
            id: 'project-debug',
            title: "Projet d'étude : Optimisation et debug",
            year: '2023',
            mission: "J'ai réalisé un projet centré sur l'optimisation et le débogage pour le site d'une photographe en freelance. Ce travail m'a permis de développer des compétences approfondies en analyse et résolution de problèmes en utilisant principalement les Chrome DevTools. J'ai acquis une expérience pratique en identifiant et en corrigeant les problèmes de performance et de conception dans les interfaces web.",
            technologies: ['Chrome Devtools'],
            images: ['https://sandropimentel.github.io/Images-projet8/images/Projet-5.webp'],
            githubLink: 'https://github.com/SandroPimentel/Site-projet-5.git',
        },
        {
            id: 'project-react',
            title: "Projet d'étude : Location immobilière",
            year: '2023',
            mission: "Ce projet m'a permis de me familiariser avec React et SCSS. En développant une application de location immobilière, j'ai acquis une compréhension pratique de React pour la création de composants et utilisé SCSS pour une stylisation cohérente et modulaire. ",
            technologies: ['React', 'SCSS', "JavaScript"],
            images: ['https://sandropimentel.github.io/Images-projet8/images/Projet-6-1.webp', 'https://sandropimentel.github.io/Images-projet8/images/Projet-6-3.webp', 'https://sandropimentel.github.io/Images-projet8/images/Projet-6-2.webp'],
            githubLink: 'https://github.com/SandroPimentel/projet-6.git',
        },
        {
            id: 'project-backend',
            title: "Projet d'étude : Notation de livres",
            year: '2023',
            mission:"Durant ce projet backend sur la notation de livres, j'ai eu l'opportunité d'apprendre et d'appliquer les fondamentaux de Node.js, Express, et MongoDB. Ce travail m'a permis de construire une application fonctionnelle avec la gestion des fichiers via Multer et Sharp, enrichissant mes connaissances en développement backend.",
            technologies: ['Node JS', 'Express', 'Multer', 'Sharp', 'MongoDB'],
            images: ['https://sandropimentel.github.io/Images-projet8/images/Projet-7-1.webp', 'https://sandropimentel.github.io/Images-projet8/images/Projet-7-2.webp', 'https://sandropimentel.github.io/Images-projet8/images/Projet-7-3.webp'],
            githubLink: 'https://github.com/SandroPimentel/projet-7.git',
        }
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
