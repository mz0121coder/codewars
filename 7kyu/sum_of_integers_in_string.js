/*Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.
Note: only positive integers will be tested.
*/
function sumOfIntegersInString(s) {
	let sum = 0;
	s.split(/\D/).forEach(item => (sum += Number(item)));
	return sum;
}

console.log(
	sumOfIntegersInString(
		'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
	)
);

const greet = name =>
	`Hello ${name[0].toUpperCase()}${name.substring(1).toLowerCase()}!`;
