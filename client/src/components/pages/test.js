import React, {Fragment, useContext} from "react";
import ThemeContext from '../../context/theme/ThemeContext'
import '../Layout/Input/Input.style.css'
import {Link} from "react-router-dom";

const Test = () => {
    const themeContext =  useContext(ThemeContext);
    const {changeTheme, darkMode} = themeContext;

    return(
        <Fragment>
            <div className={'container mt-5'}>
                <input
                    className={'Input'}
                    type='text'
                    placeholder={'Light theme'}
                />
            </div>
            <div className={'container mt-5 pt-3'} style={darkMode ? {backgroundColor:'#303030'} : {backgroundColor:'#F0F0F0'} }>
                <input
                className={darkMode ? 'Input-Dark' : 'Input'}
                type='text'
                placeholder={'Dark theme'}
                />
            </div>
            <div className={'container mt-3'}>
                <button className={'btn btn-primary'} onClick={changeTheme}>Switch to {darkMode ?  'light' :  'dark'} mode</button>
            </div>
            <Link to='/'>to homepage</Link>
        </Fragment>
    )
};

export default Test;