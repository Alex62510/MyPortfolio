import React from 'react';
import style from './Footer.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";

const Footer = () => {
    return (
        <div className={style.FooterBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={"Let's Work Together!"}/>
                <div className={style.footerSocial}>
                    <div className={style.itemSocial}></div>
                    <div className={style.itemSocial}></div>
                    <div className={style.itemSocial}></div>
                    <div className={style.itemSocial}></div>
                </div>
                <span className={style.rights}>2023 All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;