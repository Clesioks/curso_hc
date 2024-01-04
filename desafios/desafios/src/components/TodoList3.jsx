import {useState} from 'react'

const TodoList3 = () => {

const [todo, setTodo] = useState([])
const [newTodo, setNewTodo] = useState("")

const addTask = () => {
    if (newTodo.trim() !== "") {
        setTodo([...todo, {text: newTodo.trim()}])
        setNewTodo("")

    }
}


  return (
    <>
    <div>Estudando Todo Lista</div>
    <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
    <button onClick={addTask}>Add task</button>
    <ul>
        {todo.map((task, index) => (
            <li key={index}>{task.text}</li>
        ))}
    </ul>
    </>
  )
}

export default TodoList3