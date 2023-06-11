/*You're a programmer in a SEO company. The SEO specialist of your company gets the list of all project keywords everyday, then he looks for the longest keys to analyze them.

You will get the list with keywords and must write a simple function that returns the biggest search keywords and sorts them in lexicographical order.

For instance you might get:

'key1', 'key2', 'key3', 'key n', 'bigkey2', 'bigkey1'
And your function should return:

"'bigkey1', 'bigkey2'"
Don't forget to rate this kata! Thanks :)*/

function theBiggestSearchKeys(...keys) {
	let result = '';
	// key with max length
	const biggestKey = [...keys].sort((a, b) => b.length - a.length)[0];
	// all keys with max length, sorted alphabetically
	const maxKeys = [...keys]
		.filter(el => el.length === biggestKey.length)
		.sort();
	// add keys in single quotes to result
	maxKeys.forEach(el => (result += ` '${el}',`));
	return result === '' ? "''" : result.slice(1, result.length - 1);
}

console.log(theBiggestSearchKeys('key1', 'key22', 'key333')); //, "'key333'");
console.log(theBiggestSearchKeys('coding', 'sorting', 'tryruby')); //, "'sorting', 'tryruby'");
console.log(
	theBiggestSearchKeys(
		'small keyword',
		'how to coding?',
		'very nice kata',
		'a lot of keys',
		'I like Ruby!!!'
	)
); //, "'I like Ruby!!!', 'how to coding?', 'very nice kata'");
console.log(theBiggestSearchKeys('pippi')); //, "'pippi'");
console.log(theBiggestSearchKeys()); //, "''");
