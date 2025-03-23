/*
Your task is to write function which takes string and list of delimiters as an input and returns list of strings/characters after splitting given string.

Example:

multipleSplit('Hi, how are you?', [' ']) => ['Hi,', 'how', 'are', 'you?']
multipleSplit('1+2-3', ['+', '-']) => ['1', '2', '3']
List of delimiters is optional and can be empty, so take that into account.

Important note: Result cannot contain empty string.
*/

function multipleSplit(string, delimiters = []) {
	const regex = new RegExp(
		`[${delimiters.map(el => `\\${el}`).join('')}]`,
		'g'
	);
	return string.split(regex).filter(el => el.length);
}

console.log(multipleSplit('Hi everybody!', [' ', '!'])); //, ['Hi', 'everybody']);
console.log(multipleSplit('(1+2)*6-3^9', ['+', '-', '(', ')', '^', '*'])); //, ['1', '2', '6', '3', '9']);
console.log(
	multipleSplit('Solve_this|kata-very\\quickly!', ['!', '|', '\\', '_', '-'])
); //, ['Solve', 'this', 'kata', 'very', 'quickly']);
