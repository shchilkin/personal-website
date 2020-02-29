import React, {useReducer} from "react";
import Axios from 'axios'
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import setAuthToken from "../../utils/setAuthToken";
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
    const loadUser = async () => {
      if (localStorage.token) {
          setAuthToken(localStorage.token);
      }

        try {
            const response = await Axios.get('/api/auth');
            dispatch({
                type:USER_LOADED,
                payload:response.data
            })
        } catch (error) {
            dispatch({
                type:AUTH_ERROR
            })
        }
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
            });

            await loadUser();
        } catch (error) {
            console.log(error);
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data.message
            })
        }
    };

    //  Log in user
    const login = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try{
            const response = await Axios.post('/api/auth', formData, config);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });

            await loadUser();
        } catch (error) {
            console.log(error);
            dispatch({
                type: LOGIN_FAIL,
                payload: error.response.data.message
            })
        }
    };

    //  Logout
    const logout = () => dispatch({type: LOGOUT});

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
                login,
                loadUser,
                register,
                logout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthState;