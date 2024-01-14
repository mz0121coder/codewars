/*
You are given a string of consecutive natural numbers.
Your task is to determine the smallest number that can be the first in this string.
The string ends with an untruncated number.

Examples
"123456789101112131415" -> 1
"17181920" -> 17
"72637236" -> 72637236
"1112" -> 11
"91011" -> 9
"99100" -> 99
"431243" -> 431243, not 4312
"577495" -> 577495, not 57749
Size limits
0 < length string < 140
0 < smallest number < 1 000 000 000
*/

// recursive approach
function beginning(xs, size = 1) {
	let str = '';
	const num = Number(xs.slice(0, size));
	for (let i = num; i < Infinity; i++) {
		str += `${i}`;
		if (str !== xs.slice(0, str.length)) {
			size++;
			return beginning(xs, size);
		}
		if (str === xs) return num;
	}
}

console.log(beginning('123456789101112131415')); // 1
console.log(beginning('17181920')); // 17
console.log(beginning('72637236')); // 72637236
console.log(beginning('1112')); // 11
console.log(beginning('91011')); // 9
console.log(beginning('99100')); // 99
