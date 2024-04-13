/*
Description
In English we often use "neutral vowel sounds" such as "umm", "err", "ahh" as fillers in conversations to help them run smoothly.

Bob always finds himself saying "err". Infact he adds an "err" to every single word he says that ends in a consonant! Because Bob is odd, he likes to stick to this habit even when emailing.

Task
Bob is begging you to write a function that adds "err" to the end of every word whose last letter is a consonant (not a vowel, y counts as a consonant).

The input is a string that can contain upper and lowercase characters, some punctuation but no numbers. The solution should be returned as a string.

NOTE: If the word ends with an uppercase consonant, the following "err" will be uppercase --> "ERR".

eg:

"Hello, I am Mr Bob" --> "Hello, I amerr Mrerr Boberr"

"THIS IS CRAZY!"  --> "THISERR ISERR CRAZYERR!"
Good luck!
*/

/*
For words ending with last letter as consonant:
add 'err' or 'ERR' to end depending on case of last letter

Add ending symbols if there is one e.g. 'this,' -> 'thiserr,'
Return other words as they are
*/

const errBob = str =>
	str
		.split(' ')
		.map(word => {
			let end = '';
			if (/[^a-z]$/i.test(word)) end = word.slice(-1);
			const letters = word.replace(/[^a-z]/gi, '');
			const lastLetter = letters.slice(-1);
			const err = /[a-z]/.test(lastLetter) ? 'err' : 'ERR';
			return /[^aeiou]/i.test(lastLetter)
				? word.replace(end, '') + err + end
				: word;
		})
		.join(' ');

console.log(errBob('Hello, I am Mr Bob')); //, 'Hello, I amerr Mrerr Boberr');
console.log(errBob('THIS, is crazy!')); //, 'THISERR, iserr crazyerr!');
console.log(errBob('r r r r r r r r')); //, 'rerr rerr rerr rerr rerr rerr rerr rerr');
console.log(errBob('hI, hi. hI hi skY! sky? skY sky')); //, 'hI, hi. hI hi skYERR! skyerr? skYERR skyerr');
console.log(
	errBob('This, is. another! test? case to check your beautiful code.')
); //, 'Thiserr, iserr. anothererr! testerr? case to checkerr yourerr beautifulerr code.');
