import Square from './Square'
import { Puzzles } from '../util/Puzzles.js'

const Board = () => {

	function renderSquare(i) {
		if (i === '') {
			return (
				<Square
					initialValue={i}
					onKeyDown={() => this.props.onKeyDown(i)}
					changeable={true}
				/>
			)
		} else {
			return (
				<Square
					initialValue={i}
					onKeyDown={() => this.props.onKeyDown(i)}
					changeable={false}
				/>
			)
		}
		
	}

	function createBoard() {
		let board = []
		let puzzle = Puzzles[1]
		let row
		let count = 0
		for (let i = 0; i < 9; i++) {
			row = []
			for (let j = 0; j < 9; j++) {
				row.push(renderSquare(puzzle[count][1]))
				count++
			}
			board.push(<div key={i}>{row}</div>)
		}
		console.log(puzzle)
		return board	
	}

	return (
		<div>
			<h1> test </h1>
			<div>{createBoard()}</div>
		</div>
	)
}

export default Board