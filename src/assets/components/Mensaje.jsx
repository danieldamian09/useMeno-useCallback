import { useEffect } from 'react'

export const Mensaje = () => {

  useEffect(() => {

    const mouseMove = ({x,y}) => {
      console.log({x,y})
    }

    window.addEventListener("mousemove", mouseMove)
  
    return () => {
      window.removeEventListener( "mousemove", mouseMove)
    }
  }, [])
  

  return (
    <h3>Usuario ya registrado</h3>
  )
}
