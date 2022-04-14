import { useSelector } from "react-redux"
import ItemTodo from "./itemTodo";

export default function ListTodo(params) {
    const posts = useSelector(state => state.post.postList)
  //  console.log(posts);
    return(
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Title</th>
            <th scope="col">Desc</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map(item => {
            // console.log(item);
              return (
                <ItemTodo 
                  key={item.id} 
                  id={item.id} 
                  title={item.title} 
                  body={item.body}
                  thumbnail={item.thumbnail}
                />
              )
            })
          }
        </tbody>
      </table>
    )
}