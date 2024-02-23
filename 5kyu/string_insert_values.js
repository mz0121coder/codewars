/*
Given a string and an object/array you need to return a formatted string. Replace all occurrences in the string where the name of a key in the object is surrounded by curly brackets.

Inherited object properties should not be applied

An example says more than a thousand words..

Example using object

var s = 'Hello {foo} - make me a {bar}';
var o = {
  foo : 'Jack',
  bar : 'sandwich'
};

format(s, o); // "Hello Jack - make me a sandwich"
Example using array

var s = 'Hello {0} - make me a {1}';
var a = ['Jack', 'sandwich'];

format(s, a); // "Hello Jack - make me a sandwich"
See tests for more information.
*/

/*
Start result as str, if 2nd param is an array:
Match all digits between {}, replace the digits with array value at index of each digit
If 2nd param is an object:
Loop through keys (backwards to avoid applying object properties):
replace all instances of a key between {}, with object value at current key
*/

const format = (str, obj) => {
	let res = str;
	if (Array.isArray(obj)) {
		res = res.replace(/{\d}/g, x => {
			const idx = Number(x.slice(1, -1));
			return obj[idx];
		});
	} else {
		Object.keys(obj)
			.reverse()
			.forEach(key => (res = res.replaceAll(`{${key}}`, obj[key])));
	}
	return res;
};

const obj = { foo: 'Jack', bar: 'sandwich' };

console.log(format('Hello {foo} - make me a {bar}', obj)); // "Hello Jack - make me a sandwich"
console.log(format('Hello {foo} - {foobar} make me a {bar}', obj)); // "Hello Jack - {foobar} make me a sandwich"
console.log(format('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', obj)); // "Hello Jack - {foobar} make me a sandwich... Jack!!?"
console.log(
	format('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', {
		bar: 'sandwich {foo}',
		foo: 'Jack',
	})
); // "Hello Jack - {foobar} make me a sandwich {foo}... Jack!!?"
console.log(
	format("Hello {0} - {foobar} make me {2} {1} - I'm full..", [
		'Jack',
		'sandwiches',
		0,
	])
); // "Hello Jack - {foobar} make me 0 sandwiches - I\'m full.."
