import React from 'react';

import LogoTechTribe from '../assets/logo-TechTribe.png';
import BgSvg from '../assets/bg-svg.svg'


function Header() {
    return (
        <header className="main-header">
            <div className="logo-nav">
                <img src={LogoTechTribe} alt="Logo TechTribe" className="img-logo-nav" />
                <h1 className="title-logo-nav">TechTribe</h1>
            </div>
            <ul className="navbar">
                <li><a href="app.js" className="nav-link">Home</a></li>
                <li><a href="index.html" className="nav-link">Profile</a></li>
                <li><a href="index.html" className="nav-link">Settings</a></li>
            </ul>
            <img src={BgSvg} alt="Background Svg" className="bg-img" />
        </header>
    );
}

export default Header;