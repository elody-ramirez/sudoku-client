import { useState } from 'react'

const Square = ({ 
	initialValue, 
	changeable,
	updateBoard

}) => {
	const [num, setNum] = useState(initialValue)

	const numValidation = (input) => {
		const regex = /[1-9]/g;
		if (regex.test(input)) {
			setNum(input)
			updateBoard()
		} 
	}

	return (
		<button
			className='square' 
			onKeyDown={ changeable ? (e) => numValidation(e.key) : numValidation()}
		>
			{num}
		</button>
	)
}

export default Square