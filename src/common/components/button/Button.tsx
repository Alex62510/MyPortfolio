import React from 'react';
import style from "../../components/button/Button.module.scss";
import {Fade, Flip, Roll, Slide, Zoom} from "react-awesome-reveal";
type ButtonPropsType={
    buttonName:string
    typeButton:"button" | "submit" | "reset" | undefined
}


export const Button = (props:ButtonPropsType) => {
    return (
        <div>
            <Zoom>
                <button type={props.typeButton} className={style.button}>{props.buttonName}</button>
            </Zoom>

        </div>
    );
};

