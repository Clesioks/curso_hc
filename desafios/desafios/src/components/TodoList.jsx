import {useState} from 'react'




const TodoList = () => {



    const [lista, setLista] = useState([])

    const enviar = (e) => {
        
        setLista([...lista, {text: e.target.valeu}])


    }


    // const handleLista = (e) => {
        
    //     setLista([e.target.value, ...lista])
    // }

  return (
    <>
    <h2>Task</h2>
    <input name="lista" type="text" value={lista} onChange={(e) => setLista(e.target.value)} placeholder='Adicione uma tarefa' />
    <div><button onClick={enviar}>Adicionar tarefa</button></div>
    <ul>{lista.map((tarefa, index) => (
            <li key={index}>{tarefa.text}</li>
    ))}</ul>
    <p></p>

    </>

  )
}

export default TodoList