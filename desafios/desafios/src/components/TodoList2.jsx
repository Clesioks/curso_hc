import {useState} from 'react'

const TodoList2 = () => {

    const [todo, setTodo] = useState([])
    const [newTodo, setNewTodo] = useState("")
    const [busca, setBusca] = useState("")

    const addTask = () => {

        if(newTodo !== "") {
            setTodo([...todo, {text: newTodo}])
            setNewTodo("")
        }

    }

  return (
    <>
    <div>Nova lista de tarefas 2</div>

    <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
    <button onClick={addTask}>Add tarefa</button>
    <p>------------------</p>
    <input type='text' onChange={(e) => setBusca(e.target.value)}/>
    <ul>
        {todo
        .filter((task) => task.text.includes(busca))
        .map((tarefa, index) => (
                <li key={index}>
                    {tarefa.text}
                </li>
        ))}
    </ul>
    </>
  )
}

export default TodoList2