/*DESCRIPTION:
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
For each word:
the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces
Examples
decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'*/

const decipherThis = str =>
	str
		.split(' ')
		.map(w => {
			const s = w.replace(/\d+/, String.fromCharCode(w.match(/\d+/)));
			const l = s.length;
			return l <= 2 ? s : s[0] + s[l - 1] + s.substring(2, l - 1) + s[1];
		})
		.join(' ');

console.log('H'.charCodeAt(0));
console.log(
	decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')
); //, 'Have a go at this and see how you do');
console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'
