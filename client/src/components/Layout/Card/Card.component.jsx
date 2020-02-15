import React from "react";
import './Card.style.css'

const Card = (props) => {
    return <div className={'CRK-card'}>{props.children}</div>
};

export default Card;