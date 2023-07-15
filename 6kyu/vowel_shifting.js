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


Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

/*
check if text is a string
find vowels in text, store as a variable
if vowels are not null:
loop through each character in text string
on each iteration:
if current character is a vowel, 
depending on n, 
shift vowel to right if n > 0
shift to left if n < 0
add other characters as normal to result
return result string
*/
function vowelShift(text, n) {
	if (text === null || text === '') {
		return text;
	}
	let result = '';

	if (typeof text === 'string') {
		let vowels = text.match(/[aeiou]/g);
		if (vowels !== null) {
			vowels = vowels.join('').repeat(10);
			let vowelIndex = 0;
			for (let i = 0; i < text.length; i++) {
				if (vowels.includes(text[i])) {
					vowelIndex++;
					/*
          find the index of vowel in vowels string (defined above)
          increase/decrease the index by n
          add vowel at new index to result string
          */
					let index = vowelIndex;
					if (n > 0) {
						index += n;
					}
					if (n < 0) {
						index -= n;
					}
					result += vowels[index];
				} else {
					result += text[i];
				}
			}
		}
	}
	console.log({ n, text, result });
	console.log(result);
	return result;
}

console.log(vowelShift('This is a test!', 0)); //, "This is a test!");
console.log(vowelShift('This is a test!', 1)); //, "Thes is i tast!");
console.log(vowelShift('This is a test!', 3)); //, "This as e tist!");
