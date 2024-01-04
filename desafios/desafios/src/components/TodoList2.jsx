import { useState, useEffect } from "react"


const TodoList2 = () => {

    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState("")

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, {text: newTodo.trim()}])
            setNewTodo("")
        }
    }

  return (
    <>
    <div>Lista de tarefas</div>
    <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
    <button onClick={handleAddTodo}>Add Task</button>
    <ul>
        {todos.map((todo, index) => (
            <li key={index}>{todo.text}</li>
        ))}
    </ul>
    </>
  )
}

export default TodoList2