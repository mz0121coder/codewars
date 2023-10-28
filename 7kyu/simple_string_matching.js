/*You will be given two strings a and b consisting of lower case letters, but a will have at most one asterix character. The asterix (if any) can be replaced with an arbitrary sequence (possibly empty) of lowercase letters. No other character of string a can be replaced. If it is possible to replace the asterix in a to obtain string b, then string b matches the pattern.

If the string matches, return true else false.

For example:
solve("code*s","codewars") = true, because we can replace the asterix(*) with "war" to match the second string. 
solve("codewar*s","codewars") = true, because we can replace the asterix(*) with "" to match the second string. 
solve("codewars","codewars") = true, because the strings already match.
solve("a","b") = false
solve("*", "codewars") = true
More examples in test cases.

Good luck!*/

function solve(a, b) {
	if (a.replace('*', '') === b) return true;
	const index = a.indexOf('*');
	for (let i = index + 1; i <= b.length; i++) {
		const section = b.slice(index, i);
		if (a.replace('*', section) === b) return true;
	}
	return false;
}

console.log(solve('code*s', 'codewars')); //true)
console.log(solve('codewar*s', 'codewars')); // true)
console.log(solve('code*warrior', 'codewars')); //false)
console.log(solve('c', 'c')); //true)
console.log(solve('*s', 'codewars')); //true)
console.log(solve('*s', 's')); // true)
console.log(solve('s*', 's')); //true)
console.log(solve('aa', 'aaa')); // false)
console.log(solve('aa*', 'aaa')); // true)
console.log(solve('aaa', 'aa')); // false)
console.log(solve('aaa*', 'aa')); // false)
console.log(solve('*', 'codewars')); //true)
