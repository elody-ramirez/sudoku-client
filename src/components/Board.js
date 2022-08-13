import React, { Component } from 'react'

import Square from './Square'

class Board extends Component {

	renderSquare(i) {
		return <Square />
	}

	createBoard() {
		let board = []
		let row
		for (let i = 0; i < 9; i++) {
			row = []
			for (let j = 0; j < 9; j++) {
				row.push(this.renderSquare(i))
			}
			board.push(<div key={i}>{row}</div>)
		}
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
