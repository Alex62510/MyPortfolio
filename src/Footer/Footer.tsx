import React from 'react';
import style from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.FooterBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.name}>Alex Orlov</h3>
                <div className={style.footerSocial}>
                    <div className={style.itemSocial}></div>
                    <div className={style.itemSocial}></div>
                    <div className={style.itemSocial}></div>
                    <div className={style.itemSocial}></div>
                </div>
                <div className={style.rights}>2023 All rights reserved</div>
            </div>
        </div>
    );
};

export default Footer;