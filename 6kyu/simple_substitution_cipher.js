/*
A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

E.g.

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
   
var sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode("abc") // => "eta"
console.log(sub.encode("xyz") // => "qxz"
console.log(sub.encode("aeiou") // => "eirfg"
   
console.log(sub.decode("eta") // => "abc"
console.log(sub.decode("qxz") // => "xyz"
console.log(sub.decode("eirfg") // => "aeiou"
If a character provided is not in the opposing alphabet, simply leave it as be.
*/

/*
PLAN
iterate over each character
Encode: 
get index of char in abc1
if ab2 includes char, return abc2[index]
otherwise return char

Decode:
get index of char in abc2
if index > -1 return abc1[index]
otherwise return char
*/

function SubstitutionCipher(abc1, abc2) {
	this.encode = function (str) {
		return [...str]
			.map(char => {
				const index = abc1.indexOf(char);
				return abc2.includes(char) ? abc2[index] : char;
			})
			.join('');
	};
	this.decode = function (str) {
		return [...str]
			.map(char => {
				const index = abc2.indexOf(char);
				return index > -1 ? abc1[index] : char;
			})
			.join('');
	};
}

var abc1 = 'abcdefghijklmnopqrstuvwxyz';
var abc2 = 'etaoinshrdlucmfwypvbgkjqxz';

var sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode('abc')); // => "eta"
console.log(sub.encode('xyz')); // => "qxz"
console.log(sub.encode('aeiou')); // => "eirfg"

console.log(sub.decode('eta')); // => "abc"
console.log(sub.decode('qxz')); // => "xyz"
console.log(sub.decode('eirfg')); // => "aeiou"
