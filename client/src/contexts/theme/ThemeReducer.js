import { CHANGE_THEME } from '../types';

export default (state, action) => {
    switch (action.type){
        case CHANGE_THEME:
            localStorage.setItem('theme',(!state.darkMode).toString());
            return {
                ...state,
                darkMode: !state.darkMode
            };
    }
};