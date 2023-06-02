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
