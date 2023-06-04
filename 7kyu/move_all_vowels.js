/*
Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

Examples
"day"    ==>  "dya"
"apple"  ==>  "pplae"
*/

function moveVowel(input) {
	const letters = input.match(/[^aeiou]/g)?.join('') ?? '';
	const vowels = input.match(/[aeiou]/g)?.join('') ?? '';
	return letters + vowels;
}

assert.strictEqual(moveVowel('day')); //,"dya");
assert.strictEqual(moveVowel('apple')); //,"pplae");
assert.strictEqual(moveVowel('peace')); //,"pceae");
assert.strictEqual(moveVowel('maker')); //,"mkrae");
