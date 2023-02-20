/*
Create a moreZeros function which will receive a string for input, and 
return an array (or null terminated string in C) containing only the characters 
from that string whose binary representation of its ASCII value consists of more zeros than ones.
You should remove any duplicate characters, keeping the first occurrence of any 
such duplicates, so they are in the same order in the final array as they first
appeared in the input string.
Examples
'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False
                   
        --> ['a','b','d']
    
'DIGEST'--> ['D','I','E','T']
All input will be valid strings of length > 0. Leading zeros in binary should not be counted.
FUNDAMENTALS
*/
function moreZeros(s) {
	const arr = [];
	for (let i = 0; i < s.length; i++) {
		// binary value of each letter
		const binary = s[i].charCodeAt(0).toString(2);
		if (
			// check length of 0s more than 1s
			binary.match(/0/g)?.toString().length >
			binary.match(/1/g)?.toString().length
		) {
			arr.push(s[i]);
		}
	}
	// remove duplicates
	return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(moreZeros('abcdeabcde'));
