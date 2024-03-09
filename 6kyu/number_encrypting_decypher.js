/*
Number encrypting: decypher
Part II of Number encrypting Katas
Introduction
Back then when the internet was coming up, most search functionalities simply looked for keywords in text to show relevant documents. Hackers weren't very keen on having their information displayed on websites, bulletin boards, newsgroups or any other place, so they started to replace certain letters in words. It started out with simple vowel substitutions like a 4 instead of an A, or a 3 instead of an E. This meant that topics like cracking or hacking remained undetected.

Here we will use a reduced version of the Leet Speak alphabet, but you can find more information here or at Wikipedia.

Task
You will receive a string cyphered according to the Kata Number encrypting: cypher. You will have to return the decyphered version of that string.

As a summary of how a string is cyphered, you have the following information.

The numbers corresponding to each letter are represented at the table below. Notice that different letters can share the same number. In those cases, one letter will be upper case and the other one lower case.

1	2	3	4	5	6	7	8	9	0
Upper case	I	R	E	A	S	G	T	B		O
Lower case	l	z	e	a	s	b	t		g	o

Any character that is not at the table, does not change when cyphered.

NOTE: When cyphering, two letters can have the same number, therefore when decyphering one number can have two letters. To be able to select the correct letter for that number, you have to take into account the following RULES:

The first letter of the decyphered string will always be in Upper Case. (see example test #6)
Any letter placed after a period will always be in Upper Case. Between the period and the following letter, there will always be a space. (see example text #3, '. Good...')
Any letter 'i' followed and preceded by a space, will always be Upper Case (see example test #3, '...else I can...'). It will also be Upper Case if it is preceded by a space and followed by a character different than a letter (see exaple tests #4 and #5)
In any other case where a number must be converted into a letter, the letter will be lower case. That is to say, if the cyphered string has an Upper Case letter, it remains Upper Case, as it doesn't have to be transformed (see 'W' in the first example).
Examples
Input: "H3110 W0r1d". Output: "Hello World"
Input: "1 4m y0ur f47h3r". Output: "I am your father"
Input: "1 d0 n07 kn0w wh47 3153 1 c4n 7357. 83 c001. 600d 1uck". Output: "I do not know what else I can test. Be cool. Good luck"
Input: "N3i7h3r d0 1". Output: "Neither do I"
Input: "1, 1. 1 m34n 13773r 1". Output: "I, I. I mean letter I"
Input: "60475 4nd 60475". Output: "Goats and Boats"
*/

/*
Split string by ' ' and loop through words:
  On each iteration, start 'decryption' as empty string:
  Also check alphanumeric matches (A-Za-z0-9) in word:
    Loop through word, if char is 0-9:
      If index of word and char are both 0, 
      or if alphanumeric matches for word are just 1, 
      or index of char is 0 and last word ended with '.':
      Add uppercase decryption to string
    else
      Add lowercase decryption
  Add decryption for current word to result array
Return result joined by ' ' 
*/

function decypher(string) {
	const result = [];
	const words = string.split(' ');
	words.forEach((word, idx) => {
		let decryption = '';
		const alphanumeric = word.match(/[a-z0-9]/gi);
		for (let i = 0; i < word.length; i++) {
			if (/[0-9]/.test(word[i])) {
				const index = '1234567890'.indexOf(word[i]);
				decryption +=
					(idx === 0 && i === 0) ||
					alphanumeric.length === 1 ||
					(i === 0 && words[idx - 1]?.endsWith('.'))
						? 'IREASGTB O'[index]
						: 'lzeasbt go'[index];
			} else {
				decryption += word[i];
			}
		}
		result.push(decryption);
	});
	return result.join(' ');
}

  decypher("H3110 W0r1d"))// "Hello World"
  decypher("1 4m y0ur f47h3r"))// "I am your father"
  decypher("1 d0 n07 kn0w wh47 3153 1 c4n 7357. 83 c001. 600d 1uck"))// "I do not know what else I can test. Be cool. Good luck"
  decypher('N3i7h3r d0 1')// "Neither do I"
  decypher('1, 1. 1 m34n 13773r 1')// "I, I. I mean letter I"
  decypher("60475 4nd 60475"))// "Goats and boats"
  decypher('814h 614h 1, 614h 614h')// "Blah blah I, blah blah"
