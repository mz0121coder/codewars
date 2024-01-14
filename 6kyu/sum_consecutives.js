/*
You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

Same meaning: 1 == 1

1 != -1

#Examples:

[1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

"""So as you can see sum of consecutives 1 is 1 
sum of 3 consecutives 4 is 12 
sum of 0... and sum of 2 
consecutives 3 is 6 ..."""

[1,1,7,7,3] # should return [2,14,3]
[-5,-5,7,7,12,0] # should return [-10,14,12,0]
*/

/*
sequence starts as array with first num from s
sums start as empty array
loop through s from index 1:
if current num == last num in sequence, add num to sequence
if current num != last num in sequence or i is last index:
add sum of sequence (or sequence[0] if just 1 item) to sums
reset sequence to [s[i]]
add sequence[0] to sums after the loop has finished
return sums
*/

function sumConsecutives(s) {
	let seq = [s[0]];
	let sum = [];
	for (let i = 1; i < s.length; i++) {
		if (s[i] === seq.at(-1)) seq.push(s[i]);
		if (s[i] !== seq.at(-1) || i === s.length - 1) {
			sum.push(seq.length > 1 ? seq.reduce((a, b) => a + b) : seq[0]);
			seq = [s[i]];
		}
	}
	sum.push(seq[0]);
	return sum;
}

console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1])); // [1,12,0,4,6,1]
console.log(sumConsecutives([1, 1, 7, 7, 3])); // [2,14,3]
console.log(sumConsecutives([-5, -5, 7, 7, 12, 0])); // [-10,14,12,0]
console.log(sumConsecutives([3, 3, 3, 3, 1])); // [12, 1]
