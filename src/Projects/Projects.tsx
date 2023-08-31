import React from 'react';
import style from './Projects.module.scss'
import Project from './Project/Project';
import Title from '../common/components/title/Title';
import todoImg from './../assets/image/Todo-list.png'
import SocialNetImg from '../assets/image/Social-network.png'
import fleshCardImg from '../assets/image/FleshCardImg.png'
import {Zoom} from "react-awesome-reveal";

const Projects = () => {
    const todos = {
        backgroundImage: `url(${todoImg})`,
    };
    const social = {
        backgroundImage: `url(${SocialNetImg})`,
    };
    const fleshCard = {
        backgroundImage: `url(${fleshCardImg})`,
    };

    return (
        <div id="projects" className={style.ProjectsBlock}>
            <div className={style.projectsContainer}>
                <Title title="Projects"/>
                <div className={style.projects}>
                    <Zoom>`
                        <Project link={"https://Alex62510.github.io/samurai-way-main"} title={"Social network"} style={social}
                                 description={"Social networks are websites and apps that allow users and organizations to connect, communicate, share information and form relationships"}/>
                    </Zoom>
                    <Zoom>
                        <Project  link={"https://alex62510.github.io/TaskList/"} title={"Todo list"} style={todos}
                                 description={"It's a list of tasks you need to complete or things that you want to do"}/>
                    </Zoom>
                    <Zoom>
                        <Project  link={"https://github.com/Alex62510/FlashCards_02_07"} title={"Flesh Cards"} style={fleshCard}
                                  description={"This is a card bearing information on both sides, which is intended to be used as an aid in memorization"}/>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};


export default Projects;