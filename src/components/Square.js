import React, {Component} from 'react'

class Square extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: null,
		}
	}

	render() {
		const {value} = this.props.value
		return (
			<button
				className='square'
				onKeyDown={(e) => this.setState({ value: e.key})}>
				{this.props.value}
			</button>
		)
	}
}

export default Square
