
// This is a helper function I will use later to take in the current board and compare it to 3 different arrays (rows, columns & squares) to make sure there are no duplicates.
function hasDuplicates (arr, board) {
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

// This function ultimately checks if the game is complete by checking every row, column and square to make sure sure there are no duplicates
function checkForWin (board) {
	if (board.every((e) => e !== '') === false) {
		return false
	}

    const rows = [
		[0, 1, 2, 3, 4, 5, 6, 7, 8],
		[9, 10, 11, 12, 13, 14, 15, 16, 17],
		[18, 19, 20, 21, 22, 23, 24, 25, 26],
		[27, 28, 29, 30, 31, 32, 33, 34, 35],
		[36, 37, 38, 39, 40, 41, 42, 43, 44],
		[45, 46, 47, 48, 49, 50, 51, 52, 53],
		[54, 55, 56, 57, 58, 59, 60, 61, 62],
		[63, 64, 65, 66, 67, 68, 69, 70, 71],
		[72, 73, 74, 75, 76, 77, 78, 79, 80],
	]
	const cols = [
		[0, 9, 18, 27, 36, 45, 54, 63, 72],
		[1, 10, 19, 28, 37, 46, 55, 64, 73],
		[2, 11, 20, 29, 38, 47, 56, 65, 74],
		[3, 12, 21, 30, 39, 48, 57, 66, 75],
		[4, 13, 22, 31, 40, 49, 58, 67, 76],
		[5, 14, 23, 32, 41, 50, 59, 68, 77],
		[6, 15, 24, 33, 42, 51, 60, 69, 78],
		[7, 16, 25, 34, 43, 52, 61, 70, 79],
		[8, 17, 26, 35, 44, 53, 62, 71, 80],
	]
	const squares = [
		[0, 1, 2, 9, 10, 11, 18, 19, 20],
		[3, 4, 5, 12, 13, 14, 21, 22, 23],
		[6, 7, 8, 15, 16, 17, 24, 25, 26],
		[27, 28, 29, 36, 37, 38, 45, 46, 47],
		[30, 31, 32, 39, 40, 41, 48, 49, 50],
		[33, 34, 35, 42, 43, 44, 51, 52, 53],
		[54, 55, 56, 63, 64, 65, 72, 73, 74],
		[57, 58, 59, 66, 67, 68, 75, 76, 77],
		[60, 61, 62, 69, 70, 71, 78, 79, 80],
	]

	for (let i = 0; i < rows.length; i++) {
		if (hasDuplicates(rows[i], board)) {
			return false
		}
	}
	for (let i = 0; i < cols.length; i++) {
		if (hasDuplicates(cols[i], board)) {
			return false
		}
	}

    for (let i = 0; i < squares.length; i++) {
		if (hasDuplicates(squares[i], board)) {
			return false
		}
	}
	return true
}
