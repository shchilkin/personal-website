import React, {useContext} from "react";
import ThemeContext from "../../../context/theme/ThemeContext";

const TextArea = ({placeholder, value, onChange, onFocus, onBlur,required = false,  name, style}) => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;

    return(
        <textarea style={style}
            className={darkMode ? "Input-Dark" : "Input"}
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

export default TextArea;