import React from 'react';
import style from './Title.module.scss'
import {Zoom} from "react-awesome-reveal";

export type TitlePropsType={
    title:string
}
const Title = (props:TitlePropsType) => {
    return (
        <div className={style.title}>
            <Zoom  >
                <h2>{props.title} </h2>
            </Zoom>

        </div>
    );
};
export default Title;