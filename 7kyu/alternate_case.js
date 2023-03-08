/*Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD*/
function alternateCase(s) {
	return s
		.split('')
		.map(x => (x.match(/[A-Z]/) ? x.toLowerCase() : x.toUpperCase()))
		.join('');
}
console.log(alternateCase('abc')); //, "ABC");
console.log(alternateCase('ABC')); //, "abc");
console.log(alternateCase('Hello World')); //, "hELLO wORLD");
