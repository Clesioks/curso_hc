
import './App.css'
import RenderSwitch from './components/RenderSwitch'
import RenderizacaoTernaria from './components/RenderizacaoTernaria'

function App() {


  return (
    <>
      <div>
        <RenderizacaoTernaria trueFalse={false} />
        <RenderSwitch trueFalse={true} />
     </div>
    </>
  )
}

export default App
