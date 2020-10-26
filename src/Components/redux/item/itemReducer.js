
import {combineReducers} from 'redux';
import itemTypes from './itemTypes'
import {createReducer} from '@reduxjs/toolkit'
import itemsActions from './itemActions'



const itemsReducer = createReducer([], {
    [itemsActions.fetchItemSuccess]:(state, action) => action.payload,
    [itemsActions.addItemSuccess]:(state, action) => [...state, action.payload],
    [itemsActions.removeItemSuccess]:(state, action) => state.filter((contact) => contact.id !== action.payload)
    // [itemTypes.DELETE]: (state, action) => state.filter((contact) => contact.id !== action.payload.id)
})

const filter = createReducer("", {
    [itemTypes.SETFILTER]: (state, action) => action.payload.filter
})

const toggle = createReducer( false, {
    [itemTypes.TOGGLENOT]: (state) => !state,
}
)
const loading = createReducer(false, {
    [itemsActions.fetchItemRequest]: () => true,
    [itemsActions.addItemRequest]: () => true,
    [itemsActions.fetchItemSuccess]: () => false,
    [itemsActions.addItemSuccess]: () => false,
    [itemsActions.fetchItemError]: () => false,
    [itemsActions.addItemError]: () => false,
} )

export default combineReducers({
    items: itemsReducer,
    filter,
    toggle,
    loading
})