//all of our endpints
import axios from "axios"
const BaseURL = "http://localhost:3001/todos"

//show all
export const getTodos = () => {
  const response = axios.get(BaseURL)
  return response
}

//show one
export const getTodo = (id) => {
  const URL = `${BaseURL}/${id}`
  const response = axios.get(URL)
  return response
}

//edit todo
export const editTodo = (id, updatedTodo) => {
  const URL = `${BaseURL}/${id}`
  const response = axios.put(URL, updatedTodo)
  return response
}

//create todo
export const createTodo = (todo) => {
  const URL = BaseURL
  const response = axios.post(URL, todo)
  return response
}

//delete todo
export const deleteTodo = id => {
  const URL = `${BaseURL}/${id}`
  const response = axios.delete(URL)
  return response
}