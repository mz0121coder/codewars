/*
Given the string "1+2+3", write a function calculate to output the result, ie. 6.

If there is no operator between 2 numbers, there will be a space instead ie. the input is "1+2 3". In this case, process the input as "1+23" and output 24.

The input will always be a string with 3 integers 0-1000, zero or more + operators, and zero or more spaces.

Assume the input will always be valid.

Note: eval and Function have been disabled; if not there would be no point to this exercise.

Examples:

console.log(calculate("1+2+3"))// 6);
console.log(calculate("1+2 3"))// 24);
console.log(calculate("1 2 3"))// 123);
*/

/*
Remove spaces from str,
split this by non-digits and digits, store as 'digits' and 'adds':

Loop through digits:
	if adds[i] is '+', add digits[i] to result string (convert both to number)
	else
	add digits[i] to result without converting to number
Return result as number
*/

function calculate(str) {
	const digits = str.replace(/\s+/g, '').split(/\D/);
	const adds = str.replace(/\s+/g, '').split(/\d+/);
	let result = '';
	digits.forEach(
		(el, i) =>
			(result =
				adds[i] === '+' ? `${Number(result) + Number(el)}` : result + el)
	);
	return Number(result);
}

console.log(calculate('1+2+3')); // 6
console.log(calculate('1+2 3')); // 24
console.log(calculate('1 2 3')); // 123
