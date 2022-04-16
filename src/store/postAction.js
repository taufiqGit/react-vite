import axios from 'axios'
import { postAction } from './postSlice'
import { uiAction } from './uiSlice'

const Endpoint = 'http://localhost:1337/crud-reduxes'

export function GetAllPostAction(params) {
    return async (dispatch)=>{
        dispatch(uiAction.loadingPost('Get'))
        const fetchPost = async()=>{
            let hitData = await axios.get(`${Endpoint}`)
            return hitData.data
        } 

        try {
            let dataPost = await fetchPost()
            dispatch(postAction.getAllTodo(dataPost))
            dispatch(uiAction.processPostSuccess('Get'))
        } catch (error) {
             console.log(error);
             dispatch(uiAction.processPostFailed('Get'))
        } finally{
            setTimeout(()=>{
                dispatch(uiAction.processPostEnded())
            }, 1300)
        }
    }
}

export function CreatePostAction(newDataPost) {
    return async (dispatch)=>{
        dispatch(uiAction.loadingPost('Add'))
        try {
            const hitPost = await axios.post(`${Endpoint}`, newDataPost) 
            dispatch(postAction.addTodo(hitPost.data))
            dispatch(uiAction.processPostSuccess('Add'))
            console.log(hitPost)
        } catch (error) {
            dispatch(uiAction.processPostFailed('Add'))
            console.log(error);
        } finally{
            setTimeout(()=>{
                dispatch(uiAction.processPostEnded())
            }, 1300)
        }
    }
}

export function DeletePostAction(id) {
    return async (dispatch)=>{
        dispatch(uiAction.loadingPost("Delete"))
        try {
            const result = await axios.delete(`${Endpoint}/${id}`)
            console.log(result);
            dispatch(postAction.delTodo(id))
            dispatch(uiAction.processPostSuccess('Delete'))
        } catch (error) {
            dispatch(uiAction.processPostFailed('Delete'))
            console.log(error);
        } finally{
            setTimeout(()=>{
                dispatch(uiAction.processPostEnded())
            }, 1300)
        }
    }
}

export function EditPostAction(id, data) {
    return async (dispatch)=>{
        dispatch(uiAction.loadingPost('Edit'))
        try {
            const result = await axios.put(`${Endpoint}/${id}`, data)
            console.log(result.data);
            dispatch(postAction.editTodo(result.data))
            dispatch(uiAction.processPostSuccess('Edit'))
        } catch (error) {
            dispatch(uiAction.processPostFailed('Edit'))
        } finally{
            setTimeout(()=>{
                dispatch(uiAction.processPostEnded())
            }, 1300)
        }
    }
}