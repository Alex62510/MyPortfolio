import React from 'react';
import style from './Nav.module.scss';

const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.main}>main</a>
            <a className={style.skills}>skills</a>
            <a className={style.project}>projects</a>
            <a className={style.contacts}>contacts</a>
        </div>
    );
};

export default Nav;