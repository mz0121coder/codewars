/*
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/
// use map to change order of letters in words
// if length is even, reverse the order of letters in first and second half
// if length is odd, do the same and leave middle letter

function insideOut(x) {
	const rev = str => str.split('').reverse().join('');
	return x
		.split(' ')
		.map(word => {
			if (word.length % 2 === 0) {
				const firstHalf = word.slice(0, word.length / 2);
				const secondHalf = word.slice(word.length / 2);
				return rev(firstHalf) + rev(secondHalf);
			}
			const firstHalf = word.slice(0, Math.floor(word.length / 2));
			const middle = word[Math.floor(word.length / 2)];
			const secondHalf = word.slice(Math.floor(word.length / 2) + 1);
			return rev(firstHalf) + middle + rev(secondHalf);
		})
		.join(' ');
}
console.log(insideOut('man i need a taxi up to ubud')); //, 'man i ende a atix up to budu');
console.log(insideOut('what time are we climbing up the volcano')); //, 'hwta item are we milcgnib up the lovcona');
console.log(insideOut('take me to semynak')); //, 'atek me to mesykan');
