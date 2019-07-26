import axios from 'axios'
import {ADD_TO_CART, GET_CART, DELETE_FROM_CART} from './actionTypes'

const initialState = {
    cart: [],
    error: false
}
export function addToCart(product_id, list_id, quantity){
    let data = axios.post('/api/add/cart',{product_id, list_id, quantity})
    .then(res => res.data)
    return{
        type: ADD_TO_CART,
        payload: data
    }
}

export function getCart(user_id){
    let data = axios.get(`/api/cart/${user_id}`).then( res => res.data)
    return{
        type: GET_CART,
        payload: data
    }
}

export function removeFromCart(id){
    let data = axios.delete(`/api/cart/delete/${id}`).then(res => res.data)
    return{
        type: DELETE_FROM_CART,
        payload: data
    }
}

export default function(state = initialState, action){
    let {type, payload} = action
    switch(type){
        case ADD_TO_CART + '_FULFILLED':
            return{...state, cart: payload, error: false}
        case ADD_TO_CART + '_REJECTED':
            return{...state, error: payload}
        case GET_CART + '_FULFILLED':
            return{...state, cart: payload, error: false}
        case GET_CART + '_REJECTED':
            return{...state, error: payload}
        case DELETE_FROM_CART + '_FULFILLED':
            return{...state, cart: payload, error: false}
        case DELETE_FROM_CART + '_REJECTED':
            return{...state, error: payload}
        default:
            return state
    }
}