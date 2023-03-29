/*
Remove the parentheses
In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
Notes
Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested.*/

function removeParentheses(s) {
	let result = '';
	// count every '('
	let openBrackets = 0;
	// count every ')'
	let closeBrackets = 0;
	// loop over every character
	for (let i = 0; i < s.length; i++) {
		// increase open bracket count
		if (s[i] === '(') {
			openBrackets++;
		}
		// increase close bracket count
		if (s[i] === ')') {
			closeBrackets++;
		}
		// if s[i] is not '(' or')' and open bracket count is same as close bracket count
		// add character to result
		if (s[i] !== '(' && s[i] !== ')' && openBrackets === closeBrackets) {
			result += s[i];
		}
	}
	return result;
}

console.log(removeParentheses('example(unwanted thing)example')); //"exampleexample")
console.log(removeParentheses('example (unwanted thing) example')); //"example  example")
console.log(removeParentheses('a (bc d)e')); //"a e")
console.log(removeParentheses('a(b(c))')); //"a")
console.log(
	removeParentheses('hello example (words(more words) here) something')
); //"hello example  something")
console.log(removeParentheses('(first group) (second group) (third group)')); //"  ")
