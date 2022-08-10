
// This is a helper function I will use later to take in the current board and compare it to 3 different arrays (rows, columns & squares) to make sure there are no duplicates.
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
