import React from 'react';
import style from './Contact.module.scss';
import Title from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";
import {Fade, Slide, Zoom} from "react-awesome-reveal";
import {Form, useFormik} from "formik";

type ContactType = {
    name: string,
    email: string,
    text: string,
}
const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            text: ""
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            formik.resetForm()
        },
    })
    return (
        <div id="contacts" className={style.contacts}>
            <div className={style.contactsContainer}>
                <Title title="Contact Me"/>
                <Zoom>
                    <form onSubmit={formik.handleSubmit} className={style.contactForm} id='contact-form'>
                        <Fade>
                            <input
                                className={style.input}
                                placeholder={"Type your name*"}
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                        </Fade>
                        <Fade>
                            <input
                                className={style.input}
                                placeholder={"Type your email*"}
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </Fade>
                        <Fade>
                            <textarea
                                className={style.textarea}
                                placeholder={"Type your massage*"}
                                name="text"
                                onChange={formik.handleChange}
                                value={formik.values.text}
                            />
                        </Fade>
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