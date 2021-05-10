import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faEnvelope, faFlag, faMapMarkerAlt, faPhoneAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import sahjalalImg from '../../../Images/sahjalal.jpg';
import resume from '../../../Images/resume.pdf';
import './About.css';


const About = () => {
    return (
        <div className="about-main-container">
            <div className="about-main-image-container">
                <div className="about-image-container">
                    <img src={sahjalalImg} alt="" />
                </div>
                <div>
                    <h2>Web Developer</h2>
                    <a href={resume} download><button className="resume-button">Download My Resume</button></a>
                </div>
            </div>
            <div className="about-container">
                <div className="about-name-container">
                    <div>
                        <div className="icon-container">
                            <div>
                                <p className="icon"><FontAwesomeIcon icon={faUser} /></p>
                            </div>
                            <div className="name-div">
                                <p>Name</p>
                                <p>Muhammad Sahjalal</p>
                            </div>
                        </div>
                        <div className="icon-container">
                            <div>
                                <p className="icon"><FontAwesomeIcon icon={faPhoneAlt} /></p>
                            </div>
                            <div className="name-div">
                                <p>Phone</p>
                                <p>+880 1739684481</p>
                            </div>
                        </div>
                        <div className="icon-container">
                            <div>
                                <p className="icon"><FontAwesomeIcon icon={faEnvelope} /></p>
                            </div>
                            <div className="name-div">
                                <p>Email</p>
                                <p>muhammadsahjalal953@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="icon-container">
                            <div>
                                <p className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></p>
                            </div>
                            <div className="name-div">
                                <p>Address</p>
                                <p>Dhaka Bangladesh</p>
                            </div>
                        </div>
                        <div className="icon-container">
                            <div>
                                <p className="icon"><FontAwesomeIcon icon={faCalendarAlt} /></p>
                            </div>
                            <div className="name-div">
                                <p>Date Of Birthday</p>
                                <p>Oct-15-2002</p>
                            </div>
                        </div>
                        <div className="icon-container">
                            <p className="icon"><FontAwesomeIcon icon={faFlag} /></p>
                            <div className="name-div">
                                <p>Nationality</p>
                                <p>Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-cover-letter">
                    <p>
                        Hi my name is "Muhammad Sahjalal". I’m a <b>Full Stack Web Developer</b> & I am an enthusiastic, dedicated. Have more than <b>6month+ of experience</b> in the field of <b>Web Design</b> & <b>Web Development</b>.
                    </p>
                    <p>
                        During my journey through the evolution of the technology, I picked my "Must Have" Technologies to work with that includes: <b> HTML5, CSS3, Bootstrap, javaScript, Es6, React Js, Node.js, Express Js, mySQL, mongodb & many more</b>. By Profession a <b>Full Stack Web Developer</b>
                    </p>
                    <p>
                        <b>My objectives</b> are increasing my knowledge in programming fields and new technologies especially, web development and web Design field. Always looking forward to learn new technologies and be a part of a huge change in the world.
                    </p>
                    <p>Yours sincerely,<br /><i>Sahjalal</i></p>
                </div>
            </div>
        </div>
    );
};

export default About;