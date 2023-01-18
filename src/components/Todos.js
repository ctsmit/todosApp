import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getTodos } from "../services/todos-api"
import { Create } from "./CreateTodo"

export default function Todos() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res.data)
    })
  }, [])
  return (
    <div>
      <ul>
        {todos.map((todo, i) => {
          return <li key={i}><Link to={`/${todo._id}`}>{todo.description}</Link></li>
        })}
      </ul>
      <Create/>
    </div>
  )
}
