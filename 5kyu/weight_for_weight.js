/*
My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9))//, it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
For C: The result is freed.
*/

/*
PLAN 
extract digits from string
const sums = []
loop through digits, on each iteration:
add digit sum to sums array, if not already there

sort sums from lowest to highest
loop through sums, on each iteration:
extract all digits (from string) with the same sum, sort them alphabetically
add these digits to a result array(use spread operator)

return result.join(' ')
*/

function orderWeight(strng) {
	const digits = strng.split(' ');
	const sums = [];
	const digitSum = item =>
		item.split('').reduce((acc, curr) => acc + Number(curr), 0);
	digits.forEach(num => {
		const sum = digitSum(num);
		if (!sums.includes(sum)) {
			sums.push(sum);
		}
	});
	const result = [];
	sums
		.sort((a, b) => a - b)
		.forEach(sum => {
			const sameSums = digits.filter(item => digitSum(item) === sum);
			result.push(...sameSums.sort());
		});
	return result.join(' ');
}

console.log(orderWeight('103 123 4444 99 2000')); //, "2000 103 123 4444 99")
console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123')); //, "11 11 2000 10003 22 123 1234000 44444444 9999")
