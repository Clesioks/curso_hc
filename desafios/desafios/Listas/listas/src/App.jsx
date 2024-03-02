
import './App.css'
import ListasAninhadas from './components/ListasAninhadas'
import MultiSelecao from './components/MultiSelecao'
import RenSwitch from './components/RenSwitch'
import RenderSwitch from './components/RenderSwitch'
import RenderizacaoTernaria from './components/RenderizacaoTernaria'
import Tempo from './components/Tempo'

function App() {


  return (
    <>
      <div>
        <RenderizacaoTernaria trueFalse={false} />
        <RenderSwitch trueFalse={true} />
        <RenSwitch numbers="8"/>
        <ListasAninhadas />
        <Tempo />
        <MultiSelecao />
     </div>
    </>
  )
}

export default App
