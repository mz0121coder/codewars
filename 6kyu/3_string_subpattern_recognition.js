/*
Similar to the previous kata, but this time you need to operate with shuffled strings to identify if they are composed repeating a subpattern

Since there is no deterministic way to tell which pattern was really the original one among all the possible permutations of a fitting subpattern, return a subpattern with sorted characters, otherwise return the base string with sorted characters (you might consider this case as an edge case, with the subpattern being repeated only once and thus equalling the original input string).

For example:

hasSubpattern("a") === "a"; //no repeated pattern, just one character
hasSubpattern("aaaa") === "a"; //just one character repeated
hasSubpattern("abcd") === "abcd"; //base pattern equals the string itself, no repetitions
hasSubpattern("babababababababa") === "ab"; //remember to return the base string sorted
hasSubpattern("bbabbaaabbaaaabb") === "ab"; //same as above, just shuffled
*/

/*
Create object to count occurrences of characters in string

Find min frequency
find highest divisor that all frequencies are divisible by: frequency % divisor == 0

Repeat each character by its frequency in object / divisor
e.g. 'a' has frequency of 6, divisor is 2, => 'aaa'
Sort and join the result, return the new string
*/

function hasSubpattern(string) {
	const obj = {};
	for (const char of string) {
		if (!(char in obj)) {
			obj[char] = 1;
		} else {
			obj[char]++;
		}
	}

	const [keys, values] = [Object.keys(obj), Object.values(obj)];
	let min = Math.min(...values);
	let divisor = 1;
	for (let i = 2; i <= min; i++) {
		if (keys.every(char => obj[char] % i === 0)) divisor = i;
	}

	return keys
		.map(char => char.repeat(obj[char] / divisor))
		.sort()
		.join('');
}

console.log(hasSubpattern('a')); //, "a");
console.log(hasSubpattern('aaaa')); //, "a");
console.log(hasSubpattern('abcd')); //, "abcd");
console.log(hasSubpattern('babababababababa')); //, "ab");
console.log(hasSubpattern('bbabbaaabbaaaabb')); //, "ab");
console.log(hasSubpattern('123a123a123a')); //, "123a");
console.log(hasSubpattern('123A123a123a')); //, "111222333Aaa");
console.log(hasSubpattern('12aa13a21233')); //, "123a");
console.log(hasSubpattern('12aa13a21233A')); //, "111222333Aaaa");
console.log(hasSubpattern('abcdabcaccd')); //, "aaabbccccdd");
