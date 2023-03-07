/*Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/
const removeConsecutiveDuplicates = s => {
	const words = s.split(' ');
	let result = [words[0]];
	for (let i = 1; i < words.length; i++) {
		if (words[i] !== words[i - 1]) {
			result.push(words[i]);
		}
	}
	return result.join(' ');
};

/*function removeConsecutiveDuplicates(str) {
  return str
    .split(" ")
    .filter((word, index, arr) => word !== arr[index + 1])
    .join(" ");
}*/
console.log(
	removeConsecutiveDuplicates(
		'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
	)
);
/*const chai = require("chai");
const assert = chai.assert;

chai.config.truncateThreshold = 0;

describe('Example tests', () => {
  it('should handle example case', () => {
    assert.strictEqual(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta alpha beta gamma delta');
  });
});*/
