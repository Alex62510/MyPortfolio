import React from 'react';
import style from './Skill.module.scss';
import {Simulate} from "react-dom/test-utils";
import progress = Simulate.progress;

type SkillPropsType ={
    title:string
    descriiption:string
    style:{}
}
const Skill = (props:SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div style={props.style} className={style.icon}></div>

            <h3>{props.title}</h3>
            <span className={style.description}>{props.descriiption}</span>
        </div>
    );
};

export default Skill;