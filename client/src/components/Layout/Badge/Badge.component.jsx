import React, {useContext} from "react";
import ThemeContext from '../../../contexts/theme/ThemeContext'
import './Badge.style..css'

const Badge = ({children, type = 'normal'}) => {
    const themeContext = useContext(ThemeContext);
    const {darkMode} = themeContext;

    const badgeNormal = (
        <span className={`Badge-${darkMode ? "Dark" : 'Light'}`}>{children}</span>
    );
    const badgeSmall = (
        <span className={`Badge-Small-${darkMode ? "Dark" : 'Light'}`}>{children}</span>
    );

    if (type === 'normal'){
        return badgeNormal
    } else if (type === 'small') {
        return badgeSmall
    } else return null
};

export default Badge;