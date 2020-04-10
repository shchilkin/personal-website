import React, {useContext} from "react";
import ThemeContext from "../../../../contexts/theme/ThemeContext";

const IconButton = ({image = null, onClick, disabled = false, style}) => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;

    return (
        <button style={style} className={`button ${darkMode && 'button-dark'}`} onClick={onClick} disabled={disabled}>
            <img src={image} style={{ width: "24px" }} alt='arrow'/>
        </button>
    )
};

export default IconButton;