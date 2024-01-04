import { useState } from 'react'

const Botao = () => {

    const [onoff, setOnoff] = useState(true)

    const alterar = () => {
        setOnoff(!onoff)
    }

  return (
    <div>
<button onClick={alterar}> {onoff ? "On" : "Off"}</button>

    </div>
  )
}

export default Botao