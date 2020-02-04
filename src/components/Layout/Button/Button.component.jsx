import React from "react";
import  './Button.style.css';

const Button = ({image, onClick}) => {
    return <button className='button' onClick={onClick}>
        <img src={image} style={{ width: "24px" }} alt='arrow'/>
    </button>
};

export default Button;