import React from 'react'

export const Box = ({ valor, index, row, shoot, board }) => {

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
