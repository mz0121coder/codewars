/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.
*/
// split str by single spaces
// reverse order of words
// swap casing of letters in each word
// join with single space as a string

function stringTransformer(str) {
	return str
		.split(' ')
		.reverse()
		.map(el => {
			let word = '';
			for (let i = 0; i < el.length; i++) {
				word += el[i].match(/[A-Z]/)
					? el[i].toLowerCase()
					: el[i].toUpperCase();
			}
			return word;
		})
		.join(' ');
}

console.log(stringTransformer('Example Input')); // 'iNPUT eXAMPLE'
