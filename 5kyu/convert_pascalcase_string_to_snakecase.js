/*
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
*/

/*
let result = ''
convert input to string
loop through each character in string
if character is a capital letter, add underscore + character (lowercase) to result
add other characters as they are
remove leading and trailing underscores
*/

function toUnderscore(string) {
	let result = '';
	const chars = string.toString();
	for (let i = 0; i < chars.length; i++) {
		result += /[A-Z]/.test(chars[i])
			? `_${chars[i].toLowerCase()}`
			: `${chars[i]}`;
	}
	return result.replace(/^\_|\_$/, '');
}
