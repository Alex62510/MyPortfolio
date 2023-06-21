import React from 'react';
import style from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../common/components/title/Title";

const Projects = () => {
    // const social={
    //     color:"blue",
    //     backgroundImage:'url(' + imgUrl + ')',
    // }
    return (
        <div className={style.ProjectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
              <Title title="Projects"/>
                <div className={style.projects}>
                    <Project title={"Social network"} description={"Customize the user flow replay experience with the latest Recorder extension API."}/>
                    <Project title={"Todo list"} description={"Explore options to customize your recorder experience"}/>
                </div>
            </div>
        </div>
    );
};


export default Projects;