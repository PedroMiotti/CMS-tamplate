// Redux
import { createSlice, createSelector } from "@reduxjs/toolkit";

// API
import { apiCallBegan } from '../api'

// Helper
import history from '../../helpers/history'

// JWT
const jwtDecode = require('jwt-decode');

const hasToken = localStorage.getItem('jwt')

let userInfo = jwtDecode(hasToken);

const slice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: hasToken ? true : false,
        loading: false,
        error: false,
        user: hasToken ? userInfo.u : {}, 
    },
    reducers: {
        LOGIN_REQUESTED: (auth, action) => {
            auth.loading = true;
            auth.error = false;
        },

        LOGIN_SUCCESSFUL: (auth, action) => {
            auth.loading = false;
            auth.isLoggedIn = true;

            localStorage.setItem("jwt", action.payload.token)
            history.push("/home")
            window.location.reload(true); //TODO - Find better way
            
        },
        
        LOGIN_FAILED: (auth, action) => {
            auth.loading = false;
            auth.error = true;
            
        },

        LOGOUT: (auth, action) => {
            auth.isLoggedIn = false;
            auth.user = {};

            localStorage.removeItem("jwt")
            history.push("/")
        }

    }
});

export const { LOGIN_REQUESTED, LOGIN_SUCCESSFUL, LOGIN_FAILED, LOGOUT} = slice.actions;

export default slice.reducer;

const url = "/usuario"

// Action Creators

export const login = (username, passwd) => apiCallBegan({
        url: url + "/login",
        method: "post",
        data: {username, password: passwd},
        onStart: LOGIN_REQUESTED.type,
        onSuccess: LOGIN_SUCCESSFUL.type,
        onError: LOGIN_FAILED.type
});






