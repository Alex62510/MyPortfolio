import React from 'react';
import style from './Contact.module.scss';
import Title from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";
import {Fade, Flip, Rotate, Slide, Zoom} from "react-awesome-reveal";

const Contact = () => {
    return (
        <div id="contacts" className={style.contacts}>
            <div className={style.contactsContainer}>
                <Title title="Contact Me"/>
                <Zoom>
                <form className={style.contactForm}>
                    <Fade >
                        <input className={style.input} placeholder={"Type your name*"}/>
                    </Fade>
                    <Fade >
                    <input className={style.input} placeholder={"Type your email*"}/>
                    </Fade>
                    <Fade >
                    <textarea className={style.textarea} placeholder={"Type your massage*"}></textarea>
                    </Fade >
                    <Slide direction={"up"}>
                        <Button buttonName={"Send message"} typeButton={"submit"}/>
                    </Slide>
                </form>
            </Zoom>
            </div>
        </div>
    );
};

export default Contact;