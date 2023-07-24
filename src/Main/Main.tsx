import React, {useState} from 'react';
import style from './Main.module.scss'
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import Tilt from 'react-parallax-tilt';


const Main = () => {
const [mouseOn,setMouseOn]=useState<boolean>(false)
    const mouseOver=()=>{setMouseOn(true)}
    const mouseLeave=()=>{setMouseOn(false)}
    return (
        <div id="main" className={style.mainBlock}>

            <div className={style.mainContainer}>
                <div className={style.text}>
                    <Fade direction={"left"}>
                        <div onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
                            {!mouseOn? <ReactTypingEffect text="Hi everybody"/>:<div>Hi everybody</div>}
                        </div>
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
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            perspective={900}
                            scale={1.05}
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