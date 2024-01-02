import { useState } from "react"

const Counter = () => {

const [contador, setContador] = useState(0)

    const incrementar = () => {
        setContador(contador + 1)
    }


  return (
    <div>Contador = {contador}
    <p></p>
    <button onClick={incrementar}>Add</button>
    </div>
  )
}

export default Counter