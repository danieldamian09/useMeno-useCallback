import React from 'react'

export const ButtonIncrementar = React.memo(({ incrementar }) => {
  
  console.log("Me volvi a renderizar 👀");

  return (
   <button onClick={() => incrementar()}>Incrementar</button>
  )
})
