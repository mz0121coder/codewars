/*
Create a function that will return true if the input is in the following date time format 01-09-2016 01:20 and false if it is not.

This Kata has been inspired by the Regular Expressions chapter from the book Eloquent JavaScript.
*/

// check if date matches this format:
// 2 digits
// dash
// 2 digits
// dash
// 4 digits
// single space
// 2 digits
// colon
// 2 digits

const dateChecker = date => /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/.test(date);

console.log(dateChecker('01-09-2016 01:20')); //, true);
console.log(dateChecker('01-09-2016 01;20')); //, false);
console.log(dateChecker('01_09_2016 01:20')); //, false);
console.log(dateChecker('14-10-1066 12:00')); //, true);
console.log(dateChecker('Tenth of January')); //, false);
