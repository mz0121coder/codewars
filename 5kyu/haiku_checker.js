/*
DESCRIPTION:
Haikus are short poems in a three-line format, with 17 syllables arranged in a 5–7–5 pattern. Your task is to check if the supplied text is a haiku or not.

About syllables
Syllables are the phonological building blocks of words. In this kata, a syllable is a part of a word including a vowel ("a-e-i-o-u-y") or a group of vowels (e.g. "ou", "ee", "ay"). A few examples: "tea", "can", "to·day", "week·end", "el·e·phant".

However, silent "E"s do not create syllables. In this kata, an "E" is considered silent if it's alone at the end of the word, preceded by one (or more) consonant(s) and there is at least one other syllable in the word. Examples: "age", "ar·range", "con·crete"; but not in "she", "blue", "de·gree".

Some more examples:

one syllable words: "cat", "cool", "sprout", "like", "eye", "squeeze"
two syllables words: "ac·count", "hon·est", "beau·ty", "a·live", "be·cause", "re·store"
Examples
An old silent pond...
A frog jumps into the pond,
splash! Silence again.
...should return True, as this is a valid 5–7–5 haiku:

An old si·lent pond...            # 5 syllables
A frog jumps in·to the pond,      # 7
splash! Si·lence a·gain.          # 5
Another example:

Autumn moonlight -
a worm digs silently
into the chestnut.
...should return False, because the number of syllables per line is not correct:

Au·tumn moon·light -          # 4 syllables
a worm digs si·lent·ly        # 6
in·to the chest·nut.          # 5
*/

function isHaiku(text) {
	const [line1, line2, line3] = text.split('\n');

	const countSyllables = string => {
		const words = string.split(' ');
		let syllables = 0;

		words.forEach(word => {
			const vowels = word.match(/[aeiouy]+/gi)?.length ?? 0;
			const silent = word.match(/[aeiouy]+[^aeiouy]+e[^a-z]*$/gi)?.length ?? 0;
			syllables += vowels;
			syllables -= silent;
		});
		return syllables;
	};

	return (
		countSyllables(line1) === 5 &&
		countSyllables(line2) === 7 &&
		countSyllables(line3) === 5
	);
}

console.log(
	isHaiku(`An old silent pond...
A frog jumps into the pond,
splash! Silence again.`)
); // true
console.log(
	isHaiku(`Autumn moonlight -
a worm digs silently
into the chestnut.`)
); // false
console.log(
	isHaiku(`My code is cool, right?
Java # Python ; Ruby // Go:
I know them all, yay! ;-)`)
); // true
console.log(
	isHaiku(`An old silent pond...
A frog jumps into the pond, splash!
Silence again.`)
); // false
