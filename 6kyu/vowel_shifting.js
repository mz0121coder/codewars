/*
You get a "text" and have to shift the vowels by "n" positions to the right.
(Negative value for n should shift to the left.)
"Position" means the vowel's position if taken as one item in a list of all vowels within the string.
A shift by 1 would mean, that every vowel shifts to the place of the next vowel.

Shifting over the edges of the text should continue at the other edge.

Example:

text = "This is a test!"
n = 1
output = "Thes is i tast!"

text = "This is a test!"
n = 3
output = "This as e tist!"

If text is null or empty return exactly this value.
Vowels are "a,e,i,o,u".
*/

/*
if text is falsy or doesn't include vowels, return text
define result string
loop from 1 to n
on each iteration, rotate vowels left if n is -ve, or right if n is +ve
define vowel index, starting at - 1
loop through text string
increase vowel index by 1 whenever a vowel is found 
add vowel at index to result string
add other characters without changing them to result 
return result
*/

function vowelShift(text, n) {
	// return text if falsy or no vowels
	if (!text || !/[aeiou]/i.test(text)) {
		return text;
	}
	// find vowels in text
	let result = '';
	let vowels = text.match(/[aeiou]/gi).join('');
	for (let i = 1; i <= Math.abs(n); i++) {
		// rotate right if n > 0
		if (n > 0) {
			vowels = `${vowels.slice(-1)}${vowels.slice(0, -1)}`;
		}
		// rotate left if n < 0
		if (n < 0) {
			vowels = `${vowels.slice(1)}${vowels[0]}`;
		}
	}
	// loop through text
	let vowelIndex = -1;
	text.split('').forEach(char => {
		// increase index when vowel is found
		if (/[aeiou]/i.test(char)) {
			vowelIndex++;
			// add vowel at index to result
			result += vowels[vowelIndex];
		} else {
			// add others as they are
			result += char;
		}
	});
	return result;
}

console.log(vowelShift('This is a test!', 0)); //, "This is a test!");
console.log(vowelShift('This is a test!', 1)); //, "Thes is i tast!");
console.log(vowelShift('This is a test!', 3)); //, "This as e tist!");
