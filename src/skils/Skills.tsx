import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactImg from "../assets/image/react.png";
import reduxImg from "../assets/image/redux.png";
import cssImg from "../assets/image/css.png";
import storyBookImg from "../assets/image/storybook.png";

const Skills = () => {
    const reactImage={
        backgroundImage: `url(${reactImg})`
    };
    const reduxImage={
        backgroundImage: `url(${reduxImg})`
    };
    const cssImage={
        backgroundImage: `url(${cssImg})`
    };
    const storyBookImage={
        backgroundImage: `url(${storyBookImg})`
    };

    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title title="Skills"/>
                <div className={style.skills}>
                    <Skill style={reactImage} title={"REACT"} descriiption={"70%"}/>
                    <Skill style={reduxImage} title={"REDUX"} descriiption={"50%"}/>
                    <Skill style={cssImage} title={"CSS"} descriiption={"30%"}/>
                    <Skill style={storyBookImage} title={"Story book"} descriiption={"20%"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;