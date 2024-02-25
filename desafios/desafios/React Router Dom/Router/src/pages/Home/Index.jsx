import Inicio from '../../components/Inicio'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
        <Inicio />

        <h1> Página Inicial</h1>

       <nav>
        <ul>
          <li> <Link to="/busca/1">Usuário 1</Link></li>
          <li> <Link to="/busca/2">Usuário 2</Link></li>
          <li> <Link to="/busca/3">Usuário 3</Link></li>
        </ul>
       </nav>

    </div>
  )
}

export default Index