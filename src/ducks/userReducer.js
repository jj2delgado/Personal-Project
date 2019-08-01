import axios from 'axios'
import {REGISTER, LOGIN, LOGOUT, EDIT_USER} from './actionTypes'

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

export const editUser = (id, name_first, name_last, email) => {
    let data = axios.put(`/api/user/${id}`, {name_first, name_last, email})
    .then(res => res.data)
    return{type: EDIT_USER, payload: data}
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
            return{...state, error: payload}
        case LOGIN + '_FULFILLED':
            return{...state, user: payload, redirect: false, error: false}
        case LOGIN + '_REJECTED':
            return{...state, error: payload}
        case EDIT_USER + '_FULFILLED':
            return{...state, user: payload[0]}
        case EDIT_USER + '_REJECTED':
            return{...state, error: payload}
        case LOGOUT + '_FULFILLED':
            return{...state, user: {}, redirect: true, error: false}
        default:
            return state
    }
}