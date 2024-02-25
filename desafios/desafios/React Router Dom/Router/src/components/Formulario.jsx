import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const Formulario = () => {

const [searchParams, setSearchParams] = useSearchParams()
const [query, setQuery] = useState(searchParams.get('query'))

const handleChange = event => {
    const newQuery = event.target.value
    setQuery(newQuery)
    setSearchParams({
        query: newQuery
    })
    event.preventDefault()
}



  return (
    <>
    <div>Formulario</div>

    <form onSubmit={handleChange}>
    <input type="text" value={query} placeholder="Digite uma palavra"  />
    </form>



    </>
  )
}

export default Formulario