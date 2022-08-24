import { useState } from 'react'

const Square = ( { value } ) => {
	const [num, setNum] = useState(value);

	return (
		<button
			className='square'
			onKeyDown={(e) => setNum(e.key)}>
			{num}
		</button>
	)
}

export default Square
