/*Debug a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null.

calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null
Kind of a fork (not steal :)) of Basic Calculator kata by TheDoctor.
*/

const calculate = function (a, o, b) {
	let result = null;
	switch (o) {
		case '+':
			result = a + b;
			break;
		case '-':
			result = a - b;
			break;
		case '/':
			result = a / b;
			break;
		case '*':
			result = a * b;
	}
	return result === Infinity || result === -Infinity ? null : result;
};

console.log(calculate(2, '+', 4)); //, 6);
console.log(calculate(6, '-', 1.5)); //, 4.5);
console.log(calculate(-4, '*', 8)); //, -32);
console.log(calculate(49, '/', -7)); //, -7);
console.log(calculate(8, 'm', 2)); //, null);
console.log(calculate(4, '/', 0)); //, null);
