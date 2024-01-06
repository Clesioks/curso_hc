import {useState, useEffect} from 'react'

const Relogio3 = () => {

  const [relogio, setRelogio] = useState(new Date())

  useEffect(() => {

    const timer = setInterval(() => {
      setRelogio(new Date())
    }, 1000)
    
    return () => {
      clearInterval(timer)
    }


  },[])

  return (
    <div>Novo relógio 3 - {relogio.toLocaleTimeString()}</div>
  )
}

export default Relogio3