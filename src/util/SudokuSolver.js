

const hasDuplicates = (arr, board) => {
	const storage = {}
	for (let i = 0; i < arr.length; i++) {
		const value = board[arr[i]]
		if (!storage[value]) {
			storage[value] = value
		} else {
			return true
		}
	}
	return false
}
