import { useNavigate } from "react-router-dom"
import { createTodo } from "../services/todos-api"

export const Create = () => {
  const nav = useNavigate()

  const createTheTodo = (e) => {
    e.preventDefault()
    const todo = { description: e.target.description.value, complete: false }
    createTodo(todo)
    .then(() => nav(0))
  }

  return (
    <div>
      <h4>Add a Todo</h4>
      <form onSubmit={createTheTodo}>
        <input type="text" name="description"/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}


