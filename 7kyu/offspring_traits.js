/*
A population of bears consists of black bears, brown bears, and white bears.

The input is an array of two elements.

Determine whether the offspring of the two bears will return 'black', 'brown', 'white', 'dark brown', 'grey', 'light brown', or 'unknown'.

Elements in the the array will always be a string.

Examples:
bear_fur(['black', 'black'])  returns 'black'

bear_fur(['brown', 'brown'])  returns 'brown'

bear_fur(['white', 'white'])  returns 'white'

bear_fur(['black', 'brown'])  returns 'dark brown'

bear_fur(['black', 'white'])  returns 'grey'

bear_fur(['brown', 'white'])  returns 'light brown'

bear_fur(['yellow', 'magenta'])  returns 'unknown'
*/

const bearFur = bears => {
	const stats = [...new Set(bears)];
	if (stats.length === 1) return stats[0];
	const summary = stats.sort().join(' ');
	switch (summary) {
		case 'black white':
			return 'grey';
		case 'black brown':
			return 'dark brown';
		case 'brown white':
			return 'light brown';
		default:
			return 'unknown';
	}
};
