import React from 'react';
import cycleRepair from '../../../Images/cycleRepair.jpg';
import ajkerBajar from '../../../Images/ajkerBajar.jpg';
import sportsMania from '../../../Images/sportsMania.png';
import './Project.css';
import ProjectCard from '../ProjectCard/ProjectCard';

const projectData = [
    {
        name: 'Cycle Repair',
        dis: 'its cycle repair website you can hire a mechanic for upgrade your cycle. This website are two type of dashboard for admin and client. admin can add a admin and see all order',
        live: 'https://cyclerepair-1ec8e.web.app/',
        code: 'https://github.com/Emphaticdesign/cycle-repair',
        img : cycleRepair
    },
    {
        name: 'Ajker Bajar',
        dis: 'its a shopping mall website you can buy something what you want . admin can add a product and price',
        live: 'https://ajker-bajar.web.app/',
        code: 'https://github.com/Emphaticdesign/ajker-bajar',
        img : ajkerBajar
    },
    {
        name : 'Sports Mania',
        dis : 'Its a World Wide World League Web Site You Can Explore a League Founder Country Sport type Gender and more .',
        live : 'https://compassionate-wozniak-2e9487.netlify.app/',
        code : 'https://github.com/Emphaticdesign/sports-mania',
        img : sportsMania
    }

]

const Project = () => {
    return (
        <section className="main-project-container">
            <div className="mt-5">
                <h1>My Projects</h1>
            </div>
            <div className="mt-5 d-flex">
                {
                    projectData.map(project => <ProjectCard project={project} key={project.name}></ProjectCard>)
                }
            </div>
        </section>
    );
};

export default Project;