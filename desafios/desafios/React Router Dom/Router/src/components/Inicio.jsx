import { Link } from "react-router-dom"


const Inicio = () => {
  return (
    <header>
        <div><Link to="/">Inicio</Link></div>
        <nav>
            <ul>
                <li><Link to="/fotos">Photos</Link></li>
                <li><Link to="/psd">PSD</Link></li>
                <li><Link to="/videos">Videos</Link></li>
                <li><Link to="/busca">Busca</Link></li>
                <li><Link to="/formulario">Formulário</Link></li>
               
            </ul>
        </nav>

    </header>
  )
}

export default Inicio