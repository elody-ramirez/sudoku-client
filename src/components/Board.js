import { useState } from 'react'
import Square from './Square'
import { Puzzles } from '../util/Puzzles.js'

const setUpBoard = () => {
	const puzzle = Puzzles[1]
	const rows = 9
	const cols = 9
	const result = new Array(rows)
	for (let row = 0; row < rows; row++) {
		result[row] = new Array(cols)
	}
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			result[row][col] = puzzle[row * cols + col][1]
		}
	}
	return result
}

const Board = () => {
	const [board, setBoard] = useState(setUpBoard)

	const updateBoard = (target, value) => {
		const tempBoard = board
		const newBoard = board.map((row, rowIndex) =>
			row.map((col, colIndex) => 
				target.id === JSON.stringify(rowIndex * 9 + (colIndex + 1) - 1) ? tempBoard[rowIndex][colIndex] = value : board[rowIndex][colIndex]
			)
		)
		setBoard(newBoard)
	}

	return (
		<div>
			<h1> Sudoku! </h1>
			<div className='board'>
				{board.map((row, rowIndex) => (
					<div key={row}>
						{row.map((value, colIndex) => (
							<Square
								key={rowIndex * 9 + (colIndex + 1)}
								squareID={(rowIndex * 9 + (colIndex + 1)) - 1}
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