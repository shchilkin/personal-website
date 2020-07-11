import React, { useReducer } from "react";
import ThemeContext from './ThemeContext';
import ThemeReducer from './ThemeReducer';
import { CHANGE_THEME } from '../types';


const  ThemeState = props => {
    // TODO Rename variable from
    //  getThemeStateFromLocalStorage
    //  to
    //  SetInitialTheme
    const getThemeStateFromLocalStorage = () => {
        let state = JSON.parse(localStorage.getItem('theme'));
        if (state === null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.style = 'background: #121212;';
                // Use Dark mode scheme
                return true
            } else {
                document.body.style = 'background: #F0F0F0;';
                // Use Default (lightmode) mode scheme
                return false
            }
        } else {
            if (state){
                document.body.style = 'background: #F0F0F0;';
            } else if (!state){
                document.body.style = 'background: #121212;';
            }
            return state
        }
    };

    // TODO Delete or rewrite when problem with background (color mismatch) fixed
    const changeBackground = () => {
        const state = JSON.parse(localStorage.getItem('theme'));
        if (state === null) {
            document.body.style = 'background: #F0F0F0;';
        } else {
            if (state){
                document.body.style = 'background: #121212;';
            } else if (!state){
                document.body.style = 'background: #F0F0F0;';
            }
        }
    };

    const initialState = { darkMode: getThemeStateFromLocalStorage() };

    const [state, dispatch] = useReducer(ThemeReducer, initialState);

    //  Change theme | Dark mode
    const changeTheme = () => {
        dispatch({
            type: CHANGE_THEME,
            payload: initialState.darkMode
        });
    };


    return (
        <ThemeContext.Provider value={{
            changeTheme,
            changeBackground,
            darkMode: state.darkMode,
        }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
};

export default ThemeState;