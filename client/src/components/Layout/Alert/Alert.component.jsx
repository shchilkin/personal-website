import React, {useContext} from "react";
import ThemeContext from "../../../contexts/theme/ThemeContext";

const Alert = ({message, type}) => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;

    return(
        (message !== null && type !== null)  && (
            <div className={`${darkMode ? 'Alert-Dark' : 'Alert-Light'} Alert-${type}`}>{message}</div>
        )
    )
};

export default Alert;
