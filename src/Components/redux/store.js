import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import itemsReducer from './item/itemReducer'

const defaultMiddle = getDefaultMiddleware()
const md1 = state => next => action => {
    next (action)
}
const store = configureStore({
    reducer: {
        items: itemsReducer,
    },
    middleware: [...defaultMiddle, md1 ]
})
export default store;