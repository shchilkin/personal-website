import React, {useContext} from "react";
import ThemeContext from "../../../contexts/theme/ThemeContext";

const Page = ({children}) => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;

    return(
        <div className={`page ${darkMode ? 'Background-Dark':'Background-Light'}`}>
        {children}
        </div>
    )

};

export default Page