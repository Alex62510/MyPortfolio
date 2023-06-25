import React from 'react';
import style from './Contact.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";

const Contact = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title="Contact Me"/>
                <form className={style.contactForm}>
                    <input className={style.input} placeholder={"Name*"}/>
                    <input className={style.input} placeholder={"Email*"}/>
                    <textarea className={style.textarea} placeholder={"Your massage*"}></textarea>
                    <button type='submit' className={style.submitButton}>Send message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;