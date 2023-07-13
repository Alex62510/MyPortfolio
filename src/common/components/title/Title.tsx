import React from 'react';
import style from './Title.module.scss'
import {Bounce, Fade, Flip, Rotate, Zoom} from "react-awesome-reveal";

export type TitlePropsType={
    title:string
}
const Title = (props:TitlePropsType) => {
    return (
        <div className={style.title}>
            <Bounce  >
                <h2>{props.title} </h2>
            </Bounce>

        </div>
    );
};
export default Title;