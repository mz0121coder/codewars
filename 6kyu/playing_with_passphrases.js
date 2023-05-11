/*DESCRIPTION:
Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?

https://en.wikipedia.org/wiki/Passphrase*/

function playPass(s, n) {
	let result = '';
	// repeat alphabet 10 times for large passphrases
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.repeat(10);
	const str = s.toLowerCase();
	for (let i = 0; i < str.length; i++) {
		if (str[i].match(/[a-z]/)) {
			// letter at index of str[i] + n
			const letter = alphabet[alphabet.indexOf(str[i]) + n];
			// add letter as uppercase if i is even or lowercase if i is odd
			result += i % 2 === 0 ? letter.toUpperCase() : letter;
		} else if (str[i].match(/\d/)) {
			// replace each digit by 9 minus the digit
			result += (9 - Number(str[i])).toString();
		} else {
			result += str[i];
		}
	}
	return result.split('').reverse().join('');
}

console.log(playPass('I LOVE YOU!!!', 1)); //, "!!!vPz fWpM J")
console.log(playPass('MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015', 2)); //, "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO")
