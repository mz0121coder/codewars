/*
PLAN
let max = 0
loop through length of digits (n as a string)
on each iteration:
remove the digit at current index, convert remaining string to number
if number > max, reassign 
return max
*/

function deleteDigit(n) {
	let max = 0;
	const digits = n.toString();
	for (let i = 0; i < digits.length; i++) {
		const num = Number(digits.slice(0, i) + digits.slice(i + 1));
		if (num > max) {
			max = num;
		}
	}
	return max;
}

console.log(deleteDigit(152)); //,52)
console.log(deleteDigit(1001)); //,101)
console.log(deleteDigit(10)); //,1)
