/*You need to play around with the provided string (s).

Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

Exceptions:

If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

Provided string will always be lower case, won't be empty and will have no special characters.*/

function vowelBack(s) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.repeat(3);
	let result = '';
	for (let i = 0; i < s.length; i++) {
		let index = alphabet.indexOf(s[i]);
		if ('bfghjklmnpqrstvwxyz'.includes(s[i])) {
			index += 9;
		}
		if ('aiu'.includes(s[i])) {
			index -= 5;
		}
		if ('co'.includes(s[i])) {
			index--;
		}
		if (s[i] === 'd') {
			index -= 3;
		}
		if (s[i] === 'e') {
			index -= 4;
		}
		const replacement = alphabet.at(index);
		result += 'code'.includes(replacement) ? s[i] : replacement;
	}
	return result;
}

assert.strictEqual(vowelBack('testcase')); //, "tabtbvba");
assert.strictEqual(vowelBack('codewars')); //, "bnaafvab");
assert.strictEqual(vowelBack('exampletesthere')); //, "agvvyuatabtqaaa");
