// Redux
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

// Helpers
import { authHeader } from '../../helpers/auth-header';


const slice = createSlice({
    name: "usuario",
    initialState: {
        loading: false,
        error: false,
        success: false,
        errorMessage: '',
        successMessage: '',
        id: null,
        login: "",
        nome: "",
        perfil: null,
        updateUserList: false,
        listaUsuarios: []
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
            usuario.perfil = action.payload.u.perf_id;
            
        },

        USER_CREATED_SUCCESSFUL: (usuario, action) => {
            usuario.loading = false;
            usuario.success = true;
            usuario.successMessage = action.payload.message;

        },

        USER_EDITED_SUCCESSFUL: (usuario, action) => {
            usuario.loading = false;
            usuario.success = true;
            usuario.successMessage = action.payload.message;
        },

        USER_DELETED_SUCCESSFUL: (usuario, action) => {
            usuario.loading = false;
            usuario.error = false;
            usuario.success = true;
            usuario.successMessage = action.payload.message;
            usuario.updateUserList = true; 

        },

        USER_LIST_SUCCESSFUL: (usuario, action) => {
            usuario.loading = false;
            usuario.error = false;
            usuario.listaUsuarios = action.payload;
        },

        USER_EDIT_PROFILE_SUCCESSFUL: (usuario, action) => {
            usuario.loading = false;
            usuario.error = false;
            usuario.success = true;
            usuario.successMessage =  action.payload.message;
            usuario.errorMessage =  action.payload.message;


            localStorage.removeItem("jwt")
            localStorage.setItem("jwt", action.payload.token)
            
        },

        

    }
});

export const { USER_REQUESTED, USER_FAILED, USER_INFO_SUCCESSFUL, USER_CREATED_SUCCESSFUL, USER_LIST_SUCCESSFUL, USER_EDITED_SUCCESSFUL, USER_DELETED_SUCCESSFUL, USER_EDIT_PROFILE_SUCCESSFUL } = slice.actions;

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

export const listUser = () => apiCallBegan({
    url: url + "/listar",
    headers: authHeader(),
    onStart: USER_REQUESTED.type,
    onSuccess: USER_LIST_SUCCESSFUL.type,
    onError: USER_FAILED.type
})

export const editUser = (id, nome, perfil ) => apiCallBegan({
    url: url + "/editar",
    headers: authHeader(),
    method: "post",
    data: { id, nome, perfil },
    onStart: USER_REQUESTED.type,
    onSuccess: USER_EDITED_SUCCESSFUL.type,
    onError: USER_FAILED.type
});

export const deleteUser = (id) => apiCallBegan({
    url: url + "/excluir",
    headers: authHeader(),
    method: "post",
    data: { id },
    onStart: USER_REQUESTED.type,
    onSuccess: USER_DELETED_SUCCESSFUL.type,
    onError: USER_FAILED.type
})

export const editUserProfile = (id, usuario, senhaAtual, novaSenha) => apiCallBegan({
    url: url + "/editarPerfil",
    headers: authHeader(),
    method: "post",
    data: { id, usuario, senhaAtual, novaSenha },
    onStart: USER_REQUESTED.type,
    onSuccess: USER_EDIT_PROFILE_SUCCESSFUL.type,
    onError: USER_FAILED.type
})