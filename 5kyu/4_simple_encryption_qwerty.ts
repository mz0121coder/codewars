/*
You have to write two methods to encrypt and decrypt strings. Both methods have two parameters:

1. The string to encrypt/decrypt
2. The Qwerty-Encryption-Key (000-999) 
The rules are very easy:

The crypting-regions are these 3 lines from your keyboard:
1. "qwertyuiop"
2. "asdfghjkl"
3. "zxcvbnm,."

If a char of the string is not in any of these regions, take the char direct in the output.
If a char of the string is in one of these regions: Move it by the part of the key in the 
region and take this char at the position from the region. 
If the movement is over the length of the region, continue at the beginning.
The encrypted char must have the same case like the decrypted char! 
So for upperCase-chars the regions are the same, but with pressed "SHIFT"!

The Encryption-Key is an integer number from 000 to 999. E.g.: 127

The first digit of the key (e.g. 1) is the movement for the first line.
The second digit of the key (e.g. 2) is the movement for the second line.
The third digit of the key (e.g. 7) is the movement for the third line.

(Consider that the key is an integer! When you got a 0 this would mean 000. A 1 would mean 001. And so on.)
You do not need to do any prechecks. The strings will always be not null and will always have a length > 0. You do not have to throw any exceptions.

An Example:

Encrypt "Ball" with key 134
1. "B" is in the third region line. Move per 4 places in the region. -> ">" (Also "upperCase"!)
2. "a" is in the second region line. Move per 3 places in the region. -> "f"
3. "l" is in the second region line. Move per 3 places in the region. -> "d"
4. "l" is in the second region line. Move per 3 places in the region. -> "d"
--> Output would be ">fdd"
Hint: Don't forget: The regions are from an US-Keyboard!
In doubt google for "US Keyboard."
*/

/*
Digits -> key as a string with starting zeros if needed
Regions -> Lowercase and uppercase lines
Loop through text, for each character:
Find index of its region, encrypt or decrypt
*/

const regions1: string[] = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm,.'].map(str =>
	str.repeat(2)
);
const regions2: string[] = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM<>'].map(str =>
	str.repeat(2)
);

export function encrypt(text: string, key: number): string {
	let digits = `${key}`;
	digits = '0'.repeat(3 - digits.length) + digits;
	let result = '';
	for (const char of text) {
		const section = /[a-z,.]/.test(char)
			? regions1
			: /[A-Z<>]/.test(char)
			? regions2
			: [];
		if (section.length) {
			const region = section.findIndex(str => str.includes(char));
			const index = section[region].indexOf(char) + Number(digits[region]);
			result += section[region][index];
		} else {
			result += char;
		}
	}
	return result;
}

export function decrypt(text: string, key: number): string {
	let digits = `${key}`;
	digits = '0'.repeat(3 - digits.length) + digits;
	let result = '';
	for (const char of text) {
		const section = /[a-z,.]/.test(char)
			? regions1
			: /[A-Z<>]/.test(char)
			? regions2
			: [];
		if (section.length) {
			const region = section.findIndex(str => str.includes(char));
			const index = section[region].lastIndexOf(char) - Number(digits[region]);
			result += section[region][index];
		} else {
			result += char;
		}
	}
	return result;
}

console.log(encrypt('A', 111)); //, 'S');
console.log(encrypt('Abc', 212)); //, 'Smb');
console.log(encrypt('Wave', 0)); //, 'Wave'); // -> 000
console.log(encrypt('Wave', 345)); //, 'Tg.y');
console.log(encrypt('Ball', 134)); //, '>fdd');
console.log(encrypt('Ball', 444)); //, '>gff');

console.log(encrypt('This is a test.', 348)); //, 'Iaqh qh g iyhi,');
console.log(
	encrypt(
		'Do the kata Kobayashi Maru Test. Endless fun and excitement when finding a solution.',
		583
	),
	'Sr pgi jlpl Jr,lqlage Zlow Piapc I.skiaa dw. l.s ibnepizi.p ugi. de.se.f l arkwper.c'
);

console.log(decrypt('S', 111)); //, 'A');
console.log(decrypt('Smb', 212)); //, 'Abc');
console.log(decrypt('Wave', 0)); //, 'Wave'); // -> 000
console.log(decrypt('Tg.y', 345)); //, 'Wave');
console.log(decrypt('>fdd', 134)); //, 'Ball');
console.log(decrypt('>gff', 444)); //, 'Ball');

console.log(decrypt('Iaqh qh g iyhi,', 348)); //, 'This is a test.');
console.log(
	decrypt(
		'Sr pgi jlpl Jr,lqlage Zlow Piapc I.skiaa dw. l.s ibnepizi.p ugi. de.se.f l arkwper.c',
		583
	)
); //, 'Do the kata Kobayashi Maru Test. Endless fun and excitement when finding a solution.');
