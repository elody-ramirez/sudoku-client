import { useState } from 'react'

const Square = ({ 
	squareID,
	initialValue, 
	changeable,
	updateBoard

}) => {
	const [num, setNum] = useState(initialValue)

	const numValidation = (e) => {
		const input = e.key
		const regex = /[1-9]/g;
		if (regex.test(input)) {
			setNum(input)
			updateBoard(e.target, input)
		} 
	}

	return (
		<button
			id={squareID}
			className='square' 
			onKeyDown={ changeable ? (e) => numValidation(e) : null}
		>
			{num}
		</button>
	)
}

export default Square