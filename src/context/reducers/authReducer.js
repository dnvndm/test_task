import { SET_USER_DATA } from "../types"
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
                ...action.payload,
            }

        default:
            return state
    }
}

export const setAuth = (username, password, isAuth) => ({ type: SET_USER_DATA, payload: { username, password, isAuth } })

export const login = (username, password, isAuth) => async dispatch => {
    try {
        let response = await authAPI.login(username, password, isAuth)
        dispatch(setAuth(username, password, true))
        if(response?.data?.access) {
            return isAuth === true
        }
        console.log(isAuth)
    } catch (e) {
        if (e) throw e
    }
}

// Test_ultra_task / T54321oikb 