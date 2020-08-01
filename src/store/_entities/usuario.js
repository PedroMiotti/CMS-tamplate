// Redux
import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

// Helpers
import { authHeader } from '../../helpers/auth-header';


const slice = createSlice({
    name: "usuario",
    initialState: {
        loading: false,
        error: false,
        errorMessage: '',
        successMessage: '',
        success: false,
        id: null,
        login: "",
        nome: "",
        perfil: ""
    },
    reducers: {
        USER_REQUESTED: (usuario, action) => {
            usuario.loading = true;
            usuario.error = false;
            usuario.success = false;
            usuario.errorMessage = '';
            usuario.successMessage = '';
        },
        
        USER_FAILED: (usuario, action) => {
            usuario.loading = false;
            usuario.error = true;
            usuario.errorMessage = action.payload;
        },

        USER_INFO_SUCCESSFUL: (usuario, action) => {
            usuario.loading = false;
            usuario.id = action.payload.u.id;
            usuario.login = action.payload.u.login;
            usuario.nome = action.payload.u.nome;
            usuario.perfil = action.payload.u.perfil;
            
        },

        USER_CREATED_SUCCESSFUL: (usuario, action) => {
            usuario.loading = false;
            usuario.success = true;
            usuario.successMessage = action.payload.message;

        },

    }
});

export const { USER_REQUESTED, USER_FAILED, USER_INFO_SUCCESSFUL, USER_CREATED_SUCCESSFUL } = slice.actions;

export default slice.reducer;

const url = '/usuario';

export const userInfo = (id) => apiCallBegan({
        url: url + "/info",
        headers: authHeader(),
        method: "post",
        data: { id },
        onStart: USER_REQUESTED.type,
        onSuccess: USER_INFO_SUCCESSFUL.type,
        onError: USER_FAILED.type
});

export const createUser = (login, nome, perfil ) => apiCallBegan({
    url: url + "/criar",
    headers: authHeader(),
    method: "post",
    data: { login, nome, perfil },
    onStart: USER_REQUESTED.type,
    onSuccess: USER_CREATED_SUCCESSFUL.type,
    onError: USER_FAILED.type
});