import React from 'react';
import style from './RemoteWork.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";


const RemoteWork = () => {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={style.remoteWorkContainer}>
                <Title title="I am available for freelance"/>
                <Button buttonName={"Hire me"} typeButton={"button"}/>
            </div>
        </div>
    );
};
export default RemoteWork;