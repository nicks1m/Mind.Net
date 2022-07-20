import {configureStore} from '@reduxjs/toolkit'
import itemsReducer from './actions'

export default configureStore({
    reducer:{
        items: itemsReducer,

    }
})