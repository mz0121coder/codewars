/*
An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

Example
findMissing([1, 3, 5, 9, 11]) == 7
PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!
*/

/*
calculate expected difference between each number
(last - first num) / list length
start at first num
loop from 1 to list length - 1
add diff to num each time
if list[i] != num return num
*/

const findMissing = list => {
	const diff = (list.slice(-1)[0] - list[0]) / list.length;
	let num = list[0];
	for (let i = 1; i < list.length; i++) {
		num += diff;
		if (list[i] !== num) return num;
	}
};

console.log(findMissing([1, 3, 5, 9, 11]));
