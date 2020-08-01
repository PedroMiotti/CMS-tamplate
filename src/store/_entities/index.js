// Redux
import { combineReducers } from "redux";

// Auth Slices
import usuarioReducer from "./usuario"
import perfilReducer from './perfil'


export default combineReducers({
    usuario: usuarioReducer,
    perfil: perfilReducer,
})

