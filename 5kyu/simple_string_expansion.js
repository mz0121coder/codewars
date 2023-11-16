/*
Consider the following expansion:

solve("3(ab)") = "ababab"     -- because "ab" repeats 3 times
solve("2(a3(b))") = "abbbabbb" -- because "a3(b)" == "abbb", which repeats twice.
Given a string, return the expansion of that string.

Input will consist of only lowercase letters and numbers (1 to 9) in valid parenthesis. There will be no letters or numbers after the last closing parenthesis.

More examples in test cases.

Good luck!
*/

// 1st solution

// function solve(str) {
// 	const arr = [str];

// 	const replaceBrackets = s =>
// 		s
// 			.replace(/[0-9]\([a-z]+\)/, x => x.slice(2, -1).repeat(Number(x[0])))
// 			.replace(/[a-z]\([a-z]+\)/, x => x[0] + x.slice(2, -1));

// 	for (let i = 1; i < Infinity; i++) {
// 		arr.push(replaceBrackets(arr[arr.length - 1]));
// 		if (arr[i] === arr[i - 1]) return arr[i];
// 	}
// }

/*
define helper method to replace digits followed by brackets with the letters between them, repeated according to the digits
also remove all brackets after letters
call helper method on result string until the output repeats itself and string is fully expanded
*/

// 2nd solution - less memory usage
function solve(str) {
	const replaceBrackets = s =>
		s
			.replace(/[0-9]\([a-z]+\)/, x => x.slice(2, -1).repeat(Number(x[0])))
			.replace(/[a-z]\([a-z]+\)/, x => x[0] + x.slice(2, -1));

	let result = str;
	while (true) {
		if (result === replaceBrackets(result)) return result;
		result = replaceBrackets(result);
	}
}

console.log(solve('3(ab)')); //,"ababab");
console.log(solve('2(a3(b))')); //,"abbbabbb");
console.log(solve('3(b(2(c)))')); //,"bccbccbcc");
console.log(solve('k(a3(b(a2(c))))')); //,"kabaccbaccbacc");
