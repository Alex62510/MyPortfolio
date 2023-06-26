import React from 'react';
import style from './Nav.module.scss';

const Nav = () => {
    return (
        <div className={style.nav}>
            <a >main</a>
            <a >skills</a>
            <a >projects</a>
            <a >contacts</a>
        </div>
    );
};

export default Nav;