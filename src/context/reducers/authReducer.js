import { SET_USER_DATA } from "../types"
import { Axios } from 'axios'
import { authAPI } from "../../api"

const initialState = {
    username: null,
    password: null,
    isFetching: false,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

export const setAuth = (username, password) => ({ type: SET_USER_DATA, payload: { username, password } })

export const login = (username, password) => async dispatch => {
    try {
        let data = await authAPI.login(username, password)
        console.log(data)
    } catch(e) {
        if(e) throw new Error()
    }
}