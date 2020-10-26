
import actionTypes from './itemTypes'
import {createAction} from '@reduxjs/toolkit'
// const addItem = createAction(actionTypes.ADD, (name, number) => ({
//     payload: { items: {
//         id: uuidv4(),
//         name,
//         number
//     },
//     },
// }))

const addItemRequest = createAction("items/addRequest")
const addItemSuccess = createAction("items/addSuccess")
const addItemError = createAction("items/addError")

const fetchItemRequest = createAction("items/fetchRequest")
const fetchItemSuccess = createAction("items/fetchSuccess")
const fetchItemError = createAction("items/fetchError")

const removeItemRequest = createAction("items/removeRequest")
const removeItemSuccess = createAction("items/removeSuccess")
const removeItemError = createAction("items/removeError")


const setFilter = createAction(actionTypes.SETFILTER, filter => ({
    payload: {
        filter,
    },
}));

const setVisible = createAction(actionTypes.TOGGLENOT)

export default {
    removeItemRequest,
    removeItemSuccess,
    removeItemError,
    addItemRequest,
    addItemSuccess,
    addItemError,
    fetchItemRequest,
    fetchItemSuccess,
    fetchItemError,
    setFilter,
    setVisible
}