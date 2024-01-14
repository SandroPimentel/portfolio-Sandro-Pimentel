import React, { useState, useEffect } from 'react';
import '../styles/pages/Home.scss';

const Home = () => {
    const [typedTextH1, setTypedTextH1] = useState('');
    const [typedTextH2, setTypedTextH2] = useState('');
    const greetingText = "Boonjour, je suis";
    const highlightedName = " Sandro Pimentel";
    const fullTextH1 = greetingText + highlightedName;
    const fullTextH2 = "Dééveloppeur Front-end";

    useEffect(() => {
        let indexH1 = 0;
        let timerH1;

        const delayTimer = setTimeout(() => {
            timerH1 = setInterval(() => {
                setTypedTextH1(prev => prev + fullTextH1.charAt(indexH1));
                indexH1++;
                if (indexH1 === fullTextH1.length) {
                    clearInterval(timerH1);
                
                    let indexH2 = 0;
                    const timerH2 = setInterval(() => {
                        setTypedTextH2(prev => prev + fullTextH2.charAt(indexH2));
                        indexH2++;
                        if (indexH2 === fullTextH2.length) clearInterval(timerH2);
                    }, 50);
                }
            }, 50);
        }, 1000); 
        return () => {
            clearInterval(timerH1);
            clearTimeout(delayTimer);
        };
    }, [fullTextH1, fullTextH2]);

    return (
        <div className="home">
            <div className="overlay"></div>
            <div className="text-container">
                <h1>
                    {typedTextH1.slice(0, greetingText.length)}
                    <span className="highlighted-name">
                        {typedTextH1.slice(greetingText.length)}
                    </span>
                </h1>
                <h2>{typedTextH2}</h2>
                <p>Concevoir des sites webs esthétiques et performants.</p>
            </div>
        </div>
    );
};

export default Home;
