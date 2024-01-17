import React from 'react';
import style from './Skills.module.scss';
import {Fade} from "react-awesome-reveal";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactImg from "../assets/image/react.png";
import reduxImg from "../assets/image/redux.png";
import cssImg from "../assets/image/css.png";
import storyBookImg from "../assets/image/storybook.png";
import gitImg from "../assets/image/git.png";
import firebaseImg from "../assets/image/firebase.jpg";
import restApiImg from "../assets/image/restApi.png";

const Skills = () => {
    const reactImage = {
        backgroundImage: `url(${reactImg})`
    };
    const reduxImage = {
        backgroundImage: `url(${reduxImg})`
    };
    const gitImage = {
        backgroundImage: `url(${gitImg})`
    };
    const cssImage = {
        backgroundImage: `url(${cssImg})`
    };
    const restApiImage = {
        backgroundImage: `url(${restApiImg})`
    };
    const storyBookImage = {
        backgroundImage: `url(${storyBookImg})`
    };
    const firebaseImage = {
        backgroundImage: `url(${firebaseImg})`
    };

    return (
        <div id="skills" className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title title="Skills"/>
                <div className={style.skills}>
                    <Fade direction={"up"}>
                        <Skill style={reactImage} title={"REACT"} descriiption={"90%"}/>
                    </Fade>
                    <Fade direction={"up"}>
                        <Skill style={reduxImage} title={"REDUX"} descriiption={"80%"}/>
                    </Fade>
                    <Fade direction={"up"}>
                        <Skill style={cssImage} title={"CSS"} descriiption={"60%"}/>
                    </Fade>
                    <Fade direction={"up"}>
                        <Skill style={gitImage} title={"GIT"} descriiption={"50%"}/>
                    </Fade>
                    <Fade direction={"up"}>
                        <Skill style={restApiImage} title={"REST API"} descriiption={"70%"}/>
                    </Fade>
                    <Fade direction={"up"}>
                        <Skill style={storyBookImage} title={"Story book"} descriiption={"60%"}/>
                    </Fade>
                    <Fade direction={"up"}>
                        <Skill style={firebaseImage} title={"Firebase"} descriiption={"60%"}/>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Skills;