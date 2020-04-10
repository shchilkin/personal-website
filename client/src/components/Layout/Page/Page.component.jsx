import React, {useContext} from "react";
import ThemeContext from "../../../contexts/theme/ThemeContext";
import Navbar from "../../Old_Navbar";

const Page = ({children}) => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;

    return(
        <div className={`page ${darkMode ? 'Background-Dark':'Background-Light'}`}>
            <Navbar/>
        {children}
        </div>
    )

};

export default Page