import React, {useReducer, useState} from "react";
import ThemeContext from './ThemeContext';
import ThemeReducer from './ThemeReducer';
import {
    CHANGE_COLOR,
    CHANGE_THEME
} from '../types';
import {
    calculateShadows,
    fontColor,
    toHex
} from '../../components/pages/SoftUIGenerator/Functions.SoftUIGenerator';


const  ThemeState = props => {


//Darkmode related code
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

//SoftUI generator related code

    const initialState = {
        darkMode: getThemeStateFromLocalStorage(),
        Red:204,
        Green: 187,
        Blue: 255,
        shadowBlur: 30,
        shadowLength: 5,
        borderRadius: 12,
        darkShadowFactor: .85,
        lightShadowFactor: 1.05
    };

    //  Calculate hexadecimal value of the color
    initialState.hexColor = (
        toHex(initialState.Red)
        +toHex(initialState.Green)+
        toHex(initialState.Blue)
    );

    //  Calculate contrast font color for background
    initialState.font = fontColor(
        initialState.Red,
        initialState.Green,
        initialState.Blue
    );

    // Calculate shadows
    initialState.shadows = calculateShadows(
        initialState.Red,
        initialState.Green,
        initialState.Blue,
        initialState.lightShadowFactor,
        initialState.darkShadowFactor
    );


    const [state, dispatch] = useReducer(ThemeReducer, initialState);

    //  Change theme | Dark mode
    const changeTheme = () => {
        dispatch({
            type: CHANGE_THEME,
            payload: initialState.darkMode
        });
    };

    const changeColor = (colorName,colorValue) => {
        dispatch({
            type: CHANGE_COLOR,
            payload: {colorName, colorValue}
        });
    };

    const changeBlur = (blurValue) => {
        dispatch({
            type: CHANGE_COLOR,
            payload: blurValue
        });
    };

    return (
        <ThemeContext.Provider value={{
            changeTheme,
            changeColor,
            changeBackground,
            font: state.font,
            shadows: state.shadows,
            colorRGB: {
                Red:state.Red,
                Green:state.Green,
                Blue:state.Blue
            },
            colorHEX: state.hexColor,
            darkMode: state.darkMode,
            shadowBlur: state.shadowBlur,
            shadowLength: state.shadowLength,
            borderRadius: state.borderRadius,
            darkShadowFactor: state.darkShadowFactor,
            lightShadowFactor: state.lightShadowFactor,
        }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
};

export default ThemeState;