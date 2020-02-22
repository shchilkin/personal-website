import React, {useReducer} from "react";
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    CLEAR_ERRORS,
    USER_LOADED,
    LOGOUT,
    AUTH_ERROR
} from '../types'

const AuthState = props => {
    const initialState = {
        token:  localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null,
        user: null
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //  Load user

    //  Register user

    //  Log in user

    //  Logout

    //  Clear Errors

    return (
        <AuthContext.Provider
            value={{
                token:  state.token,
                isAuthenticated:  state.isAuthenticated,
                loading:  state.loading,
                user:  state.user,
                error:  state.error,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthState;