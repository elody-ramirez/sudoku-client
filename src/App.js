import React, {Component} from 'react'

import Game from './components/Game'

class App extends Component {
	render () {
		return (
			<div>
				<div className='game-board'>
					<Game />
				</div>
			</div>
		)

	}
}

export default App
