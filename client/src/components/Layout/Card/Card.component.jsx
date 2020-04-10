import React, {useContext} from "react";
import ThemeContext from "../../../contexts/theme/ThemeContext";

const Card = (props) => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;

    return <div className={`Card-${darkMode ? 'Dark' : 'Light'}`}>{props.children}</div>
};

export default Card;