import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/components/Navbar.scss';

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeNav = () => {
        setNavActive(false);
    };

    return (
        <nav className={`navbar ${navActive ? 'nav-active' : ''}`}>
            <div className="menu-icon" onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="nav-items-container">
                <Link className="nav-item" to="about" smooth={true} onClick={closeNav}>À Propos</Link>
                <Link className="nav-item" to="skills" smooth={true} onClick={closeNav}>Compétences</Link>
                <Link className="nav-item" to="projects" smooth={true} onClick={closeNav}>Projets</Link>
                <Link className="nav-item" to="contact" smooth={true} onClick={closeNav}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
