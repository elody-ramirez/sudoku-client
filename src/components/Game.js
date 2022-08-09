import React, {Component} from 'react'
import Puzzle from './Puzzle'

class Game extends Component {
	render() {
		return (
			<div className='game'>
				<div className='game-board'>
					<Puzzle />
				</div>
				<div className='game-info'>
					<div>Game Info</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		)
	}
}

export default Game