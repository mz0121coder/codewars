/*
In this task, you need to write a function each, that takes an integer number n and a ( possibly empty ) list of integers, and returns a list of every nth element of the input list ( which possibly is the empty list ).

If n < 0, count by abs n from the end of the list.
If n == 0, return an empty list.

Examples
each 0 [1,2,3,4,5,6] = []  
each 1 [1,2,3,4,5,6] = [1,2,3,4,5,6]  
each (-1) [1,2,3,4,5,6] = [6,5,4,3,2,1]  
each 2 [1,2,3,4,5,6] = [2,4,6]  
each (-2) [1,2,3,4,5,6] = [5,3,1]  
each 3 [1,2] = []  
each (-3) [1,2] = []  
each 5 [1,2,3,4,5,6,7] = [5]  
each (-5) [1,2,3,4,5,6,7] = [3]  
*/

/*
Return empty array if n is 0 or abs(n) > input arr length
If n >= 1 return nth elements going forwards
If n <= -1 return nth elements going backwards
*/

function each(n, xs) {
	if (n === 0 || Math.abs(n) > xs.length) return [];
	if (n >= 1) return xs.filter((_, i) => (i + 1) % n === 0);
	if (n <= -1) {
		const result = [];
		for (let i = xs.length + n; i >= 0; i -= Math.abs(n)) {
			result.push(xs[i]);
		}
		return result;
	}
}

const basicTests = [
	[1, [], []],
	[-1, [], []],
	[0, [], []],
	[0, [1, 2, 3, 4, 5, 6], []],
	[1, [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]],
	[-1, [1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]],
	[2, [1, 2, 3, 4, 5, 6], [2, 4, 6]],
	[-2, [1, 2, 3, 4, 5, 6], [5, 3, 1]],
	[3, [1, 2], []],
	[-3, [1, 2], []],
	[5, [1, 2, 3, 4, 5, 6, 7], [5]],
	[-5, [1, 2, 3, 4, 5, 6, 7], [3]],
];

for (const [num, arr, _] of basicTests) {
	console.log(each(num, arr));
}
