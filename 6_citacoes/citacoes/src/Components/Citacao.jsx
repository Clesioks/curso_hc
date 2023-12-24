import React from 'react'

const Citacao = ({texto, autor}) => {
  return (
    <div>
    <p>{texto}</p>
    <p>
    <div>{autor}</div>
    </p>
    </div>
  )
}

export default Citacao