import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { authReducer } from './authReducer'

export const rootReducer = combineReducers({
    form: formReducer,
    login: authReducer
})