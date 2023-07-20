/*
You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

Don't presume the separators too much or you could be surprised.

For example: (Input --> Output)

"example name" --> "ExampleName"
"your-NaMe-here" --> "YourNameHere"
"testing ABC" --> "TestingAbc"
*/

const camelize = str =>
	str
		.match(/[a-z0-9]+/gi)
		.map(el => el[0].toUpperCase() + el.slice(1).toLowerCase())
		.join('');

console.log(camelize('java script')); //,"JavaScript" );
console.log(camelize('cODE warS')); //,"CodeWars" );
