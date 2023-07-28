import style from "../Footer.module.scss";
import React, {FC} from "react";
type Props={
    item: { backgroundImage:string}
}
export const ItemSocial:FC<Props>=({item})=>{
    return (
        <div className={style.itemSocial} style={item}></div>
    )
}