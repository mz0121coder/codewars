/*Our friendly friend Pete is really a nice person, but he tends to be rather... Inappropriate.

And possibly loud, if given enough ethanol and free rein, so we ask you to write a function that should take its not always "clean" speech and cover as much as possible of it, in order not to offend some more sensible spirits.

For example, given an input like

What the hell am I doing here? And where is my wallet? PETE SMASH!
You are expected to turn it into something like:

W**t t*e h**l am i d***g h**e? A*d w***e is my w****t? P**e s***h!
In case you didn't figure out the rules yet: any words longer than 2 characters need to have its "inside" (meaning every character which is not the first or the last) changed into *; as we do not want Pete to scream too much, every uppercase letter which is not at the beginning of the string or coming after a punctuation mark among [".","!","?"] needs to be put to lowercase; spaces and other punctuation marks can be ignored.

Conversely, you need to be sure that the start of each sentence has a capitalized word at the beginning. Sentences are divided by the aforementioned punctuation marks.

Finally, the function will take an additional parameter consisting of an array/list of allowed words (upper or lower case) which are not to be replaced (the match has to be case insensitive).

Extra cookies if you can do it all in some efficient way and/or using our dear regexes ;)

Note: Absolutely not related to a certain codewarrior I know :p*/

function peteTalk(speech, ok = []) {
	//   uppercase first letters of new sentences, lowercase all other words
	const str = (speech[0].toUpperCase() + speech.slice(1).toLowerCase()).replace(
		/[!?.] ./g,
		chars => chars.slice(0, -1) + chars.at(-1).toUpperCase()
	);
	return str
		.split(' ')
		.map(word =>
			ok
				// if a word is included in ok array (ignore case and symbols e.g. Word? check if 'word' is included)
				// return word as it is,
				.map(el => el.toLowerCase())
				.includes(word.toLowerCase().replace(/[^a-z]/g, ''))
				? word
				: // otherwise if length of letters is > 2 replace letters 2 to second last with *
				  //  e.g. string => s****g
				  word.replace(
						/[a-z]{3,}/gi,
						x => x[0] + '*'.repeat(x.slice(1, -1).length) + x.at(-1)
				  )
		)
		.join(' ');
}

console.log(peteTalk('I want to punch someone in the face')); //,"I w**t to p***h s*****e in t*e f**e");
console.log(peteTalk('uh!')); //,"Uh!");
console.log(
	peteTalk('What the hell am I doing here? And where is my wallet? PETE SMASH!')
); //,"W**t t*e h**l am i d***g h**e? A*d w***e is my w****t? P**e s***h!");
console.log(
	peteTalk('I want to punch someone in the face', ['someone', 'face'])
); //,"I w**t to p***h someone in t*e face");
console.log(
	peteTalk('I want to punch someone in the face', ['drink', 'job', 'girls'])
); //,"I w**t to p***h s*****e in t*e f**e");
