import React, {useState} from 'react';
import style from './burgerNav.module.scss';
import {Link} from "react-scroll";

const BurgerNav = () => {
    const [bMenuOn, setBMenuOn] = useState<boolean>(false)
    const bMenuOnClick = () => {
        setBMenuOn(!bMenuOn)
    }

    return (
        <div className={style.burgerNav}>
            <div className={bMenuOn ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
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
                      offset={-120}
                >skills</Link>
                <Link to={"projects"}
                      activeClass={style.active}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-120}
                >projects</Link>
                <Link to="contacts"
                      activeClass={style.active}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-80}
                >contacts</Link>
            </div>
            <div className={style.burgerBtn} onClick={bMenuOnClick}></div>
        </div>
    );
};

export default BurgerNav;