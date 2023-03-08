/*We’ve all seen katas that ask for conversion from snake-case to camel-case, from camel-case to snake-case, or from camel-case to kebab-case — the possibilities are endless.
But if we don’t know the case our inputs are in, these are not very helpful.
Task:
So the task here is to implement a function (called id in Ruby/Crystal/JavaScript/CoffeeScript and case_id in Python/C) that takes a string, c_str, and returns a string with the case the input is in. The possible case types are “kebab”, “camel”, and ”snake”. If none of the cases match with the input, or if there are no 'spaces' in the input (for example in snake case, spaces would be '_'s), return “none”. Inputs will only have letters (no numbers or special characters).
Some definitions
Kebab case: lowercase-words-separated-by-hyphens
Camel case: lowercaseFirstWordFollowedByCapitalizedWords
Snake case: lowercase_words_separated_by_underscores
Examples:
id(“hello-world”) //“kebab”
id(“hello-to-the-world”) //“kebab”
id(“helloWorld”) //“camel”
id(“helloToTheWorld”) //“camel”
id(“hello_world”) //“snake”
id(“hello_to_the_world”) //“snake”
id(“hello__world”)//“none”
id(“hello_World”)//“none”
id(“helloworld”)//“none”
id(“hello-World”)// “none”
Also check out my other creations — Split Without Loss, Adding Fractions, Random Integers, Implement String#transpose, Implement Array#transpose!, Arrays and Procs #1, and Arrays and Procs #2
*/
function id(c_str) {
	const words = c_str.split(/[^a-zA-Z]+/);
	return c_str.match(/[a-z]/) &&
		c_str.match(/[A-Z]/) &&
		!c_str.match(/\W|_/) &&
		c_str.match(/[a-zA-Z]+/g)?.toString().length === c_str.length
		? 'camel'
		: !c_str.match(/[A-Z]/) && c_str.match(/-/g)?.length === words.length - 1
		? 'kebab'
		: !c_str.match(/[A-Z]/) && c_str.match(/_/g)?.length === words.length - 1
		? 'snake'
		: 'none';
}
// console.log(id('helloWorld')); //camel
// console.log(id('helloworld')); //none
// console.log(id('he---llo')); //none
// console.log(id('hello-world')); //kebab
// console.log(id('hello-to-the-world')); //kebab
// console.log(id('')); //none
// console.log(id('hello__world')); //none
console.log(id('hello_World')); //none

// const kebab = c_str.match(/[a-z]+|-./g)?.join('');
// const camel = c_str.match(/[a-zA-Z]/g)?.join('');
// const snake = c_str.match(/[a-z]+|_/g)?.join('');
// return snake;
