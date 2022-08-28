import { useState, useEffect } from 'react'
import Square from './Square'
import { Puzzles } from '../util/Puzzles.js'

const Board = () => {
	const [board, setBoard] = useState([])

	useEffect(() => {
		let b = []
		let puzzle = Puzzles[1]
		let row
		let count = 0
		for (let i = 0; i < 9; i++) {
			row = []
			for (let j = 0; j < 9; j++) {
				row.push(renderSquare(puzzle[count][1],count))
				count++
			}
			b.push(<div key={i}>{row}</div>)
		}
		setBoard(b)
	}, [])	

	function renderSquare(i,k) {
		return (
			<Square
				key={k}
				initialValue={i}
				changeable={ i === '' ? true : false}
			/>
		)
	}

	return (
		<div>
			<h1> test </h1>
			<div>
				{board.map((square) => square)}
			</div>
		</div>
	)
}

export default Board