import React, {useReducer, useState} from "react";
import ThemeContext from './ThemeContext';
import ThemeReducer from './ThemeReducer';
import {CHANGE_THEME} from '../types'


const  ThemeState = props => {

    const getThemeStateFromLocalStorage = () => {
        let state = JSON.parse(localStorage.getItem('theme'));
        if (state === null) {
            return false
        } else {
            return state
        }
    };

    const initialState = {
        darkMode: getThemeStateFromLocalStorage()
    };

    const [state, dispatch] = useReducer(ThemeReducer, initialState);

    //  Change theme
    const changeTheme = () => {
        dispatch({
            type: CHANGE_THEME,
            payload: initialState.darkMode
        });
    };

    return (
        <ThemeContext.Provider value={{
            darkMode: state.darkMode,
            changeTheme
        }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
};

export default ThemeState;