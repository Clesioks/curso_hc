import {useState} from 'react'

const Botao2 = () => {

const [isOn, setIson] = useState(true)
const [inc, setInc] = useState(0)

const alterar = () => {
    setInc(inc + 1) 
    setIson(!isOn)
}



  return (
    <div>

        <button onClick={alterar}>{isOn ? "On" : "Off"} - {inc}</button>

    </div>
  )
}

export default Botao2