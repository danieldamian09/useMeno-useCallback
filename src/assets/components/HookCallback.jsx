import { useState } from 'react'
import { ButtonIncrementar } from './ButtonIncrementar';

export const HookCallback = () => {

  const [count, setCount] = useState(20);

  // Cada vez que el componente se vuelve a dibujar esta funcion se guarda en un lugar de memoria distinto
  const incrementar = () => {
    setCount(count + 1);
  }

  return (
    <>
      <h1>useCallback: {count}</h1>
      <hr />

      <ButtonIncrementar incrementar={incrementar} />
     
    </>
  )
}
