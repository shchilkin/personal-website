import React, {useContext} from "react";
import ThemeContext from "../../../../contexts/theme/ThemeContext";

const Button = ({onClick, disabled = false, style, children, block = false, className = ''}) => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;

    return (
        <button
            style={style}
            className={`button ${block && 'button-block'} ${darkMode && 'button-dark'} ${className ? className : ""}`}
            onClick={onClick}
            disabled={disabled}>
            {children}
        </button>
    )
};

export default Button;