import React, {useContext} from "react";
import ThemeContext from "../../../../contexts/theme/ThemeContext";

const LinkButton = ({onClick, disabled = false, style, children, block = false, className = '', href}) => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;

    return (
        <a
            style={style}
            href={href}
            className={`button ${block && 'button-block'} ${darkMode && 'button-dark'} ${className ? className : ""} ${darkMode ? 'Link-dark' : 'Link-light'}`}
        >
            {children}
        </a>
    )
};

export default LinkButton;