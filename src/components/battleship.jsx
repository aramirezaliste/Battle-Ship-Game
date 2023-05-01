import React, { useEffect, useState } from 'react'

import { gameBoard } from '../models/board';
import { Box } from './box';
import { Buttons } from './buttons';

export const Battleship = () => {

  const [board, setBoard] = useState(gameBoard)

  useEffect(() => {
    console.log('Se ha actualizado el componente')
  }, [board])

  function disparoTorpedo(num, ind, row) {
    let index = ind
    let valor = num
    let fila = row
    //console.log(index, valor, fila)
    if(valor === 1){
      const tempBoard = [...board]
      tempBoard[fila][index] = 2
      setBoard(tempBoard)
    }else if (valor === 0){
      const tempBoard = [...board]
      tempBoard[fila][index] = 3
      setBoard(tempBoard)
    }else {
      alert('Ya has tirado en este punto')
    }

  }

  function showShip(){
    const tempBoard = [...board]
      tempBoard.map((elem)=>{
        return console.log(elem)
      })
    
  }

  return (
    <div className='cuerpo'>
      <div className='titulo'>
        <h1>Battle Ship</h1>
      </div>
      <div className='tablero' >
        <div className='esquina'></div>
        <div className='cabezeraColumna'>1</div>
        <div className='cabezeraColumna'>2</div>
        <div className='cabezeraColumna'>3</div>
        <div className='cabezeraColumna'>4</div>
        <div className='cabezeraColumna'>5</div>
        <div className='cabezeraColumna'>6</div>
        <div className='cabezeraColumna'>7</div>
        <div className='cabezeraColumna'>8</div>
        <div className='cabezeraColumna'>9</div>

        <div className='cabezeraFila'>1</div>
        {board[0].map((elem, index) => {
          return <Box valor={elem} index={index} row={0} key={index} shoot={disparoTorpedo}/>
        })}
        <div className='cabezeraFila'>2</div>
        {board[1].map((elem, index) => {
          return <Box valor={elem} index={index} row={1} key={index} shoot={disparoTorpedo}/>
        })}
        <div className='cabezeraFila'>3</div>
        {board[2].map((elem, index) => {
          return <Box valor={elem} index={index} row={2} key={index} shoot={disparoTorpedo}/>
        })}
        <div className='cabezeraFila'>4</div>
        {board[3].map((elem, index) => {
          return <Box valor={elem} index={index} row={3} key={index} shoot={disparoTorpedo}/>
        })}
        <div className='cabezeraFila'>5</div>
        {board[4].map((elem, index) => {
          return <Box valor={elem} index={index} row={4} key={index} shoot={disparoTorpedo}/>
        })}
        <div className='cabezeraFila'>6</div>
        {board[5].map((elem, index) => {
          return <Box valor={elem} index={index} row={5} key={index} shoot={disparoTorpedo}/>
        })}
        <div className='cabezeraFila'>7</div>
        {board[6].map((elem, index) => {
          return <Box valor={elem} index={index} row={6} key={index} shoot={disparoTorpedo}/>
        })}
        <div className='cabezeraFila'>8</div>
        {board[7].map((elem, index) => {
          return <Box valor={elem} index={index} row={7} key={index} shoot={disparoTorpedo}/>
        })}
        <div className='cabezeraFila'>9</div>
        {board[8].map((elem, index) => {
          return <Box valor={elem} index={index} row={8} key={index} shoot={disparoTorpedo}/>
        })}
      </div>
      <Buttons show={showShip}/>
    </div>
  )
}
