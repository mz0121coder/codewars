/*
Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

Example:

reverseMessage('This is an example of a Reversed Message!');
Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'
*/

// split str by spaces
// reverse order of words
// reverse each word's characters
// capitalise first character of each word
// join result and return

function reverseMessage(str) {
	const reverse = s => s.split('').reverse().join('');
	return str
		.split(' ')
		.reverse()
		.map(el =>
			el === ''
				? ''
				: reverse(el)[0].toUpperCase() + reverse(el).slice(1).toLowerCase()
		)
		.join(' ');
}

console.log(reverseMessage('AaaaA')); //,'Aaaaa')
console.log(reverseMessage('Hello there')); //,'Ereht Olleh')
console.log(reverseMessage('Pl34k78j')); //, 'J87k43lp')
console.log(reverseMessage('Reverse this message!')); //,'!egassem Siht Esrever')
console.log(reverseMessage('Today is the 14th of January!')); //,'!yraunaj Fo Ht41 Eht Si Yadot')
console.log(reverseMessage('hty56hA T76#Td')); //,'Dt#67t Ah65yth')
console.log(reverseMessage('')); //,'')
