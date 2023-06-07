import React from 'react';
import style from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={style.ProjectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Project </h2>
                <div className={style.projects}>
                    <Project title={"Project_1"} description={"Customize the user flow replay experience with the latest Recorder extension API."}/>
                    <Project title={"Project_2"} description={"Explore options to customize your recorder experience"}/>
                </div>
            </div>
        </div>
    );
};


export default Projects;