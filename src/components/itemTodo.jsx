import { useDispatch } from "react-redux"
import { DeletePostAction } from "../store/postAction"
import { postAction } from "../store/postSlice"

export default function ItemTodo({id, title, body, thumbnail}) {
    const dispatch = useDispatch()
    const UrlImg = 'http://localhost:1337'
    const handleDeletePost =()=>{
        dispatch(DeletePostAction(id))
    }

    const handleSetEdit = ()=>{
console.log('hh');
        dispatch(postAction.setIsEdit({
            status: true,
            id: id
        }))
    }
   // console.log(thumbnail.url);
    return (
        <tr>
            <th scope="row">
                <span className="d-block">#{id}</span>
                <img 
                    className="d-inline-block"
                    style={{width: '250px'}}
                    src={`${UrlImg}${thumbnail.url}`} 
                    alt={`${thumbnail.name}`}/>
            </th>
            <td>{title}</td>
            <td>{body}</td>
            <td>
                <button className="btn btn-sm btn-danger"
                 onClick={handleDeletePost}>
                    Delete
                </button>

                <button className="btn btn-sm text-white mt-2 btn-warning"
                 onClick={handleSetEdit}>
                    Edit
                </button>        
            </td>
        </tr>
    )
}