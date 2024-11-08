/*
We are given two arrays of integers A and B and we have to output a sorted array with the integers that fulfill the following constraints:

they are present in both ones

they occur more than once in A and more than once in B

their values are within a given range (inclusive)

they are odd or even according as it is requested

Example
Given two arrays, a range, and a wanted parity:

arrA = [1, -2, 7, 2, 1, 3, 7, 1, 0, 2, 3]
arrB = [2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0]
rng = [-4, 4] # is the range of the integers from -4 to 4 (inclusive)
wanted = "odd"
Process to obtain the result:

0, 1, 2, 3, 7, are the numbers present in arrA and arrB
1, 2, 3, 7,  occur twice or more in arrA and arrB
1, 2, 3,  are in the range [-4, 4]
1, 3, are odd
output = [1, 3] 
For the case:

arrA = [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4]
arrB = [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4]
rng = [-4, 4]
wanted = "even"
output = [0, 2, 4] 
If there are no elements that fulfill the constraints given above, the result will be an empty array.

Features of the tests:

Number of Random Tests = 300
Length of the arrays A and B between 1000 and 10000
You may assume that you will always receive valid entries for all the tests.

Enjoy it!!
*/

function findArr(arrA, arrB, rng, wanted) {
	const countDigits = arr => {
		return arr.reduce((obj, num) => {
			obj[num] = (obj[num] || 0) + 1;
			return obj;
		}, {});
	};
	const mapA = countDigits(arrA);
	const mapB = countDigits(arrB);
	const results = new Set();
	for (const num of [...arrA, ...arrB]) {
		if ((mapA[num] || 0) < 2 || (mapB[num] || 0) < 2) continue;
		if (num < rng[0] || num > rng[1]) continue;
		if (wanted == 'odd' && num % 2 == 0) continue;
		if (wanted == 'even' && num % 2) continue;
		results.add(num);
	}
	return [...results].sort((a, b) => a - b);
}

let arrA = [1, -2, 7, 2, 1, 3, 7, 1, 0, 2, 3];
let arrB = [2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0];
let rng = [-4, 4];
let wanted = 'odd';
console.log(findArr(arrA, arrB, rng, wanted)); //, [1, 3]);

arrA = [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4];
arrB = [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4];
rng = [-4, 4];
wanted = 'even';
console.log(findArr(arrA, arrB, rng, wanted)); //, [0, 2, 4]);

arrA = [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4];
arrB = [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4];
rng = [-4, -1];
wanted = 'even';
console.log(findArr(arrA, arrB, rng, wanted)); //, []);
