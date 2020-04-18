import {
    CHANGE_THEME,
    CHANGE_COLOR
} from '../types';

import {
    calculateShadows,
    fontColor,
    toHex,
    isHexValid,
    hexToRGB
}from '../../components/pages/SoftUIGenerator/Functions.SoftUIGenerator'

function numberRangeCheck(colorValue) {
    if (parseInt(colorValue) > 255) {
        return 255
    } else if (parseInt(colorValue) < 0) {
        return 0
    } else {
        return parseInt(colorValue)
    }
}

export default (state, action) => {
    switch (action.type){
        case CHANGE_THEME:
            localStorage.setItem('theme',(!state.darkMode).toString());
            return {
                ...state,
                darkMode: !state.darkMode
            };
        case CHANGE_COLOR:
            switch (action.payload.colorName) {
                //TODO Red Green and Blue return seems similar => Create function
                case "Red":
                    console.log('Change Red');
                    console.log('state', state)
                    console.log('action', action)
                    return {
                        ...state,
                        Red: numberRangeCheck(action.payload.colorValue),
                        shadows: calculateShadows(
                            numberRangeCheck(action.payload.colorValue),
                            state.Green,
                            state.Blue,
                            state.lightShadowFactor,
                            state.darkShadowFactor),
                        font: fontColor(
                            numberRangeCheck(action.payload.colorValue),
                            state.Green,
                            state.Blue
                        ),
                        hexColor: (toHex(numberRangeCheck(action.payload.colorValue))
                            +toHex(state.Green)+
                            toHex(state.Blue)
                        )
                    }
                case "Green":
                    console.log('Change Green');
                    console.log('state', state);
                    console.log('action', action);
                    return {
                        ...state,
                        Green: numberRangeCheck(action.payload.colorValue),
                        shadows: calculateShadows(
                            state.Red,
                            numberRangeCheck(action.payload.colorValue),
                            state.Blue,
                            state.lightShadowFactor,
                            state.darkShadowFactor),
                        font: fontColor(
                            state.Red,
                            numberRangeCheck(action.payload.colorValue),
                            state.Blue
                        ),
                        hexColor: (
                            toHex(state.Red)+
                            toHex(numberRangeCheck(action.payload.colorValue))
                            +toHex(state.Blue)
                        )
                    }
                case "Blue":
                    return {
                        ...state,
                        Blue: numberRangeCheck(action.payload.colorValue),
                        shadows: calculateShadows(
                            state.Red,
                            state.Green,
                            numberRangeCheck(action.payload.colorValue),
                            state.lightShadowFactor,
                            state.darkShadowFactor),
                        font: fontColor(
                            state.Red,
                            state.Green,
                            numberRangeCheck(action.payload.colorValue),
                        ),
                        hexColor: (
                            toHex(state.Red)
                            +toHex(state.Green)+
                            toHex(numberRangeCheck(action.payload.colorValue))
                        )
                    }
                case "Hex":
                    console.log('Change Hex');
                    console.log('state', state)
                    console.log('action', action)
                    let hexString = (action.payload.colorValue).replace(/#/, '')
                    if (isHexValid(hexString)){
                        return {
                            ...state,
                            hexColor: hexString,
                            Red: hexToRGB(hexString).Red,
                            Green: hexToRGB(hexString).Green,
                            Blue: hexToRGB(hexString).Blue,
                            shadows: calculateShadows(
                                hexToRGB(hexString).Red,
                                hexToRGB(hexString).Green,
                                hexToRGB(hexString).Blue,
                                state.lightShadowFactor,
                                state.darkShadowFactor),
                            font: fontColor(
                                hexToRGB(hexString).Red,
                                hexToRGB(hexString).Green,
                                hexToRGB(hexString).Blue,
                            )
                        }
                    } else return {
                        ...state,
                        hexColor: hexString,
                    }
                default:
                    return state;
        }
    }
};