import React from 'react';
import style from './Contact.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";

const Contact = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title="Contakts"/>
                <form className={style.contactForm}>
                    <input className={style.input}/>
                    <input className={style.input}/>
                    <textarea className={style.textarea}></textarea>
                    <button type='submit' className={style.submitButton}>SEND</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;