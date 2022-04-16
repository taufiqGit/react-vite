import { configureStore } from '@reduxjs/toolkit'
import postSlice from './postSlice.js'
import UISlice from './uiSlice.js'

const store = configureStore({
    reducer: {
        post: postSlice.reducer,
        ui: UISlice.reducer
    }
})

export default store