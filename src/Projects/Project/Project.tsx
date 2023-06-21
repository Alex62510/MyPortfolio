import React from 'react';
import style from './Project.module.css';

type JobPropsType = {
    title: string
    description: string
}
const Project = (props: JobPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.projectImg}>
                <a className={style.lookImg}>look</a>
            </div>
            <h6 className={style.projectTitle}>{props.title}</h6>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default Project;