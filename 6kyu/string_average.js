/*You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"*/

// make an array for numbers written as strings
// if string includes a number greater than 9 or is empty, return 'n/a'
// get sum of numbers in str, divide by str length
// round average down to nearest integer

function averageString(str) {
	const numbers = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
	];
	if (str === '' || str.split(' ').some(el => !numbers.includes(el))) {
		return 'n/a';
	}
	const average =
		str.split(' ').reduce((acc, curr) => acc + numbers.indexOf(curr), 0) /
		str.split(' ').length;
	return numbers[Math.floor(average)];
}

console.log(averageString('zero nine five two')); //, "four");
console.log(averageString('four six two three')); //, "three");
console.log(averageString('one two three four five')); //, "three");
console.log(averageString('five four')); //, "four");
console.log(averageString('zero zero zero zero zero')); //, "zero");
console.log(averageString('one one eight one')); //, "two");
console.log(averageString('')); //, "n/a");
