import FotoAmpliada from './components/FotoAmpliada'
import Fotolist from './components/Fotolist'
import Searchbar from './components/Searchbar'

import { useState, useEffect } from 'react'

import axios from 'axios'

function App() {

  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("")
  const [fotos, setFotos] = useState([])

  const fetchData = async ({query, category}) => {

    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY

    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: apiKey,
        count: 10
      }
    });

    setFotos(response.data)

    console.log(response.data)
  }

  useEffect(() => {
    fetchData(query, category)
  }, [])



  return (
    <>
    <div className='container'>
      <Searchbar />
      <Fotolist fotos={fotos}/>
      <FotoAmpliada />
      </div>
    </>
    
  )
}

export default App
