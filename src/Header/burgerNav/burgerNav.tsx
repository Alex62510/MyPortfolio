import React from 'react';
import style from './burgerNav.module.scss';
import {Link} from "react-scroll";

const BurgerNav = () => {
    return (
        <div className={style.burgerNav}>
            <div className={style.burgerNavItems}>
                <Link to="main"
                      activeClass={style.active}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={0}
                >main</Link>
                <Link to="skills"
                      activeClass={style.active}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={1}
                >skills</Link>
                <Link to={"projects"}
                      activeClass={style.active}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={1}
                >projects</Link>
                <Link to="contacts"
                      activeClass={style.active}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={60}
                >contacts</Link>
            </div>
            <div className={style.burgerBtn}></div>
        </div>
    );
};

export default BurgerNav;