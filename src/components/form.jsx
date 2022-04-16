import { useEffect, useState } from "react"
import { useDispatch, useSelector }from "react-redux"
import { CreatePostAction, EditPostAction } from "../store/postAction"
//import { todoAction } from "../store"

export default function Form(params) {
    const dispatch = useDispatch()
    const isEdit = useSelector(state => state.post.isEdit)
    const posts = useSelector(state => state.post.postList)

    const [thumbnail, setThumbnail] = useState(null)
    const [form, setForm] = useState({
         title: '',
         body: '',
     })

    const handleChange = (typeInput, value)=>{
         setForm({
             ...form,
            [typeInput]: value
         })
    }

    const handlesubmit =(e)=>{
        e.preventDefault()
        const formData = new FormData()
        let data = form
        formData.append('files.thumbnail', thumbnail)
        formData.append('data', JSON.stringify(data))
        
        if (isEdit.status) {
            //console.log(isEdit);
            dispatch(EditPostAction(isEdit.id, formData))
        } else{
            dispatch(CreatePostAction(formData))
        }
      
        setThumbnail(null)
        setForm({
            title: '',
            body: ''
        })
    }

    useEffect(()=>{
        let { status, id } = isEdit
        if (status) {
            let postForEdit = posts.find(post => post.id === id)
            console.log('set edit', postForEdit);
            setForm({
                title: postForEdit.title,
                body: postForEdit.body
            })
        }
        
    }, [isEdit])
    return(
        <form onSubmit={handlesubmit} className="mt-4">
            <div className="mb-3">
                <label htmlFor="thumbnail" className="form-label">Thumbnail</label>
                <input 
                    onChange={(e)=> setThumbnail(e.target.files[0])}
                    
                    type="file" className="form-control" id="thumbnail" required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input 
                    onChange={(e)=> handleChange('title', e.target.value)}
                    value={form.title}
                    type="text" className="form-control" id="title" required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Desc</label>
                <input 
                    onChange={(e)=> handleChange('body', e.target.value)}
                    value={form.body}
                    type="text" className="form-control" id="desc" required
                />
            </div>
            <button className="btn btn-primary" type="submit">
                Submit
            </button>
        </form>
    )
}