/*
You will be given a string and you task is to check if it is possible to convert that string into a palindrome by removing a single character. If the string is already a palindrome, return "OK". If it is not, and we can convert it to a palindrome by removing one character, then return "remove one", otherwise return "not possible". The order of the characters should not be changed.

For example:

solve("abba") = "OK". -- This is a palindrome
solve("abbaa") = "remove one". -- remove the 'a' at the extreme right. 
solve("abbaab") = "not possible". 
More examples in the test cases.

Good luck!
*/

/*
define method to check if a str is palindrome
if s is palindrome return 'OK'

loop through s, on each iteration:
remove current char only, if result is palindrome, return 'remove one'

return 'not possible'
*/

function solve(s) {
	const isPal = str => [...str].reverse().join('') === str;
	if (isPal(s)) return 'OK';
	for (let i = 0; i < s.length; i++) {
		if (isPal(`${s.slice(0, i)}${s.slice(i + 1)}`)) return 'remove one';
	}
	return 'not possible';
}

console.log(solve('abba')); //,"OK");
console.log(solve('abbaa')); //,"remove one");
console.log(solve('abbaab')); //,"not possible");
console.log(solve('madmam')); //,"remove one");
console.log(solve('raydarm')); //,"not possible");
console.log(solve('hannah')); //,"OK");
