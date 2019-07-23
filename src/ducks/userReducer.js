import axios from 'axios'
import {REGISTER, LOGIN, LOGOUT} from './actionTypes'

const initialState = {
    user: {},
    redirect: false,
    error: false
}

export const register = (name_first, name_last, username, password, email) => {
    let data = axios
    .post('/api/register',{name_first, name_last, username, password, email})
    .then( res => res.data)
    return{
        type: REGISTER,
        payload: data
    }
}
export const login = (username, password) => {
    let data = axios.post('/api/login', {username, password}).then(res => res.data)
    return {type: LOGIN, payload: data}
}

export const logout = () => {
    return { type: LOGOUT, payload: axios.delete('/api/logout')}
}

export default function(state = initialState, action){
    let {type, payload} = action
    switch(type){
        case REGISTER + '_FULFILLED':
            return{...state, redirect: false, user: payload, error: false}
        case REGISTER + '_REJECTED':
            return {...state, error: payload}
        case LOGIN + '_FULFILLED':
            return{...state, user: payload, redirect: false, error: false}
        case LOGIN + '_REJECTED':
            return{...state, error: payload}
            //add case for logout
        case LOGOUT + '_FULFILLED':
            return{...state, user: {}, redirect: true, error: false}
        default:
            return state
    }
}