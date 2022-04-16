import { createSlice } from "@reduxjs/toolkit"

const postSlice = createSlice({
    name: 'post',
    initialState: { 
        postList: [], 
        totalPost: 0, 
        isEdit: {
            status: false,
            id: '',
        }
    },
    reducers: {
        getAllTodo(state, action){
            state.postList = action.payload.reverse()
            state.totalPost = action.payload.length
        },
        addTodo(state, action){
            state.postList.unshift(action.payload) 
            state.totalPost++
        },
        delTodo(state, action){
            let delById = state.postList.filter(post => post.id !== action.payload)
            state.postList = delById
            state.totalPost--
        }, 
        setIsEdit(state, action){
            state.isEdit = action.payload
        },
        editTodo(state, action){
            let index = state.postList.findIndex(el => el.id === action.payload.id)
            state.postList[index] = action.payload
        }
    }
})

export const postAction = postSlice.actions

export default postSlice