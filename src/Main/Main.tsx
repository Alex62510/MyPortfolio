import React from 'react';
import style from './Main.module.scss'
import {Fade, Rotate} from "react-awesome-reveal";


const Main = () => {

    return (
        <div className={style.mainBlock}>

            <div className={style.mainContainer}>
                <div className={style.text}>
                    <Rotate direction={"bottom-left"} cascade>
                        <span>Hi everybody</span>
                    </Rotate>
                    <Rotate direction={"bottom-right"} cascade>
                        <h1>
                            <span>I am </span><span className={style.name}>Alex Orlov</span>
                        </h1>
                    </Rotate>
                    <Rotate direction={"bottom-left"} cascade>
                        <p> Front-end Developer</p>
                    </Rotate>

                </div>
                <Fade direction={"right"}>
                    <div className={style.image}>
                        <div className={style.photo}></div>
                    </div>
                </Fade>

            </div>


        </div>
    );
};

export default Main;