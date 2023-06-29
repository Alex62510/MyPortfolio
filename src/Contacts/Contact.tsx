import React from 'react';
import style from './Contact.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";

const Contact = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title="Contact Me"/>
                <form className={style.contactForm}>
                    <input className={style.input} placeholder={"Type your name*"}/>
                    <input className={style.input} placeholder={"Type your email*"}/>
                    <textarea className={style.textarea} placeholder={"Type your massage*"}></textarea>
                    {/*<button type='submit' className={style.submitButton}>Send message</button>*/}
                    <Button buttonName={"Send message"} typeButton={"submit"}/>
                </form>
            </div>
        </div>
    );
};

export default Contact;