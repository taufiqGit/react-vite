import { createSlice } from "@reduxjs/toolkit"

const postSlice = createSlice({
    name: 'post',
    initialState: { postList: [], totalPost: 0 },
    reducers: {
        getAllTodo(state, action){
            state.postList = action.payload.reverse()
            state.totalPost = action.payload.length
        },
        addTodo(state, action){
           state.postList.unshift(action.payload) 
         //  console.log(action.payload);
           state.totalPost++
        },
        delTodo(state, action){
            let delById = state.postList.filter(post => post.id !== action.payload)
            state.postList = delById
            state.totalPost--
        }   
    }
})

export const postAction = postSlice.actions

export default postSlice