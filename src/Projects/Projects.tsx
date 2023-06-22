import React from 'react';
import style from './Projects.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Project from './Project/Project';
import Title from '../common/components/title/Title';
import todoImg from './../assets/image/Todo-list.png'
import SocialNetImg from '../assets/image/Social-network.png'

const Projects = () => {
    const todos = {
        backgroundImage: `url(${todoImg})`,
    };
    const social = {
        backgroundImage: `url(${SocialNetImg})`,
    }
    return (
        <div className={style.ProjectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title="Projects"/>
                <div className={style.projects}>
                    <Project title={"Social network"} style={social}
                             description={"Customize the user flow replay experience with the latest Recorder extension API."}/>
                    <Project title={"Todo list"} style={todos}
                             description={"Explore options to customize your recorder experience"}/>
                </div>
            </div>
        </div>
    );
};


export default Projects;