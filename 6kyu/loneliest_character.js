/*
Complete the function which accepts a string and return an array of character(s) that have the most spaces to their right and left.

Notes:

the string can have leading/trailing spaces - you should not count them
the strings contain only unique characters from a to z
the order of characters in the returned array doesn't matter
Examples
"a b  c"                        -->  ["b"]
"a bcs           d k"           -->  ["d"]
"    a b  sc     p     t   k"   -->  ["p"]
"a  b  c  de"                   -->  ["b", "c"]
"     a  b  c de        "       -->  ["b"]
"abc"                           -->  ["a", "b", "c"]
Good luck!
*/

// remove leading and trailing space from str
// variable to track max space (left + right)
// loop over each letter
// get left and right space for current letter, add as total space
// if total space >= max , add letter to result array
// push total space of each letter to a separate array
// return the letters with space equal to max space

function loneliest(str) {
	let maxSpace = 0;
	const s = str.trim();
	const result = [];
	const spaces = [];
	s.match(/[a-z]/g).forEach(letter => {
		let space = 0;
		const index = s.indexOf(letter);
		for (let i = index - 1; i >= 0; i--) {
			if (s[i] === ' ') {
				space++;
			} else {
				break;
			}
		}
		for (let i = index + 1; i < s.length; i++) {
			if (s[i] === ' ') {
				space++;
			} else {
				break;
			}
		}
		if (space >= maxSpace) {
			maxSpace = space;
			result.push(letter);
			spaces.push(space);
		}
	});
	return result.filter((el, i) => spaces[i] === maxSpace);
}

console.log(loneliest('a')); //, ['a'], );
console.log(loneliest('abc d   ef  g   h i j      ')); //, ['g'], );
console.log(loneliest('a   b   c ')); //, ['b'], );
console.log(loneliest('  abc  d  z    f gk s ')); //, ['z'], );
console.log(loneliest('a  b  c  de  ')); //, ['b', 'c'], );
console.log(loneliest('abc')); //, ['a', 'b', 'c'], );
