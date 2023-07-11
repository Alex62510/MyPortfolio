import React from 'react';
import style from './Main.module.scss'
import photo from './../assets/image/photo.png'

const Main = () => {
  const myPhoto={
       backgroundImage: `url(${photo})`,
   }
    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer}>
                <div className={style.text}>
                    <span>Hi everybody</span>
                    <h1>I am Alex Orlov</h1>
                    <p> Front-end Developer</p>
                </div>
                <div className={style.photo} style={myPhoto}></div>
            </div>
        </div>
    );
};

export default Main;