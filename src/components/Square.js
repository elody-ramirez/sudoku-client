import { useState, useEffect } from 'react'

const Square = ({ 
	initialValue, 
	changeable,
	currentValue,

}) => {
	const [num, setNum] = useState(initialValue);

	useEffect(() => {

	}, [])

	if (changeable) {
		return (
			<button className='square' onKeyDown={(e) => setNum(e.key)}>
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
