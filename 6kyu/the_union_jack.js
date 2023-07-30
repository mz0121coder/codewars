/*
Your aged grandfather is tragically optimistic about Team GB's chances in the upcoming World Cup, and has enlisted you to help him make Union Jack flags to decorate his house with.

Instructions
Write a function which takes as a parameter a number which represents the dimensions of the flag. The flags will always be square, so the number 9 means you should make a flag measuring 9x9.
It should return a string of the flag, with 'X' for the red/white lines and '-' for the blue background. It should include newline characters so that it's not all on one line.
For the sake of symmetry, treat odd and even numbers differently: odd number flags should have a central cross that is only one 'X' thick. Even number flags should have a central cross that is two 'X's thick (see examples below).
Other points
The smallest flag you can make without it looking silly is 7x7. If you get a number smaller than 7, simply make the flag 7x7.
If you get a decimal, round it UP to the next whole number, e.g. 12.45 would mean making a flag that is 13x13.
If you get something that's not a number at all, return false.
Translations and comments (and upvotes) welcome!

alt

Examples:
unionJack(9); // (9 is odd, so the central cross is 1'X' thick)
"X---X---X
-X--X--X-
--X-X-X--
---XXX---
XXXXXXXXX
---XXX---
--X-X-X--
-X--X--X-
X---X---X"

unionJack(10); // (10 is even, so the central cross is 2 'X's thick)
'X---XX---X
-X--XX--X-
--X-XX-X--
---XXXX---
XXXXXXXXXX
XXXXXXXXXX
---XXXX---
--X-XX-X--
-X--XX--X-
X---XX---X

unionJack(1); // (the smallest possible flag is 7x7)
"X--X--X
-X-X-X-
--XXX--
XXXXXXX
--XXX--
-X-X-X-
X--X--X"

unionJack('string'); //return false.
*/

/*
PLAN
UPPER HALF
round up x to handle decimals, store as variable num
num has to be at least 7
  let startingX = -1
  let endingX = num
loop from 1 to (half of num - 1), on each iteration:
let str = ''
increment startingX by 1 and decrease endingX by 1 each time
nested loop from 0 to num - 1
if nested index equals startingX or endingX, add 'X' to str
if num is odd and nested index equals middle number, add 'X' to str
if num is even and nested index equal one of the middle 2 numbers, add 'X' to str
add '-' in all other cases
add str to an array to store the first half

MIDDLE AND LOWER HALF
if num is odd, add 'X'.repeat(num) once to a middle array
if num is even add 'X'.repeat(num) twice to a middle array

reverse the upper half array(make a copy without mutating it), 
store as a variable called secondHalf

return [...firstHalf, ...middle, ...secondHalf].join('\n')
*/

function unionJack(x) {
	if (typeof x !== 'number') {
		return false;
	}
	const num = x < 7 ? 7 : Math.ceil(x);
	const firstHalf = [];
	const middle = [];
	// INDEX OF MOVING "X" ON BOTH SIDES
	let startingX = -1;
	let endingX = num;
	// UPPER HALF
	for (let i = 1; i < num / 2; i++) {
		let string = '';
		startingX++;
		endingX--;
		for (let j = 0; j < num; j++) {
			if (j === startingX || j === endingX) {
				string += 'X';
			} else if (num % 2 !== 0 && j === Math.floor(num / 2)) {
				string += 'X';
			} else if (num % 2 === 0 && (j === num / 2 || j === num / 2 - 1)) {
				string += 'X';
			} else {
				string += '-';
			}
		}
		firstHalf.push(string);
	}
	//   MIDDLE
	if (num % 2 !== 0) {
		middle.push('X'.repeat(num));
	}
	if (num % 2 === 0) {
		middle.push('X'.repeat(num));
		middle.push('X'.repeat(num));
	}
	//   LOWER HALF
	const secondHalf = [...firstHalf].reverse();
	// RESULT
	return [...firstHalf, ...middle, ...secondHalf].join('\n');
}

console.log(unionJack(7));
console.log(unionJack(8));
