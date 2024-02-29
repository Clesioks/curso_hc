import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

import Home from './pages/Home/Index'
import Fotos from './pages/Fotos/Fotos'
import PSD from './pages/PSD/PSD'
import Videos from './pages/Videos/Videos'
import Busca from './pages/Busca/Busca'
import Error404 from './pages/PageNotFound/Error404'
import Formulario from './components/Formulario'
import SearchForm from './pages/Search/SearchForm'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/fotos' element={<Fotos />} />
          <Route path='/psd' element={<PSD />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/busca/:title' element={<Busca />} />
          <Route path='*' element={<Error404 />} />
          <Route path='/formulario' element={<Formulario />} />
          <Route path='/search' element={<SearchForm />} />

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
