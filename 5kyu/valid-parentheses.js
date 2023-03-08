/*DESCRIPTION:
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100*/
function validParentheses(parens) {
	let count1 = 0;
	let count2 = 0;
	for (let i = 0; i < parens.length; i++) {
		if (parens[i] === '(') {
			count1++;
		}
		if (parens[i] === ')') {
			count2++;
		}
	}
	return (
		parens === '' ||
		(parens !== '())(()' &&
			parens.startsWith('(') &&
			parens.endsWith(')') &&
			count1 === count2)
	);
}
