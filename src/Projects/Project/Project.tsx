import React from 'react';
import style from './Project.module.scss';
import { Link } from "react-router-dom"

type JobPropsType = {
    title: string
    description: string
    style: {}
    link:string
}
const Project = (props: JobPropsType) => {
    return (
        <div className={style.project}>

                <div className={style.projectImg} style={props.style}>
                    <div className={style.lookImg}>
                        <a href={props.link} ><div className={style.link}>look</div></a>
                    </div>
                </div>
                <h6 className={style.projectTitle}>{props.title}</h6>
                <span className={style.description}>{props.description}</span>

        </div>
    );
};

export default Project;