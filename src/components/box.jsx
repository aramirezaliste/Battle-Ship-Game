import React from 'react'

//Renderizado de cada caja que se actualizara al hacer click sobre el
export const Box = ({ valor, index, row, shoot, board }) => {

    //Funcion que modificara el className dependiendo del valor del board.js
    function cambioColor() {
        if (valor === 1) {
            return 'cuadrado'
        } else if (valor === 0) {
            return 'cuadrado'
        } else if (valor === 2) {
            return 'cuadrado disparo'
        } else if (valor === 3) {
            return 'cuadrado perdido'
        }
    }

    return (
        <div className={cambioColor()} onClick={() => { shoot(valor, index, row, board) }}> </div>
    )
}
