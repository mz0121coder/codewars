/*
Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

Good luck!
*/

/*
loop from i = 1 to s.length
on each iteration:
check all substrings of length i
if substring is odd (check last digit only to handle large numbers), add to count
return count
*/

// O(n^2)
// function solve(s) {
// 	let count = 0;
// 	for (let i = 1; i <= s.length; i++) {
// 		for (let j = 0; j <= s.length - i; j++) {
// 			const substring = s.slice(j, j + i);
// 			if (Number(substring.slice(-1)) % 2) count++;
// 		}
// 	}
// 	return count;
// }

// O(n)
function solve(s) {
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		if (Number(s[i]) % 2) count += i + 1;
	}
	return count;
}

// O(n) - 1 liner
// const solve = s =>
// 	[...s].reduce((a, b, i) => (Number(b) % 2 ? a + i + 1 : a), 0);

console.log(solve('1341')); //,7);
console.log(solve('1357')); //,10);
console.log(solve('13471')); //,12);
console.log(solve('134721')); //,13);
console.log(solve('1347231')); //,20);
console.log(solve('13472315')); //,28);
