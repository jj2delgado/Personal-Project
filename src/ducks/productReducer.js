import axios from 'axios'
import { GET_PRODUCT } from './actionTypes'

const initialState ={
    product: [],
    error: false
}

export function getProduct(category){
    let data = axios.get(`/api/product/${category}`).then(res => res.data)
    return{
        type: GET_PRODUCT,
        payload: data
    }
}

export default function productReducer(state = initialState, action){
    let {type, payload } = action
    switch(type){
        case GET_PRODUCT + '_FULFILLED':
            return {product: payload, error: false}
        case GET_PRODUCT + '_REJECTED':
            return {...state, error: payload}
        default:
            return state
    }
}