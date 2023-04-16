/*Description:
Count the number of exclamation marks and question marks, return the product.

Examples
Product("") == 0
product("!") == 0
Product("!ab? ?") == 2
Product("!!") == 0
Product("!??") == 2
Product("!???") == 3
Product("!!!??") == 6
Product("!!!???") == 9
Product("!???!!") == 9
Product("!????!!!?") == 20
FUNDAMENTALS*/

const product = string =>
	string.split('').filter(x => x === '!').length *
	string.split('').filter(y => y === '?').length;

console.log(product('')); //, 0);
console.log(product('!')); //, 0);
console.log(product('!!')); //, 0);
console.log(product('!??')); //, 2);
console.log(product('!???')); //, 3);
console.log(product('!!!??')); //, 6);
console.log(product('!!!???')); //, 9);
console.log(product('!???!!')); //, 9);
console.log(product('!ab? ?')); //, 2);
console.log(product('!????!!!?')); //, 20);
