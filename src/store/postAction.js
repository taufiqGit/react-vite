import axios from 'axios'
import { postAction } from './postSlice'
import { uiAction } from './uiSlice'

const Endpoint = 'http://localhost:1337/post-rdxes'

export function GetAllPostAction(params) {
    return async (dispatch)=>{
        dispatch(uiAction.loadingPost('Add'))
        const fetchPost = async()=>{
            let hitData = await axios.get(`${Endpoint}`)
            return hitData.data
        } 

        try {
            let dataPost = await fetchPost()
            dispatch(postAction.getAllTodo(dataPost))
            dispatch(uiAction.processPostSuccess('Add'))
        } catch (error) {
             console.log(error);
             dispatch(uiAction.processPostFailed('Add'))
        } finally{
            dispatch(uiAction.processPostEnded())
        }
    }
}

export function CreatePostAction(newDataPost) {
    return async (dispatch)=>{
        // const { title, body } = newDataPost
        try {
            
            const hitPost = await axios.post(`${Endpoint}`, newDataPost) 
            dispatch(postAction.addTodo(hitPost.data))
            console.log(hitPost)
        } catch (error) {
            console.log(error);
        }
    }
}

export function DeletePostAction(id) {
    return async (dispatch)=>{
        try {
            const result = await axios.delete(`${Endpoint}/${id}`)
            console.log(result);
            dispatch(postAction.delTodo(id))
        } catch (error) {
            console.log(error);
        }
    }
}