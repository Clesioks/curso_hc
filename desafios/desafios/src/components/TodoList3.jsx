import {useState} from 'react'

const TodoList3 = () => {

const [todo, setTodo] = useState([])
const [newTodo, setNewTodo] = useState("")
const [busca, setBusca] = useState("")

// const frutas = [
//     "banana",
//     "pera",
//     "caju"
// ]



const addTask = () => {
    if (newTodo.trim() !== "") {
        setTodo([...todo, {text: newTodo.trim()}])
        setNewTodo("")

    }
}

// const tarefasFiltradas = frutas.filter((tarefa) => tarefa.includes(busca))



  return (
    <>
    <div>Estudando Todo Lista</div>
    <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
    <button onClick={addTask}>Add task</button>
    {/* <ul>
        {todo.map((task, index) => (
            <li key={index}>{task.text}</li>
        ))}
    </ul> */}
    <p>-------------------</p>
    <input type='text' value={busca} onChange={(e) => setBusca(e.target.value)} />
   
    <ul>
        {todo
        .filter((task2) => task2.text.includes(busca))
        .map((task2, index) => (
            <li key={index}>{task2.text}</li>
        ))}
    </ul>
    
    </>
  )
}

export default TodoList3