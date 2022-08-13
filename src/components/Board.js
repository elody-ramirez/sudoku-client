import React, { Component } from 'react'

import Square from './Square'
import { Puzzles } from '../util/Puzzles.js'

class Board extends Component {

	renderSquare(i) {
		return <Square value={i}/>
	}

	createBoard() {
		let board = []
		let puzzle = Puzzles[1]
		let row
		let count = 0
		for (let i = 0; i < 9; i++) {
			row = []
			for (let j = 0; j < 9; j++) {
				row.push(this.renderSquare(puzzle[count][1]))
				count++
			}
			board.push(<div key={i}>{row}</div>)
		}
		console.log(puzzle)
		return board	
	}

	render() {

		return (
			<div>
				<h1> test </h1>
				<div>{this.createBoard()}</div>
			</div>
		)
	}
}

export default Board
