import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import homeHeaderPicture from '../../../Images/homeHeader.png';
import './HomeHeader.css';

const HomeHeader = () => {
    return (
        <div className="homeHeader-container">
            <div className="homeHeader-name">
                <h1>Hello, Guys!</h1>
                <h1 className="homeHeader-name-name">I'm Sahjalal</h1>
                <h2>
                    <Typewriter
                        options={{
                            strings: ['Web Developer', 'API Developer', 'Web Designer', 'Full Stack Web Developer', 'Express Developer', 'React Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>
                <button><Link to="/project">My Project</Link></button>
            </div>
            <div className="homeHeader-img">
                <img src={homeHeaderPicture} alt=""/>
            </div>
        </div>
    );
};

export default HomeHeader;