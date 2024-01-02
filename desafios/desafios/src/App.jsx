
import { useState } from 'react'
import './App.css'
import ComponenteClasse from './components/ComponenteClasse'
import Composicao from './components/Composicao'
import HelloWorld from './components/HelloWorld'
import MultiplaProps from './components/MultiplaProps'
import Propriedades from './components/Propriedades'
import Counter from './components/Counter'

function App() {

  const idade = 13
  let resultado = ""

  if (idade >= 18) {
      resultado = "você é maior de idade"
  } else {
    resultado = "você é menor de idade"
  }

  const members = [
    {
      name: "TiTi",
      idade: 43,
      job: "Programador"
    },
    {
      name: "Karine",
      idade: 36,
      job: "Administradora"
    },
    {
      name: "Rafaela",
      idade: 13,
      job: "Estudante"
    }
  ]



  return (
    <>
      <h2>1 - Criando um componentes simples </h2>
        <HelloWorld />
       <h2>2 - Enviando propriedade</h2>
       <Propriedades nome="Serena" />
       <h2>3 - Múltiplas props</h2>
       <MultiplaProps name="TiTi" idade={43} maioridade={resultado} />
       <h2>4 - Composição de componentes</h2>
       <Composicao members={members}/>
       <h2>5 - Componente Classe</h2>
       <ComponenteClasse name="TiTi" age={43} job="Programador" />
       <h2>6 - Contador</h2>
       <Counter />
       
    </>
  )
}

export default App
