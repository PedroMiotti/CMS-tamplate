// Redux
import { combineReducers } from "redux";

// Auth Slices
import sidenavReducer from "./sidenav"
import modalReducer from './modal'


export default combineReducers({
    sidenav: sidenavReducer,
    modal: modalReducer,
})

