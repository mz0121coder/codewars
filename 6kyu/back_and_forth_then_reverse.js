/*Task
A list S will be given. You need to generate a list T from it by following the given process:

Remove the first and last element from the list S and add them to the list T.
Reverse the list S
Repeat the process until list S gets emptied.
The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.

Example
S = [1,2,3,4,5,6]
T = []

S = [2,3,4,5] => [5,4,3,2]
T = [1,6]

S = [4,3] => [3,4]
T = [1,6,5,2]

S = []
T = [1,6,5,2,3,4]
return T
Note
size of S goes up to 10^6
Keep the efficiency of your code in mind.
Do not mutate the Input.
*/

// use a for loop, start at i=0 up to Infinity
// make a result array
// if(i % 2 ===0), push from left side first, then from right side
// vice versa if i%2 !== 0
// on each iteration, increase left index by 1 and decrease right index by 1
// if left index is equal to right index, only push once
// repeat until result is same length as s, then end the loop

function arrange(s) {
	const result = [];
	let leftIndex = -1;
	let rightIndex = s.length;
	for (let i = 0; i < Infinity; i++) {
		leftIndex++;
		rightIndex--;
		if (result.length < s.length) {
			if (leftIndex < rightIndex) {
				switch (i % 2) {
					case 0:
						result.push(s[leftIndex]);
						result.push(s[rightIndex]);
						break;
					case 1:
						result.push(s[rightIndex]);
						result.push(s[leftIndex]);
				}
			}
			if (leftIndex === rightIndex) {
				result.push(s[rightIndex]);
			}
		} else if (result.length >= s.length) {
			break;
		}
	}
	return result;
}

console.log(arrange([1, 2])); //, [1,2]);
console.log(arrange([4, 3, 2])); //, [4, 2, 3]);
console.log(arrange([9, 7, -2, 8, 5, -3, 6, 5, 1])); //, [9, 1, 5, 7, -2, 6, -3, 8, 5]);
console.log(arrange([1])); //, [1]);
console.log(arrange([])); //, []);
console.log(arrange([2, 4, 3, 4])); //,[2, 4, 3, 4]);
