import React from 'react';
import '../styles/Navigation.module.scss';

const Navigation = () => {
    return (
        <div className="navigation-container">
            <div className="navigation-items">Home</div>
            <div className="navigation-items">About</div>
            <div className="navigation-items">Portfolio</div>
            <div className="navigation-items">Contact</div>
        </div>
    )
};

export default Navigation;