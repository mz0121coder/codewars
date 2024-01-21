/*
Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

"abraxxxas" → true
"xoxotrololololololoxxx" → false
"softX kitty, warm kitty, xxxxx" → true
"softx kitty, warm kitty, xxxxx" → false
Note :

capital X's do not count as an occurrence of "x".
if there are no "x"'s then return false
*/

// function tripleX(str) {
// 	if (!/x/.test(str)) return false;
// 	return str.match(/[x]{1,3}/g)[0] === 'xxx';
// }

const tripleX = str => str.includes('x') && str.match(/x{1,3}/) === 'xxx';

console.log(tripleX('abraxxxas')); //,true);
console.log(tripleX('xoxotrololololololoxxx')); //,false);
console.log(tripleX('soft kitty, warm kitty, xxxxx')); //,true);
console.log(tripleX('softx kitty, warm kitty, xxxxx')); //,false);
