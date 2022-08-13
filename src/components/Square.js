import React, {Component} from 'react'

class Square extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: null,
		}
	}

	render() {
		return (
			<button
				className='square'
				onKeyDown={(e) => this.setState({ value: e.key})}>
				{this.state.value}
			</button>
		)
	}
}

export default Square
