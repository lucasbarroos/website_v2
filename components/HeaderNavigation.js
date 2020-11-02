import React from 'react';
import '../styles/Navigation.module.scss';

const Navigation = () => {
    return (
        <div className="navigation-container">
            <a href="#home" className="navigation-items">Home</a>
            <a href="#about" className="navigation-items">About</a>
            <a href="#portfolio" className="navigation-items">Portfolio</a>
            <a href="#contact" className="navigation-items">Contact</a>
        </div>
    )
};

export default Navigation;