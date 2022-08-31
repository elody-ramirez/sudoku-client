import { useState, useEffect } from 'react'
import Square from './Square'
import { Puzzles } from '../util/Puzzles.js'

const Board = () => {
	const [board, setBoard] = useState([])

	useEffect(() => {
		setUpBoard()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])	

	const updateBoard = (squareID, value) => {
		// const newBoard = board.map((row) => row.map((square) => 
		// 	square.id === squareID ? alert(square) : square
		// ))
		console.log('test')

	}

	const renderSquare = (i, k) => {
		return (
			<Square 
				key={k}
				squareID={'square' + k} 
				initialValue={i} 
				changeable={i === '' ? true : false}
				updateBoard={updateBoard}
			/>
		)
	}
	
	const setUpBoard = () => {
		const arr = Puzzles[1]
		const rows = 9
		const cols = 9
		const result = new Array(rows)
		for (let row = 0; row < rows; row++) {
			result[row] = new Array(cols)
		}
		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				result[row][col] = arr[row * cols + col][1]
			}
		}
		setBoard(result)
		return result
	}

	return (
		<div>
			<h1> test </h1>
			<div className='board'>
				{board.map((row, rowIndex) => (
					<div key={row}>
						{row.map((value, colIndex) => (
							<Square
								key={rowIndex * 9 + (colIndex + 1)}
								squareID={'square' + (rowIndex * 9 + (colIndex + 1))}
								initialValue={value}
								changeable={value === '' ? true : false}
								updateBoard={updateBoard}
							/>
						))}
					</div>
				))}
			</div>
		</div>
	)
}

export default Board