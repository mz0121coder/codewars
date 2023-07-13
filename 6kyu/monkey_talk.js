/*
Lets talk like a monkey. Find out how! Look at the test cases an engineer code to pass them.
*/

// split phrase by spaces to get words
// replace words that start with consonants with 'ook'
// replace words that start with vowels with 'eek'
// for first word, capitalise first letter
// add full stop at the end

const monkeyTalk = phrase => {
	const words = phrase
		.split(' ')
		.map((word, i) => {
			const newWord = /^[aeiou]/i.test(word[0]) ? 'Eek' : 'Ook';
			return i === 0 ? newWord : newWord.toLowerCase();
		})
		.join(' ');
	return `${words}.`;
};

console.log(monkeyTalk('Hello')); //), 'Ook.');
console.log(monkeyTalk('Everyone')); //), 'Eek.');
console.log(monkeyTalk('Hello Everyone')); //), 'Ook eek.');
console.log(monkeyTalk('Everyone Hello')); //), 'Eek ook.')
