import React, {useContext} from "react";
import './Card.style.css'
import ThemeContext from "../../../context/theme/ThemeContext";

const Card = (props) => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;

    return <div className={`Card-${darkMode ? 'Dark' : 'Light'}`}>{props.children}</div>
};

export default Card;