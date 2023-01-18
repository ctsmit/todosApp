import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteTodo, getTodo } from "../services/todos-api"

export default function Todo() {
  const nav = useNavigate()
  const { id } = useParams()// destrucuring the id parameter for use
  const [todo, setTodo] = useState({})// setting up our state
  useEffect(() => {
    getTodo(id)//getting the one todo from the api using the id
      .then((res) => setTodo(res.data))
  },[id])
  
  const deleteTheTodo = () => {
    //delete the one todo
    //nav back to the main screen
    deleteTodo(id)
    .then(() => nav("/"))
  }

  return (
    <div>
      <h2>Todo:</h2>
      <h3>{todo.description}</h3>
      Completed: <input type="checkbox" defaultChecked={todo.complete} /><br />
      <button onClick={() => { nav(`/${id}/edit`) }}>Edit</button><br />
      <button onClick={deleteTheTodo}>Delete</button><br />
      <button onClick={()=> {nav("/")}}>Main</button>
    </div>
  )
}
