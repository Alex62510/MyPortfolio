import React from 'react';
import style from './Projects.module.scss'
import Project from './Project/Project';
import Title from '../common/components/title/Title';
import todoImg from './../assets/image/Todo-list.png'
import SocialNetImg from '../assets/image/Social-network.png'
import {Zoom} from "react-awesome-reveal";

const Projects = () => {
    const todos = {
        backgroundImage: `url(${todoImg})`,
    };
    const social = {
        backgroundImage: `url(${SocialNetImg})`,
    }
    return (
        <div id="projects" className={style.ProjectsBlock}>
            <div className={style.projectsContainer}>
                <Title title="Projects"/>
                <div className={style.projects}>
                    <Zoom>`
                        <Project link={"https://Alex62510.github.io/samurai-way-main"} title={"Social network"} style={social}
                                 description={"Customize the user flow replay experience with the latest Recorder extension API."}/>
                    </Zoom>
                    <Zoom>
                        <Project  link={"https://alex62510.github.io/TaskList/"} title={"Todo list"} style={todos}
                                 description={"Explore options to customize your recorder experience"}/>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};


export default Projects;