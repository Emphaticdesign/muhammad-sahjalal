import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagramSquare, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './SocialMedia.css';

const SocialMedia = () => {
    return (
        <div className="social-platform">
            <h4>Social Profile</h4>
            <div className="social-icon-container">
                <a href="https://www.facebook.com/biran.shifat" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://www.youtube.com/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="https://www.instagram.com/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagramSquare} /></a>
                <a href="https://www.linkedin.com/in/muhammad-sahjalal-27b6aa203/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="https://github.com/Emphaticdesign" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    );
};

export default SocialMedia;