// import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import { EditTodo } from "./components/EditTodo"
import Todo from "./components/Todo"
import Todos from "./components/Todos"

export default function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/:id" element={<Todo />} />
          <Route path="/:id/edit" element={<EditTodo />} />
        </Routes>
      </Router>
    </div>
  )
}
