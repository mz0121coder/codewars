/*
Mr. E Ven only likes even length words. Please create a translator so that he doesn't have to hear those pesky odd length words. For some reason he also hates punctuation, he likes his sentences to flow.

Your translator should take in a string and output it with all odd length words having an extra letter (the last letter in the word). It should also remove all punctuation (.,?!) as well as any underscores (_).

"How did we end up here? We go?" translated becomes-> "Howw didd we endd up here We go"
*/

const evenator = str =>
	str
		.replace(/[\.\?!,_]/g, '')
		.replace(/\S+/g, word => (word.length % 2 ? word + word.slice(-1) : word));

console.log(evenator('')); // ''
console.log(evenator('tHiS sEnTeNcE iS eVeN.')); // 'tHiS sEnTeNcE iS eVeN'
console.log(evenator('even')); // 'even' 'This sentence is even so return as is')
console.log(evenator('even od!')); // 'even od'
console.log(evenator('even oddd.')); // 'even oddd'
console.log(evenator('underscore is not considered a word..in this case ')); // 'underscore is nott considered aa wordin this case');

console.log(evenator('f')); // 'ff'
console.log(evenator('I got a hole in 1!')); // 'II gott aa hole in 11'
console.log(evenator('evenn')); // 'evennn' '')
console.log(evenator('even odd!')); // 'even oddd'
console.log(evenator('eve odd.')); // 'evee oddd'
