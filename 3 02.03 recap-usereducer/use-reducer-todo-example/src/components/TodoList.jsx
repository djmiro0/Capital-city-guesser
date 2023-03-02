import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Todo from "./Todo";

export default function TodoList() {
  const {state} = useContext(TodoContext);

  return (
    <>
    <h1>Todo List</h1>
    <div className='todo-container'>
      {state.todos.map((item, index) => <Todo item={item} />)}
    </div>
    </>
  )
}
