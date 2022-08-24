import { useState } from 'react'

const Square = ({ 
	initialValue, 
	changeable,
	currentValue,

}) => {
	const [num, setNum] = useState(initialValue);

	function numValidation(input) {
		const regex = /[1-9]/g;
		if (regex.test(input)) {
			setNum(input)
		} 
	}

	if (changeable) {
		return (
			<button className='square' onKeyDown={(e) => numValidation(e.key)}>
				{num}
			</button>
		)
	} else {
		return (
			<button className='square'>
				{num}
			</button>
		)
	}
}

export default Square