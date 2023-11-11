/*
Task
Timed Reading is an educational tool used in many schools to improve and advance reading skills. A young elementary student has just finished his very first timed reading exercise. Unfortunately he's not a very good reader yet, so whenever he encountered a word longer than maxLength, he simply skipped it and read on.

Help the teacher figure out how many words the boy has read by calculating the number of words in the text he has read, no longer than maxLength.

Formally, a word is a substring consisting of English letters, such that characters to the left of the leftmost letter and to the right of the rightmost letter are not letters.

Example
For maxLength = 4 and text = "The Fox asked the stork, 'How is the soup?'", the output should be 7

The boy has read the following words: "The", "Fox", "the", "How", "is", "the", "soup".

Input/Output
[input] integer maxLength

A positive integer, the maximum length of the word the boy can read.

Constraints: 1 ≤ maxLength ≤ 10.

[input] string text

A non-empty string of English letters and punctuation marks.

[output] an integer

The number of words the boy has read.
*/

function timedReading(maxLength, text) {
	const words = text.match(/[a-z]+/gi);
	return words?.filter(word => word.length <= maxLength)?.length || 0;
}

console.log(timedReading(4, "The Fox asked the stork, 'How is the soup?'")); //,7)
console.log(timedReading(1, '...')); //,0)
console.log(timedReading(3, 'This play was good for us.')); //,3)
console.log(
	timedReading(3, 'Suddenly he stopped, and glanced up at the houses')
); //,5)
console.log(
	timedReading(
		6,
		'Zebras evolved among the Old World horses within the last four million years.'
	)
); //,11)
console.log(
	timedReading(
		5,
		'Although zebra species may have overlapping ranges, they do not interbreed.'
	)
); //,6)
console.log(timedReading(1, 'Oh!')); //,0)
console.log(
	timedReading(
		5,
		'Now and then, however, he is horribly thoughtless, and seems to take a real delight in giving me pain.'
	)
); //,14)
