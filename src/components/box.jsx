import React from 'react'

export const Box = ({ valor, index, row, shoot }) => {

    function cambioColor() {
        if (valor === 1) {
            return 'cuadrado'
        } else if (valor === 0) {
            return 'cuadrado'
        } else if (valor === 2) {
            return 'cuadrado disparo'
        } else if (valor === 3) {
            return 'cuadrado perdido'
        } else if (valor === 4) {
            return 'cuadrado verNaves'
        } else {
            return 'cuadrado disparo verNaves'
        }
    }


    return (
        <div className={cambioColor()} onClick={() => { shoot(valor, index, row) }}> </div>
    )
}
