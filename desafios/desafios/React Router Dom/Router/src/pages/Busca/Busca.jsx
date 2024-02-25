import { useParams } from "react-router-dom"
import Inicio from "../../components/Inicio"

const Busca = () => {

    const {title} = useParams()

  return (
    <div>
        
        <Inicio />
        
        A busca realizada foi: {title}</div>
  )
}

export default Busca