/*Task
Given an initial string s, switch case of the minimal possible number of letters to make the whole string written in the upper case or in the lower case.
Input/Output
[input] string s
String of odd length consisting of English letters.
3 ≤ inputString.length ≤ 99.
[output] a string
The resulting string.
Example
For s = "Aba", the output should be "aba"
For s = "ABa", the output should be "ABA"*/

function caseUnification(s) {
	return s.match(/[A-Z]/g)?.length > s.length / 2
		? s.toUpperCase()
		: s.toLowerCase();
}
console.log(caseUnification('Aba')); //,"aba")
console.log(caseUnification('ABa')); //,"ABA")
console.log(caseUnification('ZZZZZ')); //,"ZZZZZ")
