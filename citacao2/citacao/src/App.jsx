import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import citacoes from './data/data.js'
import Citacao from './components/Citacao.jsx'

function App() {

  const [indice, setIndice] = useState(0)
  
  const proximaCitacao = () => {
    
    setIndice((cita) => (cita + 1) % citacoes.length)

  }


  return (
    <>
      <p>
        <Citacao texto={citacoes[indice].texto} autor={citacoes[indice].autor} />          
      </p>
      <button onClick={proximaCitacao}>Next</button>
    </>
  )
}

export default App
