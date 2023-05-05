import React from 'react'

//TODO: Boton que mostrara las naves con un estilo diferente
export const Buttons = ({show}) => {
  return (
    <div>
        <button type='button' onClick={show}>Mostrar Naves</button>
    </div>
  )
}
