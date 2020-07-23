// Redux
import { combineReducers } from "redux";

// Auth Slices
import authReducer from "./auth"


export default combineReducers({
    auth: authReducer,
})

