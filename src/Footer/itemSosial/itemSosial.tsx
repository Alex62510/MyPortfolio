import style from "../Footer.module.scss";
import React from "react";
type Props={
    item: { backgroundImage:string}
}
export const ItemSosial=(props:Props)=>{
    return (
        <div className={style.itemSocial} style={props.item}></div>
    )
}