/*
Pig latin is created by taking all the consonants before the first vowel of a word and moving them to the back of the word followed by the letters "ay".

"hello" => "ellohay"
"creating" => "eatingcray"
If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.

"algorithm" => "algorithmway"
This problem is different from other variations in that it expects casing to remain the same so:

"Hello World" => "Ellohay Orldway"
as well as punctuation.

"Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
Your job is to take a string and translate it to Pig Latin. The string will never be undefined but may contain both numbers and letters. A word will never be a combination of numbers and letters. Also, there will never be punctuation at the beginning of a word and the only capital letter in a word will be the first letter meaning there are zero all capitalized words.
*/

function translate(sentence) {
	return sentence
		.split(' ')
		.map(word => {
			const letters = word.match(/[a-z]/gi).join('');
			const symbols = word.match(/[^a-z]/gi)?.join('') ?? '';
			//   if word starts with consonant
			if (/^[^aeiou]/i.test(letters)) {
				const consonants = letters.match(/^[^aeiou]+/i)[0];
				const firstVowel = /[A-Z]/.test(letters[0])
					? letters.match(/[aeiou]/)[0].toUpperCase()
					: letters.match(/[aeiou]/)[0];
				// console.log({ word, consonants, firstVowel });
				return (
					firstVowel +
					letters.slice(consonants.length + 1) +
					consonants.toLowerCase() +
					'ay' +
					symbols
				);
			} else {
				return letters + 'way' + symbols;
			}
		})
		.join(' ');
}

console.log(translate('hello')); //, 'ellohay'
console.log(translate('hello world')); //, 'ellohay orldway'
console.log(translate('Hello World')); //, 'Ellohay Orldway'
console.log(translate('Pizza? Yes Please!!')); //, 'Izzapay? Esyay Easeplay!!'
console.log(translate('How are you?')); //, 'Owhay areway ouyay?'
