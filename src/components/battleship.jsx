import React, { useEffect, useState } from 'react'

import { gameBoard, gameBoardTwo } from '../models/board';
import { coords } from '../models/numeros';
import { Box } from './box';

export const Battleship = () => {

	const [boards, setBoard] = useState([gameBoard, gameBoardTwo])

	// useEffect(() => {
	//   console.log('Se ha actualizado el componente')
	// }, [boards])

	//Funcion para que dispare el computador
	function disparoComputador() {

		//Creando filas y columnas aleatorias
		let randomFila = Math.floor(Math.random() * 9)
		let randomIndex = Math.floor(Math.random() * 9)

		// let numberRandom = [randomFila] + [randomIndex]

		// //Validando si se repiten o no
		// for(let i = 0; i < coords.length; i++){
		// 	if (coords[i] !== String(numberRandom)) {
		// 		console.log('Numero no repetido')
		// 		console.log(coords)
		// 		coords.push(numberRandom)
		// 		break
		// 	}else{
		// 		console.log('Numero repetido')
		// 		let otroRandomFila = Math.floor(Math.random() * 9)
		// 		let otroRandomIndex = Math.floor(Math.random() * 9)
		// 		numberRandom = [otroRandomFila] + [otroRandomIndex]
		// 		console.log(coords)
		// 		coords.push(numberRandom)
		// 		break
		// 	}
		// }
		
		//El tablero 0 es el que atacara la computadora
		//console.log(coords)
		const boardOne = boards[0]
		if (boardOne[randomFila][randomIndex] === 1) {
			const tempBoards = [...boards]
			tempBoards[0][randomFila][randomIndex] = 2
			setBoard(tempBoards)

		} else {
			const tempBoards = [...boards]
			tempBoards[0][randomFila][randomIndex] = 3
			setBoard(tempBoards)
		}

	}

	//Funcion que modifica el valor de array, para darle un nuevo estilo
	function disparoTorpedo(valor, index, row, board) {
		//Disparara en el tablero 1 
		if (valor === 1) {
			const tempBoards = [...boards]
			tempBoards[1][row][index] = 2
			setBoard(tempBoards)
		} else if (valor === 0) {
			const tempBoards = [...boards]
			tempBoards[1][row][index] = 3
			setBoard(tempBoards)
		} else {
			alert('Ya has tirado en este punto')
		}
		disparoComputador()
	}


	//Componente que renderiza las cajas y crea el tablero
	const Boards = ({ board, indexBoard }) => {
		return (
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
					return <Box valor={elem} index={index} row={0} key={index} shoot={disparoTorpedo} board={indexBoard} />
				})}
				<div className='cabezeraFila'>2</div>
				{board[1].map((elem, index) => {
					return <Box valor={elem} index={index} row={1} key={index} shoot={disparoTorpedo} board={indexBoard} />
				})}
				<div className='cabezeraFila'>3</div>
				{board[2].map((elem, index) => {
					return <Box valor={elem} index={index} row={2} key={index} shoot={disparoTorpedo} board={indexBoard} />
				})}
				<div className='cabezeraFila'>4</div>
				{board[3].map((elem, index) => {
					return <Box valor={elem} index={index} row={3} key={index} shoot={disparoTorpedo} board={indexBoard} />
				})}
				<div className='cabezeraFila'>5</div>
				{board[4].map((elem, index) => {
					return <Box valor={elem} index={index} row={4} key={index} shoot={disparoTorpedo} board={indexBoard} />
				})}
				<div className='cabezeraFila'>6</div>
				{board[5].map((elem, index) => {
					return <Box valor={elem} index={index} row={5} key={index} shoot={disparoTorpedo} board={indexBoard} />
				})}
				<div className='cabezeraFila'>7</div>
				{board[6].map((elem, index) => {
					return <Box valor={elem} index={index} row={6} key={index} shoot={disparoTorpedo} board={indexBoard} />
				})}
				<div className='cabezeraFila'>8</div>
				{board[7].map((elem, index) => {
					return <Box valor={elem} index={index} row={7} key={index} shoot={disparoTorpedo} board={indexBoard} />
				})}
				<div className='cabezeraFila'>9</div>
				{board[8].map((elem, index) => {
					return <Box valor={elem} index={index} row={8} key={index} shoot={disparoTorpedo} board={indexBoard} />
				})}
			</div>
		)
	}


	return (
		<div className='cuerpo'>
			<div className='titulo'>
				<h1>Battle Ship</h1>
			</div>
			<div className='tituloDos'>
				<h1 id='usuario' >Usuario</h1>
				<h1>Computador</h1>
			</div>
			<div className='boards'>

				{boards.map((board, index) => {
					return <Boards key={index} board={board} indexBoard={index} />
				})}

			</div>
		</div>
	)
}
