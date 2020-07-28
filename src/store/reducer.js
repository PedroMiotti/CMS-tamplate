// Redux
import { combineReducers } from 'redux';

// Toplevel Slices
import authReducer from './_auth'
import uiReducer from './_ui'



export default combineReducers({
    authenticate: authReducer,
    ui: uiReducer,
})