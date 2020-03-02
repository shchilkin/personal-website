import React, {useContext} from "react";
import ThemeContext from "../../../contexts/theme/ThemeContext";
import '../../Layout/PageComponent.style.css'

//TODO remove this component hence it is temporary solution for background mismatch error
const AppPage = ({children}) => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode, changeBackground} = themeContext;
    changeBackground();

    return(
        <div className={`app ${darkMode ? 'Background-Dark':'Background-Light'}`}>
            {children}
        </div>
    )

};

export default AppPage