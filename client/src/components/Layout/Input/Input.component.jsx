import React from "react";

const Input = ({className = 'Input', type, placeholder, value, onChange, onFocus, onBlur}) => {
    return(
        <input
            className={className}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    )
};

export default Input;