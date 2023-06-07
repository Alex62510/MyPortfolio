import React from 'react';
import style from './Contact.module.css';
import styleContainer from './../common/styles/Container.module.css'

const Contact = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contact</h2>
                <form className={style.contactForm}>
                    <input className={style.input}/>
                    <input className={style.input}/>
                    <textarea className={style.textarea}></textarea>
                </form>
                <button>SEND</button>
            </div>
        </div>
    );
};

export default Contact;