/*
Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 2147483647

Examples
       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"
*/

/*
define an empty result array 
let count = 0
loop backwards through digits as a string
On each iteration:
increase count by 1
add current digit to start of result array
add a comma if i is divisible by 3 and i !== 0

join result as string and return
*/

function groupByCommas(n) {
	const result = [];
	const digits = n.toString();
	let count = 0;
	for (let i = digits.length - 1; i >= 0; i--) {
		count++;
		result.unshift(digits[i]);
		if (count % 3 === 0 && i !== 0) {
			result.unshift(',');
		}
	}
	return result.join('');
}

console.log(groupByCommas(1)); //, '1');
console.log(groupByCommas(10)); //, '10');
console.log(groupByCommas(100)); //, '100');
console.log(groupByCommas(1000)); //, '1,000');
console.log(groupByCommas(10000)); //, '10,000');
console.log(groupByCommas(100000)); //, '100,000');
console.log(groupByCommas(1000000)); //, '1,000,000');
console.log(groupByCommas(35235235)); //, '35,235,235');
