/*In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

reverseVowels("Hello!"); // "Holle!"
reverseVowels("Tomatoes"); // "Temotaos"
reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!

STRINGSFUNDAMENTALS*/

function reverseVowels(str) {
	let count = -1;
	let result = str;
	if (str.match(/[aeiou]/i)) {
		result = '';
		const vowels = str.match(/[aeiou]/gi).reverse();
		str.split('').forEach(letter => {
			if (vowels.includes(letter)) {
				count++;
				result += vowels[count];
			} else {
				result += letter;
			}
		});
	}
	return result;
}
console.log(reverseVowels(''));
console.log(reverseVowels('Hello!')); //"Holle!");
console.log(reverseVowels('Tomatoes')); //"Temotaos");
console.log(reverseVowels('Reverse Vowels In A String')); //"RivArsI Vewols en e Streng");

const grades = [];
const results = grades;
grades.push(1);
console.log(results);
