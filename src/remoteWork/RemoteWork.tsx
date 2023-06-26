import React from 'react';
import style from './RemoteWork.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";


const RemoteWork = () => {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
                <Title title="I am available for freelance"/>

                <button className={style.button}>Hire me</button>
            </div>
        </div>
    );
};
export default RemoteWork;