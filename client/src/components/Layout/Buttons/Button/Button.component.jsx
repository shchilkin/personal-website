import React from "react";
import './Button.style.css';

const Button = ({image = null, text = '', onClick, disabled = false, style}) => {
    return <button style={style} className='button' onClick={onClick} disabled={disabled}>
        <img src={image} style={{ width: "24px" }} alt='arrow'/>
        {text}
    </button>
};

export default Button;