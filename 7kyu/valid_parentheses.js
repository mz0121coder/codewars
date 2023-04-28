/*Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.
*/

function validParentheses(s) {
	return (
		s === '' ||
		(s[0] === '(' &&
			s.at(-1) === ')' &&
			s.match(/\(/g).length === s.match(/\)/g).length)
	);
}

const validParentheses = s =>
	s === '' ||
	(s[0] === '(' &&
		s.at(-1) === ')' &&
		s.match(/\(/g).length === s.match(/\)/g).length);

console.log(validParentheses('()'));
console.log(validParentheses(')(()))'));
console.log(validParentheses('('));
console.log(validParentheses('(())((()())())'));
