/*
Explanation
Write a function that shortens a string to a given length. Instead of cutting the string from the end, your function will shorten it from the middle like shrinking.

For example:

sentence = "The quick brown fox jumps over the lazy dog"
res = shorten(sentence, 27)

res === "The quick br...the lazy dog"
Your function should also accept an optional argument glue to get the parts together.

sentence = "The quick brown fox jumps over the lazy dog"
res = shorten(sentence, 27, '---')

res === "The quick br---the lazy dog"
Rules are simple:
Result must always be equal to the given length
Only exception to above rule is, when string is already shorter than given length. In that case string should be returned untouched.
If no glue is sent ... should be used by default
If glue cannot go exactly in the middle, second part should be longer
If glue cannot fit in the shortened string, string should be shortened without shrinking.
meaning; shorten('hello world', 5, '....') should return hello because 4 char glue cannot fit in the shortened string.
glue must have at least 1 char on both ends. Example minimum h...d, results ....d or h.... are not excepted.
You can assume you'll always receive a string as the sentence and the glue. And integer number for the length.
Think about other possible edge cases, there are some surprises.
*/

/*
Find left and right side lengths
Store result as left side + glue + right side
Check if valid:
  - Start and end with letters
  - Correct length
If valid, return result
  else
  return string up to length
*/

function shorten(string, length, glue = '...') {
	if (length >= string.length) return string;
	const half = (length - glue.length) / 2;
	const left = Math.floor(half);
	const right = Math.ceil(half);
	const result = `${string.slice(0, left)}${glue}${string.slice(-right)}`;
	const isValid = /^[a-z]+.+[a-z]+$/i.test(result) && result.length === length;
	return isValid ? result : string.slice(0, length);
}

const sentence = 'The quick brown fox jumps over the lazy dog';
console.log(shorten(sentence, 27));
console.log(shorten(sentence, 27, '----'));
