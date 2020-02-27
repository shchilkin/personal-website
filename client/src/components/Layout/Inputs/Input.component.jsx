import React, {useContext} from "react";
import './Input.style.css'
import ThemeContext from "../../../context/theme/ThemeContext";

const Input = ({type, placeholder, value, onChange, onFocus, onBlur,required = false,  name}) => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;

    return(
        <input
            className={darkMode ? "Input-Dark" : "Input"}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            required={required}
            name={name}
        />
    )
};

export default Input;