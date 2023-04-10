/*Dot Calculator
You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division
Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""
STRINGSFUNDAMENTALS*/

function dotCalculator(equation) {
	const operator = equation.match(/[^ .]+/).toString();
	// amount of dots on each side of operator
	const dots = equation.split(operator).map(item => item.match(/\./g).length);
	let count = 0;
	switch (operator) {
		case '+':
			count = Math.floor(dots[0] + dots[1]);
			break;
		case '-':
			count = Math.floor(dots[0] - dots[1]);
			break;
		case '*':
			count = Math.floor(dots[0] * dots[1]);
			break;
		case '//':
			count = Math.floor(dots[0] / dots[1]);
	}
	return '.'.repeat(count);
}

console.log(dotCalculator('..... + ...............')); //, "....................");
console.log(dotCalculator('..... - ...')); //, "..");
console.log(dotCalculator('..... - .')); //, "....");
console.log(dotCalculator('..... * ...')); //, "...............");
console.log(dotCalculator('..... * ..')); //, "..........");
console.log(dotCalculator('..... // ..')); //, "..");
console.log(dotCalculator('..... // .')); //, ".....");
console.log(dotCalculator('. // ..')); //, "");
console.log(dotCalculator('. - .')); //, "");
