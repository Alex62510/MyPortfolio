import React from 'react';
import style from "../../components/button/Button.module.scss";
type ButtonPropsType={
    buttonName:string
    typeButton:"button" | "submit" | "reset" | undefined
}


export const Button = (props:ButtonPropsType) => {
    return (
        <div>
            <button type={props.typeButton} className={style.button}>{props.buttonName}</button>
        </div>
    );
};

