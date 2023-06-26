import React from 'react';
import style from './Footer.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import linkImg from "../assets/image/linkedin.svg";
import gitHubImg from "../assets/image/github.svg";
import telegramImg from "../assets/image/telegram.svg";
import vKImg from "../assets/image/vk.svg";

const Footer = () => {
    const LinkIn={
        backgroundImage: `url(${linkImg})`
    };
    const gitHub={
        backgroundImage: `url(${gitHubImg})`
    };
    const Telegram={
        backgroundImage: `url(${telegramImg})`
    };
    const vK={
        backgroundImage: `url(${vKImg})`,
    };
    return (
        <div className={style.FooterBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={"Let's Work Together!"}/>
                <div className={style.footerSocial}>
                    <div className={style.itemSocial} style={LinkIn}></div>
                    <div className={style.itemSocial} style={gitHub}></div>
                    <div className={style.itemSocial} style={Telegram}></div>
                    <div className={style.itemSocial} style={vK}></div>
                </div>
                <span className={style.rights}>2023 All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;