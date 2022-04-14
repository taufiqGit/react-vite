import { configureStore } from '@reduxjs/toolkit'
import postSlice from './postSlice.js'
const store = configureStore({
    reducer: {
        post: postSlice.reducer
    }
})

export default store