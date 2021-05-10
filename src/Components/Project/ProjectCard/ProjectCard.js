import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
    const { name, dis, live, code, img } = props.project;
    return (
        <div className="col-md-4 project-container">
            <div className="project-main-container">
                <div className="project-nameContainer">
                    <h1>{name}</h1>
                    <img src={img} alt="" />
                </div>
                <div>
                    <p>{dis}</p>
                </div>
                <div>
                    <a href={live} target="_blank" rel="noreferrer"><button>Live</button></a>
                    <a href={code} target="_blank" rel="noreferrer"><button>Github</button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;