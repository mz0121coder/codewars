/*
Check that a number is a valid number that has been given to 2 decimal places. The number passed to the function will be given as a string. If the number satisfies the criteria below, the function should return true, else it should return false.

Please check the criteria for a valid number:

optional + or - symbol in front

optional digits before a decimal point (digits are characters ranging from '0' to '9')

a decimal point

exactly two digits after the point

nothing else
*/

// check num follows this sequence
// + or - (optional)
// one or more digits (optional)
// . (necessary)
// two digits (necessary)

const validNumber = num => /^[+-]?\d*\.\d{2}$/.test(num);

console.log(validNumber('0.00')); //,true)
console.log(validNumber('.00')); //,true)
console.log(validNumber('-.00')); //,true)
console.log(validNumber('.30')); //,true)
console.log(validNumber('0.40')); //,true)
console.log(validNumber('34443.33')); //,true)

console.log(validNumber('.0a')); //,false)
console.log(validNumber('1.00.')); //,false)
console.log(validNumber('.+00')); //,false)
console.log(validNumber('w.00')); //,false)
console.log(validNumber('..00')); //,false)
console.log(validNumber('1,00')); //,false)
