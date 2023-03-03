/*Find the first character that repeats in a String and return that character.

firstDup('tweet') => 't'
firstDup('like') => undefined
This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

Another example:

In 'translator' you should return 't', not 'a'.

v      v  
translator
  ^   ^
While second 'a' appears before second 't', the first 't' is before the first 'a'.*/
function firstDup(s) {
	const chars = s.split('');
	return chars.filter(
		char => chars.indexOf(char) !== chars.lastIndexOf(char)
	)[0];
}

console.log(firstDup('tweet'));
console.log(firstDup('Ode to Joy'));
console.log(firstDup('ode to joy'));
console.log(firstDup('bar'));
console.log(firstDup('123123'));
console.log(firstDup('!@#$!@#$'));
