import style from "../Footer.module.scss";
import React, {FC} from "react";

type Props = {
    item: { backgroundImage: string }
    link: string
}
export const ItemSocial: FC<Props> = ({item, link}) => {
    return (
        <div>
            <a href={link}>
                <div className={style.itemSocial} style={item}></div>
            </a>
        </div>
    )
}