import {useState, useEffect} from 'react'

const Tela = () => {

const [tela, setTela] = useState(window.innerWidth)



useEffect(() => {

    
        const updateTela = () => {

            setTela(window.innerWidth)
        }
        
        window.addEventListener('resize', updateTela)

        return (() => {
            window.removeEventListener('resize', updateTela)
        })
    

}, [])

  return (
    <div>{tela}px</div>
  )
}

export default Tela