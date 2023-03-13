/*Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113
*/
function hexHash(code) {
	return (
		code
			.split('')
			// replace letters with hex value of ascii code
			.map(l => l.charCodeAt(0).toString(16))
			// remove non digits in the hex value
			.map(n => n.replace(/\D/g, ''))
			.join('')
			.split('')
			// return sum
			.reduce((x, y) => x + Number(y), 0)
	);
}

console.log(hexHash('Yo')); //, 20);
console.log(hexHash('Hello, World!')); //, 91);
console.log(hexHash('Forty4Three')); //, 113);
