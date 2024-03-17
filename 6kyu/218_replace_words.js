/*
Task
You're given a sentence, where each word has different length. Swap the longest word with the shortest one, the 2nd shortest word with the 2nd longest one, and so on.

Note that the resulting sentence should be correct, i.e. it should be capitalized and all words but the first one should contain only lowercase letters (except the word "I").

Input/Output
[input] string sentence
A string of English letters and whitespace characters.
0 < sentence.length <= 20.

[output] a string
Correct sentence with words replaced. It should be capitalized and all words but the first one should contain only lowercase letters (except the word "I").

Examples
For sentence = "I am the best", the output should be "Best the am I"

The word "I" and word "best" exchanged their positions; The word "am" and word "the" exchanged their positions.

For sentence = "I am better than him", the output should be "Better than I am him"

The word "I" and word "better" exchanged their positions; The word "am" and word "than" exchanged their positions; The middle length word "him" remain in its original position.
*/

function replaceWords(sentence) {
	const words = sentence.split(' ');
	const highToLow = [...words].sort((a, b) => b.length - a.length);
	const lowToHigh = [...words].sort((a, b) => a.length - b.length);
	const result = [];
	for (const word of words) {
		const index = lowToHigh.indexOf(word);
		result.push(highToLow[index]);
	}
	return result
		.map((word, i) =>
			i === 0 || word.length === 1
				? word[0].toUpperCase() + word.slice(1)
				: word.toLowerCase()
		)
		.join(' ');
}

console.log(replaceWords('I am the best')); // "Best the am I"

console.log(replaceWords('I am better than him')); // "Better than I am him"

console.log(replaceWords('Lets see')); // "See lets"

console.log(replaceWords('Hello')); // "Hello"

console.log(replaceWords('No one could disentangle correctly')); // "Disentangle correctly could no one"

console.log(
	replaceWords(
		'Pneumonoultramicroscopicsilicovolcanoconiosis is a dangerous disease'
	)
); // "A dangerous pneumonoultramicroscopicsilicovolcanoconiosis is disease"
