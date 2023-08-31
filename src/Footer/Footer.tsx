import React from 'react';
import style from './Footer.module.scss'
import Title from "../common/components/title/Title";
import linkImg from "../assets/image/linkedin2.svg";
import gitHubImg from "../assets/image/github.svg";
import telegramImg from "../assets/image/telegram.svg";
import viberImg from "../assets/image/viber.png";
import {Bounce, Flip} from "react-awesome-reveal";
import {ItemSocial} from "./itemSosial/itemSosial";

const Footer = () => {
    const LinkIn = {
        backgroundImage: `url(${linkImg})`,
        URL:'https://www.linkedin.com/in/alex-orlov-8a2078287/'
    };
    const gitHub = {
        backgroundImage: `url(${gitHubImg})`,
        URL:'https://github.com/Alex62510'
    };
    const Telegram = {
        backgroundImage: `url(${telegramImg})`,
        URL:'https://t.me/AliakseiOrlov'
    };
    const viber = {
        backgroundImage: `url(${viberImg})`,
        URL:'viber://chat?number=%2375292780739'
    };

    const itemSocial = [LinkIn, gitHub, Telegram, viber]
    return (
        <div id="footer" className={style.FooterBlock}>
            <div className={style.footerContainer}>
                <Title title={"Let's Work Together!"}/>
                <div className={style.footerSocial}>
                    <Flip>
                        {itemSocial.map((t, index) => <ItemSocial link={t.URL} item={t} key={index}/>)}
                    </Flip>
                </div>
                <Bounce>
                    <span className={style.rights}>2023 All rights reserved</span>
                </Bounce>

            </div>
        </div>
    );
};
export default Footer;