import React from 'react';
import style from './RemoteWork.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";


const RemoteWork = () => {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
                <Title title="I am available for freelancer"/>

                <button className={style.button}>Hire me</button>
            </div>
        </div>
    );
};
export default RemoteWork;