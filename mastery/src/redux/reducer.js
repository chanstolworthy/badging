import axios from 'axios'

const ADD_ITEM = 'ADD_ITEM'
const UPDATE_ITEM = 'UPDATE_ITEM'
const GET_ITEM = 'GET_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const ADD_ITEM_NAME = 'ADD_ITEM_NAME'
const ADD_ITEM_PRICE = 'ADD_ITEM_PRICE'
const ALERT = 'ALERT'

var initialState ={
    allItems:[],
    currentItem:'',
    currentItemPrice:'',
    name:'hello'
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_ITEM:
            return Object.assign({}, state, {allItems: action.payload})
        case ADD_ITEM_NAME:
            return Object.assign({}, state, {currentItem: action.payload})
        case ADD_ITEM_PRICE:
            return Object.assign({}, state, {currentItemPrice: action.payload})
        case ALERT:
            return alert()
        default:
        return state;
    }
}

export function getUsers(itemsGET){
    return {
        payload: itemsGET,
        type: GET_ITEM
    }
}

export function addItemCurrent(itemName){
    console.log('ITEM NAME REDUX', itemName)
    return {
        payload: itemName,
        type: ADD_ITEM_NAME
    }
}

export function addItemCurrentPrice(price){
    console.log('ITEM PRICE REDUX', price)
    return {
        payload: price,
        type: ADD_ITEM_PRICE
    }
        }
