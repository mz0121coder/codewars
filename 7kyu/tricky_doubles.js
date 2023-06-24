/*Create a function that returns twice the supplied value unless it is a tricky double.

The trick: if the number passed in is a double, simply return the value that was passed.

Examples of a double number include:

44
77
3333
8787
100100
In the example 8787, the number 87 is doubled (appears twice).

trickyDoubles(15)   // should return 30
trickyDoubles(100)  // should return 200
trickyDoubles(4343) // should return 4343*/

// if n.toString length > 1 and is even e.g. 6 digits
// if first half === second half, return n
// otherwise return n * 2

function trickyDoubles(n) {
	const str = n.toString();
	if (str.length > 1 && str.length % 2 === 0) {
		const firstHalf = str.slice(0, str.length / 2);
		const secondHalf = str.slice(str.length / 2);
		return firstHalf === secondHalf ? n : n * 2;
	}
	return n * 2;
}

console.log(trickyDoubles(2)); //, 4);
console.log(trickyDoubles(4)); //, 8);
console.log(trickyDoubles(100100)); //, 100100);
