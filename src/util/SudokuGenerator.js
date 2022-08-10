// Incorporate lodash _.sample() for random choice later

// This function is given an array of possible options and returns a random choice of those options
// i.e. - (1,3,4,5,6,9) returns 4
function randomChoice(choices) {
	return choices[Math.floor(Math.random() * choices.length)]
}

// helper function to clean up makePuzzle() that returns an array of length n
function range(n) {
	return Array.from(Array(n).keys())
}

// helper function to clean up makePuzzle() that returns an array of 9 sets
function set() {
    return Array.from(Array(9).keys()).map(
			() => new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
	    )
}

// Randomly fill the game board with numbers, making sure all rows, columns and
// squares (3x3 sections) contain the numbers 1 through 9 according to sudoku rules.

function makePuzzle() {
    // Continues looping until all 81 cells are filled
	while (true) {
		try {
			// Creates a 2D 9x9 Array & set of available numbers for each row, column and square (3x3 section)
			const puzzle = range(9).map(() => range(9))
			const rows = set()
			const columns = set()
			const squares = set()
			Array.from(Array(9).keys()).forEach((i) => {
				Array.from(Array(9).keys()).forEach((j) => {
					// this checks the available numbers for cell(i, j) looking at the row, column and square relative to that cell
					const row = rows[i]
					const column = columns[j]
					const square = squares[Math.floor(i / 3) * 3 + Math.floor(j / 3)]
					const choices = [...row]
						.filter((x) => column.has(x))
						.filter((x) => square.has(x))
					const choice = randomChoice(choices)
					if (!choice) {
						// eslint-disable-next-line no-throw-literal
						throw 'dead end'
					}
					// adds random choice to puzzle & removes availability in the set of columns, rows & squares
					puzzle[i][j] = choice
					column.delete(choice)
					row.delete(choice)
					square.delete(choice)
				})
			})
			return puzzle
		} catch (e) {
			// eslint-disable-next-line no-continue
			continue
		}
	}
}
