/*
In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:

- first remove all letter 'a', followed by letter 'b', then 'c', etc...
- remove the leftmost character first.
For example: 
solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
solve('abracadabra', 2) = 'brcadabra'  # remove 2 'a' from the left.
solve('abracadabra', 6) = 'rcdbr'      # remove 5 'a', remove 1 'b' 
solve('abracadabra', 8) = 'rdr'
solve('abracadabra',50) = ''
*/

/*
start idx (of letter to replace) at 0
result string: str = s (to begin)
iterate from 0 to k - 1
if str length > 0, increment idx until str has letter at idx
then remove letter
return str after the iterations
*/

function solve(s, k) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let idx = 0;
	let str = s;
	for (let i = 0; i < k; i++) {
		if (str.length) {
			while (!str.includes(alphabet[idx])) idx++;
			str = str.replace(alphabet[idx], '');
		}
	}
	return str;
}

console.log(solve('abracadabra', 1)); //,'bracadabra');
console.log(solve('abracadabra', 2)); //,'brcadabra');
console.log(solve('abracadabra', 6)); //,'rcdbr');
console.log(solve('abracadabra', 8)); //,'rdr');
console.log(solve('abracadabra', 50)); //,'');

// SOLUTION 2 - with new RegExp

// function solve(s, k) {
// 	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
// 	let str = s;
// 	let removals = 0;
// 	for (const letter of alphabet) {
// 		if (str.includes(letter)) {
// 			const matches = str.match(new RegExp(letter, 'g'));
// 			for (let i = 0; i < matches.length; i++) {
// 				if (removals < k) {
// 					str = str.replace(letter, '');
// 					removals++;
// 				}
// 			}
// 		}
// 		if (removals === k) break;
// 	}
// 	return str;
// }
