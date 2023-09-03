/*
Mount the Bowling Pins!
Task:
Did you ever play Bowling? Short: You have to throw a bowl into 10 Pins arranged like this:


I I I I  # each Pin has a Number:    7 8 9 10
 I I I                                4 5 6
  I I                                  2 3
   I                                    1

You will get an Array with Numbers, e.g.: [3,5,9] and remove them from the field like this:


I I   I
 I   I
  I   
   I   

Return a string with the current field.

Note that:
String.prototype.replace() is not allowed!

You begin a new line with \n
Each Line must be 7 chars long
Fill the missing pins with a whitespace
Have fun!
*/
/*
define function that takes in a number, returns ' ' if arr includes number or 'I' otherwise
call function for numbers 1 to 10 with correct spacing
row4 = 7 8 9 10
row3 =  4 5 6
row2 =   2 3
row1 =    1
return rows from 4 to 1 with '\n' between them
*/

function bowlingPins(arr) {
	const checkPin = num => `${arr.includes(num) ? ' ' : 'I'}`;
	const row4 = `${checkPin(7)} ${checkPin(8)} ${checkPin(9)} ${checkPin(10)}`;
	const row3 = ` ${checkPin(4)} ${checkPin(5)} ${checkPin(6)} `;
	const row2 = `  ${checkPin(2)} ${checkPin(3)}  `;
	const row1 = `   ${checkPin(1)}   `;
	return [row4, row3, row2, row1].join('\n');
}

console.log(bowlingPins([2, 3])); //, "I I I I\n I I I \n       \n   I   ");
console.log(bowlingPins([1, 2, 10])); //, "I I I  \n I I I \n    I  \n       ");
