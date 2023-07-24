import React from 'react';
import style from './Nav.module.scss';
import {Link} from "react-scroll";

const Nav = () => {
    return (
        <div className={style.nav}>
            <Link to="main"
                  // className={style.main}
                  activeClass={style.active}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={0}
            >Main</Link>
            <Link to="skills"
                  // className={style.skills}
                  activeClass={style.active}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
            >Skills</Link>
            <Link to={"projects"}
                  activeClass={style.active}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  // className={style.project}
            >Projects</Link>
            <Link to="contacts"
                  // className={style.contacts}
                  activeClass={style.active}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-20}
            >Contacts</Link>
        </div>
    );
};

export default Nav;