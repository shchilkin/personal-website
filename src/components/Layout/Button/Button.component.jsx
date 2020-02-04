import React from "react";
import  './Button.style.css';

const Button = ({image, onClick, disabled = false}) => {
    return <button className='button' onClick={onClick} disabled={disabled}>
        <img src={image} style={{ width: "24px" }} alt='arrow'/>
    </button>
};

export default Button;