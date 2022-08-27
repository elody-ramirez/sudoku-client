import Board from './Board'

const Game = () => {
	return (
		<div className='game'>
			<div className='game-board'>
				<Board />
			</div>
			<div className='game-info'>
				<div>Game Info</div>
				<ol>{/* TODO */}</ol>
			</div>
		</div>
	)
}

export default Game