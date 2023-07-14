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
                  offset={-90}
            >main</Link>
            <Link to="skills"
                  // className={style.skills}
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
                  // className={style.project}
            >projects</Link>
            <Link to="contacts"
                  // className={style.contacts}
                  activeClass={style.active}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={60}
            >contacts</Link>
        </div>
    );
};

export default Nav;