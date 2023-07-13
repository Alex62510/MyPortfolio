import React from 'react';
import style from './Project.module.scss';
import {Flip} from "react-awesome-reveal";

type JobPropsType = {
    title: string
    description: string
    style: {}
}
const Project = (props: JobPropsType) => {
    return (
        <div className={style.project}>
                <div className={style.projectImg} style={props.style}>
                    <div className={style.lookImg}>
                        <a href=""/>look<a/>
                    </div>
                </div>
                <h6 className={style.projectTitle}>{props.title}</h6>
                <span className={style.description}>{props.description}</span>

        </div>
    );
};

export default Project;