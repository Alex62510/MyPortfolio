import React from 'react';
import style from './Contact.module.scss';
import Title from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";
import {Fade, Flip, Rotate, Slide, Zoom} from "react-awesome-reveal";

const Contact = () => {
    return (
        <div className={style.contacts}>
            <div className={style.contactsContainer}>
                <Title title="Contact Me"/>
                <Zoom>
                <form className={style.contactForm}>
                    <Rotate direction={"top-left"}>
                        <input className={style.input} placeholder={"Type your name*"}/>
                    </Rotate>
                    <Rotate direction={"bottom-right"}>
                    <input className={style.input} placeholder={"Type your email*"}/>
                    </Rotate>
                    <Rotate direction={"bottom-left"}>
                    <textarea className={style.textarea} placeholder={"Type your massage*"}></textarea>
                    </Rotate >
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