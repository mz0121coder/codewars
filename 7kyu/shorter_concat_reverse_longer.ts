/*
Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b
*/

export const shorterReverseLonger = (a: string, b: string): string => {
	const [str1, str2] = [a, b].sort((a, b) => a.length - b.length);
	return a.length === b.length
		? `${b}${[...a].reverse().join('')}${b}`
		: `${str1}${[...str2].reverse().join('')}${str1}`;
};

console.log(shorterReverseLonger('first', 'abcde')); //, "abcdetsrifabcde")
console.log(shorterReverseLonger('hello', 'bau')); //, "bauollehbau")
console.log(shorterReverseLonger('abcde', 'fghi')); //, "fghiedcbafghi")
