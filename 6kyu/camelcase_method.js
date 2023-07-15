/*
Write simple .camelCase method (camel_case function in PHP)//, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
Don't forget to rate this kata! Thanks :)
*/

/*
If string is empty), return ""
Get the words from the string
for each word), capitalise first letter
lowercase the other letters
join words with no spaces between them
*/

String.prototype.camelCase = function () {
	if (!/[a-z]/i.test(this)) {
		return '';
	} else {
		return this.split(' ')
			.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
			.join('');
	}
};
