import React from 'react';
import Particle from '../common/components/particle/Particle';
import style from './Main.module.scss'

const Main = () => {

    return (
        <div className={style.mainBlock}>
            <Particle />
            <div className={style.mainContainer}>
                <div className={style.text}>
                    <span>Hi everybody</span>
                    <h1 >
                        <span>I am </span><span className={style.name}>Alex Orlov</span>
                    </h1>
                    <p> Front-end Developer</p>
                </div>
                <div className={style.image}>
                    <div className={style.photo} ></div>
                </div>
            </div>
        </div>
    );
};

export default Main;