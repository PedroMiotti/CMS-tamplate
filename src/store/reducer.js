// Redux
import { combineReducers } from 'redux';

// Toplevel Slices
import authReducer from './_auth'


export default combineReducers({
    authenticate: authReducer,
})