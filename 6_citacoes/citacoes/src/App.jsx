import citacoes from './data.js'
import './App.css'
import { useState } from 'react'
import Citacao from './Components/Citacao.jsx'

function App() {

  const [indice, setIndice] = useState(0)

  const proxCitacao = () => {
    setIndice((prevCitacao) => (prevCitacao + 1) % citacoes.length)
  }

  

  return (
    <>
     <p>
      <Citacao texto={citacoes[indice].texto} autor={citacoes[indice].autor} />
      </p>
      <div>
      <button onClick={proxCitacao}>Próxima Citação</button>
      </div>
    </>
  )
}

export default App
