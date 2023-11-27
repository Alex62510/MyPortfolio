import React from 'react';
import style from './Projects.module.scss'
import Project from './Project/Project';
import Title from '../common/components/title/Title';
import todoImg from './../assets/image/Todo-list.png'
import SocialNetImg from '../assets/image/Social-network.png'
import fleshCardImg from '../assets/image/FleshCardImg.png'
import musicImg from '../assets/image/MusicImg.jpg'
import algoImg from '../assets/image/AlgoImg.jpg'
import chatImg from '../assets/image/ChatImg.jpg'
import {Zoom} from "react-awesome-reveal";

const Projects = () => {
    const todos = {
        backgroundImage: `url(${todoImg})`,
    };
    const social = {
        backgroundImage: `url(${SocialNetImg})`,
    };
    const algo = {
        backgroundImage: `url(${algoImg})`,
    };
    const fleshCard = {
        backgroundImage: `url(${fleshCardImg})`,
    };
    const music = {
        backgroundImage: `url(${musicImg})`,
    };
    const chat = {
        backgroundImage: `url(${chatImg})`,
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
                        <Project  link={"https://courses-blond.vercel.app"} title={"AlgoExpert"} style={algo}
                                  description={"The best resource for preparing for programming interviews. Everything you need in one optimized platform"}/>
                    </Zoom>
                    <Zoom>
                        <Project  link={"https://github.com/Alex62510/FlashCards_02_07"} title={"Flesh Cards"} style={fleshCard}
                                  description={"This is a card bearing information on both sides, which is intended to be used as an aid in memorization"}/>
                    </Zoom>
                    <Zoom>
                        <Project  link={"https://spontaneous-biscochitos-e84182.netlify.app"} title={"Music"} style={music}
                                  description={"This is an application for listening to recorded tracks"}/>
                    </Zoom>
                    <Zoom>
                        <Project  link={"https://aesthetic-sfogliatella-600f15.netlify.app/"} title={"Chat"} style={chat}
                                  description={"This is an application for chatting"}/>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};


export default Projects;