/*Make a function that receives a value, val and outputs the smallest higher number than the given value, and this number belong to a set of positive integers that have the following properties:

their digits occur only once

they are odd

they are multiple of three

nextNumb(12) == 15

nextNumb(13) == 15

nextNumb(99) == 105

nextNumb(999999) == 1023459

nextNumber(9999999999) == "There is no possible number that
fulfills those requirements"
Enjoy the kata!!

*/

function nextNumb(val) {
	let nextNumber = 0;
	if (val < 9999999) {
		for (let i = val; i < Infinity; i++) {
			if (
				i % 2 !== 0 &&
				i % 3 === 0 &&
				i
					.toString()
					.split('')
					.every((x, i, arr) => arr.indexOf(x) === arr.lastIndexOf(x))
			) {
				nextNumber = i;
				break;
			}
		}
	}
	return val > 9999999
		? 'There is no possible number that fulfills those requirements'
		: nextNumber;
}

console.log(nextNumb(12)); //, 15)
console.log(nextNumb(13)); //, 15)
console.log(nextNumb(99)); //, 105)
console.log(nextNumb(999999)); //, 1023459)
console.log(nextNumb(9999999999)); //, "There is no\ possible number that fulfills those requirements")
