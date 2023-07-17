/*
ENCODE
create keyed alphabet: key + rest of letters from alphabet
repeat keyed alphabet 3 times to handle wrapping
start letter count at 0
loop through each character in the text string
on each iteration:
if character is a letter, increase count by 1
if character is a space, reset count to 0
find the letter's index in keyed alphabet (ignore case)
increase index by count (encode)
add new letter at this index to a result string
letter's case will be same as orginal letter
return result

DECODE
create keyed alphabet: key + rest of letters from alphabet
start letter count at 0
loop through each character in the text string
on each iteration:
if character is a letter, increase count by 1
if character is a space, reset count to 0
find the letter's index in keyed alphabet (ignore case)
decrease index by count (decode)
HANDLE WRAPPING:
nested loop from 1 up to count:
on each iteration, decrease index by 1
if index === - 1, reassign it to 25
this will continue to decode from end of keyed alphabet

add new letter at this index to a result string
letter's case will be same as orginal letter
return result
*/

function encode(text, key) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let result = '';
	let count = 0;
	// keyed alphabet
	const keyedAlphabet = `${[...new Set(key.split(''))].join('')}${alphabet
		.split('')
		.filter(char => !key.includes(char))
		.join('')}`.repeat(3);
	// loop through text, increase count when letter is found
	for (let i = 0; i < text.length; i++) {
		if (/[a-z]/i.test(text[i])) {
			count++;
			const index = keyedAlphabet.indexOf(text[i].toLowerCase()) + count;
			const letter = /[A-Z]/.test(text[i])
				? keyedAlphabet[index]?.toUpperCase()
				: keyedAlphabet[index];
			result += letter;
		} else {
			// reset count for non letters
			count = 0;
			result += text[i];
		}
	}
	return result;
}

function decode(text, key) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let result = '';
	let count = 0;
	// keyed alphabet
	const keyedAlphabet = `${[...new Set(key.split(''))].join('')}${alphabet
		.split('')
		.filter(char => !key.includes(char))
		.join('')}`;
	// loop through text, increase count when letter is found
	for (let i = 0; i < text.length; i++) {
		if (/[a-z]/i.test(text[i])) {
			count++;
			let index = keyedAlphabet.indexOf(text[i].toLowerCase());
			// continue decoding from end of keyed alphabet when index reaches -1
			for (let i = 1; i <= count; i++) {
				index -= 1;
				if (index === -1) {
					index = 25;
				}
			}
			const letter = /[A-Z]/.test(text[i])
				? keyedAlphabet[index]?.toUpperCase()
				: keyedAlphabet[index];
			result += letter;
		} else {
			// reset count for non letters
			count = 0;
			result += text[i];
		}
	}
	return result;
}

console.log(encode('cipher', 'cipher')); //,"ihrbfj" );
console.log(encode('cipher', 'cccciiiiippphheeeeerrrrr')); //,"ihrbfj" );
console.log(encode('This is an example.', 'cipher')); //,"Urew pu bq rzfsbtj." );
console.log(encode('This.tHis.thIs.thiS...', 'cipher')); //,"Urew.uRew.urEw.ureW..." );

console.log(decode('ihrbfj', 'cipher')); //, "cipher" );
console.log(decode('Urew pu bq rzfsbtj.', 'cipher')); //, "This is an example.");
console.log(decode('Urew.uRew.urEw.ureW...', 'cipher')); //, "This.tHis.thIs.thiS...");

console.log(decode('This is an example.', 'secretkey')); //,"secretkey"))//, "This is an example.");
console.log(encode('This is an example.', 'secretkey')); //,"secretkey"))//, "This is an example.");
