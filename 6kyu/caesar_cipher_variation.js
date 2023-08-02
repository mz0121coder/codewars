/*
#About Caesar Cipher

Caesar Cipher is a simple encryption technique based on shifting each character by a fixed number of positions in the alphabet.

For example, if the shift is 3, an encoded version of phrase "kata" will be:

k + 3 = n
a + 3 = d
t + 3 = w
a + 3 = d
In a case when "z" is reached, the algorithm wraps back to "a". Example: "zen", key 3

z + 3 = c
e + 3 = h
n + 3 = q
The key for this cipher can be any non-negative integer. However, because there are 26 letters in English alphabet, any key larger than 26 can be thought about as key = key % 26.

#What to do

Your task is to write a function that will encrypt a phrase using Caesar Cipher and a given shift key and return it as a string. However, the key should be increased by 1 with every word in a phrase. For example, if the function is called with a phrase "divide et impera" and key 3, the encoding should be as follows:

- Shift the word "divide" by the key of 3
- Shift the word "et" by the key of 3 + 1 = 4
- Shift the word "impera" by the key of 3 + 2 = 5
#Important things to note:

Guaranteed input will be of type string, lowercase characters and spaces only.
Key can be any non-negative integer.
To read more about Caesar Cipher, visit https://en.wikipedia.org/wiki/Caesar_cipher
*/

function caesarEncode(phrase, shift) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	return phrase
		.split(' ')
		.map((word, index) => {
			let string = '';
			for (let i = 0; i < word.length; i++) {
				const newIndex = (alphabet.indexOf(word[i]) + shift + index) % 26;
				string += alphabet[newIndex];
			}
			return string;
		})
		.join(' ');
}

console.log(caesarEncode('alea iacta est', 3)); //, "dohd megxe jxy");
console.log(caesarEncode('conquer et impera', 13)); //, "pbadhre sh xbetgp");
console.log(caesarEncode('fere libenter homines id quod volunt credunt', 7)); //"mlyl tqjmvbmz qxvrwnb sn bfzo haxgzf perqhag"
console.log(caesarEncode('horum omnium fortissimi sunt belgae', 0)); //"horum pnojvn hqtvkuukok vxqw fipkei"
