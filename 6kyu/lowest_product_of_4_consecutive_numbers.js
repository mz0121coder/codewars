/*
Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

This should only work if the number has 4 digits or more. If not, return "Number is too small".

Example
lowestProduct("123456789") --> 24 (1x2x3x4)
lowestProduct("35") --> "Number is too small"
*/

function lowestProduct(input) {
	if (input.length < 4) return 'Number is too small';
	if (input.includes('0')) return 0;

	let product = [...input.slice(0, 4)].reduce(
		(acc, curr) => acc * Number(curr),
		1
	);
	let minProduct = product;
	let startIndex = 0;
	let endIndex = 3;

	while (endIndex < input.length - 1) {
		endIndex++;
		product = product / Number(input[startIndex]);
		product *= Number(input[endIndex]);
		minProduct = Math.min(minProduct, product);
		startIndex++;
	}

	return minProduct;
}

console.log(lowestProduct('123456789')); //,24);
console.log(lowestProduct('234567899')); //,120);
console.log(lowestProduct('2345611117899')); //,1);
console.log(lowestProduct('333')); //,"Number is too small");
console.log(lowestProduct('1234111')); //,4,"Numbers should be consecutives");
