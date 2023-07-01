// define variable total that starts at 0
// loop from i up to and including 100, increment by n on each iteration
// add digit sum of current number(i) to total
// return total

function procedure(n) {
	let total = 0;
	for (let i = n; i <= 100; i += n) {
		const digitSum = i
			.toString()
			.split('')
			.reduce((acc, curr) => acc + Number(curr), 0);
		total += digitSum;
	}
	return total;
}

console.log(procedure(30)); //, 18);
console.log(procedure(12)); //, 72);
console.log(procedure(49)); //, 30);
console.log(procedure(17)); //, 48);
console.log(procedure(10)); //, 46);
