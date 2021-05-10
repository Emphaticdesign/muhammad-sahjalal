import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import myLogo from '../../Images/logo.png';

const Header = () => {
    return (
        <div className="nav">
            <div className="nav-img">
                <img src={myLogo} alt="" />
            </div>
            <nav>
                <NavLink to="/home" className="main-nav">Home</NavLink>
                <NavLink to="/project" className="main-nav">Project</NavLink>
                <NavLink to="/blog" className="main-nav">Blog</NavLink>
                <NavLink to="/about" className="main-nav">About</NavLink>
                <NavLink to="/contact" className="main-nav">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;