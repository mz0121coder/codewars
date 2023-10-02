/*
Find the length of longest subsequence of same incrementing values in a string !

What is this ?

in 10 11 12 it is 3. Because the 3 numbers are obtained by increments of 1 from the initial number of the sequence.

in 10 11 12 7 it still is 3 . Won by the subsequence 10 11 12 which is the longest sequence of number following each other incremented by the same number: 1

in 1 3 9 it is 2. Either won by 1 3(+2) or 3 9 (+6).

in 7 8 9 2 5 8 11 the longest currentChain length is 4 won by 2 5 8 11 (same increment of 3 between them)

in 1 3 9 15 21 7 8 2 3 4 result is 4 won by 3 9 15 21 (incremented by 6)

The numbers in the currentChain will only be positive or negative integers separated by a space.
*/

/*
return 0 if string doesn't have digits
else
track max chain, current chain and current increment
loop through numbers starting at index 1
reassign the variables when a bigger chain is found
return max chain
*/

function longestSequenceIn(string) {
	if (!/\d/.test(string)) return 0;
	const numbers = string.split(' ').map(el => Number(el));

	let maxChain = 1;
	let currentChain = 1;
	let increment = 1;

	numbers.slice(1).forEach((num, idx) => {
		const diff = num - numbers[idx];
		if (diff !== increment) {
			increment = diff;
			currentChain = 2;
		} else {
			currentChain++;
		}
		if (currentChain > maxChain) maxChain = currentChain;
	});

	return maxChain;
}

console.log(longestSequenceIn('10 11 12')); //),3,'Normal currentChain');
console.log(longestSequenceIn('1 3 9')); //),2,'2 solutions currentChain');
console.log(longestSequenceIn('7 8 9 2 5 8 11')); //),4,'Increment of 3 currentChain');
console.log(longestSequenceIn('1 3 9 15 21 7 8 2 3 4')); //),4,'Increment of 6 currentChain');
