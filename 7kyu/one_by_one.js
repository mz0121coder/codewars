/*Write

function consecutiveOnes(nums) {}
that takes in array nums and returns the maximum consecutive 1's

For example

consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) === 3
consecutiveOnes([1, 1, 0, 0, 1]) === 2
consecutiveOnes([0, 0, 0, 0, 0]) === 0
PLEASE NOTE THAT THIS KATA HAS HEAVY PERFORMANCE TESTS AND YOU NEED OPTIMIZED CODE TO PASS IT

*/
function consecutiveOnes(nums) {
	let maxOnes = 0;
	let currOnes = 0;
	for (let num of nums) {
		if (num === 1) {
			currOnes++;
			maxOnes = Math.max(maxOnes, currOnes);
		} else {
			currOnes = 0;
		}
	}
	return maxOnes;
}

console.log(consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0])); //, 3);
console.log(consecutiveOnes([1, 1, 0, 0, 1])); //, 2);
console.log(consecutiveOnes([1, 1, 1, 1, 1])); //, 5);
console.log(consecutiveOnes([0, 0, 0, 0, 0])); //, 0);
console.log(consecutiveOnes([0, 0, 0, 0, 1])); //, 1);
