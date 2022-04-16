import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
    name: 'ui',
    initialState: {
        alert: false,
        message: '',
        status: ''
    },
    reducers: {
        loadingPost(state, action){
            state.alert = true
            state.message = `${action.payload} post in progess.`
            state.status = 'warning'
        },
        processPostSuccess(state, action){
            state.alert = true
            state.message = `${action.payload} post successfully.`
            state.status = 'success'
        },
        processPostFailed(state, action){
            state.alert = true
            state.message = `${action.payload} post failed.`
            state.status = `danger`
        },
        processPostEnded(state, action){
            state.alert = false
            state.message = ``
            state.status = ``
        }
    }
})

export const uiAction = UISlice.actions
export default UISlice