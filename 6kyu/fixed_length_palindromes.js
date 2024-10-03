/*
Four-digit palindromes start with [1001,1111,1221,1331,1441,1551,1551,...] and the number at position 2 is 1111.

You will be given two numbers a and b. Your task is to return the a-digit palindrome at position b if the palindromes were arranged in increasing order.

Therefore, palin(4,2) = 1111, because that is the second element of the 4-digit palindrome series.

More examples in the test cases. Good luck!
*/

function palin(a, b) {
	if (a < 3) return Number(`${b}`.repeat(a));

	const digitStr = `0123456789`.repeat(a);
	const palindrome = [...`1${'0'.repeat(a - 2)}1`];

	const midIndexes =
		a % 2 ? [Math.floor(a / 2)] : [Math.floor(a / 2) - 1, Math.ceil(a / 2)];
	const leftIndexes = [...digitStr.slice(0, midIndexes[0]).repeat(a)].map(n =>
		Number(n)
	);
	const rightIndexes = [
		...digitStr.slice(midIndexes.slice(-1)[0] + 1, a).repeat(a),
	].map(n => Number(n));

	let midIndex = a > 4 ? 0 : 1;
	let leftIndex = leftIndexes.slice(-1)[0];
	let rightIndex = rightIndexes[0];

	for (let i = 1; i < b; i++) {
		for (const index of midIndexes) palindrome[index] = digitStr[i];
		if (digitStr[i] == 0) {
			midIndex++;
			palindrome[leftIndex] = digitStr[midIndex];
			palindrome[rightIndex] = digitStr[midIndex];
			leftIndex--;
			rightIndex++;
		}
	}

	return Number(palindrome.join(''));
}

console.log(palin(2, 2)); // 22);
console.log(palin(3, 10)); // 191);
console.log(palin(4, 5)); // 1441);
console.log(palin(5, 19)); // 11811);
console.log(palin(6, 3)); // 102201);
console.log(palin(6, 20)); // 119911);
console.log(palin(7, 3)); // 1002001);
