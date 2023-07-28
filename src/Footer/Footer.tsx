import React from 'react';
import style from './Footer.module.scss'
import Title from "../common/components/title/Title";
import linkImg from "../assets/image/linkedin2.svg";
import gitHubImg from "../assets/image/github.svg";
import telegramImg from "../assets/image/telegram.svg";
import vKImg from "../assets/image/vk.svg";
import {Bounce, Flip} from "react-awesome-reveal";
import {ItemSosial} from "./itemSosial/itemSosial";

const Footer = () => {
    const LinkIn = {
        backgroundImage: `url(${linkImg})`
    };
    const gitHub = {
        backgroundImage: `url(${gitHubImg})`
    };
    const Telegram = {
        backgroundImage: `url(${telegramImg})`
    };
    const vK = {
        backgroundImage: `url(${vKImg})`,
    };

    const itemSosial = [LinkIn, gitHub, Telegram, vK]
    return (
        <div id="footer" className={style.FooterBlock}>
            <div className={style.footerContainer}>
                <Title title={"Let's Work Together!"}/>
                <div className={style.footerSocial}>
                    <Flip>
                        {itemSosial.map((t, index) => <ItemSosial item={t} key={index}/>)}
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