/*
Your sweet 4 year old niece has sent you a letter, however she is a little bit of an odd ball, so it needs a bit of decoding. You see she seems to love dinosars and often throws "trex" and "raptor" in mid sentence when she gets excited, and is convinced all vowels should be replaced by numbers

(a=0, e=1, i=2, o=3, u=4).
Your challenge is to figure out what she is trying to say and fix her grammar-

Inputs
A sentence (string) that may consists of:

lowercase letters [a-z]
uppercase letters [A-Z]
digits [0-4]
spaces [ ] (The space would only appear between words)
Notes
The returned string should begin with a capital letter and end in a full stop / period
letter i that is alone and not within another word should be capitalised (e.g., "i am", "i want"),
no need for capitals for names, she's only 4 after all :)
*/

// replace numbers with the correct vowel
// remove trex and raptor
// uppercase 'I' on its own (not part of word)
// uppercase first letter and 'I' on their own (not part of word), lowercase other letters

function nonsense(str) {
	const newStr = str
		.replace(/[01234]/g, n => 'aeiou'[n])
		.replace(/trex|raptor/gi, '');
	return `${newStr[0].toUpperCase()}${newStr.slice(1).toLowerCase()}`
		.replace(/^i /g, 'I ')
		.replace(/ i /g, ' I ')
		.replace(/[a-z]$/, c => `${c}.`);
}

console.log(nonsense('d2n3S04Rs 0r1 c33L.')); //,"Dinosaurs are cool.")

console.log(nonsense('h1Ll3 Wtrex3raptorRLD')); //,"Hello world.")

console.log(nonsense('i think therefore i am')); //,"I think therefore I am.")
