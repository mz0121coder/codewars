/*
Given a string as input, return a new string with each letter pushed to the right by its respective index in the alphabet.

We all know that A is a slow and Z is a fast letter. This means that Z gets shifted to the right by 25 spaces, A doesn't get shifted at all, and B gets shifted by 1 space.

You can assume the following things about your input:

It will only contain uppercase letters from A to Z, no whitespaces or punctuation;
Input strings will not exceed 100 characters (although your output string might!)
Note that if 2 or more letters fall onto the same space after shifting, the latest character will be used. For example: "BA" -> " A"

Examples
"AZ"   -->  "A                         Z"
"ABC"  -->  "A B C"
"ACE"  -->  "A  C  E"
"CBA"  -->  "  A"
"HELLOWORLD"  -->  "     E H    DLL   OLO   R  W"
*/

// first approach - 2 for loops

// function speedify(input) {
// 	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// 	const indexes = {};
// 	let lastIdx = -1;

// 	for (let i = 0; i < input.length; i++) {
// 		const idx = i + alphabet.indexOf(input[i]);
// 		indexes[idx] = input[i];
// 	}

// 	let result = '';
// 	for (let i = 0; i <= lastIdx; i++) {
// 		result += indexes[i] || ' ';
// 	}

// 	return result;
// }

/*
create object to store new indexes of letters:
=> index in alphabet + input str index of each letter

loop from 0 to highest value from indexes object:
add indexes[i] || ' ' to result string
return result
*/

// 2nd approach - reduce method

function speedify(input) {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const indexes = [...input].reduce((char, obj, i) => {
		obj[alphabet.indexOf(char) + i] = char;
		return obj;
	}, {});

	let result = '';
	for (let i = 0; i <= Math.max(...Object.keys(indexes); i++) {
		result += indexes[i] || ' ';
	}
	return result;
}

console.log(speedify('AZ'));
console.log(speedify('ACE'));
console.log(speedify('HELLOWORLD'));
