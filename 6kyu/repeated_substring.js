/*
For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return :

a tuple (t, k) (in Python)
an array [t, k] (in Ruby and JavaScript)
in C, return k and write to the string t passed in parameter
Examples:
"ababab" ---> (t = "ab", k = 3)

"abcde" ---> (t = "abcde", k = 1)
because for this string, the minimum substring 't'
such that 's' is 'k' times 't', is 's' itself.
*/

/*
add 2nd param, len that starts at 2 
loop through s, increment = len
divisor = s length / substring length
if s == substring * divisor return substring
recursively repeat function, increasing len by 1
*/
// recursion
function f(s, len = 2) {
	for (let i = 0; i < s.length; i += len) {
		const substring = s.slice(i, i + len);
		const divisor = s.length / substring.length;
		if (s === substring.repeat(divisor)) return [substring, divisor];
	}
	return f(s, len + 1);
}

// while loop
// function f(s) {
// 	let len = 1;
// 	while (len < s.length) {
// 		len++;
// 		for (let i = 0; i < s.length; i += len) {
// 			const substring = s.slice(i, i + len);
// 			const divisor = s.length / substring.length;
// 			if (s === substring.repeat(divisor)) return [substring, divisor];
// 		}
// 	}
// }

console.log(f('ababab')); //, ['ab', 3]);
console.log(f('abcde')); //, ['abcde', 1]);
