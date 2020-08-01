// Redux
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

import moment from "moment";



const slice = createSlice({
    name: "perfil",
    initialState: {
        loading: false,
        error: false,
        lastFetch: null,
        lista: [],
    },
    reducers: {
        PERFIL_REQUESTED: (perfil, action) => {
            perfil.loading = true;
            
        },

        PERFIL_SUCCESSFUL: (perfil, action) => {
            perfil.loading = false;
            perfil.lista = action.payload;
            perfil.lastFetch = Date.now();
            
        },

        PERFIL_FAILED: (perfil, action) => {
            perfil.loading = false;
            perfil.error = true;
            
        }
    }
});

export const { PERFIL_REQUESTED, PERFIL_SUCCESSFUL, PERFIL_FAILED } = slice.actions;

export default slice.reducer;

const url = '/perfil';

export const getListaPerfil = () => (dispatch, getState) => {
    const { lastFetch } = getState().entitie.perfil;
  
    const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
    if (diffInMinutes < 10) return;
  
    return dispatch(
      apiCallBegan({
        url: url + "/lista",
        onStart: PERFIL_REQUESTED.type,
        onSuccess: PERFIL_SUCCESSFUL.type,
        onError: PERFIL_FAILED.type
      })
    );
  };