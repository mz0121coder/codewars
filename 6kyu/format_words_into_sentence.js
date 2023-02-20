/*Complete the method so that it formats the words into a single comma separated value.
 The last word should be separated by the word 'and' instead of a comma.
  The method takes in an array of strings and returns a single formatted string.

Note:
Empty string values should be ignored.
Empty arrays or null/nil/None values being passed into the method should result in an empty
string being returned.
Example: (Input --> output)
['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""
*/
function formatWords(words) {
	if (!words || words?.length === 0) {
		return '';
	} else if (words.length >= 1) {
		const arr = [];
		for (let i = 0; i < words.length; i++) {
			if (words[i].match(/\w+/)) {
				arr.push(words[i]);
			}
		}
		return arr.join(', ').replace(/, [\w]+$/g, ` and ${arr.at(-1)}`);
	}
}

console.log(
	formatWords([
		'leaongywro',
		'fycy',
		'ht',
		'ojabwgf',
		'zhidqw',
		'gcxypgqpy',
		'g',
	])
);
// console.log(formatWords(null));
// console.log(formatWords([]));
console.log(formatWords(['one']));
console.log(formatWords(['ninja', '', 'ronin']));
console.log(formatWords(['ninja', 'samurai', 'ronin']));
