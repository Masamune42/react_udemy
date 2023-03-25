import { useState } from "react";
import './Item.css'
import { ReactComponent as Cat } from "./cat.svg";

function Item() {

    return (
        <div>
            <h1 className="titre-item">Hello depuis Item</h1>
            <img src={process.env.PUBLIC_URL + `/images/imgChatRoux.jpg`} alt="" />
            <Cat />
        </div>
    )
}

export default Item;