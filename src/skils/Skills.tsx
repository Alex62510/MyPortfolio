import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title="Skills"/>
                <div className={style.skills}>
                    <Skill title={"REACT"} descriiption={"Get information about any CSS property by hovering over it in the Styles pane."}/>
                    <Skill title={"REDUX"} descriiption={"Focus on the important parts of your code by ignoring files or directories that are not relevant to the issue at hand."}/>
                    <Skill title={"CSS"} descriiption={"Jump directly to the logpoint location from the Console for quicker code navigation."}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;