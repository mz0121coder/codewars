/*
Your goal is to create a function to format a number given a template; if the number is not present, use the digits 1234567890 to fill in the spaces.

A few rules:

the template might consist of other numbers, special characters or the like: you need to replace only alphabetical characters (both lower- and uppercase);
if the given or default string representing the number is shorter than the template, just repeat it to fill all the spaces.
A few examples:

numericFormatter("xxx xxxxx xx","5465253289") === "546 52532 89"
numericFormatter("xxx xxxxx xx") === "123 45678 90"
numericFormatter("+555 aaaa bbbb", "18031978") === "+555 1803 1978"
numericFormatter("+555 aaaa bbbb") === "+555 1234 5678"
numericFormatter("xxxx yyyy zzzz") === "1234 5678 9012"
*/

/*
add param digits with default value '1234567890'
start result and idx as '' and 0
loop through template:
if char is a letter, add digits[idx % digits.length] to result and increment idx
else 
add char to result

return result
*/

function numericFormatter(template, digits = '1234567890') {
	let result = '';
	let idx = 0;
	for (const char of template) {
		if (/[a-z]/i.test(char)) {
			result += digits[idx % digits.length];
			idx++;
		} else {
			result += char;
		}
	}
	return result;
}

// more concise
// const numericFormatter = (template, digits = '1234567890', index = 0) =>
// 	template.replace(/[a-z]/gi, x => digits[index++ % digits.length]);

assert.strictEqual(numericFormatter('xxx xxxxx xx', '5465253289')); // "546 52532 89"
assert.strictEqual(numericFormatter('xxx xxxxx xx')); // "123 45678 90"
assert.strictEqual(numericFormatter('+555 aaaa bbbb', '18031978')); // "+555 1803 1978"
assert.strictEqual(numericFormatter('+555 aaaa bbbb')); // "+555 1234 5678"
assert.strictEqual(numericFormatter('xxxx yyyy zzzz')); // "1234 5678 9012"
