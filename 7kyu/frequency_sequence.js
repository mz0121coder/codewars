/*Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

Example (s, sep --> Output)

"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
"^^^**$"     , "x" --> "3x3x3x2x2x1"
*/

const freqSeq = (str, sep) =>
	str
		.split('')
		.map(letter => str.split('').filter(x => x === letter).length)
		.join(sep);

console.log(freqSeq('hello world', '-')); //, '1-1-3-3-2-1-1-2-1-3-1');
console.log(freqSeq('19999999', ':')); //, '1:7:7:7:7:7:7:7');
console.log(freqSeq('^^^**$', 'x')); //, '3x3x3x2x2x1');
