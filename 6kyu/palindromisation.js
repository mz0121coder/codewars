/*
You are given string "elements" and an int "n". Your task is to return a string that is a palindrom using elements from the string "elements" with the length "n".

The format of the palindromization:

Your palindrome begins with the first element of "elements".
After obtaining a pair, you insert the next element in "elements" to the palindrome.
The next element will be paired inside the first pair.
Repeat
If you have reached the last element of "elements" then repeat the process from the start.
Error cases:
If the string elements is empty or n is smaller than 2, return the string "Error!"

Examples:
<<<<<<< mine

For elements = "123" 
n = 2 => result = "11"
n = 3 => result = "121"
n = 4 => result = "1221"
n = 5 => result = "12321"
n = 6 => result = "123321"
n = 7 => result = "1231321"
n = 8 => result = "12311321"
n = 9 => result = "123121321"
n = 10=> result = "1231221321"
=======
*/

/*
define a full string that repeats element n times
if n is even:
return (full string up to index n) + (full string up to index n) reversed
if n is odd:
return (full string up to index n) + ((full string up to index n) from index 1)
*/

function palindromization(element, n) {
	if (!element.length || n < 2) return 'Error!';
	const fullStr = element.repeat(n);
	const halfway = Math.ceil(n / 2);
	const rev = s => [...s].reverse().join('');

	const partial = fullStr.slice(0, halfway);
	return n % 2 === 0
		? `${partial}${rev(partial)}`
		: `${partial}${rev(partial).slice(1)}`;
}

console.log(palindromization('', 2)); //, "Error!");
console.log(palindromization('123', 1)); //, "Error!");

console.log(palindromization('123', 2)); //, "11");
console.log(palindromization('123', 3)); //, "121");
console.log(palindromization('123', 4)); //, "1221");
console.log(palindromization('123', 5)); //, "12321");
console.log(palindromization('123', 6)); //, "123321");
console.log(palindromization('123', 7)); //, "1231321");
console.log(palindromization('123', 8)); //, "12311321");
console.log(palindromization('123', 9)); //, "123121321");
console.log(palindromization('123', 10)); //, "1231221321");
