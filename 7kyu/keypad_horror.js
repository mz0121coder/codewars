/*Having two standards for a keypad layout is inconvenient!
Computer keypad's layout:
7 8 9  \n
4 5 6  \n
1 2 3  \n
  0 \n

Cell phone keypad's layout:
1 2 3\n 
4 5 6\n  
7 8 9\n  
  0\n

Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only

*/
function computerToPhone(numbers) {
	let result = '';
	const comp = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
	const cell = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	numbers.split('').forEach(n => (result += cell[comp.indexOf(n)]));
	return result;
}

console.log(computerToPhone('0789456123')); //, "0123456789")
console.log(computerToPhone('000')); //, "000")
console.log(computerToPhone('94561')); //, "34567")
console.log(computerToPhone('')); //, "")
