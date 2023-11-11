/*
While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.

So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.

If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".

If string contains 4 numbers but not consecutive it returns "not consecutive".
*/

/*
check for 4 consecutive numbers separated by commas
if not 4 digits return 'incorrect input'
if not consecutive return 'not consecutive'

add 1 to product of 4 numbers
check product is a perfect square
return `product+1, squareRoot`
*/

/*
check for 4 consecutive numbers separated by commas
if not 4 digits return 'incorrect input'
if not consecutive return 'not consecutive'

add 1 to product of 4 numbers
check product is a perfect square
return `product+1, squareRoot`
*/

function checkRoot(string) {
	const digits = string.split(',').map(el => Number(el));
	if (digits.length !== 4 || digits.some(el => Number.isNaN(el)))
		return 'incorrect input';
	if (digits.slice(1).some((num, i) => num !== digits[i] + 1))
		return 'not consecutive';

	const product = digits.reduce((acc, curr) => acc * curr, 1) + 1;
	const squareRoot = Math.sqrt(product);
	if (squareRoot % 1 === 0) return `${product}, ${squareRoot}`;
}

console.log(checkRoot('4,5,6,7')); //, '841, 29')
console.log(checkRoot('3,s,5,6')); //, 'incorrect input')
console.log(checkRoot('11,13,14,15')); //, 'not consecutive')
