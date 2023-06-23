import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactImg from "../assets/image/react2.png";
import reduxImg from "../assets/image/redux.png";
import cssImg from "../assets/image/css.png";

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

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title="Skills"/>
                <div className={style.skills}>
                    <Skill style={reactImage} title={"REACT"} descriiption={"Get information about any CSS property by hovering over it in the Styles pane."}/>
                    <Skill style={reduxImage} title={"REDUX"} descriiption={"Focus on the important parts of your code by ignoring files or directories that are not relevant to the issue at hand."}/>
                    <Skill style={cssImage} title={"CSS"} descriiption={"Jump directly to the logpoint location from the Console for quicker code navigation."}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;