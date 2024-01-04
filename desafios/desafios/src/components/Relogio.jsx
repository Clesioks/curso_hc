import {useState, useEffect} from 'react'

const Relogio = () => {

    const [hora, setHora] = useState(new Date())

    useEffect(() => {

        const timer = setInterval(() => {
            setHora(new Date())
        }, 1000)

        return () => {
            clearInterval(timer)
        }

    },[])


  return (
    <div>{hora.toLocaleTimeString()}</div>
  )
}

export default Relogio