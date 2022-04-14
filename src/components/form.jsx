import { useState } from "react"
import { useDispatch }from "react-redux"
import { CreatePostAction } from "../store/postAction"
//import { todoAction } from "../store"

export default function Form(params) {
    const [thumbnail, setThumbnail] = useState()
     const [form, setForm] = useState({
         title: '',
         body: '',
     })

     const dispatch = useDispatch()

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
        for(let val of formData.entries()){
            console.log(val);
        }
        
      dispatch(CreatePostAction(formData))
    }

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
                    type="text" className="form-control" id="title" required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Desc</label>
                <input 
                    onChange={(e)=> handleChange('body', e.target.value)}
                    type="text" className="form-control" id="desc" required
                />
            </div>
            <button className="btn btn-primary" type="submit">
                Submit
            </button>
        </form>
    )
}