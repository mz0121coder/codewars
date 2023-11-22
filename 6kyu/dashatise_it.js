/*
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

// more readable
// function dashatize(num) {
//   return String(num)
//     .replace(/([13579])/g, "-$1-")
//     .replace(/--+/g, "-")
//     .replace(/(^-|-$)/g, "")
// }

// better performance
function dashatize(num) {
	if (Number.isNaN(num)) return 'NaN';

	const isOdd = n => n % 2;
	const str = `${Math.abs(num)}`;
	let result = str[0];

	for (const char of str.slice(1)) {
		const current = Number(char);
		const lastNum = Number(result.slice(-1));
		result +=
			isOdd(current) || (!isOdd(current) && isOdd(lastNum)) ? `-${char}` : char;
	}

	return result;
}

console.log(dashatize(274)); //, "2-7-4", "Should return 2-7-4");
console.log(dashatize(5311)); //, "5-3-1-1", "Should return 5-3-1-1");
console.log(dashatize(86320)); //, "86-3-20", "Should return 86-3-20");
console.log(dashatize(974302)); //, "9-7-4-3-02", "Should return 9-7-4-3-02");
console.log(dashatize(NaN)); //, "NaN", "Should return NaN");
console.log(dashatize(0)); //, "0", "Should return 0");
console.log(dashatize(-1)); //, "1", "Should return 1");
console.log(dashatize(-28369)); //, "28-3-6-9", "Should return 28-3-6-9");
