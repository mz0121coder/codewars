// loop through words (split str by spaces)
// for words > 3 characters,
// return word up to first vowel > index 2 (after 3rd char), followed by dot
// return other words as they are

const shortenSpeech = str =>
	str
		.split(' ')
		.map(item => item.slice(0, 3) + item.slice(3).replace(/[aeiou]+.*/, '.'))
		.join(' ');

console.log(shortenSpeech('Hello, do you want a coffee ? ')); //, "Hell. do you want a coff. ? ");
console.log(shortenSpeech('Did you bring your computer ?')); //, "Did you bring your comp. ?");
console.log(shortenSpeech("I've just finished my first kata")); //,"I'v. just fin. my first kat.");
