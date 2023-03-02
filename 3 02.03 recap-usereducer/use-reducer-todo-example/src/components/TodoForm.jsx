import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"
import { addTodo } from "../context/TodoReducer";


export default function TodoForm() {
  //get the dispatch from our context.
  const {dispatch} = useContext(TodoContext);
  //keep track of what's typed inside the input 
  const [currentTodo, setCurrentTodo] = useState("");

  const addTodoItem = (e) => {
    //declare a new todo object to add
     const newTodoItem = {
      text:currentTodo, 
      createdOn:Date.now(), 
      done:false
     }
     //dispatch the addTodo action with the new object
     dispatch(addTodo(newTodoItem))
  }

  return (
    <>
      <input 
        type="text" 
        placeholder='Your todo...'
        onChange={(e) => setCurrentTodo(e.target.value)}
        />
      <button onClick={addTodoItem}>Add todo</button>
    </>
  )
}
