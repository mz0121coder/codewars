/*Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

// first row starts at 1
// incrementer goes up by 2 each row

function rowSumOddNumbers(n) {
	let increment = 0;
	const startingDigits = [1];
	const nthRow = [];
	for (let i = 2; i <= n; i++) {
		increment += 2;
		startingDigits.push(startingDigits[startingDigits.length - 1] + increment);
		if (i === n) {
			nthRow.push(startingDigits[startingDigits.length - 1]);
			for (let x = 2; x <= n; x++) {
				nthRow.push(nthRow[nthRow.length - 1] + 2);
			}
		}
	}
	return n === 1 ? 1 : nthRow.reduce((a, b) => a + b);
}

console.log(rowSumOddNumbers(1)); //, 1);
console.log(rowSumOddNumbers(42)); //, 74088);
