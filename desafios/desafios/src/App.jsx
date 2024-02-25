
import './App.css'
import ComponenteClasse from './components/ComponenteClasse'
import Composicao from './components/Composicao'
import HelloWorld from './components/HelloWorld'
import MultiplaProps from './components/MultiplaProps'
import Propriedades from './components/Propriedades'
import Counter from './components/Counter'
import Botao from './components/Botao'
import Botao2 from './components/Botao2'
import Relogio from './components/Relogio'
import Relogio2 from './components/Relogio2'
import Relogio3 from './components/Relogio3'
import TodoList from './components/TodoList'
import TodoList2 from './components/TodoList2'
import TodoList3 from './components/TodoList3'
import Tela from './components/Tela'
import Tela2 from './components/Tela2'
import Formulário from './components/Formulário'
import Formulario2 from './components/Formulario2'
import ValidadeForm from './components/ValidadeForm'
import FormularioRegistro from './components/FormularioRegistro'
import Estilos from './components/Estilos'
import Externo from './components/Externo'
import DarkLight from './components/DarkLight'
import StyledNew from './components/StyledNew'

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
    <h2>Styled Components</h2>
    <StyledNew />
    <h2>Tema Dark e Light </h2>
    <DarkLight />
    <h2> Estilo Externo</h2>
    <Externo />
    <h2>Estilos</h2>
    <Estilos />
    <h2>3 - Validade Form</h2>
    <ValidadeForm nome={"TiTi"} />
    <h2>Formulário de registro</h2>
    <FormularioRegistro />
    <h2>Formulário 2 - envio para console</h2>
    <Formulario2 />
    <p></p>
    <h2> Formulário Dinâmico</h2>
    <Formulário />
    <h2>***************** Largura de tela 2 ******************</h2>
    <Tela2 />
    <h2>Largura da tela</h2>
    <Tela />
        <h2>Lista de tarefas 3 </h2>
        <TodoList3 />
    <h2>Lista de tarefas 2 </h2>
    <TodoList2 />
    <h2>10 - Lista de tarefas</h2>
    <TodoList />
      <h2>9 - Relógio 3</h2>
      <Relogio3 />
       <h2>9 - Relógio</h2>
      <Relogio2 />
      <h2>9 - Relógio</h2>
      <Relogio />
      <h2>8 - Dois Estados e um componente</h2>
      <Botao2 />
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
       <h2>7 - Usando estado </h2>
       <Botao />
       
    </>
  )
}

export default App
