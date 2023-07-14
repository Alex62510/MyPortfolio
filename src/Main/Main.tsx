import React from 'react';
import style from './Main.module.scss'
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import Tilt from 'react-parallax-tilt';


const Main = () => {

    return (
        <div id="main" className={style.mainBlock}>

            <div className={style.mainContainer}>
                <div className={style.text}>
                    <Fade direction={"left"}>
                        <ReactTypingEffect text="Hi everybody"/>
                    </Fade>
                    <Fade direction={"bottom-right"} cascade>
                        <h1>
                            <span>I am </span><span className={style.name}>Alex Orlov</span>
                        </h1>
                    </Fade>
                    <Fade direction={"bottom-left"} cascade>
                        <p> Frontend Developer</p>
                    </Fade>
                </div>
                <Fade direction={"right"}>
                    <div className={style.image}>
                        <Tilt
                            tiltMaxAngleX={35}
                              tiltMaxAngleY={35}
                              perspective={900}
                              scale={1.1}
                              transitionSpeed={2000}
                              gyroscope={true}

                        >
                            <div className={style.photo}></div>
                        </Tilt>
                    </div>

                </Fade>

            </div>


        </div>
    );
};

export default Main;