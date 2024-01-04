import { useState, useEffect } from "react";

import React from 'react'

const Relogio3 = () => {

const [time, setTime] = useState(new Date())

useEffect(() => {

  const timer = setInterval(() => {
    setTime(new Date())
  }, 1000) 


  return (
    clearInterval(timer)
  )

}, [])


  return (
    <div>{time.toLocaleTimeString()}</div>
  )
}

export default Relogio3