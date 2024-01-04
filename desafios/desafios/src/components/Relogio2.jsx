import {useState, useEffect} from 'react'

const Relogio2 = () => {
  
  const [time, setTime] = useState(new Date())

  useEffect(() => {

    const timer = setInterval(() => {

        setTime(new Date())
    }, 1000)


    return () => {
        clearInterval(timer)
    }


  }, [])
  
    return (
    <div>{time.toLocaleTimeString()}</div>
  )
}

export default Relogio2
