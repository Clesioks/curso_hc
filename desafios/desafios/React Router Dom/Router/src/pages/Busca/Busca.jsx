import { useParams, useSearchParams } from "react-router-dom"
import Inicio from "../../components/Inicio"

const Busca = () => {

  const [searchParams] = useSearchParams()
  const query = searchParams.get("query")

    const {title} = useParams()

  return (
    <div>
        
        <Inicio />
        
        A busca realizada foi: {title}
        
        
        O resultado da busca foi {query}
        </div>

  )
}

export default Busca