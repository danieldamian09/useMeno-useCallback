import React from 'react'

export const ButtonIncrementar = ({ incrementar }) => {
  
  console.log("Me volvi a renderizar 👀");

  return (
   <button onClick={() => incrementar()}>Incrementar</button>
  )
}
