// Redux
import { combineReducers } from "redux";

// Auth Slices
import sidenavReducer from "./sidenav"


export default combineReducers({
    sidenav: sidenavReducer,
})

