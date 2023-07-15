import React from 'react';
import style from './Header.module.scss';
import Nav from "./Nav/Nav";
import BurgerNav from "./burgerNav/burgerNav";

const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
            <BurgerNav/>
        </div>
    );
};

export default Header;