import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editTodo, getTodo, getTodos } from "../services/todos-api"

export const EditTodo = () => {
  const { id } = useParams()
  const nav = useNavigate()
  const [data, setData] = useState({})

  useEffect(() => {
    getTodo(id) //getting tthe todo that matches this id
      .then((res) => setData(res.data))
  }, [id])

  const editTheTodo = (e) => {
    e.preventDefault()
    const updatedTodo = { description: e.target.description.value, complete: e.target.complete.checked }
    editTodo(id, updatedTodo)
    nav(`/${id}`)
  }

  return (
    <div>
      <form onSubmit={editTheTodo}>
        <input type="text" name="description" defaultValue={data.description} />
        Completed: <input type="checkbox" name="complete"  />
      </form>
    </div>
  )
}
