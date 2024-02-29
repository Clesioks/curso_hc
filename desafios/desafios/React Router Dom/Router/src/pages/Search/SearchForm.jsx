import { useNavigate } from "react-router-dom"
import { useState } from "react"


const SearchForm = () => {

const [query, setQuery] = useState("")
const navigate = useNavigate()



const handleSubmit = (e) => {
    e.preventDefault()

    navigate(`/search?query=${query}`)


}

  return (

    <>
    <div>SearchForm</div>

    <form onSubmit={handleSubmit}>
        <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Procurar..."/>
        <button type="submit">Buscar</button>
    </form>

    </>
  )
}

export default SearchForm