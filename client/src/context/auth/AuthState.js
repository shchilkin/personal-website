import React, {useReducer} from "react";
import Axios from 'axios'
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    CLEAR_ERRORS,
    USER_LOADED,
    LOGOUT,
    AUTH_ERROR
} from '../types';

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
    const loadUser = () => {
        console.log('Load USer')
    };

    //  Register user
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try{
            const response = await Axios.post('/api/users', formData, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data.msg
            })
        }
    };

    //  Log in user
    const loadInUser = () => {
        console.log('Load USer')
    };

    //  Logout
    const logOut = () => {
        console.log('Load USer')
    };

    //  Clear Errors
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

    return (
        <AuthContext.Provider
            value={{
                token:  state.token,
                isAuthenticated:  state.isAuthenticated,
                loading:  state.loading,
                user:  state.user,
                error:  state.error,
                clearErrors,
                loadInUser,
                loadUser,
                register,
                logOut
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthState;