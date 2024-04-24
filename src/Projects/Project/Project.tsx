import React from 'react';
import style from './Project.module.scss';


type JobPropsType = {
    title: string
    description: string
    style: {}
    link: string
    loading?:boolean
}
const Project = (props: JobPropsType) => {
    return (
        <div className={style.project}>
            {props.loading?(
                <div className={style.posCenter}>
                    <span>Please wait... </span>
                    <Spinner/>
                </div>

            ): (<div className={style.projectImg} style={props.style}>
                <div className={style.lookImg}>
                    <a href={props.link} target={'_blank'}
                       rel={'noopener noreferrer'} style={{textDecoration: "none"}}>
                        <div className={style.link}>look</div>
                    </a>
                </div>
            </div>)}

            <h6 className={style.projectTitle}>{props.title}</h6>
            <span className={style.description}>{props.description}</span>

        </div>
    );
};

export const Spinner = () => <div className={style.loader}></div>;



export default Project;