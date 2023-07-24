import React from 'react';
import style from './Contact.module.scss';
import Title from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";
import {Fade, Slide, Zoom} from "react-awesome-reveal";
import {useFormik} from "formik";
import axios from "axios";

type ContactType = {
    name: string,
    contactEmail: string,
    message: string,
}
const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            contactEmail: "",
            message: ""
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            formik.resetForm()
            axios.post("https://gmail-smtp-git-main-alex62510.vercel.app/sendMessage",values,{headers: {
                    'Content-Type': 'application/json'
                }})
                .then(()=>{
                    alert("Your message has been send")
                })
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
                                name="contactEmail"
                                onChange={formik.handleChange}
                                value={formik.values.contactEmail}
                            />
                        </Fade>
                        <Fade>
                            <textarea
                                className={style.textarea}
                                placeholder={"Type your massage*"}
                                name="message"
                                onChange={formik.handleChange}
                                value={formik.values.message}
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